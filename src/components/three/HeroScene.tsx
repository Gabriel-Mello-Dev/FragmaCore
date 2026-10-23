"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type Shard = {
  geo: THREE.BufferGeometry;
  edges: THREE.EdgesGeometry;
  dir: THREE.Vector3;
  amp: number;
  gold: boolean;
};

const seeded = (i: number) => ((i * 9301 + 49297) % 233280) / 233280;

function useShards(): Shard[] {
  return useMemo(() => {
    const base = new THREE.IcosahedronGeometry(1.02, 1).toNonIndexed();
    const pos = base.getAttribute("position");
    const out: Shard[] = [];

    for (let i = 0; i < pos.count; i += 3) {
      const a = new THREE.Vector3().fromBufferAttribute(pos, i);
      const b = new THREE.Vector3().fromBufferAttribute(pos, i + 1);
      const c = new THREE.Vector3().fromBufferAttribute(pos, i + 2);

      const geo = new THREE.BufferGeometry().setFromPoints([a, b, c]);
      geo.computeVertexNormals();

      const k = i / 3;

      out.push({
        geo,
        edges: new THREE.EdgesGeometry(geo),
        dir: a.clone().add(b).add(c).normalize(),
        amp: 0.025 + seeded(k) * 0.05,
        gold: k % 9 === 0,
      });
    }

    base.dispose();
    return out;
  }, []);
}

function Fragments() {
  const { viewport, size } = useThree();
  const shards = useShards();
  const group = useRef<THREE.Group>(null);
  const items = useRef<(THREE.Group | null)[]>([]);
  const cursor = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);
  const state = useRef({ rx: 0, ry: 0, spin: 0, open: 0 });

  useEffect(() => {
    const updatePointer = (e: PointerEvent) => {
      cursor.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      cursor.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const updateScroll = () => {
      scroll.current = Math.min(
        1,
        Math.max(0, window.scrollY / (window.innerHeight * 2.2)),
      );
    };

    window.addEventListener("pointermove", updatePointer, {
      passive: true,
    });
    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    updateScroll();

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);

      shards.forEach((sh) => {
        sh.geo.dispose();
        sh.edges.dispose();
      });
    };
  }, [shards]);

  useFrame((_, delta) => {
    const s = state.current;
    const { x, y } = cursor.current;
    const progress = scroll.current;

    s.spin += delta * 0.08;
    s.rx = THREE.MathUtils.damp(s.rx, y * 0.18, 4, delta);
    s.ry = THREE.MathUtils.damp(s.ry, x * 0.28, 4, delta);

    if (group.current) {
      const isMobile = size.width < 768;
      const isTablet = size.width >= 768 && size.width < 1024;

      if (isMobile) {
        group.current.position.x = 0;
        group.current.position.y = -viewport.height * 0.08;
        group.current.scale.setScalar(0.24);
      } else if (isTablet) {
        group.current.position.x = viewport.width * 0.18;
        group.current.position.y = -viewport.height * 0.1;
        group.current.scale.setScalar(0.48);
      } else {
        group.current.position.x = viewport.width * 0.28;
        group.current.position.y = -viewport.height * 0.14;
        group.current.scale.setScalar(0.58);
      }

      group.current.rotation.x = s.rx * 0.8;
      group.current.rotation.y = s.spin + s.ry * 0.8;
    }
    shards.forEach((sh, i) => {
      const g = items.current[i];
      if (!g) return;

      const delay = seeded(i + 37) * 0.18;
      const fallProgress = THREE.MathUtils.clamp(
        (progress - delay) / (0.9 - delay),
        0,
        1,
      );

      const eased = fallProgress * (2 - fallProgress);
      const spread = eased * (0.05 + seeded(i + 81) * 0.22);
      const isMobile = size.width < 768;
      const driftScale = isMobile ? 0.6 : 1.0;

      g.position.set(
        sh.dir.x * (sh.amp + spread),
        sh.dir.y * (sh.amp + spread) -
          eased * viewport.height * (0.8 + seeded(i + 12) * 0.4) * driftScale,
        sh.dir.z * (sh.amp + spread),
      );

      g.rotation.set(
        eased * (seeded(i + 101) - 0.5) * 2.2,
        eased * (seeded(i + 202) - 0.5) * 2.2,
        eased * (seeded(i + 303) - 0.5) * 1.6,
      );
    });
  });

  return (
    <group ref={group}>
      {shards.map((sh, i) => (
        <group
          key={i}
          ref={(el) => {
            items.current[i] = el;
          }}
        >
          <mesh geometry={sh.geo}>
            <meshStandardMaterial
              color={sh.gold ? "#D9B25C" : "#5C5043"}
              metalness={0.6}
              roughness={0.38}
              side={THREE.DoubleSide}
              flatShading
              emissive={sh.gold ? "#6B4A14" : "#17130F"}
              emissiveIntensity={0.18}
            />
          </mesh>

          <lineSegments geometry={sh.edges}>
            <lineBasicMaterial
              color={sh.gold ? "#E6C98A" : "#B9A06B"}
              transparent
              opacity={0.8}
            />
          </lineSegments>
        </group>
      ))}
    </group>
  );
}

export default function HeroScene({ active }: { active: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.4], fov: 32 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ pointerEvents: "none" }}

      frameloop={active ? "always" : "demand"}
      aria-hidden="true"
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 5, 6]} intensity={2.2} color="#EDE8DC" />
      <pointLight position={[-3, -2, 3]} intensity={6} color="#3E8E84" />
      <pointLight position={[3, 1, 2]} intensity={4} color="#C8A04C" />

      <Fragments />
    </Canvas>
  );
}

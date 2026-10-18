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
    const base = new THREE.IcosahedronGeometry(1.05, 1).toNonIndexed();
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
        amp: 0.03 + seeded(k) * 0.07,
        gold: k % 11 === 0,
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

    s.spin += delta * 0.12;
    s.rx = THREE.MathUtils.damp(s.rx, y * 0.25, 3, delta);
    s.ry = THREE.MathUtils.damp(s.ry, x * 0.4, 3, delta);
    s.open = THREE.MathUtils.damp(s.open, 1 - progress, 3, delta);

    if (group.current) {
      const isMobile = size.width < 768;

      // Posiciona a esfera na coluna direita do Hero.
      group.current.position.x = isMobile ? 0 : viewport.width * 0.25;

      // Em celulares, deixa a esfera mais abaixo e menor.
      group.current.position.y = isMobile
        ? -viewport.height * 0.15
        : -viewport.height * 0.12;
      group.current.scale.setScalar(isMobile ? 0.3 : 0.62);

      group.current.rotation.x = s.rx;
      group.current.rotation.y = s.spin + s.ry;
    }
    shards.forEach((sh, i) => {
      const g = items.current[i];
      if (!g) return;

      // Cada fragmento começa a cair em um momento diferente.
      const delay = seeded(i + 37) * 0.3;
      const fallProgress = THREE.MathUtils.clamp(
        (progress - delay) / (1 - delay),
        0,
        1,
      );

      const fall = Math.pow(fallProgress, 1.35);
      const spread = fallProgress * (0.08 + seeded(i + 81) * 0.32);
      // Os fragmentos se afastam da esfera e caem.
      g.position.set(
        sh.dir.x * (sh.amp + spread),
        sh.dir.y * (sh.amp + spread) -
          fall * viewport.height * (1.0 + seeded(i + 12) * 0.65),
        sh.dir.z * (sh.amp + spread),
      );

      // Cada pedaço gira individualmente durante a queda.
      g.rotation.set(
        fall * (seeded(i + 101) - 0.5) * 5,
        fall * (seeded(i + 202) - 0.5) * 5,
        fall * (seeded(i + 303) - 0.5) * 5,
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
              color={sh.gold ? "#C8A04C" : "#51483A"}
              metalness={0.7}
              roughness={0.35}
              side={THREE.DoubleSide}
              flatShading
              emissive={sh.gold ? "#5A3B0C" : "#15120F"}
              emissiveIntensity={0.25}
            />
          </mesh>

          <lineSegments geometry={sh.edges}>
            <lineBasicMaterial
              color={sh.gold ? "#F0C96B" : "#C8A04C"}
              transparent
              opacity={0.9}
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
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.2], fov: 34 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ pointerEvents: "none" }}
    
      frameloop={active ? "always" : "demand"}
      aria-hidden="true"
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 4, 5]} intensity={2.5} color="#EDE8DC" />
      <pointLight position={[-4, -2, 3]} intensity={10} color="#3E8E84" />
      <pointLight position={[3, 1, 2]} intensity={5} color="#C8A04C" />

      <Fragments />
    </Canvas>
  );
}

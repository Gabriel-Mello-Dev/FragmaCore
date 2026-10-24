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
  const { viewport, size, camera } = useThree();

  const shards = useShards();
  const group = useRef<THREE.Group>(null);
  const items = useRef<(THREE.Group | null)[]>([]);

  const pointer = useRef(new THREE.Vector2(-10, -10));
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const plane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
    [],
  );
  const intersection = useMemo(() => new THREE.Vector3(), []);

  const localMouse = useMemo(() => new THREE.Vector3(), []);
  const explode = useRef(0);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handlePointerLeave = () => {
      pointer.current.set(-10, -10);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;

    const isTablet = size.width < 1024;
    const scale = isTablet ? 0.42 : 0.70;

    // A esfera fica fixa na tela.
    group.current.position.set(
      viewport.width * 0.20, // Mais à esquerda
      0.2, // Mais para cima
      0,
    );
    group.current.scale.setScalar(scale);
    group.current.rotation.set(0, 0, 0);

    // Converte o cursor para o plano local da esfera.
    raycaster.setFromCamera(pointer.current, camera);

    const hit = raycaster.ray.intersectPlane(plane, intersection);

    if (hit && group.current) {
      localMouse.copy(intersection);
      group.current.worldToLocal(localMouse);
    } else {
      localMouse.set(100, 100, 100);
    }

    let maxForce = 0;

    shards.forEach((shard, i) => {
      const item = items.current[i];
      if (!item) return;

      const phase = seeded(i + 47) * Math.PI * 2;

      // Centro aproximado de cada fragmento na esfera.
      const center = shard.dir.clone().multiplyScalar(1.02);

      // Distância entre o mouse e o fragmento.
      const dx = center.x - localMouse.x;
      const dy = center.y - localMouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Raio de influência do cursor.
      const radius = 0.85;
      const proximity = THREE.MathUtils.clamp(1 - distance / radius, 0, 1);

      // Suaviza a borda da área de quebra.
      const force = proximity * proximity;
      maxForce = Math.max(maxForce, force);

      // Deslocamento radial, afastando o fragmento do cursor.
      const direction = new THREE.Vector3(dx, dy, center.z * 0.8 + 0.12);

      if (direction.lengthSq() > 0.0001) {
        direction.normalize();
      } else {
        direction.set(0, 0, 1);
      }

      // Cada fragmento possui uma resposta ligeiramente diferente.
      const variation = 0.75 + seeded(i + 91) * 0.5;
      const distanceOut = force * 1.1 * variation;

      const baseX = shard.dir.x * shard.amp;
      const baseY = shard.dir.y * shard.amp;
      const baseZ = shard.dir.z * shard.amp;

      const targetX = baseX + direction.x * distanceOut;
      const targetY = baseY + direction.y * distanceOut;
      const targetZ = baseZ + direction.z * distanceOut;

      // Retorno suave à posição original.
      const smoothing = 1 - Math.exp(-10 * delta);

      item.position.x = THREE.MathUtils.lerp(
        item.position.x,
        targetX,
        smoothing,
      );

      item.position.y = THREE.MathUtils.lerp(
        item.position.y,
        targetY,
        smoothing,
      );

      item.position.z = THREE.MathUtils.lerp(
        item.position.z,
        targetZ,
        smoothing,
      );

      // Pequena rotação quando o fragmento se desprende.
      item.rotation.x = THREE.MathUtils.lerp(
        item.rotation.x,
        force * (seeded(i + 101) - 0.5) * 1.4,
        smoothing,
      );

      item.rotation.y = THREE.MathUtils.lerp(
        item.rotation.y,
        force * (seeded(i + 202) - 0.5) * 1.4,
        smoothing,
      );

      item.rotation.z = THREE.MathUtils.lerp(
        item.rotation.z,
        force * (seeded(i + 303) - 0.5) * 1.2,
        smoothing,
      );
    });

    explode.current = maxForce;
  });

  return (
    <group ref={group}>
      {shards.map((shard, i) => (
        <group
          key={i}
          ref={(element) => {
            items.current[i] = element;
          }}
          position={[
            shard.dir.x * shard.amp,
            shard.dir.y * shard.amp,
            shard.dir.z * shard.amp,
          ]}
        >
          <mesh geometry={shard.geo}>
            <meshStandardMaterial
              color={shard.gold ? "#D9B25C" : "#5C5043"}
              metalness={0.6}
              roughness={0.38}
              side={THREE.DoubleSide}
              flatShading
              emissive={shard.gold ? "#6B4A14" : "#17130F"}
              emissiveIntensity={0.18}
            />
          </mesh>

          <lineSegments geometry={shard.edges}>
            <lineBasicMaterial
              color={shard.gold ? "#E6C98A" : "#B9A06B"}
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

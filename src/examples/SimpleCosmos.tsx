import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";

const material = new MeshBasicMaterial({ color: 0xffffff });

const Box = () => (
  <mesh material={material} position={[3, 0, 0]} >
    <boxGeometry args={[1, 1, 1]} />
  </mesh>
);

const Sphere = () => (
  <mesh material={material} position={[-3, 0, 0]}>
    <sphereGeometry args={[0.5, 32, 16]} />
  </mesh>
);


const Stars = ({ count }: { count: number }) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 50
    positions[i3 + 1] = (Math.random() - 0.5) * 50
    positions[i3 + 2] = (Math.random() - 0.5) * 50
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach='attributes-position' args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} sizeAttenuation={true} />
    </points>
  );
};

export const SimpleCosmos = () => (
  <Canvas onCreated={({ gl }) => gl.setClearColor(0x02142d)}>
    <group>
      <Box />
      <Sphere />
    </group>
    <Stars count={1000} />
    <fog attach="fog" color={0x02142d} near={1} far={50} />
    <OrbitControls />
  </Canvas>
);
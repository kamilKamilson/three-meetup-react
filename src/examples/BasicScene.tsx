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

export const BasicScene = () => (
  <Canvas onCreated={({ gl }) => gl.setClearColor(0x02142d)}>
    <group>
      <Box />
      <Sphere />
    </group>
  </Canvas>
);
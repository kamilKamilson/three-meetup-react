import { Canvas } from "@react-three/fiber";
import { VazcoLogo } from "./VazcoLogo";
import { OrbitControls } from "@react-three/drei";

export const VazcoExample = () => (
  <Canvas onCreated={({ gl }) => gl.setClearColor(0x02142d)}>
    <VazcoLogo />
    <OrbitControls />
    <ambientLight color={0xffffff} intensity={0.5} />
    <pointLight args={[0xffffff, 5]} position={[1, 2, 2]} />
  </Canvas>
);
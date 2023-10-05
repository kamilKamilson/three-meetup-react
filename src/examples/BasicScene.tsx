import { Canvas } from "@react-three/fiber";

export const BasicScene = () => <Canvas style={{ width: '100vw', height: '100vh', background: '#000000' }} camera={{ position: [0, 0, 3] }}>
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshBasicMaterial color='#ff0000' />
    <shaderMaterial />
  </mesh>
</Canvas> 
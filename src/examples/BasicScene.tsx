import { Canvas } from "@react-three/fiber";

export const BasicScene = () => <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 0, 3] }} onCreated={(state) => {
  state.gl.setClearColor(0x000000)
}}>
  <mesh>z
    <boxGeometry args={[1, 1, 1]} />
    <meshBasicMaterial color='#ff0000' />
    <shaderMaterial />
  </mesh>
</Canvas> 
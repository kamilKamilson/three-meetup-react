import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Sun = (props: MeshProps) => {
  const texture = useTexture('/textures/sun.jpg')
  const sunRef = useRef<Mesh>(null!)

  useFrame(() => {
    sunRef.current.rotation.y += 0.002
  })

  return (
    <mesh ref={sunRef} {...props}>
      <sphereGeometry args={[2, 32, 16]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
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

export const DarkCosmos = () => (
  <Canvas onCreated={({ gl }) => gl.setClearColor(0x02142d)}>
    <Sun />
    <Stars count={1000} />
    <OrbitControls />
  </Canvas>
);
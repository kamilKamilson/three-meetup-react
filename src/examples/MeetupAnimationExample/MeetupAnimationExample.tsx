import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ReactMeetupDwarf } from "./ReactMeetupDwarf";


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

export const MeetupAnimationExample = () => <Canvas onCreated={({ gl }) => gl.setClearColor(0x02142d)}>
  <Stars count={1000} />
  <ReactMeetupDwarf />
  <OrbitControls />
  <ambientLight color={0xffffff} intensity={1} />
</Canvas>
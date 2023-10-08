import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ReactMeetupDwarf } from "./ReactMeetupDwarf";

export const MeetupAnimationExample = () => <Canvas onCreated={({ gl }) => gl.setClearColor(0x02142d)}>
  <ReactMeetupDwarf />
  <OrbitControls />
  <ambientLight color={0xffffff} intensity={0.5} />
  <pointLight args={[0xffffff, 5]} position={[1, 2, 2]} />
</Canvas>
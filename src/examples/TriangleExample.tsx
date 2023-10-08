import { Canvas } from "@react-three/fiber";
import { Shape, Vector2 } from "three";

const points = [
  new Vector2(-.8, -.8),
  new Vector2(0, -.8),
  new Vector2(-.8, .8),
]

const shape = new Shape(points);

export const TriangleExample = () => (
  <Canvas
    onCreated={({ gl }) => gl.setClearColor(0x02142d)}
    camera={{ position: [0, 0, 2] }}>
    <mesh>
      <shapeGeometry args={[shape]} />
      <meshBasicMaterial color={0x00ddb8} />
    </mesh>
  </Canvas>
);
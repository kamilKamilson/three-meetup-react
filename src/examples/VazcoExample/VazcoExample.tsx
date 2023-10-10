import { Canvas } from "@react-three/fiber";
import { VazcoLogo } from "./VazcoLogo";
import { OrbitControls } from "@react-three/drei";
import { MeshBasicMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshStandardMaterial, TextureLoader } from "three";

const loader = new TextureLoader();
const matcapTexture = loader.load('/textures/matcap.jpg');
const matcapTexture2 = loader.load('/textures/matcap_2.jpg');

const texture = loader.load('/textures/map.jpg');
const bumpMap = loader.load('/textures/bumpMap.png');
const normalMap = loader.load('/textures/normalMap.jpg');
const aoMap = loader.load('/textures/aoMap.jpg');
const roughnessMap = loader.load('/textures/roughnessMap.jpg');

const basicMaterial = new MeshBasicMaterial({ color: 0x00ddb8 })

const normalMaterial = new MeshNormalMaterial()
const matcapMaterial = new MeshMatcapMaterial({ matcap: matcapTexture })
const matcapMaterial2 = new MeshMatcapMaterial({ matcap: matcapTexture2 })
const standardMaterial = new MeshStandardMaterial()
const texturedMaterial = new MeshStandardMaterial({
  map: texture,
  displacementMap: bumpMap,
  displacementScale: 0.05,
  normalMap,
  aoMap,
  roughnessMap
})

const material = texturedMaterial;

// texturedMaterial.wireframe = true;

const vazcoDarkBlue = 0x02142d

const Plane = () => (
  <mesh rotation-x={-Math.PI * 0.5}>
    <planeGeometry args={[100, 100]} />
    <meshBasicMaterial color={0x021331} />
  </mesh>
)

const Box = () => (<mesh material={material} position={[-3, 0, 0]} >
  <boxGeometry args={[1, 1, 1, 100, 100, 100]} />
</mesh>)

const Sphere = () => (<mesh material={material} position={[3, 0, 0]}>
  <sphereGeometry args={[0.5, 32, 16]} />
</mesh>)

const Lights = () => (
  <>
    <ambientLight color={0xffffff} intensity={0.5} />
    <pointLight args={[0xffffff, 5]} position={[1, 3, 2]} />
  </>
)

const Stars = ({ count }: { count: number }) => {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 50;
    positions[i3 + 1] = (Math.random() - 0.5) * 50;
    positions[i3 + 2] = (Math.random() - 0.5) * 50;
  }

  return <points>
    {/* <sphereGeometry args={[0.5, 32, 16]} /> */}
    <bufferGeometry>
      <bufferAttribute attach={'attributes-position'} args={[positions, 3]} />
    </bufferGeometry>
    <pointsMaterial size={0.06} sizeAttenuation={true} />
  </points>

}

export const VazcoExample = () => (
  <Canvas onCreated={({ gl }) => gl.setClearColor(vazcoDarkBlue)}>
    {/* <Plane /> */}
    <group position={[0, 1, 0]}>
      <VazcoLogo />
      <Box />
      <Sphere />
    </group>

    <OrbitControls />

    <fog attach="fog" color={vazcoDarkBlue} near={1} far={50} />
    <Lights />
    <Stars count={500} />

  </Canvas>
);
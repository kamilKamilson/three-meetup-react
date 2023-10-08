/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 vazco-3d.gltf -t -o VazcoLogo.tsx 
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    path1: THREE.Mesh
  }
  materials: object
}


export function VazcoLogo(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/vazco-3d.gltf') as GLTFResult
  return (
    <group {...props} dispose={null} scale={50} rotation-x={Math.PI * 0.5}>
      <mesh geometry={nodes.path1.geometry}>
        <meshStandardMaterial color={0x00ddb8} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/vazco-3d.gltf')
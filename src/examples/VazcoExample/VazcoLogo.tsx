/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 vazco-3d.gltf -t -o VazcoLogo.tsx 
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useState } from 'react'
import { useSpring, animated } from '@react-spring/three'

type GLTFResult = GLTF & {
  nodes: {
    path1: THREE.Mesh
  }
  materials: object
}


export function VazcoLogo(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/vazco-3d.gltf') as GLTFResult
  const [active, setActive] = useState(false)
  const { scale, rotateY } = useSpring({ scale: active ? 70 : 50, rotateY: active ? Math.PI * 0.25 : 0 })


  return (
    <animated.group {...props} dispose={null} scale={scale} rotation-y={rotateY} onClick={() => setActive(prevVal => !prevVal)} rotation-x={Math.PI * 0.5}>
      <mesh geometry={nodes.path1.geometry}>
        <meshStandardMaterial color={0x00ddb8} />
      </mesh>
    </animated.group>
  )
}

useGLTF.preload('/vazco-3d.gltf')

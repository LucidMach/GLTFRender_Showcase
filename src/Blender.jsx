import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const mesh = useRef();
  const { nodes, materials } = useGLTF("/GoGoPlasma.glb");
  
  useFrame((state, delta) => {
    mesh.current.rotation.set(
      mesh.current.rotation.x + props.r,
      mesh.current.rotation.y + props.r,  
      mesh.current.rotation.z + props.r 
    );
  });
  
  return (
    <group {...props} ref={mesh} dispose={null} scale={.25}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.ˀlack}
        scale={[2.068, 1, 2.068]}
      /> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials.Glow}
        position={[0, 3.102, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.497}
      /> */}
      <group
        position={[0.086, 4.095, 0.582]}
        rotation={[0.205, 0, 0]}
        scale={3.065}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.GogoYellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials.ˀlack}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plasma.geometry}
        material={materials.Glow}
        position={[0.086, 4.095, 0.582]}
        rotation={[0.205, 0, 0]}
        scale={-0.008}
      />
    </group>
  );
}

useGLTF.preload("/GoGoPlasma.glb");

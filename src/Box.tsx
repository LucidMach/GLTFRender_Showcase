import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    mesh.current.rotation.set(
      mesh.current.rotation.x + 0.01,
      mesh.current.rotation.y + 0.01,
      0
    );
  });

  return (
    <>
      <mesh {...props} ref={mesh} receiveShadow={true} castShadow={true}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default Box;

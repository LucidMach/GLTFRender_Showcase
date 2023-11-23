import { extend, Object3DNode } from "@react-three/fiber";
import { useMemo } from "react";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import vampiro from "./Vampiro One_Regular.json";

// extend({ TextGeometry });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
    }
  }
}

interface Props {
  content?: string;
}

const Text: React.FC<Props> = ({ content }) => {
  useMemo(() => extend({ TextGeometry }), []);

  const font = new FontLoader().parse(vampiro);
  return (
    <mesh position={[-0.4, -0.4, 5]} castShadow receiveShadow>
      <textGeometry
        args={[content ? content : "y", { font, size: 1, height: 1 }]}
      />
    </mesh>
  );
};

export default Text;

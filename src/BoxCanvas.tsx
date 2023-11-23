import Box from "./Box";

const BoxCanvas = () => {
  const size = 1;
  return (
    <>
      {/* <group scale={1.35} rotation={[Math.PI / 2, 0, 0]}> */}
      <group scale={window.innerWidth < 600 ? 1 : 1.35}>
        <Box position={[0, 0, 0]} />
        <Box position={[0, size, 0]} />
        <Box position={[0, -size, 0]} />
        <Box position={[size, 0, 0]} />
        <Box position={[size, size, 0]} />
        <Box position={[size, -size, 0]} />
        <Box position={[-size, 0, 0]} />
        <Box position={[-size, size, 0]} />
        <Box position={[-size, -size, 0]} />
        {window.innerWidth > 600 ? (
          <>
            <Box position={[2 * size, 0, 0]} />
            <Box position={[2 * size, size, 0]} />
            <Box position={[2 * size, -size, 0]} />
            <Box position={[2 * -size, 0, 0]} />
            <Box position={[2 * -size, size, 0]} />
            <Box position={[2 * -size, -size, 0]} />
          </>
        ) : null}
      </group>
    </>
  );
};

export default BoxCanvas;

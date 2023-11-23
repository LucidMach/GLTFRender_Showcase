import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Model } from "./Blender";

const audio = new Audio("/nn.mp3");

const playAudio = () => {
  audio.play();
};

const pauseAudio = () => {
  audio.pause();
};
const App = () => {
  const [r, setR] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  //   }, 500);
  // }, []);

  return (
    <>
      <Canvas
        shadows
        style={{ height: window.innerHeight, background: "#1a1a1a" }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight
          intensity={1}
          // color={color}
          castShadow
          position={[0, 0, 10]}
        />
        <Model r={r} />
      </Canvas>
      <a
        style={{
          display: "block",
          textAlign: "center",
          position: "absolute",
          bottom: "3vh",
          right: "2vh",
          color: "yellow",
          zIndex: 1,
        }}
        href="https://instagram.com/lucidmach"
        target="_"
      >
        @lucidmach
      </a>
      <div
        style={{
          // display: "block",
          textAlign: "center",
          position: "absolute",
          width: "100%",
          // height: "100%",
          fontSize: "1.7rem",
          fontFamily: "sans-serif",
          color: "yellow",
          bottom: "5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "black",
            width: "55px",
            height: "55px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {r === 0.01 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="yellow"
            >
              <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="yellow"
            >
              <path d="M3 22v-20l18 10-18 10z" />
            </svg>
          )}
        </div>
      </div>
      <div
        style={{
          display: "block",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
        }}
        onClick={() => {
          r === 0.01 ? setR(0) : setR(0.01);
          r === 0 ? playAudio() : pauseAudio();
        }}
      ></div>
    </>
  );
};

export default App;

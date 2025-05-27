import React, { useState, ReactNode } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import "./VideoToCanvas.css";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Head3D } from "./Head3D";

type MouseFollowerProps = {
  children: ReactNode;
  yaw?: number;
  pitch?: number;
};

function MouseFollower({ children, yaw = 1, pitch = 1 }: MouseFollowerProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ pointer }) => {
    if (!ref.current) return;
    ref.current.rotation.y = pointer.x * Math.PI * yaw;
    ref.current.rotation.x = -pointer.y * Math.PI * pitch;
  });
  return <group ref={ref}>{children}</group>;
}

export default function Landing() {
  const [videoFinished, setVideoFinished] = useState(false);
  const [startVideo, setStartVideo] = useState(false);

  return (
    <div className="landing-container">
      {!startVideo && (
        <motion.img
          key="fadeout-image"
          src="/portrait.jpg"
          alt="Preview"
          className="video-full"
          initial={{ opacity: 2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
          onAnimationComplete={() => setStartVideo(true)}
        />
      )}

      <AnimatePresence>
        {startVideo && !videoFinished && (
          <motion.video
            key="video"
            className="video-full"
            src="/vid.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoFinished(true)}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />
        )}

        {videoFinished && (
          <motion.div
            key="canvas"
            className="canvas-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Canvas camera={{ position: [0, 1, 5] }}>
              <ambientLight intensity={2} />
              <directionalLight
                position={[5, 5, 5]}
                intensity={0.9}
                castShadow
                color={"#EAECED"}
              />
              <MouseFollower yaw={0.2} pitch={0.2}>
                <Head3D
                  scale={[1.65, 1.65, 1.65]}
                  rotation-y={[0.01 * Math.PI]}
                  rotation-x={[-0.02 * Math.PI]}
                  position={[0, -1.4, 0]}
                />
              </MouseFollower>
            </Canvas>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, OrbitControls } from '@react-three/drei';
import useDesktopSettings, { WALLPAPER_OPTIONS } from "#store/desktopSettings.js";


const AnimatedStars = () => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002;
      starsRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

const ThreeBackground = () => {
  const wallpaper = useDesktopSettings((s) => s.wallpaper);
  const animationsEnabled = useDesktopSettings((s) => s.animationsEnabled);
  const gradient = WALLPAPER_OPTIONS.find((w) => w.id === wallpaper)?.gradient;

  const wrapper = { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 };

  // Gradient wallpaper: no WebGL canvas at all, so it's cheaper too
  if (gradient) return <div style={{ ...wrapper, background: gradient }} />;

  return (
    <div style={{ ...wrapper, background: "#050816" }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AnimatedStars />
        <Sparkles count={200} scale={12} size={2} speed={animationsEnabled ? 0.4 : 0} color="#3b82f6" />
        <Sparkles count={100} scale={12} size={3} speed={animationsEnabled ? 0.2 : 0} color="#8b5cf6" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={animationsEnabled} autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
export default ThreeBackground;

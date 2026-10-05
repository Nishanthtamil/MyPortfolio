import { useEffect } from "react";
import { Dock, Home, Navbar, Welcome, ThreeBackground, DesktopSettingsPanel } from "#components";
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from "#windows";
import gsap from "gsap";
import useDesktopSettings, { ACCENT_COLORS } from "#store/desktopSettings.js";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const DesktopApp = () => {
  const accentColor = useDesktopSettings((s) => s.accentColor);
  const windowOpacity = useDesktopSettings((s) => s.windowOpacity);
  const animationsEnabled = useDesktopSettings((s) => s.animationsEnabled);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", ACCENT_COLORS[accentColor] || ACCENT_COLORS.blue);
    root.style.setProperty("--window-opacity", String(windowOpacity));
    root.classList.toggle("no-animations", !animationsEnabled);
    gsap.globalTimeline.timeScale(animationsEnabled ? 1 : 100); // GSAP tweens finish almost instantly
  }, [accentColor, windowOpacity, animationsEnabled]);

  return (
    <main>
      <ThreeBackground />
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />

      <DesktopSettingsPanel />
    </main>
  );
};

export default DesktopApp;
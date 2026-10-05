import { Dock, Home, Navbar, Welcome, ThreeBackground } from "#components";
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from "#windows";
import gsap from "gsap";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const DesktopApp = () => {
  return (
    <main>
      <ThreeBackground />
      <Navbar />
      <Welcome/>
      <Dock/>

      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image />
      <Contact/>
      <Home />
    </main>
  );
};

export default DesktopApp
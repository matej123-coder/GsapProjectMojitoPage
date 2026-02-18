import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Cocktails } from "./components/Cocktails";
import { About } from "./components/About";
import { Art } from "./components/Art";
import { Menu } from "./components/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText);
export const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
};

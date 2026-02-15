import { ScrollTrigger, SplitText } from "gsap/all";
import { useEffect } from "react";
import gsap from "gsap";
import { Navbar } from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);
export const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};

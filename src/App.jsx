import { ScrollTrigger, SplitText } from "gsap/all";
import { useEffect } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);
export const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-indigo-300">Welcome to Mojito!</h1>
      <p>Your one-stop solution for all your needs.</p>
    </div>
  );
};

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Portofolio from "./Pages/Portofolio";
import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const element = document.documentElement;
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
      setTheme("dark");
    } else {
      element.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const colorChange = theme == "dark" ? "#020617" : "#eaeaea";

  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 10%, ${colorChange} 40%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  return (
    <>
      <div className={`overflow-x-hidden w-full h-screen pb-20 pt-14 ${theme}`}>
        <motion.div
          style={{ backgroundImage }}
          className={`absolute inset-0 -z-10 h-full w-full items-center px-5 py-24`}
        >
          <div className="absolute inset-0 z-0">
            <Canvas>
              <Stars radius={50} count={2500} factor={4} fade speed={2} />
            </Canvas>
          </div>
        </motion.div>

        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

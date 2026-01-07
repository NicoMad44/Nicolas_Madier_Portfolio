import React from "react";
import { useEffect } from "react";

// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Jobs from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 10,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <main>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Jobs />
        <Contact />
      </main>
      <footer className="p-3 text-center">
        <p className="text-sm text-gray-400">
        © 2026 Nicolas MADIER. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">
        Design inspired by &quot;React Portfolio 2&quot; by Sridhar Chandrasekar.
        </p>
      </footer>
    </div>
  );
};

export default App;

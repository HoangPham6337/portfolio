import './index.css'
import {LoadingScreen} from "./components/LoadingScreen.tsx";
import {Navbar} from "./components/Navbar.tsx";
import {MobileMenu} from "./components/MobileMenu.tsx";
import {Home} from "./components/sections/Home.tsx";
import {About} from "./components/sections/About.tsx";
import {Projects} from "./components/sections/Projects.tsx";
import {Contact} from "./components/sections/Contact.tsx";
import {JSX, useEffect, useState} from "react";
import {Experience} from "./components/sections/Experience.tsx";

function App(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("darkmode", isDarkMode);
  }, [isDarkMode]);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundColor: "var(--base-color)",
          color: "var(--text-color)",
        }}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        {/* Toggle Theme Button */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed bottom-4 right-4 p-3 rounded-full border transition"
          style={{
            borderColor: "var(--accent-color)",
            color: "var(--text-color)",
            backgroundColor: "var(--base-variant)"
          }}
        >
          {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

      </div>
    </>
  );
}

export default App

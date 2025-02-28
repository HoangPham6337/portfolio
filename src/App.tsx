import './index.css'
import {LoadingScreen} from "./components/LoadingScreen.tsx";
import {Navbar} from "./components/Navbar.tsx";
import {MobileMenu} from "./components/MobileMenu.tsx";
import {Home} from "./components/sections/Home.tsx";
import {About} from "./components/sections/About.tsx";
import {Projects} from "./components/sections/Projects.tsx";
import {Contact} from "./components/sections/Contact.tsx";
import {JSX, useState} from "react";

function App(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-transparent text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home/>
        <About/>
        <Projects/>
        <Contact/>

      </div>
    </>
  );
}

export default App

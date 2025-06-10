import './index.css'
import {LoadingScreen} from "./components/LoadingScreen.tsx";
import {Navbar} from "./components/Navbar.tsx";
import {MobileMenu} from "./components/MobileMenu.tsx";
import {Home} from "./components/sections/Home.tsx";
import {About} from "./components/sections/About.tsx";
import {Projects} from "./components/sections/Projects.tsx";
import {Contact} from "./components/sections/Contact.tsx";
import {JSX, useCallback, useState} from "react";
import {Experience} from "./components/sections/Experience.tsx";
import {Footer} from "./components/Footer.tsx";
import {CursorSplash} from "./components/CursorSplash.tsx";
import {useLocation} from "react-router-dom";

function App(): JSX.Element {
  const location = useLocation();
  const shouldSkipLoading = location.state?.skipLoadingAnimation;
  const [isLoaded, setIsLoaded] = useState<boolean>(shouldSkipLoading || false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState(!shouldSkipLoading);

  const handleLoadingComplete = useCallback(() => {
    setIsLoaded(true);
    // Let the loading screen fade out, then remove it from the DOM.
    setTimeout(() => setShowLoading(false), 700); // Remove after fade duration
  }, []);


  return (
    <>
      {showLoading && <LoadingScreen isLoaded={isLoaded} onComplete={handleLoadingComplete}/>}
      <CursorSplash />
      <div
        className={`isolate min-h-screen transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          // backgroundColor: "var(--base-color)",
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
        <Footer/>
      </div>
    </>
  );
}

export default App
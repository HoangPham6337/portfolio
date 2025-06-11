import './index.css'
import {LoadingScreen} from "./components/LoadingScreen.tsx";
import {Navbar} from "./components/Navbar.tsx";
import {MobileMenu} from "./components/MobileMenu.tsx";
import {Home} from "./components/sections/Home.tsx";
import {About} from "./components/sections/About.tsx";
import {Projects} from "./components/sections/Projects.tsx";
import {Contact} from "./components/sections/Contact.tsx";
import {JSX, useCallback, useEffect, useState} from "react";
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
  const DESKTOP_BREAKPOINT = 768;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= DESKTOP_BREAKPOINT);

  const handleLoadingComplete = useCallback(() => {
    setIsLoaded(true);
    // Let the loading screen fade out, then remove it from the DOM.
    setTimeout(() => setShowLoading(false), 700); // Remove after fade duration
  }, []);



  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    }
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])


  return (
    <>
      {showLoading && <LoadingScreen isLoaded={isLoaded} onComplete={handleLoadingComplete}/>}
      <div
        className={`isolate min-h-screen transition-opacity duration-500 z-10 relative ${
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
      {isDesktop && <CursorSplash />}
    </>
  );
}

export default App
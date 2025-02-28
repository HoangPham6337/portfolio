import {useEffect, useState} from "react";
import githubLogoWhite from "../assets/icons/github-mark-white.svg";
import githubLogoDark from "../assets/icons/github-mark.svg";
import darkModeIcon from "../assets/icons/dark_mode.svg"
import lightModeIcon from "../assets/icons/light_mode.svg"
import darkMenu from "../assets/icons/menu_dark.svg";
import lightMenu from "../assets/icons/menu_white.svg";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (p: (prev: boolean) => boolean) => void;
}

export const Navbar = ({menuOpen, setMenuOpen}: NavbarProps) => {

  const getInitialTheme = () => {
    // Check if the user has a saved preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";

    // Otherwise, check the system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme());

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    // Apply the theme when the component mounts
    if (isDarkMode) {
      document.documentElement.classList.add("darkmode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("darkmode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, menuOpen]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <nav
      className="fixed top-0 w-full z-40 backdrop-blur-lg border-b "
      style={{
        backgroundColor: "rgba(var(--base-color-rgb), 0.8)", // Dynamic background transparency
        borderColor: "var(--secondary-text)" // Themed border
      }}
    >
      <div className="max-w-5xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">
          {/* GitHub Link */}
          <a href="https://github.com/HoangPham6337" className="flex items-center gap-2 font-bold transition-all">
            <img src={isDarkMode ? githubLogoWhite : githubLogoDark} alt="github_logo" className="w-6 h-6 object-contain"/>
            <span
              className="leading-none text-lg transition-colors"
              style={{
                color: "var(--highlight-green)", // Themed GitHub text
                transition: "color 0.3s ease-in-out"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--highlight-orange)"} // Hover effect
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--highlight-green)"}
            >
              HoangPham6337
            </span>
          </a>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="transition-colors"
                style={{
                  color: "var(--text-color)",
                  transition: "color 0.3s ease-in-out"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-color)"} // Hover color
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-color)"}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} {/* Capitalize first letter */}
              </a>
            ))}

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition bg-transparent cursor-pointer"
              style={{
                transition: "color 0.3s ease-in-out"
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.filter = "brightness(2)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.filter = "brightness(1)";
              }}
            >
              <img src={isDarkMode ? darkModeIcon : lightModeIcon} alt="theme-toggle" className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Dark Mode Button */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition bg-transparent cursor-pointer"
              style={{
                transition: "color 0.3s ease-in-out"
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.filter = "brightness(2)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.filter = "brightness(1)";
              }}
            >
              <img src={isDarkMode ? darkModeIcon : lightModeIcon} alt="theme-toggle" className="w-6 h-6" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="p-2 rounded-full transition bg-transparent cursor-pointer"
              onClick={() => setMenuOpen((prev: boolean) => !prev)}
            >
              <img src={isDarkMode ? lightMenu : darkMenu} alt="theme-toggle" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

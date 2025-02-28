import {useEffect, useState} from "react";
import githubLogoWhite from "../assets/icons/github-mark-white.svg";
import githubLogoDark from "../assets/icons/github-mark.svg";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (p: (prev: boolean) => boolean) => void;
}

export const Navbar = ({menuOpen, setMenuOpen}: NavbarProps) => {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(document.documentElement.classList.contains("darkmode"));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    // Observe theme changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("darkmode"));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect(); // Cleanup observer
  }, [menuOpen]);


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

          {/* Mobile Menu Toggle */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev: boolean) => !prev)}
          >
            &#9776;
          </div>

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
          </div>

        </div>
      </div>
    </nav>
  );
};

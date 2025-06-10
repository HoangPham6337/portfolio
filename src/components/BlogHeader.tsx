import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Use Link for navigation
import githubLogoWhite from '../assets/icons/github-mark-white.svg';
import githubLogoDark from '../assets/icons/github-mark.svg';
import darkModeIcon from '../assets/icons/dark_mode.svg';
import lightModeIcon from '../assets/icons/light_mode.svg';
import homeLightIcon from '../assets/icons/home-light.png';
import homeDarkIcon from '../assets/icons/home-dark.png';

export const BlogHeader = () => {
  const { t, i18n } = useTranslation();

  const getInitialLanguage = () => localStorage.getItem("language") || navigator.language.split("-")[0] || "en";
  const [selectedLanguage, setSelectedLanguage] = useState<string>(getInitialLanguage());

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme());

  const changeLanguage = (lng: string) => {
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("darkmode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("darkmode");
      localStorage.setItem("theme", "light");
    }
    setSelectedLanguage(i18n.language);
  }, [isDarkMode, i18n.language]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <nav
      className="fixed top-0 w-full z-40 backdrop-blur-lg border-b"
      style={{
        backgroundColor: "rgba(var(--base-color-rgb), 0.8)",
        borderColor: "var(--secondary-text)"
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* GitHub Link (Consistent Branding) */}
          <a href="https://github.com/HoangPham6337" className="flex items-center gap-2 font-bold transition-all">
            <img src={isDarkMode ? githubLogoWhite : githubLogoDark} alt="github_logo"
                 className="w-6 h-6 object-contain"/>
            <span
              className="leading-none text-lg transition-colors"
              style={{ color: "var(--highlight-green)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--highlight-orange)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--highlight-green)"}
            >
              HoangPham6337
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* The single link back to the homepage */}
            <Link
              to="/"
              className="transition-colors"
              style={{
                color: "var(--text-color)",
                transition: "color 0.3s ease-in-out"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-color)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-color)"}
            >
              {/*&larr; {t('navbar.home')}*/}
              &larr; Return to Portfolio
            </Link>

            {/* Theme and Language Toggles */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition bg-transparent cursor-pointer"
              style={{ transition: "color 0.3s ease-in-out" }}
              onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.filter = "brightness(2)"; }}
              onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.filter = "brightness(1)"; }}
            >
              <img src={isDarkMode ? darkModeIcon : lightModeIcon} alt="theme-toggle" className="w-6 h-6"/>
            </button>
            <select
              value={selectedLanguage}
              onChange={(e) => changeLanguage(e.target.value)} className="border p-2 rounded bg-transparent">
              <option value="vi" style={{backgroundColor: "var(--base-color)"}}>🇻🇳 Tiếng Việt</option>
              <option value="en" style={{backgroundColor: "var(--base-color)"}}>🇬🇧 English</option>
              <option value="fr" style={{backgroundColor: "var(--base-color)"}}>🇫🇷 Français</option>
            </select>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <select
              value={selectedLanguage}
              onChange={(e) => changeLanguage(e.target.value)} className="w-14 h-10 md:w-auto md:h-auto bg-transparent border-0 md:border p-2 rounded cursor-pointer">
              <option value="vi" style={{backgroundColor: "var(--base-color)"}}>🇻🇳</option>
              <option value="en" style={{backgroundColor: "var(--base-color)"}}>🇬🇧</option>
              <option value="fr" style={{backgroundColor: "var(--base-color)"}}>🇫🇷</option>
            </select>
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
              <img src={isDarkMode ? darkModeIcon : lightModeIcon} alt="theme-toggle" className="w-6 h-6"/>
            </button>
            <Link
              to="/"
              state={{ skipLoadingAnimation: true }} // Also skip loading animation on mobile
              className="p-2 rounded-full transition bg-transparent cursor-pointer"
            >
              <img src={isDarkMode ? homeDarkIcon : homeLightIcon} alt="Return Home" className="w-6 h-6"/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
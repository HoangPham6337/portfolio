import {useEffect} from "react";
import githubLogo from "../assets/icons/github-mark-white.svg"

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (p: (prev: boolean) => boolean) => void;
}

export const Navbar = ({menuOpen, setMenuOpen}: NavbarProps) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return <nav
    className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8] backdrop-blur-lg border-b border-white/10 shadow-lg">
    <div className="max-w-5xl mx-auto px-4">

      <div className="flex justify-between items-center h-16">
        <a href="https://github.com/HoangPham6337" className="flex items-center gap-2  font-bold transition-all">
          <img src={githubLogo} alt="github_logo" className="w-6 h-6 object-contain"/>
          <span className="text-[#3fac39] hover:text-[#db9257] leading-none text-lg">HoangPham6337</span>
        </a>

        <div
          className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
          onClick={() => setMenuOpen((prev: boolean) => !prev)}>
          &#9776;
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-[#dcf0db] hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-[#dcf0db] hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-[#dcf0db] hover:text-white transition-colors">Project</a>
          <a href="#contact" className="text-[#dcf0db] hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </nav>
}
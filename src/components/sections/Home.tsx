import {RevealOnScroll} from "../RevealOnScroll.tsx";
import {useTranslation} from "react-i18next";

export const Home = () => {
  const {t} = useTranslation();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold animate-fade-in"
              style={{ color: "var(--highlight-orange)" }}>
            {t("home.heading_1")} <br className="hidden sm:block" />
            {t("home.heading_2")}

          </h1>

          {/* Description */}
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto animate-fade-in"
             style={{ color: "var(--text-color)" }}>
            {t("home.description")} <br className="hidden sm:block" />
            {t("home.from")} <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>{t("home.low-level computing")}</span> {t("home.to")}
            <span style={{ color: "var(--highlight-orange)", fontWeight: "bold" }}> {t("home.AI-driven software")}</span>.
          </p>

          {/* Personal Introduction */}
          <p className="mt-2 text-md sm:text-lg animate-fade-in"
             style={{ color: "var(--secondary-text)" }}>
            {t('home.intro_1')} <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>{t("home.name")}</span>, {t("home.intro_2")}
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            {/* See My Work Button */}
            <a href="#projects"
               className="py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 shadow-lg"
               style={{
                 backgroundColor: "var(--highlight-green)", // Themed primary button
                 color: "var(--base-variant)", // Text color adapts to theme
                 transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out"
               }}
               onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--highlight-orange)"}
               onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--highlight-green)"}>
              {t("home.let's go")}
            </a>

            {/* Contact Me Button */}
            <a href="#contact"
               className="py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-lg leading-tight"
               style={{
                 border: "2px solid var(--highlight-orange)",
                 color: "var(--highlight-orange)",
                 transition: "all 0.3s ease-in-out"
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = "var(--highlight-green)";
                 e.currentTarget.style.color = "var(--base-variant)";
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = "transparent";
                 e.currentTarget.style.color = "var(--highlight-orange)";
               }}>
              {t('home.connect')}
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  )
}

import {RevealOnScroll} from "../RevealOnScroll.tsx";
import {SkillSection} from "../SkillSection.tsx";
import cyberLogo from "../../assets/icons/globe-grid.png";
import {useTranslation} from "react-i18next";

import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css/navigation';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css/pagination';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css/scrollbar';

import m1 from "../../assets/me/m1.jpg";
import m2 from "../../assets/me/m2.jpg";
import m3 from "../../assets/me/m3.jpg";
import m4 from "../../assets/me/m4.jpg";
import m5 from "../../assets/me/m5.jpg";


export const About = () => {
  const {t} = useTranslation();

  const aboutImages = [
    { src: m1, alt: "My profile picture" },
    { src: m2, alt: "Me at aeroscopia " },
    { src: m3, alt: "Me in front of concorde" },
    { src: m4, alt: "My workspace" },
    { src: m5, alt: "Me in plane engine" },
  ]

  const frontendSkills = [
    {
      name: "ReactJS",
      category: "frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "TypeScript",
      category: "frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
    }
  ];

  const backendSkills = [
    {
      name: "Node.js",
      category: "backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Python",
      category: "backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
    },
    {
      name: "C",
      category: "backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
    },
    {
      name: "Java",
      category: "backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    }
  ];

  const databaseSkills = [
    {
      name: "MySQL",
      category: "database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
    },
    {
      name: "Redis",
      category: "database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg"
    },
    {
      name: "MongoDB",
      category: "database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
    }
  ];

  const devOpsSkills = [
    {
      name: "Jenkins",
      category: "devops",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"
    },
    {
      name: "Docker",
      category: "devops",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
    },
    {name: "Git", category: "devops", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"}
  ];

  const operatingSystems = [
    {
      name: "Linux",
      category: "os",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    },
    {
      name: "Windows",
      category: "os",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg"
    }
  ];

  const otherSkills = [
    {
      name: "Bash Scripting",
      category: "other",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-plain.svg"
    },
    {
      name: "Cybersecurity",
      category: "other",
      icon: cyberLogo
    },
    {
      name: "AI & Machine Learning",
      category: "other",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
    }
  ];


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent text-center leading-tight"
            style={{backgroundImage: "linear-gradient(to right, var(--accent-color), var(--highlight-orange))"}}
          >
            {t("about.heading")}
          </h2>

          <div
            className="w-full max-w-sm mx-auto md:max-w-none mb-8 rounded-xl overflow-hidden"
            style={{ borderColor: "var(--secondary-text)" }}
          >
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30} // Space between slides
              slidesPerView={1} // Show one slide at a time
              navigation // Enable navigation buttons
              pagination={{ clickable: true }} // Enable clickable pagination dots
              scrollbar={{ draggable: true }} // Enable draggable scrollbar
              keyboard={{ enabled: true }}
              className="mySwiper" // Optional: for custom styling
            >
              {aboutImages.map((image, index) => (
                <SwiperSlide key={index} className="aspect-[4/3] md:aspect-video">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain" // aspect-video ensures consistent sizing
                    style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Self-description and skills */}
          <div className="rounded-xl p-8 border transition-all relative"
               style={{ borderColor: "var(--secondary-text)" }}>
            <div
              className="absolute inset-0 z-0 rounded-xl" // Absolute positioning to cover the whole block
              style={{
                backgroundColor: "var(--aero-color)",
                backdropFilter: 'blur(500px) saturate(100%) brightness(110%)',
                WebkitBackdropFilter: 'blur(500px) saturate(100%) brightness(110%)',
              }}
            ></div>
            <div className="relative z-10">
              <p style={{ color: "var(--text-color)" }}>
                {t("about.intro_1")} <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>{t("about.name")}</span>, {t("about.intro_2")}
                <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}> {t("about.performance")}, {t("about.efficiency")}, {t("about.low-level computing")}</span>
                {t("about.journey")} <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>{t("about.optimization")}, {t("about.automation")}, {t("about.system design")}</span>.
              </p>

              <p className="mt-4" style={{ color: "var(--text-color)" }}>
                {t("about.belief")} <span style={{ color: "var(--highlight-orange)", fontWeight: "bold" }}>{t("about.right_code")}</span>
                {t("about.approach")} <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>{t("about.streamlining")}, {t("about.optimizing")}, {t("about.automating")}</span>,
                {t("about.goal")} <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>{t("about.lightweight")}, {t("about.powerful")}, {t("about.scalable")}</span>.
              </p>

              {/*Skills*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 mt-3">
                {<SkillSection title="Frontend" category="frontend" skills={frontendSkills}/>}
                {<SkillSection title="Backend" category="backend" skills={backendSkills}/>}
                {<SkillSection title={t("about.db")} category="database" skills={databaseSkills}/>}
                {<SkillSection title="DevOps" category="devops" skills={devOpsSkills}/>}
                {<SkillSection title={t("about.os")} category="os" skills={operatingSystems}/>}
                {<SkillSection title={t("about.other skills")} category="other" skills={otherSkills}/>}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
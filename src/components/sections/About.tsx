import {RevealOnScroll} from "../RevealOnScroll.tsx";
import {SkillSection} from "../SkillSection.tsx";
import cyberLogo from "../../assets/icons/globe-grid.png";
import {useTranslation} from "react-i18next";


export const About = () => {
  const {t} = useTranslation();

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
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent text-center leading-tight"
            style={{backgroundImage: "linear-gradient(to right, var(--accent-color), var(--highlight-orange))"}}
          >
            {t("about.heading")}
          </h2>

          {/* Self-description and skills */}
          <div className="rounded-xl p-8 border transition-all"
               style={{ borderColor: "var(--secondary-text)", backgroundColor: "var(--base-color)" }}>
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
      </RevealOnScroll>
    </section>
  )
}
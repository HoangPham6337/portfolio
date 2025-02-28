import {RevealOnScroll} from "../RevealOnScroll.tsx";
import {SkillSection} from "../SkillSection.tsx";
import cyberLogo from "../../assets/icons/globe-grid.png";



export const About = () => {

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
            className="text-4xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent text-center"
            style={{backgroundImage: "linear-gradient(to right, var(--accent-color), var(--highlight-orange))"}}
          >
            About Me
          </h2>

          {/* Self-description and skills */}
          <div className="rounded-xl p-8 border transition-all"
               style={{ borderColor: "var(--secondary-text)", backgroundColor: "var(--base-color)" }}>
            <p style={{ color: "var(--text-color)" }}>
              I’m <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>Tom Maverick</span>, a software developer with a passion
              for <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>performance, efficiency, and low-level computing</span>.
              My journey into tech started at 12 when I tried to fix a sluggish laptop—what began as curiosity became an
              obsession with <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>optimization, automation, and system design</span>.
            </p>

            <p className="mt-4" style={{ color: "var(--text-color)" }}>
              I believe that <span style={{ color: "var(--highlight-orange)", fontWeight: "bold" }}>great software isn’t just about writing more code—it’s about writing the right code</span>.
              Whether it’s <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>streamlining workflows, optimizing performance, or automating complex processes</span>,
              I strive to build solutions that are <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>lightweight, powerful, and scalable</span>.
            </p>

              {/*Skills*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
                {<SkillSection title="Frontend" category="frontend" skills={frontendSkills}/>}
                {<SkillSection title="Backend" category="backend" skills={backendSkills}/>}
                {<SkillSection title="Database" category="database" skills={databaseSkills}/>}
                {<SkillSection title="DevOps" category="devops" skills={devOpsSkills}/>}
                {<SkillSection title="Operating Systems" category="os" skills={operatingSystems}/>}
                {<SkillSection title="Other Skills" category="other" skills={otherSkills}/>}
              </div>
          </div>
          {/*/!*Self-description and skills*!/*/}
          {/*<div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">*/}
          {/*  <p className="text-[#dcf0db]">*/}
          {/*    I’m <span className="text-[#4cb946] font-bold">Tom Maverick</span>, a software developer with a passion*/}
          {/*    for*/}
          {/*    <span className="text-[#6bcc66] font-semibold"> performance, efficiency, and low-level computing</span>.*/}
          {/*    My journey into tech started at 12 when I tried to fix a sluggish laptop—what began as curiosity became an*/}
          {/*    obsession with*/}
          {/*    <span className="text-[#b7e3b5] font-semibold"> optimization, automation, and system design</span>.*/}
          {/*  </p>*/}

          {/*  <p className="mt-4 text-[#dcf0db]">*/}
          {/*    I believe that <span className="text-[#db9257] font-bold">great software isn’t just about writing more code—it’s about writing the right code</span>.*/}
          {/*    Whether it’s <span className="text-[#6bcc66] font-semibold">streamlining workflows, optimizing performance, or automating complex processes</span>,*/}
          {/*    I strive to build solutions that are <span className="text-[#4cb946] font-semibold">lightweight, powerful, and scalable</span>.*/}
          {/*  </p>*/}

          {/*  <p className="mt-4 text-[#dcf0db]">*/}
          {/*    My expertise spans <span className="text-[#b7e3b5] font-semibold">low-level programming, system automation, and AI-driven optimization</span>,*/}
          {/*    and I’m always looking for new challenges that push the limits of what software can do.*/}
          {/*    If it can be <span className="text-[#db9257] font-semibold">faster, smarter, or more efficient</span>,*/}
          {/*    I’ll find a way to make it happen.*/}
          {/*  </p>*/}



          {/*</div>*/}

        </div>
      </RevealOnScroll>
    </section>
  )

}
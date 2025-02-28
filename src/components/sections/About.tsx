import {RevealOnScroll} from "../RevealOnScroll.tsx";
import {SkillSection} from "../SkillSection.tsx";
import cyberLogo from "../../assets/icons/globe-grid.png";

type educationType = {
  degree: string,
  school: string,
  years: string,
  details: string
}

type workExpType = {
  role: string,
  company: string,
  years: string,
  description: string
}

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


  const education: educationType[] = [
    {
      degree: "Bachelor of Computer Technology (3rd year in progress) - Dual Diploma",
      school: "Université Sorbonne Paris Nord",
      years: "Since August 2024",
      details: "Focus on software development, databases, and automation.",
    },
    {
      degree: "Bachelor in Information and Communication Technology - Dual Diploma",
      school: "University of Science and Technology of Hanoi",
      years: "August 2022 – June 2024",
      details: "Coursework includes programming fundamentals, machine learning, and system design.",
    },
  ];

  const workExperience: workExpType[] = [
    {
      role: "Research Intern",
      company: "IRIT - Institut de Recherche en Informatique de Toulouse",
      years: "March 2025 - July 2025",
      description: "Working on the contextual optimization of a machine learning model for an embedded system, focusing on performance tuning and resource efficiency.",
    },
    {
      role: "Participant",
      company: "USTH FABLAB Makeathon",
      years: "January 2023",
      description: "Developed a technological solution to modernize bus stops using artificial intelligence in a rapid prototyping competition.",
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
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#4cb946] to-[#dba070] bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/*Self-description and skills*/}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-[#dcf0db]">
              I’m <span className="text-[#4cb946] font-bold">Tom Maverick</span>, a software developer with a passion
              for
              <span className="text-[#6bcc66] font-semibold"> performance, efficiency, and low-level computing</span>.
              My journey into tech started at 12 when I tried to fix a sluggish laptop—what began as curiosity became an
              obsession with
              <span className="text-[#b7e3b5] font-semibold"> optimization, automation, and system design</span>.
            </p>

            <p className="mt-4 text-[#dcf0db]">
              I believe that <span className="text-[#db9257] font-bold">great software isn’t just about writing more code—it’s about writing the right code</span>.
              Whether it’s <span className="text-[#6bcc66] font-semibold">streamlining workflows, optimizing performance, or automating complex processes</span>,
              I strive to build solutions that are <span className="text-[#4cb946] font-semibold">lightweight, powerful, and scalable</span>.
            </p>

            <p className="mt-4 text-[#dcf0db]">
              My expertise spans <span className="text-[#b7e3b5] font-semibold">low-level programming, system automation, and AI-driven optimization</span>,
              and I’m always looking for new challenges that push the limits of what software can do.
              If it can be <span className="text-[#db9257] font-semibold">faster, smarter, or more efficient</span>,
              I’ll find a way to make it happen.
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

          <div className="max-w-6xl mx-auto px-6 grid gap-8 lg:grid-cols-2">

            {/* Education Section */}
            <div className="bg-[#1e1f1e] p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#4cb946]" fill="none" stroke="currentColor" strokeWidth="2"
                     viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 14l6.16-3.423M6.84 10.577L12 14l-5.16 3.423"></path>
                </svg>
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="mt-4 space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-[#4cb946] pl-4">
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.school} ({edu.years})</p>
                    <p className="text-gray-500 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="bg-[#1e1f1e] p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#db9257]" fill="none" stroke="currentColor" strokeWidth="2"
                     viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7h-4m0 0H8m4 0V3m0 4v4"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4M8 16v-4m8 4v-4m4-4v8m-4-8v8"></path>
                </svg>
                <h2 className="text-2xl font-bold text-white">Work Experience</h2>
              </div>
              <div className="mt-4 space-y-4">
                {workExperience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-[#db9257] pl-4">
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company} ({exp.years})</p>
                    <p className="text-gray-500 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  )
}
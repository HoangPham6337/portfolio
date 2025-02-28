import {RevealOnScroll} from "../RevealOnScroll.tsx";

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

export const Experience = () => {

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

  return (<section
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <h2
          className="text-4xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent text-center"
          style={{backgroundImage: "linear-gradient(to right, var(--accent-color), var(--highlight-orange))"}}
        >
          Experiences
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid gap-8 lg:grid-cols-2">

          {/* Education Section */}
          <div
            className="p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   viewBox="0 0 24 24"
                   style={{color: "var(--primary-color)"}}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 14l6.16-3.423M6.84 10.577L12 14l-5.16 3.423"></path>
              </svg>
              <h2
                className="text-2xl font-bold"
                style={{color: "var(--text-color)"}}
              >Education</h2>
            </div>
            <div className="mt-4 space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-4 pl-4"
                  style={{color: "var(--primary-color)"}}
                >
                  <h3
                    className="text-lg font-semibold"
                    style={{color: "var(--accent-color)"}}
                  >{edu.degree}</h3>
                  <p style={{color: "var(--text-color)"}}>{edu.school} ({edu.years})</p>
                  <p
                    className="text-sm"
                    style={{color: "var(--secondary-text)"}}
                  >
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   viewBox="0 0 24 24"
                   style={{color: "var(--highlight-red)"}}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7h-4m0 0H8m4 0V3m0 4v4"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4M8 16v-4m8 4v-4m4-4v8m-4-8v8"></path>
              </svg>
              <h2
                className="text-2xl font-bold"
                style={{color: "var(--text-color)"}}
              >
                Work Experience
              </h2>
            </div>
            <div className="mt-4 space-y-4">
              {workExperience.map((exp, index) => (

                <div
                  key={index}
                  className="border-l-4 pl-4"
                  style={{color: "var(--highlight-orange)"}}
                >
                  <h3
                    className="text-lg font-semibold"
                    style={{color: "var(--highlight-red)"}}
                  >{exp.role}</h3>
                  <p style={{color: "var(--text-color)"}}>{exp.company} ({exp.years})</p>
                  <p
                    className="text-sm"
                    style={{color: "var(--secondary-text)"}}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>


      </RevealOnScroll>
    </section>
  )
}
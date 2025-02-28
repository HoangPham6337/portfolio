import {RevealOnScroll} from "../RevealOnScroll.tsx";
import {ProjectCard} from "../ProjectCard.tsx";
import {ProjectCardProps} from "../ProjectCard.tsx";
import rebirthImg from "../../assets/images/rebirth.jpeg"
import databaseImg from "../../assets/images/databaseImg.jpeg"
import handRegImg from "../../assets/images/handDemo.png"
import pythonMarkImg from "../../assets/images/pythonMarkImg.jpeg"

export const Projects = () => {

  const projects: ProjectCardProps[] = [
    {
      title: "Rebirth – A Multiplayer Game Platform",
      description: "Developed a multiplayer game platform as part of a team of four. Implemented dynamic game loading, fixed backend bugs, and designed the database schema for efficient data management.",
      technologies: ["React.js", "Node.js", "Mongoose", "JavaScript"],
      url: "https://gitlab.sorbonne-paris-nord.fr/12201950/rebirth/-/tree/main?ref_type=heads",
      image: rebirthImg
    },
    {
      title: "Database Management System Illustration",
      description: "Built a backend demo for an e-commerce platform integrating MongoDB and Redis. Used Redis for session management and MongoDB for flexible product data storage, deployed on Digital Ocean.",
      technologies: ["Python", "MongoDB", "Redis", "Linux"],
      url: "https://github.com/HoangPham6337/website_backend_python",
      image: databaseImg
    },
    {
      title: "Image Recognition using Machine Learning",
      description: "Developed a hand shape recognition system using TensorFlow with Supervised Learning (linear regression). Implemented multiprocessing and GPU computation for faster processing.",
      technologies: ["Python", "TensorFlow", "Supervised Learning", "Linear Regression"],
      url: "https://github.com/HoangPham6337/Machine-Learning-1",
      image: handRegImg
    },
    {
      title: "Student Management Program",
      description: "Created a CLI-based student management system in Python, featuring input sanitation, multi-threading, and data persistence using the Pickle module.",
      technologies: ["Python", "Multiprocessing", "CLI", "Curses Library"],
      url: "https://github.com/path-to-student-management",
      image: pythonMarkImg
    },
    {
      title: "Grade Management Project",
      description: "Designed a C-based interactive CLI tool for managing courses and grades, supporting GPA calculation, data persistence, and input sanitation.",
      technologies: ["C", "Data Structures", "Dynamic Memory Management"],
      url: "https://github.com/path-to-grade-management"
    },
    {
      title: "Smart Bus Station (SBS) Project",
      description: "Developed an AI-powered bus station system integrating voice/image recognition, IoT environmental monitoring, and sustainable energy solutions.",
      technologies: ["C", "Python", "Machine Learning", "IoT"],
      url: "https://github.com/path-to-smart-bus-station"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#4cb946] to-[#dba070] bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index}
                           title={project.title}
                           description={project.description}
                           technologies={project.technologies}
                           url={project.url}
                           image={project.image}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>

    </section>
  )
}
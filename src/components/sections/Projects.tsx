import {RevealOnScroll} from "../RevealOnScroll.tsx";
import {useTranslation} from "react-i18next";
import {ProjectCard} from "../ProjectCard.tsx";
import {ProjectCardProps} from "../ProjectCard.tsx";
import tinyTitan from "../../assets/images/tinytitan.png";
import rebirthImg from "../../assets/images/rebirth.jpeg";
import databaseImg from "../../assets/images/databaseImg.jpeg";
import handRegImg from "../../assets/images/handDemo.png";
import pythonMarkImg from "../../assets/images/pythonMarkImg.jpeg";

export const Projects = () => {
  const {t} = useTranslation();

  // List of available project numbers
  const projectNumbers = [1, 2, 3, 4, 5, 6, 7];

  // Map translations dynamically
  const projects: ProjectCardProps[] = projectNumbers.map((num) => ({
    title: t(`projects.title_${num}`),
    description: t(`projects.description_${num}`),
    technologies: t(`projects.technologies_${num}`, { returnObjects: true }) as string[],
    url: t(`projects.url_${num}`, "") || null, // Handle null URL case
    image: getImage(num) // Function to fetch corresponding image
  }));

  function getImage(num: number): string | null {
    const images: Record<number, string> = {
      1: tinyTitan,
      2: rebirthImg,
      3: databaseImg,
      4: handRegImg,
      5: pythonMarkImg
    };
    console.log(typeof images[1]);
    return images[num] || null;
  }


  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent text-center leading-tight"
            style={{backgroundImage: "linear-gradient(to right, var(--accent-color), var(--highlight-orange))"}}
          >
            {t("projects.project")}
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
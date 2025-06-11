// import {RevealOnScroll} from "../RevealOnScroll.tsx";
import {useTranslation} from "react-i18next";
import {ProjectCard} from "../ProjectCard.tsx";
import {ProjectCardProps} from "../ProjectCard.tsx";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import tinyTitan from "../../assets/images/tinytitan.png";
import rebirthImg from "../../assets/images/rebirth.jpeg";
import databaseImg from "../../assets/images/databaseImg.jpeg";
import handRegImg from "../../assets/images/handDemo.png";
import pythonMarkImg from "../../assets/images/pythonMarkImg.jpeg";
import raspImg from "../../assets/images/labyrinthe.png"
import {useLayoutEffect, useMemo, useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

const projectNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
function getImage(num: number): string | null {
  const images: Record<number, string> = {
    1: raspImg,
    2: tinyTitan,
    3: rebirthImg,
    4: databaseImg,
    5: handRegImg,
    6: pythonMarkImg
  };
  // console.log(typeof images[1]);
  return images[num] || null;
}

export const Projects = () => {
  const {t} = useTranslation();
  const projectContainer = useRef(null);

  // List of available project numbers

  // Map translations dynamically
  const projects: ProjectCardProps[] = useMemo(() => {
    return projectNumbers.map((num) => ({
      title: t(`projects.title_${num}`),
      description: t(`projects.description_${num}`),
      technologies: t(`projects.technologies_${num}`, { returnObjects: true }) as string[],
      url: t(`projects.url_${num}`, "") || null, // Handle null URL case
      image: getImage(num), // Function to fetch corresponding image
      blogPath: t(`projects.blogPath_${num}`, "") || null
    }));
  }, [t]);


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".project-card", { opacity: 0, y: 50 });

      gsap.to(".project-card", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectContainer.current,
          start: "top 80%",
        }
      });

    }, projectContainer)
    return () => ctx.revert()
  }, [projects]);


  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >

      {/*<RevealOnScroll>*/}
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent text-center leading-tight"
            style={{backgroundImage: "linear-gradient(to right, var(--accent-color), var(--highlight-orange))"}}
          >
            {t("projects.project")}
          </h2>

          <div ref={projectContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="relative">
                <div
                  className="absolute inset-0 z-0 rounded-xl" // Absolute positioning to cover the whole block
                  style={{
                    backgroundColor: "var(--aero-color)",
                    backdropFilter: 'blur(500px) saturate(100%) brightness(110%)',
                    WebkitBackdropFilter: 'blur(500px) saturate(100%) brightness(110%)',
                  }}
                ></div>
                  <div className="relative z-10">
                 <ProjectCard title={project.title}
                             description={project.description}
                             technologies={project.technologies}
                             url={project.url}
                             image={project.image}
                             blogPath={project.blogPath}
                />
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/*</RevealOnScroll>*/}

    </section>
  )
}
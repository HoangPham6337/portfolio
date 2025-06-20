import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  url: string | null;
  image: string | null;
  blogPath: string | null;
  downloadLink: string | null;
}

export const ProjectCard = ({
                              title,
                              description,
                              technologies,
                              url,
                              image,
                              blogPath,
                              downloadLink
                            }: ProjectCardProps) => {
  const {t} = useTranslation();
  return (
    <div
      className="p-6 rounded-xl border transition-all"
      style={{
        borderColor: "var(--highlight-red)",
        // backgroundColor: "var(--base-variant)",
        transition: "border 0.3s ease-in-out",
      }}
    >
      {/* Project Image */}
      {image && (
        <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
          <img src={image} alt={`${title} preview`} className="w-full h-full object-cover"/>
        </div>
      )}

      {/* Project Details */}
      <h3 className="text-xl font-bold mb-2" style={{color: "var(--accent-color)"}}>
        {title}
      </h3>
      <p className="mb-4" style={{color: "var(--text-color)"}}>
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="py-1 px-3 rounded-full text-sm transition-all"
            style={{
              backgroundColor: "var(--highlight-green)",
              color: "var(--base-variant)",
            }}
          >
              {tech}
            </span>
        ))}
      </div>


      <div className="flex items-center gap-4 mt-auto pt-4">
        {/* Project Link */}
        {url && (
          <div className="flex justify-between items-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors my-4 border rounded-2xl p-3"
              style={{
                color: "var(--highlight-orange)",
                borderColor: "var(--highlight-orange)",
                transition: "color 0.3s ease-in-out, background 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--base-color)";
                e.currentTarget.style.backgroundColor = "var(--highlight-orange)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--highlight-orange)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {t("project_card.view")}
            </a>
          </div>
        )}

        {/*Project Blog*/}
        {blogPath && (
          <Link
            to={blogPath}
            className="btn-gradient-flash rounded-2xl p-3"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-color)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--base-color)";
            }}
          >
            {t("project_card.read")}
          </Link>
        )}
        {downloadLink && (
          <a
            href={downloadLink}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-gradient-flash rounded-2xl p-3"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-color)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--base-color)";
            }}
          >
            {t("project_card.download")}
          </a>
        )}
      </div>
    </div>
  );
};
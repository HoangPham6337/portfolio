export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  image?: string;
}

export const ProjectCard = ({ title, description, technologies, url, image }: ProjectCardProps) => {
  return (
    <div
      className="p-6 rounded-xl border border-[#4cb946]/30 hover:-translate-y-1 hover:border-[#db9257]/40 hover:shadow-[0_2px_8px_rgba(76, 185, 70, 0.2)] transition-all bg-[#1e1f1e]"
    >
      {/* Project Image */}
      {image && (
        <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
          <img src={image} alt={`${title} preview`} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Project Details */}
      <h3 className="text-xl font-bold mb-2 text-[#db9257]">{title}</h3>
      <p className="text-[#dcf0db] mb-4">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-[#4cb946]/10 text-[#4cb946] py-1 px-3 rounded-full text-sm hover:bg-[#4cb946]/20 hover:shadow-[0_2px_8px_rgba(76, 185, 70, 0.2)] transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Link */}
      <div className="flex justify-between items-center">
        <a
          href={url}
          className="text-[#db9257] hover:text-[#e0cab8] transition-colors my-4"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

// import {SkillTag} from "./SkillTag.tsx";
// import {JSX} from "react";
//
// interface SkillSectionProps {
//   title: string;
//   skills: string[];
// }
//
// export const SkillSection = ({title, skills}: SkillSectionProps): JSX.Element => {
//   return (
//     <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
//       <h3 className="text-xl font-bold mb-4">{title}</h3>
//       <div className="flex flex-wrap gap-2">
//         {skills.map((tech) => (
//           <SkillTag key={tech} name={tech}/>
//         ))}
//       </div>
//     </div>
//   );
// };

import { SkillTag } from "./SkillTag.tsx";
import { JSX } from "react";

interface SkillSectionProps {
  title: string;
  category: "frontend" | "backend" | "database" | "devops" | "os" | "other";
  skills: { name: string; icon: string }[];
}

export const SkillSection = ({ title, category, skills }: SkillSectionProps): JSX.Element => {
  return (
    <div className="rounded-xl p-6 bg-transparent hover:-translate-y-1 transition-all">
      <h3
        className="text-xl font-bold mb-4"
        style={{color: "var(--text-color)"}}
      >{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} category={category} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

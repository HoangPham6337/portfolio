// import {JSX} from "react";
//
// interface SkillTagProps {
//   name: string;
// }
//
// export const SkillTag = ({name}: SkillTagProps): JSX.Element => {
//   return (
//     <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
//                         hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transtion"
//     >
//       {name}
//     </span>
//   )
// }

import { JSX } from "react";

interface SkillTagProps {
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "os" | "other";
  icon: string; // URL for the skill's icon
}

const categoryColors = {
  frontend: { bg: "bg-blue-500/10", text: "text-blue-500", hover: "hover:bg-blue-500/20" },
  backend: { bg: "bg-green-500/10", text: "text-green-500", hover: "hover:bg-green-500/20" },
  database: { bg: "bg-yellow-500/10", text: "text-yellow-500", hover: "hover:bg-yellow-500/20" },
  devops: { bg: "bg-purple-500/10", text: "text-purple-500", hover: "hover:bg-purple-500/20" },
  os: { bg: "bg-gray-500/10", text: "text-gray-500", hover: "hover:bg-gray-500/20" },
  other: { bg: "bg-[#b7e3b5]", text: "text-[#db9257]", hover: "hover:bg-[#b7e3b5]/20" },
};

export const SkillTag = ({ name, category, icon }: SkillTagProps): JSX.Element => {
  const { bg, text, hover } = categoryColors[category];

  return (
    <span className={`${bg} ${text} py-2 px-4 rounded-full text-sm ${hover} hover:shadow-md transition-all flex items-center gap-2`}>
      <img src={icon} alt={`${name} icon`} className="w-5 h-5" />
      {name}
    </span>
  );
};

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaPython,
  FaGithubAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const MySkills = () => {
  const skills = [
    { icon: <FaReact className="text-blue-400" size={40} />, name: "React" },
    {
      icon: <SiNextdotjs className="text-black dark:text-white" size={40} />,
      name: "Next.js",
    },
    {
      icon: <FaJs className="text-yellow-400" size={40} />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript className="text-blue-600" size={40} />,
      name: "TypeScript",
    },
    {
      icon: <FaNodeJs className="text-green-500" size={40} />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss className="text-cyan-400" size={40} />,
      name: "Tailwind CSS",
    },
    { icon: <FaGitAlt className="text-orange-600" size={40} />, name: "Git" },
    {
      icon: <FaGithubAlt className="text-orange-600" size={40} />,
      name: "GitHub",
    },
    {
      icon: <SiMongodb className="text-green-600" size={40} />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql className="text-blue-600" size={40} />,
      name: "Postgres",
    },

    { icon: <FaPython className="text-blue-700" size={40} />, name: "Python" },
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden mb-24 md:mb-32 md:pb-32">
      <h1 className="text-white text-center text-3xl font-semibold mb-8">
        Some technologies I work with
      </h1>
      <div className="flex items-center">
        {/* Animated strip */}
        <div className="flex animate-infinite-scroll">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center mx-8 shrink-0"
            >
              <div className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md">
                {skill.icon}
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;

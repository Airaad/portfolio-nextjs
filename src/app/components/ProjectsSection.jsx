"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

const projectsData = [
  {
    id: 1,
    title: "Alilals Agrico",
    description: "NextJs with firebase website for client",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Airaad/Alilals.git",
    previewUrl: "https://alilals.com/",
  },
  {
    id: 2,
    title: "Password Generator - Genrates random password",
    description:
      "NextJs with shadcn & aceternity ui website for password generation",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Airaad/password-generator-nextjs.git",
    previewUrl: "https://password-generator-next-js-theta.vercel.app/",
  },
  {
    id: 3,
    title: "Queue - Social media site",
    description: "MERN stack socail media platform",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Airaad/social-media-web-app-mern.git",
    previewUrl: "https://queue-iv8u.onrender.com/",
  },
  {
    id: 4,
    title: "BooKeeper",
    description:
      "NextJs Fullstack web app build using prisma, postgres, nextAuth",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Airaad/bookeepr-nextjs.git",
    previewUrl: "https://github.com/Airaad/bookeepr-nextjs.git",
  },
  {
    id: 5,
    title: "FlexHive - Movie an Tv Show details app",
    description:
      "React Native app build using tmdb api and supabase inspired by imdb ",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Airaad/visual-media-react-native-app.git",
    previewUrl: "https://github.com/Airaad/visual-media-react-native-app.git",
  },
  {
    id: 6,
    title: "Expensy - Money Tracking app",
    description: "Budget tracking mobile app with local first storage",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Airaad/expensy-react-native.git",
    previewUrl: "https://github.com/Airaad/expensy-react-native.git",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className=" w-full bg-[#121212] flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-5xl text-3xl lg:text-5xl font-semibold text-center text-white relative">
          My Projects
        </h1>
        <div className="w-[40rem] h-40 relative">

          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-[#121212] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="text-white flex flex-row justify-center items-center gap-2 pb-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

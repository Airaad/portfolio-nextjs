"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-20" id="about">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 text-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <p className="mb-4 text-2xl md:text-5xl ">About Me</p>
          <p className="font-light text-sm text-white mx-auto lg:w-[60%] tracking-wide lg:text-lg">
            I am a full stack developer with experience in both web and mobile
            application development. I build interactive and user friendly web
            and mobile applications. I have experience working with modern
            frameworks and technologies, I enjoy crafting seamless digital
            experiencs across platforms whether its dynamic web page or a
            feature rich mobile application. I focus on clean code, performance
            and delevering real value to users. I am a quick learner and I am
            always looking to expand my knowledge and skill set.
          </p>
        </motion.h1>
      </LampContainer>
    </section>
  );
};

export default AboutSection;

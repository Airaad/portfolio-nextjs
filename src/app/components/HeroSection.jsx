"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const links = [
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Airaad",
  },

  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/sheikh-airaad-314889291",
  },
  {
    title: "X",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/s_airaad",
  },
];
const HeroSection = () => {
  return (
    <section className="lg:py-10 lg:px-28">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[rgba(56,43,240,1)]  to-[rgba(0,212,255,1)]">
              Hello, I&apos;m{" "}
            </span>

            <br />

            <TypeAnimation
              sequence={[
                "Airaad",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex items-center justify-center w-full py-4">
            <FloatingDock items={links} />
          </div>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            On a journey To write better code and build things.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-l from-[rgba(56,43,240,1)]  to-[rgba(0,212,255,1)] text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1sYlJ8rVr6s5tVTIIb_-tQKM5lvboQ0Fs/view?usp=drive_link"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-l from-[rgba(56,43,240,1)]  to-[rgba(0,212,255,1)] hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <Image
            src="/images/IMG-20240914-WA0048.jpg"
            alt="hero image"
            className="rounded-full object-cover"
            width={300}
            height={300}
            style={{
              aspectRatio: "1/1",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

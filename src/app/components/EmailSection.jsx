"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { IconBrandX } from "@tabler/icons-react";

const EmailSection = () => {
  return (
    <section id="contact" className="my-12 md:mt-56  gap-4 ">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold my-2 text-transparent bg-clip-text bg-gradient-to-l from-[rgba(56,43,240,1)]  to-[rgba(0,212,255,1)]">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Airaad">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/sheikh-airaad-314889291">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://x.com/s_airaad">
            <IconBrandX className="h-[50px] w-[40px] text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import { SiReact, SiTailwindcss,SiNextdotjs,SiVuedotjs,SiGit,SiPython,SiCss3,SiJavascript,SiHtml5 } from "react-icons/si";

const skills = [
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "Tailwind",
    Icon: SiTailwindcss,
  },
  {
    text: "Next.Js",
    Icon: SiNextdotjs,
  },
  {
    text: "Vue.js",
    Icon: SiVuedotjs ,
  },
  {
    text: "Git",
    Icon: SiGit ,
  },
  {
    text: "Python",
    Icon: SiPython,
  },
  {
    text: "Javascript",
    Icon: SiJavascript,
  },
  {
    text: "CSS",
    Icon: SiCss3,
  },
  {
    text: "HTML",
    Icon: SiHtml5,
  },
];

const Skill = () => {
  return (
    <main className="max-w-5xl  mx-auto px-8 text-xl">
      <Title
        text={"Skills"}
        className={"flex flex-col items-center justify-center -rotate-6"}
      />
      <HoverEffect items={skills} />
    </main>
  );
};

export default Skill;

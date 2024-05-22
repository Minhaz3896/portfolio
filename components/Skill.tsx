"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import { SiReact } from "react-icons/si";

const skills = [
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "React",
    Icon: SiReact,
  },
];

const Skill = () => {
  return (
    <main className="max-w-5xl  mx-auto px-8">
      <Title
        text={"Skills"}
        className={"flex flex-col items-center justify-center -rotate-6"}
      />
      <HoverEffect items={skills} />
    </main>
  );
};

export default Skill;

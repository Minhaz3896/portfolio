"use client";
import React from "react";
import Title from "./Title";
import { SiReact, SiJavascript,SiTailwindcss,SiTypescript,SiNextdotjs  } from "react-icons/si";
import Link from "next/link";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Portfolio",
    tech: [SiReact,SiTailwindcss,SiTypescript,SiNextdotjs ],
    link: "https://www.youtube.com/",
    cover: "/project-1.PNG",
    background: "bg-indigo-500",
  },
  {
    title: "Great Foods",
    tech: [SiReact,SiJavascript,SiTailwindcss],
    link: "https://greatfoods.netlify.app/",
    cover: "/project-3.PNG",
    background: "bg-green-500",
  },
  {
    title: "Housing Market",
    tech: [SiReact,SiJavascript,SiTailwindcss],
    link: "https://housing-market.netlify.app/",
    cover: "/project-4.PNG",
    background: "bg-green-500",
  },
  {
    title: "Olympic Associates Project",
    tech: [SiReact,SiJavascript,SiTailwindcss],
    link: "https://olympic-associates.com/",
    cover: "/project-5.PNG",
    background: "bg-indigo-500",
  },
];

const Projects = () => {
  return (
    <main className="py-10 p-5 sm:p-0 ">
      <Title
        text={"Projects"}
        className={"flex flex-col items-center justify-center rotate-6"}
      />
      <div className="grid grid-col-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((projects, index) => {
          return (
            <Link href={projects.link} key={index}>
              <div className={cn("p-5 rounded-xl ", projects.background)}>
                <DirectionAwareHover imageUrl={projects.cover} className="w-full space-y-5 cursor-pointer">
                  <div className="space-y-5">
                  <h1 className="text-2xl font-bold">{projects.title}</h1>
                  <div className="flex items-center gap-2 ">{projects.tech.map((Icon,index)=>{
                    return <Icon key={index} className="size-8"/>
                  })}
                  </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;

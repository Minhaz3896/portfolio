// import { link } from 'fs'
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiDiscord   } from "react-icons/si";


const Navbar = ({className}:{className?:string}) => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/minhazur-rhaman-478312290/",

      label: "Linkdin",

      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/Minhaz3896",

      label: "Github",

      Icon: SiGithub,
    },
    {
      link: "https://discord.com/",

      label: "Discord",

      Icon: SiDiscord ,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-400 -rotate-2">Minhazur Rahman</h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon  className=" size-5 hover:scale-125 transition-all"/>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";
import Title from "./Title";
import { Meteors } from "./ui/meteors";

const Hero = () => {
  return (
    <main className="min-h-[70vh] mb-10 pb-5  md:min-h-[60vh] md:pb-0 flex flex-col gap-10 lg:flex-row lg:gap-0 items-center justify-between animate-move-up ">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hello
          <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Minhaz."}
          </span>
        </h1>
        <p className="md: w-96 text-lg text-gray-100">
        I am a front-end developer from Dhaka, Bangladesh, with a  passion for utilizing my technical expertise and academic background to excel as a software engineer.
        </p>
        <Link href={"mailto:minhaz3896@gmail.com"} className="inline-block group">
          <Title text={"Contact me 📮"}/>
        </Link>
      </div>
      
      <div className=" w-56 md:w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full  bg-gradient-to-r from-indigo-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-md blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center md:items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50 ">
            Meteors
          </h1>
           <button className="border px-4 py-1 rounded-lg hover:text-green-300 transition-all border-gray-700 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
        
      </div>
    </main>
  );
};

export default Hero;

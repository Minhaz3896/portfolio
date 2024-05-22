import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-black">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-2 sm:p-5 overflow-hidden">
          <Navbar />
          <Hero />
          <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skill />
      </div>
    </main>
  );
};

export default page;

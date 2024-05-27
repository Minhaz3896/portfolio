import Link from "next/link";
import React from "react";
import Title from "./Title";

const Hero = () => {
  return (
    <main className="min-h-[60vh] flex flex-col gap-10 lg:flex-row lg:gap-0 items-center justify-between animate-move-up ">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hello
          <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Minhaz."}
          </span>
        </h1>
        <p className="md: w-96 text-lg text-gray-100">
          ale counters at his shop. He's often seen at the saloon in the
          evenings, especially during the winter, when he sits with Clint. He
          lives close to Elliott; the two of them are the only residents of the
          beach. He is also friends
        </p>
        <Link href={"mailto:minhaz3896@gmail.com"} className="inline-block group">
          <Title text={"Contact me 📮"} className={""}/>
        </Link>
      </div>
      <div></div>
    </main>
  );
};

export default Hero;

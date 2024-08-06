import React from "react";
import { FlipWords } from "./ui/FlipWords";
import Navbar from "./Navbar";

export function Hero() {
  const words = ["Nature", "Culture", "Adventure"];

  return (
    <div className="bg-video px-4 ">
      <Navbar/>
      <div className="absolute top-80 left-40 text-6xl font-normal text-white dark:text-neutral-400">
        Explore Mongolia <br />
        Discover 
        <FlipWords words={words} /> 
      </div>
    </div>
  );
}


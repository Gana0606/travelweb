import React from "react";
import { FlipWords } from "./ui/FlipWords";

export function FlipWordsDemo() {
  const words = ["Nature", "Culture", "Adventure"];

  return (
    <div className="h-screen w-full bg-video flex justify-center items-center px-4 ">
      <div className="absolute top-40 left-40 text-8xl font-normal text-white dark:text-neutral-400">
        Explore Mongolia <br />
        Discover 
        <FlipWords words={words} /> 
      </div>
    </div>
  );
}


"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/TracingBeam";
import { dummyContent } from "@/constants";

export function TracingBeamDemo() {
  return (
    <div className="bg-white py-24">
        <TracingBeam className="px-6">
            <div className="w-full mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                    <h2 className="bg-white text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                    </h2>

                    <p>
                    {item.title}
                    </p>

                    <div className="text-sm text-white">
                    {item?.image && (
                        <Image
                        src={item.image}
                        alt="blog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover"
                        />
                    )}
                    {item.description}
                    </div>
                </div>
                ))}
            </div>
        </TracingBeam>
    </div>
    
  );
}

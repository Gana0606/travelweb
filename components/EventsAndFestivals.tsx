"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/TracingBeam";
import { eventsContent } from "@/constants";

export function EventsAndFestivals() {
  return (
    <div className="bg-slate-950 py-24">
      <div className="flex justify-between">
        <div className="flex flex-col ml-28 mt-20 pl-10 ">
          <h2 className="text-8xl font-bold text-center text-white mb-1">
          Epic Events and Festivals
          </h2>
          <p className="text-2xl text-center text-gray-300 mt-20 mb-12">
            The vibrant traditions and joyful celebrations that showcase our culture.
          </p>
        </div>
        <TracingBeam className="mx-56">
          <div className="w-full mx-auto antialiased pt-4 relative">
            {eventsContent.map((item, index) => (
              <div key={`event-${index}`} className="mb-10">
                <h2 className="bg-white text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>
                <p className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </p>
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.badge}
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                <p className="text-2xl text-white">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </TracingBeam>
        
      </div>
      
    </div>
  );
}

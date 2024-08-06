import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <div className="pl-20 pr-10 py-20 bg-beige flex justify-between">
      <BentoGrid className="mr-0 pr-5">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      <div className="items-center text-center pt-28 pl-10 pr-5">
        <h2 className="text-6xl font-extrabold text-center text-gray-800">
          Epic Landscapes Await
        </h2>
        <p className="text-xl text-center text-gray-600 mt-4">
          Discover the breathtaking beauty of untouched nature.
        </p>
      </div>
    </div>
    
  );
}

interface SkeletonProps {
  img: string;
  width: number;
  height: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ img , width, height }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <Image src={img} alt="image" width={width} height={height}/>
  </div> 
);

const items = [
  {
    title: "The Gobi Desert",
    description: "One of the world's largest deserts, the Gobi is known for its stunning rock formations and vast sand dunes.",
    header: <Skeleton img="/gobidessert.jpg" width={300} height={100}/>,
  },
  {
    title: "Khangai Mountains",
    description: "The Khangai Mountains offer lush greenery, rolling hills, and serene valleys, contrasting with Mongolia's arid regions.",
    header: <Skeleton img="/khangaimountains.jpeg" width={300} height={100}/>,
  },
  {
    title: "Lake Khövsgöl",
    description: "Known as the 'Blue Pearl of Mongolia,' Lake Khövsgöl is one of the country's largest and most pristine lakes, surrounded by breathtaking scenery.",
    header: <Skeleton img="/lakekhovsgol.webp" width={300} height={100}/>,
  },
  {
    title: "Orkhon Valley",
    description: "A UNESCO World Heritage site, the Orkhon Valley is rich in history and natural beauty, featuring rolling meadows and ancient monuments.",
    header: <Skeleton img="/orkhon-valley-1.jpg" width={600} height={100}/>,
    className: "md:col-span-2",
  },
  {
    title: "Altai Mountains",
    description: "The Altai Mountains in western Mongolia are known for their dramatic peaks, glacial lakes, and diverse wildlife, offering a haven for nature enthusiasts.",
    header: <Skeleton img="/altaimountains.jpeg" width={300} height={100}/>,
  },
];

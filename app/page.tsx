import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { Lamp } from "@/components/Sample";

export default function Home() {
  return (
    <>
      <Lamp />
      {/* <Hero/> */}
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>
    </>
  );
}

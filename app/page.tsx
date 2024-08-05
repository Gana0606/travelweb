import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { FlipWordsDemo } from "@/components/Hero1";
import { CardsCarousel } from "@/components/Sample";
import { TracingBeamDemo } from "@/components/Hero2";
import { LayoutGridDemo } from "@/components/Sample3";
import FloatingNavDemo  from "@/components/Navbar";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <FloatingNavDemo/>
      <FlipWordsDemo/>
      <CardsCarousel />
      {/* <Lamp /> */}
      {/* <Hero/> */}
      <LayoutGridDemo />
      <TracingBeamDemo/>
      {/* <Camp/> */}
      {/* <Guide/> */}
      {/* <Features/> */}
      {/* <GetApp/> */}
      <Footer />
    </>
  );
}

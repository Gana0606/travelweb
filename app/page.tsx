import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { Lamp } from "@/components/Sample";
import { TracingBeamDemo } from "@/components/Sample2";
import { LayoutGridDemo } from "@/components/Sample3";

export default function Home() {
  return (
    <>
      <Lamp />
      {/* <Hero/> */}
      <TracingBeamDemo/>
      {/* <Camp/> */}
      <LayoutGridDemo />
      {/* <Guide/> */}
      {/* <Features/> */}
      {/* <GetApp/> */}
      <Footer />
    </>
  );
}

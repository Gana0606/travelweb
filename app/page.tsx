import Footer from "@/components/Footer";
import { BentoGridDemo } from "@/components/Geography";
import { Hero } from "@/components/Hero";
import { EventsAndFestivals } from "@/components/EventsAndFestivals";
import { LayoutGridDemo } from "@/components/Sample3";

export default function Home() {
  return (
    <>
      <Hero/>
      <BentoGridDemo />
      <EventsAndFestivals/>
      {/* <LayoutGridDemo /> */}
      <Footer />
    </>
  );
}

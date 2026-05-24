import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Impact } from "@/components/sections/Impact";
import { Philosophy } from "@/components/sections/Philosophy";
import { Media } from "@/components/sections/Media";
import { Gallery } from "@/components/sections/Gallery";
import { Partnerships } from "@/components/sections/Partnerships";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Timeline />
        <Ecosystem />
        <Impact />
        <Philosophy />
        <Media />
        <Gallery />
        <Partnerships />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

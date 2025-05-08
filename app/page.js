import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import { Metadata } from "next";

export const metadata = {
  title: "Pius' Portfolio",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fff5d8] container mx-auto py-4 px-12">
      <Navbar />
      <div id="hero" className="pt-0">
        {" "}
        <HeroSection />
      </div>
      <div id="about" className="pt-20">
        <AboutSection />
      </div>

      <div id="projects" className="pt-20">
        {" "}
        <ProjectSection />
      </div>

      <div id="contacts" className="pt-20">
        {" "}
        <EmailSection />
      </div>
    </main>
  );
}

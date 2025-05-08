"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import Tabbutton from "./Tabbutton";

const TAB_DATA = [
  {
    title: "SKills",
    id: "skills",
    content: (
      <ul className="list-disc">
        <li>React.js</li>
        <li>fastAPI</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>PostgresQl</li>
        <li>Springboot</li>
        <li>sq3lite</li>
        <li>Mongoose</li>
        <li>UI/Ux</li>
        <li>CSS</li>
        <li>Project Management</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc">
        <li>University Of Ghana, Computer Engineering.</li>
        <li>Wesley Grammar snr.</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc">
        <li>Google Project Management</li>
        <li>Meta Front-End Development</li>
        <li>National Science Olympiad</li>
        <li>National Science and Maths Quiz</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-black">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 mb-4 rounded-sm">
        <Image
          src="/images/boyx.jpg"
          width={500}
          height={500}
          alt="boys"
          className="rounded-md"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 mt-4">About me</h2>
          <p className="text-base md:text-lg">
            I am Pius, a well-educated tech-savvy chill guy, hardwired for the
            digital frontier. Fueled by my passion for cutting-edge technology,
            I thrive on solving complex problems. My skills blend the rhythm of
            code with my dedication to music, and as a mentor, I break down
            barriers, making knowledge accessible in this fast-evolving
            cyber-world.
          </p>
          <div className="flex flex-row justify-start m-2 list-disc">
            <Tabbutton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {<p className="text-black">Skills</p>}
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {<p className="text-black">Educations</p>}
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {<p className="text-black">Certificates</p>}
            </Tabbutton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

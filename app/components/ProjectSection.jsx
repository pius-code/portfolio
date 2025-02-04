"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "JuasoPro",
    description:
      "An eCommerce website that allows you to buy local market items and have them delivered to your home location.",
    imageUrl: "/images/Jpro.png",
    gitUrl: "https://github.com/pius-code/Jpro-Ecomm",
    webUrl: "https://juaso.vercel.app/",
  },
  {
    id: 2,
    title: "Next.js Portfolio",
    description:
      "A personal portfolio built with Next.js showcasing various projects and skills.",
    imageUrl: "/images/port.png",
    gitUrl: "/",
    webUrl: "/",
  },
  {
    id: 3,
    title: "A web-based Recorder",
    description:
      "A web based Recorder with upcoming fetaures like AI transcording, summary generation, deadline notifications. also Includes a mobile app version",
    imageUrl: "/images/rec.png",
    gitUrl: "https://github.com/pius-code/transcorder",
    webUrl: "https://transcorder.vercel.app/",
  },
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <h2 className="text-black font-semibold text-center text-5xl m-6">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-10 md:gap-8">
        {projectsData.map((project) => (
          <motion.li
            key={project.id} // Move key here
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <ProjectCard
              imgUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              webUrl={project.webUrl}
            />
          </motion.li>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;

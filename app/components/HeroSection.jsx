"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="mt-20 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="col-span-7 mt-5"
        >
          <h1 className="text-black mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-800 to-secondary-400">
              Hello! I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Pius",
                1500,
                "a full-Stack Developer",
                1000,
                "a Computer Engineer",
                1000,
                "a UI/UX expert",
                1000,
                "a Teacher",
                1000,
                "a Beat Producer",
                1000,
              ]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#000000] text-2xl lg:text-2xl mb-7 ">
            I’m Pius, a passionate computer engineer with a deep love for
            technology and innovation. My drive for excellence fuels my hard
            work and determination in solving complex problems and developing
            cutting-edge solutions. Alongside my engineering expertise, I’m
            dedicated to music, constantly refining my skills with the same
            focus and commitment I bring to my work. As a teacher, I take pride
            in sharing my knowledge, making learning accessible, and helping
            others grow with a clear and supportive approach.
          </p>
          <div className="flex flex-col mb-5 lg:flex lg:flex-row">
            <button className="px-5 py-3 rounded-full mr-4 bg-primary-600 text-[20px] hover:bg-blue-400 text-black mb-3 text-2xl font-bold">
              Hire me
            </button>
            <button
              className="px-5 py-3 rounded-full mr-4 bg-transparent
              text-[20px]
              border-2 border-black  hover:bg-[#498ac8aa] hover:text-black text-black mb-3 text-2x l"
            >
              Contact
            </button>
          </div>
        </motion.div>{" "}
        <div className="col-span-5 flex justify-center lg:ml-[150px] lg:mt-6">
          <div className="rounded-full bg-[#16263788] w-[300px] h-[300px] flex justify-center items-center m-6 lg:mt-0">
            <img
              src="/images/many.png"
              alt="hero image"
              className="object-cover pb-[10rem] mt-[1rem] w-96 h-[540px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

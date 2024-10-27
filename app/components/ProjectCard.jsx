import React from "react";
import { EyeIcon, CodeIcon } from "@heroicons/react/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, webUrl }) => {
  return (
    <div className="m-0">
      <div
        className="h-96  md:h-96  mb-4 rounded-xl relative group  border-black border-2"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#2222228b] bg-opacity-0 hidden group-hover:flex hover:justify-center hover:items-center group-hover:bg-opacity-80 transition-all duration-500 rounded-xl ">
          <Link
            href={gitUrl}
            className="h-20 w-20 border-2 rounded-full flex justify-center items-center"
            rel="noopener noreferrer"
            target="_blank"
          >
            <CodeIcon className="h-10 w-10 text-[#9daeaf] m-2 cursor-pointer hover:text-white" />
          </Link>
          <Link
            href={webUrl}
            className="h-20 w-20 border-2 rounded-full flex justify-center items-center m-4"
            rel="noopener noreferrer"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-[#9daeaf] m-2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-xl  bg-gradient-to-br h-44 md:h-56 from-[#437174] to-[#121111] bg-opacity-100 backdrop-blur-md shadow-lg pb-5 border border-[#d1ffff84] p-3 hover:scale-110 transition-all duration-500 mt-5">
        <h5 className="text-2xl font-semibold mb-3"> {title} </h5>
        <p className="text-[#d1d1d1] mb-3 pb-3">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
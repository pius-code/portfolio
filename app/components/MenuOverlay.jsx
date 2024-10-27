import React from "react";
import Navlink from "./Navlink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col  items-center bg-[#242323] pt-0 mt-0 h-40 bg-opacity-95 backdrop-blur-md shadow-lg font-bold text-2xl ">
      {links.map((link, index) => (
        <li
          key={index}
          className="rounded-md w-80 md:w-96 h-10 border mb-4 pl-3 border-[#889091]"
        >
          <Navlink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;

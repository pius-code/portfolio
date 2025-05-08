import React from "react";
import Navlink from "./Navlink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col  items-center bg-amber-50 pt-0 mt-2 h-auto bg-opacity-100 backdrop-blur-md shadow-lg font-bold text-2xl rounded-lg m-3">
      {links.map((link, index) => (
        <li
          key={index}
          className="rounded-md w-80 md:w-96 h-10 border m-4 pl-3 border-amber-500 hover:bg-amber-500  transition duration-300 ease-in-out flex justify-center items-center"
        >
          <Navlink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;

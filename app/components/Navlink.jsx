import React from "react";
import Link from "next/link";

const Navlink = ({ href, title }) => {
  return (
    <Link href={href} className="text-[#e7dfdf] hover:text-[#ffffff] mr-4">
      {title}
    </Link>
  );
};

export default Navlink;

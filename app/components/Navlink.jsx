import React from "react";
import Link from "next/link";

const Navlink = ({ href, title }) => {
  return (
    <Link href={href} className="text-[rgb(85,44,1)] hover:text-[#b3580e] mr-4">
      {title}
    </Link>
  );
};

export default Navlink;

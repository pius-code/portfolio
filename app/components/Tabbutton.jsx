import React from "react";

const Tabbutton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-blue-700"
    : "text-[#adb7be] ";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 text-xl text-[#0e0d0deb] font-semibold ${buttonClasses} `}
      >
        {children}
      </p>
    </button>
  );
};

export default Tabbutton;

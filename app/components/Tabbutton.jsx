import React from "react";

const Tabbutton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-amber-700 animate-pulse"
    : "text-[#adb7be] ";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 text-xl text-[#110e0eed] font-semibold ${buttonClasses} `}
      >
        {children}
      </p>
    </button>
  );
};

export default Tabbutton;

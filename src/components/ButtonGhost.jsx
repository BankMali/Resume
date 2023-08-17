import React from "react";

export default function ButtonGhost({ children }) {
  return (
    <div className="hover:bg-c-gray3 hover:bg-opacity-40 hover:backdrop-blur-md hover:text-c-blue3 hover:scale-105 active:scale-95 px-4 py-2 rounded-md  transition duration-500 cursor-pointer font-semibold">
      {children}
    </div>
  );
}

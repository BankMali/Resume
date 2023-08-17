import React from "react";

export default function Seticon({ children }) {
  return (
    <div className=" text-c-white1 text-3xl rounded-full w-8 h-8 px-1 flex justify-center items-center  hover:scale-105 hover:ring-c-white1 hover:ring-2 active:scale-95 transition duration-500 cursor-pointer  ">
      {children}
    </div>
  );
}

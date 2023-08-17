import React from "react";

export default function ListStyle({ children }) {
  return (
    <li className="flex flex-col text-sm font-bold text-c-gray1 hover:text-c-white1 transition duration-500 list-inside ">
      <li className="">{children}</li>
    </li>
  );
}

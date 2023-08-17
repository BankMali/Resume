import React from "react";

export default function ButtonBlueBig({ children }) {
  return (
    <div className="bg-c-blue3 text-c-gray3 px-4 py-4 font-semibold rounded-md bg-opacity-100 active:bg-opacity-50 hover:ring-2 hover:ring-c-white1 hover:text-c-white1 active:scale-95 cursor-pointer transition-all duration-500 overflow-hidden relative">
      {children}
    </div>
  );
}

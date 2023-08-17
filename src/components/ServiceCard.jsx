import React from "react";

export default function ServiceCard({ children, image }) {
  return (
    <div
      className="w-60 h-64 bg-c-gray3 text-c-gray1 shadow-xl bg-opacity-70 backdrop-blur-md text-center items-center justify-center flex hover:scale-110 active:scale-100 transition-all duration-700 relative overflow-hidden ease-in-out cursor-pointer"
      style={{
        backgroundImage: `url(${image || "src/assets/ProfilePic.jpg"})`,
        // backgroundImage: `url('src/assets/ProfilePic.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <div className="w-full h-full items-center justify-center flex align-middle bg-opacity-70 backdrop-blur-sm hover:backdrop-blur-none hover:bg-opacity-0 bg-black pt-0 hover:pt-72 hover:text-black  hover:font-bold stroke-white stroke-2 transition-all duration-500">
        {/* <div className="w-full h-full bg-black">pic</div> */}
        <div className="shadow-xl ">{children}</div>
      </div>
    </div>
  );
}

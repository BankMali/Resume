import React from "react";
import ButtonGhost from "../components/ButtonGhost";
import { Link } from "react-router-dom";

export default function Navber() {
  return (
    <div className="text-[12px] px-10 py-3 w-full flex flex-wrap justify-between items-center gap-2 max-sm:justify-center sticky top-0 bg-c-gray2 backdrop-blur-sm bg-opacity-0 z-[41] max-sm:bg-opacity-20 max-sm:mb-10">
      <Link to="/">
        <div className="tracking-[4px] animate-pulse hover:scale-105 duration-700">
          Watchira Malipechara
        </div>
      </Link>

      <div className="flex gap-1">
        <Link to="/">
          <ButtonGhost>Home</ButtonGhost>
        </Link>

        <Link to="/about">
          <ButtonGhost>About</ButtonGhost>
        </Link>
        <Link to="/portfolio">
          <ButtonGhost>Portfolio</ButtonGhost>
        </Link>
        <Link to="/contact">
          <ButtonGhost>Contact</ButtonGhost>
        </Link>
      </div>
    </div>
  );
}

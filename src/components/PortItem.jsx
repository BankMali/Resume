import React from "react";
import { motion } from "framer-motion";

export default function PortItem({
  imagecover,
  projectName,
  projectDetail,
  children,
}) {
  const itemlist = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        default: { duration: 1, ease: "easeInOut" },
      },
    },
  };
  return (
    <motion.div
      variants={item}
      className="max-w-[400px] w-auto h-fit p-5 bg-c-gray2 shadow-lg bg-opacity-50 overflow-hidden flex flex-col justify-start gap-5 ">
      <div className="bg-white w-full h-[300px] flex items-center overflow-hidden">
        <img
          className="w-full h-auto hover:scale-125 duration-[2000ms] ease-in-out"
          src={imagecover}
        />
      </div>
      <div className=" text-c-white1 ">
        <p className="text-2xl">{projectName || false}</p>
        <p className="text-sm">{projectDetail || false}</p>
        <ul className="list-disc">{children || false}</ul>
      </div>
    </motion.div>
  );
}

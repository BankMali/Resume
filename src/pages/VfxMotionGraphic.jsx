import React from "react";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import ListStyle from "../components/ListStyle";
import PortItem from "../components/PortItem";
import PortVideo from "../components/PortVideo";

export default function VfxMotionGraphic() {
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

  const itemlist = {
    hidden: { y: -20, opacity: 0, scale: 1 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        default: { duration: 0.5, ease: "easeInOut" },
      },
    },
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-10 px-10 justify-start items-center h-full">
        <motion.h1
          className="text-5xl font-bold"
          variants={item}
          initial="hidden"
          animate="visible">
          My
          <span className="text-5xl text-c-blue3 pt-2 tracking-[3px]">
            Portfolio
          </span>
          <p className="text-sm py-2 tracking-[10px] animate-pulse">
            Vfx & Motion Graphic
          </p>
        </motion.h1>

        <motion.div
          variants={itemlist}
          initial="hidden"
          animate="visible"
          className=" flex flex-wrap gap-5 justify-center items-start h-full ">
          <iframe
            src="https://www.youtube.com/embed/ApqL3prX3P0"
            className="shadow-xl w-[400px] h-[250px] min-w-[300px]"></iframe>

          <iframe
            src="https://www.youtube.com/embed/3LkTcvQxhnw"
            className="shadow-xl w-[400px] h-[250px] min-w-[300px]"></iframe>

          <iframe
            src="https://www.youtube.com/embed/6tMhWt2KZ40"
            className="shadow-xl w-[400px] h-[250px] min-w-[300px]"></iframe>

          <iframe
            src="https://www.youtube.com/embed/ItQhXRHdZfk"
            className="shadow-xl w-[400px] h-[250px] min-w-[300px]"></iframe>
          <iframe
            src="https://www.youtube.com/embed/dawmP1lMqps"
            className="shadow-xl w-[400px] h-[250px] min-w-[300px]"></iframe>
          <iframe
            src="https://www.youtube.com/embed/3GyT-gzJVQ8"
            className="shadow-xl w-[400px] h-[250px] min-w-[300px]"></iframe>
        </motion.div>
      </div>
    </MainLayout>
  );
}

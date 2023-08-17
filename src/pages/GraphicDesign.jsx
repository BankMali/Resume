import React from "react";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import ListStyle from "../components/ListStyle";
import PortItem from "../components/PortItem";
import Footer from "../layouts/Footer";

export default function GraphicDesign() {
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
            Graphic Design
          </p>
        </motion.h1>

        <motion.div
          variants={itemlist}
          initial="hidden"
          animate="visible"
          className=" flex flex-wrap gap-5 justify-center items-start">
          <PortItem imagecover="/src/assets/Portfolio/Graphic/da.jpg" />
          <PortItem imagecover="/src/assets/Portfolio/Graphic/van.jpg" />
          <PortItem imagecover="/src/assets/Portfolio/Graphic/gp1.jpg" />
          <PortItem imagecover="/src/assets/Portfolio/Graphic/juiceBox.jpg" />
          <PortItem imagecover="/src/assets/Portfolio/Graphic/juiceBoxPlate.jpg" />
          <PortItem imagecover="/src/assets/Portfolio/Graphic/paper.jpg" />
          <PortItem imagecover="/src/assets/Portfolio/Vfx/n3.jpg" />
          <PortItem imagecover="/src/assets/Portfolio/Vfx/n6.jpg" />
        </motion.div>
      </div>
    </MainLayout>
  );
}

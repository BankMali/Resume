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
          <PortItem imagecover="https://res.cloudinary.com/du6djicv7/image/upload/v1692293434/assets/Portfolio/Graphic/da_kthb18.jpg" />
          <PortItem imagecover="https://res.cloudinary.com/du6djicv7/image/upload/v1692293434/assets/Portfolio/Graphic/van_gewyge.jpg" />
          <PortItem imagecover="https://res.cloudinary.com/du6djicv7/image/upload/v1692293434/assets/Portfolio/Graphic/gp1_lvnof7.jpg" />
          <PortItem imagecover="https://res.cloudinary.com/du6djicv7/image/upload/v1692293434/assets/Portfolio/Graphic/juiceBox_qrjifi.jpg" />
          <PortItem imagecover="https://res.cloudinary.com/du6djicv7/image/upload/v1692293433/assets/Portfolio/Graphic/juiceBoxPlate_mptqmx.jpg" />
          <PortItem imagecover="https://res.cloudinary.com/du6djicv7/image/upload/v1692293434/assets/Portfolio/Graphic/paper_etoizp.jpg" />
          <PortItem imagecover="https://res.cloudinary.com/du6djicv7/image/upload/v1692293432/assets/Portfolio/Vfx/n3_zq6xy8.jpg" />
          <PortItem imagecover="https://res.cloudinary.com/du6djicv7/image/upload/v1692293432/assets/Portfolio/Vfx/n6_jktoxr.jpg" />
        </motion.div>
      </div>
    </MainLayout>
  );
}

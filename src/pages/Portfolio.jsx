import React from "react";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";

export default function Portfolio() {
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

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemlist = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const mockdata = [
    {
      id: 1,
      topic: "Web Develop",
      image:
        "https://res.cloudinary.com/du6djicv7/image/upload/v1692295489/assets/Portfolio/WebDev/Elysian/page_tdvutf.jpg",
      link: "/portfolio/webdevelop",
    },
    {
      id: 2,
      topic: "Graphic Design",
      image:
        "https://res.cloudinary.com/du6djicv7/image/upload/v1692295489/assets/Portfolio/Graphic/da_sy73vr.jpg",
      link: "/portfolio/graphic",
    },
    {
      id: 3,
      topic: "Vfx & Motion Graphic",
      image:
        "https://res.cloudinary.com/du6djicv7/image/upload/v1692295489/assets/Portfolio/Vfx/vfxCover_fziwkm.jpg",
      link: "/portfolio/vfxandmotion",
    },
  ];

  return (
    <MainLayout>
      <div className="flex flex-wrap gap-10 px-10 justify-center items-center">
        <motion.h1
          className="text-5xl font-bold"
          variants={item}
          initial="hidden"
          animate="visible">
          My
          <span className="text-5xl text-c-blue3 pt-2 tracking-[3px]">
            Portfolio
          </span>
        </motion.h1>
        <motion.ul
          className="flex flex-wrap justify-center max-w-5xl gap-10"
          variants={container}
          initial="hidden"
          animate="visible">
          {mockdata?.map((el) => (
            <Link to={el.link}>
              <motion.li key={el.id} variants={itemlist}>
                <ServiceCard key={el.id} image={el?.image}>
                  {el?.topic}
                </ServiceCard>
              </motion.li>
            </Link>
          ))}
        </motion.ul>
      </div>
    </MainLayout>
  );
}

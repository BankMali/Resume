import React from "react";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import ListStyle from "../components/ListStyle";
import PortItem from "../components/PortItem";

export default function WebDevelop() {
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
            Web Develop
          </p>
        </motion.h1>

        <motion.div
          variants={itemlist}
          initial="hidden"
          animate="visible"
          className=" flex flex-wrap gap-5 justify-center items-start">
          <PortItem
            imagecover="https://res.cloudinary.com/du6djicv7/image/upload/v1692295489/assets/Portfolio/WebDev/Elysian/WebDev-02_ve3tlr.jpg"
            projectName="Elysian (group project)"
            projectDetail="A web application that be hub for room rental. Rental like
            recycle that can save the world.">
            <ListStyle>
              {" "}
              Responsibility: Ux&Ui designer,Front-end(lead)
            </ListStyle>
            <ListStyle> Feature: Search & filter, Otp</ListStyle>
            <ListStyle>
              {" "}
              Programing Language: HTML, CSS, Javascript, SQL
            </ListStyle>
            <ListStyle>
              {" "}
              Tech Stack: React js, Node Js, Express, Tailwind CSS, Sequelize,
              Redux , Framer motion, google api, Auth0 , AWS and etc.
            </ListStyle>
          </PortItem>
          <PortItem
            imagecover="https://res.cloudinary.com/du6djicv7/image/upload/v1692295491/assets/Portfolio/WebDev/Chemup/WebDev-01_i0qnhb.png"
            projectName="ChempUp"
            projectDetail="Online Chemical Learning Course">
            <ListStyle>
              {" "}
              Feature: SignIn, SignUp, Crud course, Buy and Payment, e-commerce
            </ListStyle>
            <ListStyle>
              {" "}
              Programing Language: HTML, CSS, Javascript, SQL
            </ListStyle>
            <ListStyle>
              {" "}
              Tech Stack: React js, Node Js, Express, Tailwind CSS, Sequelize.
            </ListStyle>
          </PortItem>
          <a href="https://tic-tac-toe-seven-steel.vercel.app/">
            <PortItem
              imagecover="https://res.cloudinary.com/du6djicv7/image/upload/v1692295490/assets/Portfolio/WebDev/minigame_m4gbti.png"
              projectName="Tic-tac-toe"
              projectDetail="Tic-tac-toe Mini Game"></PortItem>
          </a>
        </motion.div>
      </div>
    </MainLayout>
  );
}

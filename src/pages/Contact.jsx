import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdEmail, MdPhone } from "react-icons/md";
import MainLayout from "../layouts/MainLayout";
import Seticon from "../components/Seticon";
import { motion } from "framer-motion";
import ProfilePic from "../components/ProfilePic";

export default function Contact() {
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

  const item2 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: [20, 0],
      opacity: [0, 0, 1],
      transition: {
        default: { duration: 1.3, ease: "easeInOut" },
      },
    },
  };
  const item3 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: [20, 0],
      opacity: [0, 0, 1],
      transition: {
        default: { duration: 1.5, ease: "easeInOut" },
      },
    },
  };
  const item4 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: [20, 0],
      opacity: [0, 0, 1],
      transition: {
        default: { duration: 1.7, ease: "easeInOut" },
      },
    },
  };
  const item5 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: [20, 0],
      opacity: [0, 0, 1],
      transition: {
        default: { duration: 1.9, ease: "easeInOut" },
      },
    },
  };

  return (
    <MainLayout>
      <div className="flex flex-wrap justify-center items-center h-full w-[90%] text-c-white1">
        <div className="flex-1">
          <ProfilePic />
        </div>
        <div className="px-10 flex-1 w-full h-full flex flex-col justify-center items-center sm:items-start ">
          <div className="w-fit flex flex-col gap-5">
            <motion.h1
              className="text-5xl font-bold"
              variants={item}
              initial="hidden"
              animate="visible">
              Contact
              <span className="text-5xl text-c-blue3 pt-2 tracking-[3px]">
                Me
              </span>
            </motion.h1>
            <div className="w-full flex flex-col gap-3">
              <a href="mailto: watchira_5@hotmail.com">
                <motion.div
                  className="flex gap-2 items-center"
                  variants={item2}
                  initial="hidden"
                  animate="visible">
                  <Seticon>
                    <MdEmail />
                  </Seticon>
                  <p className="text-sm font-thin text-c-gray1 hover:text-c-white1 transition duration-500 cursor-pointer">
                    watchira_5@hotmail.com
                  </p>
                </motion.div>
              </a>
              <a href="tel:+66815565528">
                <motion.div
                  className="flex gap-2 items-center"
                  variants={item3}
                  initial="hidden"
                  animate="visible">
                  <Seticon>
                    <MdPhone />
                  </Seticon>
                  <p className="text-sm font-thin text-c-gray1 hover:text-c-white1 transition duration-500 cursor-pointer">
                    +66 8 1556 5528
                  </p>
                </motion.div>
              </a>

              <a href="https://www.linkedin.com/in/watchira/">
                <motion.div
                  className="flex gap-2 items-center"
                  variants={item4}
                  initial="hidden"
                  animate="visible">
                  <Seticon>
                    <BiLogoLinkedin />
                  </Seticon>
                  <p className="text-sm font-thin text-c-gray1 hover:text-c-white1 transition duration-500 cursor-pointer">
                    linkedin.com/in/watchira
                  </p>
                </motion.div>
              </a>
              <a href="https://www.github.com/BankMali">
                <motion.div
                  className="flex gap-2 items-center"
                  variants={item5}
                  initial="hidden"
                  animate="visible">
                  <Seticon>
                    <AiFillGithub />
                  </Seticon>
                  <p className="text-sm font-thin text-c-gray1 hover:text-c-white1 transition duration-500 cursor-pointer">
                    github.com/BankMali
                  </p>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

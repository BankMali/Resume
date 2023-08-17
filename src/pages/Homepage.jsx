import ButtonBlueBig from "../components/ButtonBlueBig";
import ProfilePic from "../components/ProfilePic";
import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";

export default function Homepage({ children }) {
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
        default: { duration: 1.5, ease: "easeInOut" },
      },
    },
  };
  const item3 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: [20, 0],
      opacity: [0, 0, 1],
      transition: {
        default: { duration: 2.5, ease: "easeInOut" },
      },
    },
  };
  return (
    <MainLayout>
      <div className="flex flex-wrap h-full w-[90%] text-c-white1 items-center max-sm:w-full">
        <div className="flex-[2] w-fit h-fit">
          <ProfilePic />
        </div>
        <div className="px-10 flex-[2] w-full h-full flex flex-col justify-center gap-5">
          <motion.div variants={item} initial="hidden" animate="visible">
            <h1 className="text-5xl">HI, I’m Watchira Malipechara</h1>
            <h2 className="text-3xl text-c-blue3 pt-2 tracking-[3px]">
              Frontend Developer & Graphic Designer
            </h2>
          </motion.div>
          <motion.p
            className="text-sm font-thin text-c-gray1"
            variants={item2}
            initial="hidden"
            animate="visible">
            Applying for Frontend developer position or Ux/Ui designer. A great
            team worker who is always striving to learn new things. Working
            adaptively and flexibly in various environments. The ability to work
            under pressure.
          </motion.p>

          <motion.div
            className="flex gap-5  max-sm:flex-col"
            variants={item3}
            initial="hidden"
            animate="visible">
            <a href="https://drive.google.com/file/d/14p_vfEEppmf7Jg5VBvqgFqpCJqNSRPdc/view?usp=sharing">
              <ButtonBlueBig>Download CV</ButtonBlueBig>
            </a>
            <Link to="/portfolio">
              <ButtonBlueBig>My Portfolio</ButtonBlueBig>
            </Link>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}

import { MdSportsGymnastics } from "react-icons/md";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdEmail, MdPhone } from "react-icons/md";
import MainLayout from "../layouts/MainLayout";
import Icon from "../components/Seticon";
import { motion } from "framer-motion";
import ProfilePic from "../components/ProfilePic";
import ButtonGhost from "../components/ButtonGhost";
import CountUp from "react-countup";
import Footer from "../layouts/Footer";

export default function About() {
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

  return (
    <MainLayout>
      <div className="flex flex-wrap gap-5 justify-between h-full w-full text-c-white1  max-md:justify-cente ">
        <div className="w-fit px-10 pb-10 flex flex-col gap-5 justify-center  items-center max-md:w-full max-md:flex-row">
          <div className=" justify-start h-fit opacity-100 scale-75 max-sm:hidden">
            <ProfilePic />
          </div>
          <div>
            <motion.h1
              className="text-5xl font-bold mb-5"
              variants={item}
              initial="hidden"
              animate="visible">
              About
              <span className="text-5xl text-c-blue3 pt-2 tracking-[3px]">
                Me
              </span>
            </motion.h1>
            <motion.div
              className="w-full flex flex-col gap-3 items-center justify-center"
              variants={item2}
              initial="hidden"
              animate="visible">
              <motion.div className="flex flex-col text-sm font-thin text-c-gray1 hover:text-c-white1 transition duration-500">
                {/* <Icon>
                  <MdEmail />
                </Icon> */}
                <p className="w-72">
                  I'm a graphic designer who has transitioned to a developer
                  role.
                </p>
                <p className="pt-3">Name: Watchira Malipechara</p>
                <p>Nickname : Bank</p>
                <p>Nationality : Thai</p>
                <p>Languages : Thai and English</p>
                <p>Location : Bangkok, Thailand</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="px-10 h-full flex flex-wrap gap-5  flex-[2] max-md:px-2">
          <div className=" flex flex-col gap-5 w-fit flex-[1.5] min-w-[300px]">
            <div className=" flex gap-5 flex-col bg-opacity-10  backdrop-blur-md bg-c-white1 w-full h-fit py-5 px-10 shadow-xl hover:ring-1 hover:ring-white transition duration-500">
              <h1 className="text-lg font-bold">
                About
                <span className="text-lg text-c-blue3 pt-2 tracking-[1px]">
                  Education
                </span>
              </h1>
              <ul className="list-disc">
                <li className="flex flex-col text-sm font-thin text-c-gray1 hover:text-c-white1 transition duration-500 ">
                  <li className="font-bold">
                    Fullstack Javascript Web Develop
                  </li>
                  <p>Mar - July 2023 @ software park CodeCamp#14</p>
                </li>
                <li className="flex flex-col text-sm font-thin text-c-gray1 hover:text-c-white1 transition duration-500">
                  <li className="font-bold">Visual Communication Arts</li>
                  <p> 2009 - 2015 @ Assumption University</p>
                </li>
              </ul>
            </div>
            <div className="flex gap-5 flex-col bg-opacity-10 backdrop-blur-md bg-c-white1 w-full h-full py-5 px-10 shadow-xl hover:ring-1 hover:ring-white transition duration-500">
              <h1 className="text-lg font-bold">
                About
                <span className="text-lg text-c-blue3 pt-2 tracking-[1px]">
                  Experience
                </span>
              </h1>
              <div className="flex gap-5">
                <div className="flex flex-col justify-center w-fit ">
                  <h1 className="text-4xl text-c-blue3 font-semibold ">
                    <CountUp start={0} end={8} duration={2} delay={1} />+
                  </h1>
                  <div className="text-[8pt] -space-y-3 tracking-widest -mt-1">
                    <p>Years Exp.</p>
                    <p>Designer</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center w-fit ">
                  <h1 className="text-4xl text-c-blue3 font-semibold ">
                    <CountUp start={0} end={4} duration={2} delay={1} />+
                  </h1>
                  <div className="text-[8pt] -space-y-3 tracking-widest -mt-1">
                    <p>Month Exp.</p>
                    <p>Programer</p>
                  </div>
                </div>
              </div>
              <ul className="list-disc">
                <li className="flex flex-col text-sm font-thin text-c-gray1 hover:text-c-white1 transition duration-500 ">
                  <li className="font-bold">YANNIX CO., LTD (2015 - 2023)</li>
                  <p>Senior Tracker (Production Operator)</p>
                  <p>Matchmove 2D&3D Artists</p>
                  <p>3D Hybrid Rotomation Artists</p>
                  <p>Project Lead Assistant</p>
                  <p>Advisor</p>
                </li>

                <li className="flex flex-col text-sm font-thin text-c-gray1 hover:text-c-white1 transition duration-500 ">
                  <li className="font-bold">
                    PATTARASAWAT PRODUCTS DESIGN CO., LTD. (2015)
                  </li>
                  <p>Graphic Designer</p>
                  <p>Graphic Product outline</p>
                  <p>Product Design 3D & 2D</p>
                </li>
                <li className="flex flex-col text-sm font-thin text-c-gray1 hover:text-c-white1 transition duration-500 ">
                  <li className="font-bold">SIRIMEDIA CO., LTD. (2013)</li>
                  <p>Internship</p>
                  <p>Computer Graphic</p>
                  <p>Video Editor & Motion Graphic</p>
                  <p>E-book Cover Design </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-fit flex-[2] min-w-[300px]">
            <div className="flex gap-5 flex-col bg-opacity-10 backdrop-blur-md items-center bg-c-white1 w-auto h-full py-5 px-10 shadow-xl hover:ring-1 hover:ring-white transition duration-500">
              <h1 className="text-lg font-bold">
                About
                <span className="text-lg text-c-blue3 pt-2 tracking-[1px]">
                  Skills
                </span>
              </h1>
              <div className="flex gap-12 w-full justify-center  flex-wrap">
                <div className="flex-col flex gap-5">
                  <h1 className="text-lg font-bold">
                    Programer
                    <span className="text-lg text-c-blue3 pt-2 tracking-[1px]">
                      skills
                    </span>
                  </h1>
                  <div className="flex gap-5 ">
                    <ul className="list-disc text-xs text-c-gray1  hover:text-c-white1 transition duration-500 ">
                      <div className="font-semibold text-c-white1">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Git</li>
                        <li>Agile</li>
                        <li>Tailwind</li>
                        <li>Nodejs</li>
                        <li>MySQL</li>
                      </div>
                      <li>Redux</li>
                      <li>TDD</li>
                      <li>Docker</li>
                    </ul>
                    <ul className="list-disc text-xs text-c-gray1  hover:text-c-white1 transition duration-500 ">
                      <li>Authenicate</li>
                      <li>Postman</li>
                      <li>Sequelize</li>
                      <li>Bootstrap</li>
                      <li>Express</li>
                      <li>Flowbite</li>
                      <li>Daisy Ui</li>
                      <li>JWT</li>
                      <li>Joi</li>
                      <li>Core</li>
                      <li>Jest</li>
                      <li>Axios</li>
                      <li>Auth0</li>
                      <li>Vite</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-col flex gap-5 items-center">
                  <h1 className="text-lg font-bold">
                    Designer
                    <span className="text-lg text-c-blue3 pt-2 tracking-[1px]">
                      skills
                    </span>
                  </h1>
                  <div className="flex gap-5 ">
                    <ul className="list-disc text-xs text-c-gray1  hover:text-c-white1 transition duration-500 ">
                      <li>Figma</li>
                      <li>Ux&Ui design</li>
                      <li>Design Thinking</li>
                      <li>Adobe Photoshop</li>
                      <li>Adobe Illustrator</li>
                      <li>Adobe After Effect</li>
                      <li>Adobe Premium Pro</li>
                      <li>Adobe Lightroom</li>
                      <li>Maya3D</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-col flex gap-5 items-center">
                  <h1 className="text-lg font-bold">
                    Soft
                    <span className="text-lg text-c-blue3 pt-2 tracking-[1px]">
                      skills
                    </span>
                  </h1>
                  <div className="flex gap-5 ">
                    <ul className="list-disc text-xs text-c-gray1  hover:text-c-white1 transition duration-500 ">
                      <li>Leadership</li>
                      <li>Collaboration</li>
                      <li>Communication</li>
                      <li>Creativity</li>
                      <li>Critical Thinking</li>
                      <li>Visual Thinking</li>
                      <li>Organization</li>
                      <li>Work Ethic</li>
                      <li>Choreographer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

import React from "react";
import Navber from "./Navber";
import Footer from "./Footer";
import { useRef } from "react";
import { motion } from "framer-motion";
import { userPointer } from "../components/userPointer";

export default function MainLayout({ children }) {
  const ref = useRef(null);
  const { x, y } = userPointer(ref);
  return (
    <>
      <motion.div
        ref={ref}
        className="w-[40px] h-[40px] rounded-full bg-c-blue2 bg-opacity-15 bg-blend-color-burn bg-[radial-gradient(circle, #00b5dd 100%, #00b5dd 100%)] absolute"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 100,
          stiffness: 500,
          restDelta: 0.01,
        }}></motion.div>
      <motion.div className=" text-base tracking-widest min-h-screen h-full  flex-col flex justify-between items-center relative">
        <Navber />
        {children}
        {/* <div className="w-full">
      </div> */}
        <Footer />
      </motion.div>
    </>
  );
}

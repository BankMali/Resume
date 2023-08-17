import { motion } from "framer-motion";

export default function ProfilePic() {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        default: { duration: 1, ease: "easeInOut" },
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className=" w-full h-full flex justify-center items-center relative py-10"
      variants={container}
      initial="hidden"
      animate="visible">
      <div className=" h-80 w-80 animate-spin-slower rounded-full relative">
        <div className="h-32 w-32 z-[20] rounded-full bg-c-blue3 absolute"></div>

        <div className="bg-c-white1 w-full h-full z-[20] animate-spin-slower absolute top-0 right-0 left-0 bottom-0 rounded-full shadow-xl">
          <div className="h-4 w-4 z-40 rounded-full bg-c-white1 absolute top-[20%] -right-[20%] animate-pulse"></div>
        </div>
      </div>

      <div
        className="absolute w-72 h-72 rounded-full "
        style={{
          backgroundImage: `url('https://res.cloudinary.com/du6djicv7/image/upload/v1692295489/assets/ProfilePic_Resize_fkwlpq.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </motion.div>
  );
}

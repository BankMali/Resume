export default function ButtonIcon({ children }) {
  return (
    <div className=" text-c-blue3 text-3xl rounded-full w-8 h-8 px-1 flex justify-center items-center ring-1 ring-c-blue3  hover:scale-105 hover:ring-c-white1 hover:ring-2 active:scale-95 transition duration-500 cursor-pointer  ">
      {children}
    </div>
  );
}

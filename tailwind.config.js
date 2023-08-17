/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-white1": "#F4F6FF",
        "c-white2": "#F5F1F1",
        "c-gray1": "#ADB5BE",
        "c-gray2": "#4B4B4B",
        "c-gray3": "#353535",
        "c-blue1": "#127C8B",
        "c-blue2": "#214B68",
        "c-blue3": "#00B5DD",
        "c-blue4": "#1799AB",
      },

      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-slower": "spin 5s linear infinite",
        // wiggle: "wiggle 1s ease-in-out infinite",
        // keyframes: {
        //   wiggle: {
        //     "0%, 100%": { transform: "rotate(-3deg)" },
        //     "50%": { transform: "rotate(3deg)" },
        //   },
        // },
      },
    },
    fontFamily: {
      handwrite: ["Tangerine", "cursive"],
    },
  },
  plugins: [],
};

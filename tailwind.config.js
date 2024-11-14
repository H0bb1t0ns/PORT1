/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        "carousel-left": "carouselLeft 50s linear infinite", // ช้าหรือเร็วขึ้นอยู่กับเวลาที่กำหนด
      },
      keyframes: {
        carouselLeft: {
          "0%": { transform: "translateX(0)" },      // เริ่มจากจุดเริ่มต้น
          "100%": { transform: "translateX(-57%)" }, // เลื่อนจากขวาไปซ้าย
        },
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "cupcake"]
  }
};
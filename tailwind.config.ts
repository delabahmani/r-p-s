import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        inside: "inset 0px 8px 1px 1px rgb(189, 186, 186)",
        lizard: "0px 8px 1px 1px hsl(261, 73%, 52%)",
        paper: "0px 8px 1px 1px hsl(230, 89%, 54%)",
        rock: "0px 8px 1px 1px hsl(349, 71%, 44%)",
        scissors: "0px 8px 1px 1px hsl(39, 89%, 41%)",
        spock: "0px 8px 1px 1px hsl(189, 59%, 45%)",
      },

      colors: {
        outline: "hsl(217, 16%, 45%)",
        white: "#FFFFFF",
        score: "hsl(229, 64%, 46%)",
        dark: "hsl(229, 25%, 31%)",
        lizard1: "hsl(261, 73%, 60%)",
        lizard2: "hsl(261, 72%, 63%)",
        paper1: "hsl(230, 89%, 62%)",
        paper2: "hsl(230, 89%, 65%)",
        rock1: "hsl(349, 71%, 52%)",
        rock2: "hsl(349, 70%, 56%)",
        scissors1: "hsl(39, 89%, 49%)",
        scissors2: "hsl(40, 84%, 53%)",
        spock1: "hsl(189, 59%, 53%)",
        spock2: "hsl(189, 58%, 57%)",
      },
    },
  },
  plugins: [],
};
export default config;

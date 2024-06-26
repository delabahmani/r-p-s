import React from "react";
import { motion } from "framer-motion";

type HeaderProps = {
  score: number;
};


export default function Header({ score }: HeaderProps) {
  return (
    <div className="border-outline mx-auto my-3 flex h-[20%] w-[90%] place-items-center justify-between rounded-lg border-[3px] p-5 text-2xl uppercase leading-none text-white md:w-[70%] lg:h-[18%] lg:w-[45%]">
      <motion.div
        className="flex flex-col justify-center font-semibold"
        animate={{opacity: 1, scale: 1}}
        transition={{ duration: 0.5 }}
      >
        <img src="/logo-bonus.svg" alt="rock paper scissors lizard spock" />
      </motion.div>
      <div className="grid h-[90%] w-[32%] place-items-center rounded-md bg-white p-3 text-center font-bold md:h-[100%] md:w-[15%] lg:h-[110px] lg:w-[21%]">
        <h4 className="text-score self-end text-sm tracking-wider lg:text-lg">
          Score
        </h4>
        <h1 className="text-dark self-start text-4xl lg:text-6xl">{score}</h1>
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";

type HeaderProps = {
  advanced: boolean;
  score?: number;
};

const advancedTitle = {
  opacity: 1,
  scale: 1,
};

const nonAdvancedTitle = {
  opacity: 1,
  scale: 0.9,
};

export default function Header({ advanced, score }: HeaderProps) {
  return (
    <div className="border-outline mx-auto my-3 flex h-[20%] w-[90%] place-items-center justify-between rounded-lg border-[3px] p-5 text-2xl uppercase leading-none text-white md:w-[70%] lg:h-[18%] lg:w-[45%]">
      <motion.div
        className="flex flex-col justify-center font-semibold"
        animate={advanced ? advancedTitle : nonAdvancedTitle}
        transition={{ duration: 0.5 }}
      >
        <div
          className={
            advanced
              ? "text-base leading-none lg:text-[24px]"
              : "text-4xl leading-none"
          }
        >
          Rock
        </div>
        <div
          className={
            advanced
              ? "text-base leading-none lg:text-[24px]"
              : "text-4xl leading-none"
          }
        >
          Paper
        </div>
        <div
          className={
            advanced
              ? "text-base leading-none lg:text-[24px]"
              : "text-4xl leading-none"
          }
        >
          Scissors
        </div>
        {advanced && (
          <>
            <motion.div layout className="text-base leading-none lg:text-[24px]">
              <div>Lizard</div>
              <div>Spock</div>
            </motion.div>
          </>
        )}
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

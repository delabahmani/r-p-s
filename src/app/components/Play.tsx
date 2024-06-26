import { motion } from "framer-motion";
import React from "react";
import { determineWinner } from "../utils/utils";
import Button from "./Buttons";

type PlayProps = {
  setSelected: (choice: number) => void;
  setWinner: (result: string) => void;
};

export default function Play({ setSelected, setWinner }: PlayProps) {
  const choices = ["rock", "paper", "scissor", "lizard", "spock"];
  const images = [
    "/rock.svg",
    "/paper.svg",
    "/scissors.svg",
    "/lizard.svg",
    "/spock.svg",
  ];

  const handleClick = (choice: number) => {
    const computerChoice = Math.floor(Math.random() * 5);
    const result = determineWinner(choice, computerChoice);
    setSelected(choice);
    setWinner(result);
  };

  return (
    <div className="flex w-[250px] mx-auto py-[100px]">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
        className="w-[250px] md:h-[60vh]"
      >
        <img
          src="/bg-pentagon.svg"
          alt="pentagon outline"
          className="absolute w-[250px] h-auto"
        />
        <div className="z-40 relative">
          <div className="flex justify-center ">
            <Button //scissor
              onClicK={() => handleClick(2)}
              imgSrc={images[2]}
              className="bg-gradient-radial from-scissors1 to-scissors2 rounded-full shadow-scissors"
            />
          </div>
          <div className="flex flex-row justify-between mt-2">
            <Button //spock
              onClicK={() => handleClick(4)}
              imgSrc={images[4]}
              className="bg-gradient-radial"
            />
            <Button //paper
              onClicK={() => handleClick(1)}
              imgSrc={images[1]}
              className=""
            />
          </div>
          <div className="mt-16 flex flex-row justify-center space-x-14">
            <Button //lizard
              onClicK={() => handleClick(3)}
              imgSrc={images[3]}
              className=""
            />
            <Button //rock
              onClicK={() => handleClick(0)}
              imgSrc={images[0]}
              className=""
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";
import React from "react";
import RpsButtons from "./RpsButtons";

type RulesProps = {
  advanced: boolean;
  setSelected?: any;
  value?: any;
};

export default function Play({ advanced, setSelected, value }: RulesProps) {
  return (
    <div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
        className="containerr relative grid h-[60vh] w-full place-items-center"
      >
        {advanced ? (
          <img src="/bg-pentagon.svg" alt="pentagon outline" />
        ) : (
          <img src="/bg-triangle.svg" alt="triangle outline" />
        )}
        <RpsButtons advanced={advanced} onCLick={(value) => setSelected(value)} />
      </motion.div>
    </div>
  );
}

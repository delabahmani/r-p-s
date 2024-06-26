import { motion } from "framer-motion";
import React from "react";

type ButtonProps = {
  onClicK: () => any;
  imgSrc: string;
  className?: string;
};

export default function Button({ onClicK, imgSrc, className}: ButtonProps) {
  return (
    <motion.div
      onClick={onClicK}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`relative flex items-center justify-center rounded-full ${className}`}
    >
      <div className="absolute inset-0 rounded-full bg-white"></div>
        <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-full">
        <img src={imgSrc} alt="" className="w-7 md:w-10 object-contain" />
        </div>
     
    </motion.div>
  );
}

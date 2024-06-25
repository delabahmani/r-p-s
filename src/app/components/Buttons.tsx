import { motion } from "framer-motion";
import React from "react";


type ButtonProps = {
  classN: string;
  Id?: string;
  onClicK: () => {};
  children?: React.ReactNode;
}

export default function Button({classN, Id, onClicK, children}: ButtonProps) {
  return (
    <motion.div onClick={() => onClicK()} layoutId={Id} className={classN}>
      <div className=" bg-white rounded-full w-1/3">{children}</div>
    </motion.div>
  )
}
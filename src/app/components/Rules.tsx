import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type RulesProps = {
  setOpen?: any;
  open?: boolean;
};

export default function Rules({ setOpen, open }: RulesProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 h-full w-full bg-white p-5 md:rounded-lg lg:left-1/2 lg:top-1/2 lg:h-[60%] lg:w-[30%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:p-[30px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex flex-col items-center justify-between lg:flex-row lg:px-7">
            <h1 className="relative top-8 mt-10 text-center text-3xl font-bold text-dark lg:mt-0 lg:text-4xl">
              Rules
            </h1>
            <img
              src="/icon-close.svg"
              alt="close button"
              className="hidden h-6 w-6 cursor-pointer lg:block"
              onClick={() => setOpen(false)}
            />
          </div>

          <div className="mt-4 flex h-[70vh] w-full flex-col items-center justify-center lg:mt-0 lg:h-full">
            <div className="flex items-center justify-center">
              <img
                src="/image-rules-bonus.svg"
                alt="rules for advanced mode"
                className="mx-auto"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center lg:hidden">
            <img
              src="/icon-close.svg"
              alt="close button"
              className="h-5 w-5 cursor-pointer lg:h-6 lg:w-6"
              onClick={() => setOpen(false)}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

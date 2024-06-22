import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type RulesProps = {
  advanced: boolean;
  setOpen?: any;
  open?: boolean;
};

export default function Rules({ advanced, setOpen, open }: RulesProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 h-full w-full bg-white p-5 lg:left-1/2 lg:top-1/2 lg:h-[60%] lg:w-[30%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:p-[30px] md:rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex flex-col items-center justify-between uppercase lg:flex-row lg:px-7">
            <h1 className="text-dark text-center text-4xl font-bold mt-10 lg:mt-0">Rules</h1>
            <img
              src="/icon-close.svg"
              alt="close button"
              className="hidden h-6 w-6 cursor-pointer lg:block"
              onClick={() => setOpen(false)}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full mt-4 lg:mt-0 h-[70vh] lg:h-full">
            <div className="flex items-center justify-center ">
            {advanced ? (
              <img
                src="/image-rules-bonus.svg"
                alt="rules for advanced"
                className="mx-auto"
              />
            ) : (
              <img src="/image-rules.svg" alt="rules for normal" className="mx-auto" />
            )}
            </div>
          </div>

          <div className="flex justify-center mt-4 lg:hidden">
          <img
            src="/icon-close.svg"
            alt="close button"
            className="h-6 w-6 cursor-pointer"
            onClick={() => setOpen(false)}
          />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

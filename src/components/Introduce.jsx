import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const Introduce = () => {
  return (
    <AnimatePresence>
      <div className="w-full grid justify-center items-center grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 2.15 }}
        >
          <img
            src="https://i.imgur.com/HbGPpYt.png"
            alt=""
            className="rounded-full h-[480px] w-[480px] shadow-2xl"
          />
        </motion.div>
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 2.25 }}
            className="pt-10 lg:pt-0"
          >
            <p className=" text-xl font-bold leading-[1.15] text-black sm:text-4xl">
              Who is <span className="mavisai">Mavis?</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 2.35 }}
          >
            <p className="pr-10 text-lg lg:text-2xl">
              <span className="mavisai">Mavis</span> is an AI that can help you
              with GPT-3.5 artificial intelligence technology so that all your
              work can be done easily.
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Introduce;

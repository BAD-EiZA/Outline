import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const Reason = () => {
  return (
    <AnimatePresence>
      <div className="w-full flex justify-center items-center flex-col">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 1.45 }}
        >
          <h1 className="text-3xl font-bold leading-[1.15] text-black sm:text-4xl text-center">
            The Purpose Of Make Article Outline
          </h1>
        </motion.div>
        <div className="grid justify-center grid-cols-3 mt-4 gap-10">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 1.55 }}
            >
              <p className="pb-4 text-xl font-semibold leading-[1.15] text-black sm:text-xl text-center">
                Organizing Ideas and Structure
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 1.65 }}
            >
              <p className="font-satoshi font-medium text-sm text-center">
                An outline helps you organize the main ideas and sub-ideas in
                your article. By pre-determining how each section will be
                organized, you can ensure that your article has a logical
                structure and is easy for readers to follow. This helps avoid
                the appearance of a random or disorganized article.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 1.75 }}
            >
              <p className="pb-4 text-xl font-semibold leading-[1.15] text-black sm:text-xl text-center">
                Easy Writing
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 1.85 }}
            >
              <p className="font-satoshi font-medium text-sm text-center">
                The outline serves as a guide during the writing process. When
                you have an outline of what you will write in each section, it
                will be easier for you to write fluently without getting
                confused or losing focus. It also helps you stay on topic
                without getting too digressive.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col">
            <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 1.95 }}>

            <p className="pb-4 text-xl font-semibold leading-[1.15] text-black sm:text-xl text-center">
              Improve Quality and Efficiency
            </p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 2.05 }}>

            <p className="font-satoshi font-medium text-sm text-center">
              By planning the structure of the article through an outline, you
              can more easily evaluate the quality and consistency of your
              writing. You can quickly see if arguments and information are well
              structured, if there are gaps in explanations, or if there is
              repetition to avoid.
            </p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Reason;

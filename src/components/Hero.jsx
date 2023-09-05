import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full">
        <img
          src="https://i.imgur.com/VTW7U1Y.png"
          alt=""
          className="w-28 object-contain"
        />
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-outline btn-primary m-1">
            Other Project
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
          >
            <div className="p-2 flex flex-col justify-center items-center">
              <div className="avatar py-2">
                <div className="rounded-full w-14">
                  <img src="https://i.imgur.com/HbGPpYt.png" />
                </div>
              </div>
              <p className="text-primary font-extrabold">MavisAI</p>
            </div>
            <li>
              <a className="text-primary font-bold">Topic?</a>
            </li>
            <li>
              <a className="text-primary">Coming Soon </a>
            </li>
          </ul>
        </div>
      </nav>
      <AnimatePresence>
        <div className="h-[468px] grid grid-cols-1 lg:grid-cols-2 mt-10 items-center">
          <div className=" h-full grid grid-rows-1  items-center ">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className=" text-4xl font-semibold   text-black sm:text-7xl text-centercapitalize">
                Get an <span className="font-extrabold">Outline</span> of an
                Article with <span className="mavisai ">MavisAI</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="font-semibold text-2xl ">Technology of</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.8 }}
            >
              <div className=" w-full mb-10  flex flex-row mt-2 items-center  lg:gap-10 justify-between">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
                  className="w-10 h-10"
                  alt=""
                />
                <img
                  src="https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png"
                  className="w-10 h-10"
                  alt=""
                />
                <img
                  src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                  className="w-10 h-10"
                  alt=""
                />

                <img
                  src="https://raw.githubusercontent.com/saadeghi/daisyui/master/src/docs/static/images/daisyui-logo/favicon-192.png"
                  className="w-10 h-10"
                  alt=""
                />

                <img
                  src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
                  className="w-10 h-10"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 1 }}
          >
            <img
              src="https://i.imgur.com/Rg8jaxT.png"
              alt=""
              className=" h-full"
            />
          </motion.div>
        </div>

        <div className="pt-10 lg:pt-0">
          <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 1.2 }}>
            <h1 className="mt-2 text-3xl font-bold leading-[1.15] text-black sm:text-4xl text-center">
              Outline Your Article
            </h1>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 1.25 }}>
            
          <h2 className="desc">
            Create an outline for an article with the help of MavisAI
          </h2>
          </motion.div>
        </div>
      </AnimatePresence>
    </header>
    // #181736
  );
};

export default Hero;

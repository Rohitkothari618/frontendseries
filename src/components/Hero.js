import Image from "next/image";
// import component
import Header from "./Header";
// import Motion
import { motion } from "framer-motion";
// import variants
import {
  staggerContainer,
  fadeInDown,
  computerAnimation,
} from "../../variants";

import computeranim from "../../public/assets/animation/computerAnim.json";

import { CgArrowLongRight } from "react-icons/cg";

// lottie player
import Lottie from "react-lottie-player";

const Hero = ({ headerData, heroData, navData }) => {
  // destructure
  const { title, bgImg, btnText } = heroData;
  return (
    <section className="bg-white min-h-[400px] lg:min-h-[450px] lg:mb-30">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto relative min-h-[500px] lg:min-h-[650px]"
      >
        <motion.div variants={fadeInDown}>
          <Header headerData={headerData} navData={navData} />
        </motion.div>

        <div className="flex flex-row">
          <div className="flex flex-col items-center justify-center lg:items-start mt-[8rem] lg:mt-0 bg-[#1d1d1f] rounded-md  min-h-[500px]  lg:bg-white w-full">
            <motion.h1
              variants={fadeInDown}
              className="h1 max-w-[740px] text-white text-center lg:text-left lg:text-black pt-5 lg:pt-[12rem] mb-[60px]"
            >
              {title}
            </motion.h1>
            <motion.button variants={fadeInDown} className="btn ">
              {btnText}
              <CgArrowLongRight className="text-[30px]" />
            </motion.button>
          </div>

          <motion.div
            variants={computerAnimation}
            className="hidden lg:flex absolute right-0 mt-[9rem]"
          >
            <Lottie
              play
              loop
              animationData={computeranim}
              className="w-[400px] h-[400px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import {
  fadeInDown,
  boxAnim,
  staggerTextContainer,
  staggerAccordionContainer,
} from "../../variants";
import RoadmapBox from "./RoadmapBox";
const Roadmap = ({ roadmapData }) => {
  const [seePara, setSeePara] = useState(false);
  const { title, subtitle, steps } = roadmapData;

  return (
    <section className="bg-[#1d1d1f] w-screen max-w-[90vw] p-[2px] lg:max-w-[80vw] lg:p-0 text-white mx-auto min-h-[700px] rounded-xl">
      <motion.div
        variants={staggerTextContainer}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.4 }}
        className="container mx-auto"
      >
        <motion.div variants={fadeInDown}>
          <h2 className="h2 text-gray-400 text-center mt-[80px] mb-4">
            {title}
          </h2>
          <div className="bg-accent/10 border-l-[10px] border-accent ml-2 max-w-[570px] h-[60px] flex items-center justify-center mb-8 lg:mb-0">
            <p className="text-[20px] leading-noraml lg:text-[24px] lg:leading-[12px] font-medium max-w-[320px] lg:max-w-[460px]">
              {subtitle}
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={staggerAccordionContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex items-center text-white justify-center w-full  flex-wrap "
        >
          {steps.map((item, i) => {
            return <RoadmapBox item={item} key={i} />;
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Roadmap;

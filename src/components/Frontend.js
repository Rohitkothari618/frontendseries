import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp, fadeInDown, staggerTextContainer } from "../../variants";
const Frontend = ({ frontendData }) => {
  const { title, frontendList, aboutimg } = frontendData;

  return (
    <section>
      <section className="mb-[30px] lg:mb-[60px] ">
        <div className="container mx-auto">
          <motion.div
            variants={staggerTextContainer}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex items-center justify-center flex-col lg:flex-row gap-x-[20px]"
          >
            <motion.div
              variants={fadeInDown}
              className="flex-1 mt-[74px] mr-4 text-black"
            >
              <h3 className="h3">{title}</h3>
              <div>
                <ul className="flex flex-col gap-[16px] lg:mb-16">
                  {frontendList.map((item, idx) => {
                    return (
                      <li key={idx} className="text-[22px] font-light">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex-1 ">
              <Image src={aboutimg} width={575} height={480} alt="aboutimg" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Frontend;

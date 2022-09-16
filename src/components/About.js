import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown, staggerTextContainer } from "../../variants";
import Lottie from "react-lottie-player";
import frontendimg from "../../public/assets/animation/about.json";
const About = ({ aboutData }) => {
  const { title, subtitle, text } = aboutData;
  return (
    <section className="mb-[30px] lg:mb-[50px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-col lg:flex-row gap-x-[20px]"
        >
          <motion.div variants={fadeInDown} className="flex-1 mt-[74px] mr-4">
            <h3 className="h3">{title}</h3>
            <p className="lead max-w-[470px] mb-[70px]">{subtitle}</p>
            <div className="bg-accent/10 border-l-[10px] border-accent max-w-[570px] h-[160px] flex items-center justify-center mb-8 lg:mb-0">
              <p className="text-[20px] leading-noraml lg:text-[24px] lg:leading-[32px] font-medium max-w-[320px] lg:max-w-[460px]">
                {text}
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex-1 flex items-center justify-center"
          >
            <Lottie
              play
              loop
              animationData={frontendimg}
              className="lg:w-[500px] lg:h-[500px] w-[400px] h-[400px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

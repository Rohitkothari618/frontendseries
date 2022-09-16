import Image from "next/image";
import Question from "./Question";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  staggerAccordionContainer,
  staggerTextContainer,
} from "../../variants";
const Faq = ({ faqData }) => {
  const { pretitile, title, questions, img } = faqData;

  return (
    <section className="min-h-[1150px] mt-12 lg:bg-faq bg-no-repeat bg-right-top lg:pt-20 lg:pb-24 mb-[60px] lg:mb-[16px]  ">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-col lg:flex-row justify-center lg:justify-start items-center relative pt-8 pb-16 lg:pt-16 lg:pb-32"
        >
          <motion.div variants={fadeInRight} className="lg:w-[45%]">
            <h3 className="h3">{pretitile}</h3>
            <h2 className="h2 mb-6 lg:mb-12">{title}</h2>
          </motion.div>

          <motion.div
            variants={fadeInLeft}
            className="lg:absolute lg:right-16 lg:top-16"
          >
            <Image src={img} width={608} height={498} alt="faqImgae" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerAccordionContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.4 }}
          className="grid grid-cols-1 lg:mt-32 lg:grid-cols-2 gap-x-[20px] gap-y-[10px]"
        >
          {questions.map((item, idx) => {
            return <Question key={idx} item={item} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;

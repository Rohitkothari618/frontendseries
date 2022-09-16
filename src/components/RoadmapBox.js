import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Image from "next/image";
import { boxAnim } from "../../variants";

const RoadmapBox = ({ item }) => {
  const { name, text, img } = item;
  const [seePara, setSeePara] = useState(false);
  return (
    <div>
      <motion.div
        onClick={() => {
          setSeePara(!seePara);
        }}
        variants={boxAnim}
        className=" flex flex-col gap-y-6 items-center p-2 my-2 lg:p-4 lg:m-4 h-[200px]  w-[300px] lg:w-[400px] lg:h-fit bg-white bg-opacity-[0.1] rounded-lg justify-center"
      >
        <div className="flex lg:flex-col items-center gap-x-4 justify-center gap-y-4  ">
          {!seePara ? (
            <Image src={img} width={150} height={150} alt="icons" />
          ) : (
            ""
          )}
          <h2 className="text-[24px] ">{name}</h2>
          {seePara ? (
            <AiFillCaretUp
              onClick={() => {
                setSeePara(!seePara);
              }}
              className="text-[23px] text-white"
            />
          ) : (
            <AiFillCaretDown
              onClick={() => {
                setSeePara(!seePara);
              }}
              className="text-[23px] text-white"
            />
          )}{" "}
        </div>
        {seePara ? (
          <div className="transition-all duration-500">
            <p className="leading-8">{text}</p>
          </div>
        ) : (
          ""
        )}
      </motion.div>
    </div>
  );
};

export default RoadmapBox;

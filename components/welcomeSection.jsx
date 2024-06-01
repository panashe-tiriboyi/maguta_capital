import React from "react";
import Image from "next/image";
import GetInTouch from "@/components/getInTouch";

const WelcomeSection = ({ name, content }) => {
  return (
    <div className=" md:h-96">
      <div className="bg-greenCustom text-white w-full  pt-40 pb-20 ">
        <div className=" items-center text-center">
          <div className="">
            <h2 className={`mb-3 text-5xl  text-white  `}>{name}</h2>
            <h2
              className={`m-10 mb-20 text-xl  text-white md:mx-96 md:mb-10  `}
            >
              {content}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

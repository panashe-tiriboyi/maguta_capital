import React from "react";
import Image from "next/image";
import GetInTouch from "@/components/getInTouch";

const RuralFinance = () => {
  return (
    <div className="bg-white flex flex-col h-fit space-y-5 text-black md:flex-row md:space-x-5">
      <div className="flex flex-col space-y-5 md:w-1/2 md:justify-evenly">
        <button className="border  bg-redishWhite text-greenCustom  border-greenCustom w-fit px-5">
          Rural Finance
        </button>
        <h2 className="mb-3 text-2xl  md:text-4xl">
          Unlocking dreams, our solutions pave the way for you to build pursue
          your projects.
        </h2>
        <p className="md:text-2xl">
          We offer funding targeted at people with ongoing agricultural-related
          projects residing in rural areas who, without our assistance, will
          otherwise not be able to sustain their projects. The assistance comes
          in form of working capital loans with a maximum tenor of 12 months and
          amounts ranging from US$100 to US$10,000 equivalent in local currency
        </p>
        <GetInTouch />
      </div>
      <Image
        className="w-full md:w-1/2"
        src="/black-woman-farmer-in-cabbage-field-tablet.png"
        alt="black woman farmer in cabbage field tablet "
        width={1920}
        height={480}
        priority
      />
    </div>
  );
};

export default RuralFinance;

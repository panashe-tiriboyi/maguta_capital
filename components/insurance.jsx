import React from "react";
import Image from "next/image";
import GetInTouch from "@/components/getInTouch";

const Insurance = () => {
  return (
    <div className="bg-white flex flex-col h-fit space-y-5 text-black md:flex-row-reverse">
      <div className="flex flex-col space-y-5 md:w-1/2 md:ml-5 md:justify-evenly">
        <button className="border  bg-redishWhite text-greenCustom  border-greenCustom w-fit px-5">
          Insurance
        </button>
        <h2 className={`mb-3 text-2xl md:text-3xl  `}>
          Providing a safety net for your journey, our insurance products secure
          the well-being of smallholder farmers and rural households.
        </h2>
        <p className="md:text-xl">
          Through our subsidiary Kulinda Microinsurance (Private) Limited we
          bring microinsurance products to smallholder farmers and rural
          households who may not be able to access these products from existing
          traditional insurance companies. These include:
        </p>{" "}
        <ul class="list-decimal pl-10 px-2 md:text-xl">
          <li>Crop insurance</li>
          <li>Livestock insurance</li>
          <li>Revenue Protection (RP) insurance</li>
          <li>Health insurance</li>
        </ul>
        <p className="md:text-xl">
          These are timely products in a changing climate given the less
          adaptive capabilities of rural households and smallholder farmers who
          suffer first and most from climate-induced shocks.
        </p>
        <GetInTouch />
      </div>
      <Image
        className="w-full md:w-1/2"
        src="/black-youth-female-farmer-holding-crate-full-of-tomatoes.png"
        alt="black youth female farmer holding crate full of tomatoes"
        width={1920}
        height={480}
        priority
      />
    </div>
  );
};

export default Insurance;

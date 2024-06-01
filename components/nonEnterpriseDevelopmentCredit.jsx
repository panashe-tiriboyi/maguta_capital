import React from "react";
import Image from "next/image";
import GetInTouch from "@/components/getInTouch";
import ServiceType from "@/components/serviceType";

const NonEnterpriseDevelopmentCredit = () => {
  return (
    <div className="bg-white flex flex-col h-fit space-y-5 text-black md:flex-row-reverse ">
      <div className="flex flex-col space-y-5 md:w-1/2 md:ml-5 justify-evenly">
        <button className="border  bg-redishWhite text-greenCustom  border-greenCustom w-fit px-5">
          Non-enterprise Development Credit
        </button>
        <h2 className={`mb-3 text-2xl md:text-4xl `}>
          Empowering progress beyond businesses, we offer diverse credit
          solutions for sustainable development
        </h2>
        <div className="space-y-5">
          <ServiceType
            imageName="Sustainable-Development-Loans-(SDLs).svg"
            name="Sustainable Development Loans (SDLs)"
          />
          <ServiceType
            imageName="Green-Energy-Loans.svg"
            name="Green Energy Loans"
          />
        </div>

        <GetInTouch />
      </div>
      <Image
        className="w-full md:w-1/2"
        src="/Businessman-Reading-Newspaper.png"
        alt="Businessman Reading Newspaper"
        width={1920}
        height={480}
        priority
      />
    </div>
  );
};

export default NonEnterpriseDevelopmentCredit;

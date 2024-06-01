import React from "react";
import Image from "next/image";
import GetInTouch from "./getInTouch";
import Loans from "@/components/loans";
import NonEnterpriseDevelopmentCredit from "@/components/nonEnterpriseDevelopmentCredit";
import RuralFinance from "@/components/ruralFinance";
import Insurance from "@/components/insurance";
import MobileMoney from "@/components/mobileMoney";

const ServicesContent = () => (
  <div className="bg-white m-5 p-5 flex-col h-fit space-y-5 text-black">
    <div className="flex flex-col  ">
      <Loans />
    </div>

    <div className="flex flex-col  ">
      <NonEnterpriseDevelopmentCredit />
    </div>

    <div className="flex flex-col  ">
      <RuralFinance />
    </div>

    <div className="flex flex-col  ">
      <Insurance />
    </div>

    <div className="flex flex-col  ">
      <MobileMoney />
    </div>
  </div>
);

export default ServicesContent;

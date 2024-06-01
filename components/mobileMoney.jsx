import React from "react";
import Image from "next/image";
import GetInTouch from "@/components/getInTouch";

const MobileMoney = () => {
  return (
    <div className="bg-white flex flex-col h-fit space-y-5 text-black md:flex-row md:space-x-5">
      <div className="flex flex-col space-y-5 md:w-1/2 md:justify-evenly">
        <button className="border  bg-redishWhite text-greenCustom  border-greenCustom w-fit px-5">
          Mobile Money
        </button>
        <h2 className={`mb-3 text-2xl  md:text-4xl`}>
          Bringing financial accessibility to your fingertips.
        </h2>
        <p className="md:text-2xl">
          Maguta Capital partners with Mobile Network Operators (MNOs) to offer
          Agents and Super dealer services with the aim of helping to increase
          the financial inclusion of the rural poor. As agents, we serve walk-in
          mobile money clients in cash deposits and withdrawals particularly in
          rural areas and small towns. As a super dealer, we help MNOs
          strengthen distribution through E-float and cash rebalancing to ensure
          the availability of these services to those out of cities.
        </p>
        <GetInTouch />
      </div>
      <Image
        className="w-full md:w-1/2"
        src="/black-farmer-man-and-son.png"
        alt="black farmer man and son"
        width={1920}
        height={480}
        priority
      />
    </div>
  );
};

export default MobileMoney;

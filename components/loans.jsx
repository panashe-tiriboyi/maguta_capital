import React from "react";
import Image from "next/image";
import ServiceType from "@/components/serviceType";
import GetInTouch from "@/components/getInTouch";

const Loans = () => {
  return (
    <div className="bg-white flex flex-col h-fit space-y-5 text-black md:flex-row md:space-x-5 ">
      <div className="flex flex-col space-y-5 md:w-1/2 justify-evenly">
        <button className="border  bg-redishWhite text-greenCustom  border-greenCustom w-fit px-5">
          Loans
        </button>
        <h2 className={`mb-3 text-2xl md:text-4xl `}>
          We provide various types of loans to our customers
        </h2>
        <ServiceType
          imageName="agricultural-loans.svg"
          name="Agricultural Loans"
        />
        <ServiceType
          imageName="Working-capital-and-SMEs-Loans.svg"
          name="Working capital and SMEs loans"
        />
        <ServiceType
          imageName="Educational-Loans.svg"
          name="Educational Loans"
        />
        <ServiceType imageName="Order-Finance.svg" name="Order Finance" />
        <ServiceType
          imageName="Group-Lending-Facility.svg"
          name="Group Lending Facility"
        />
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

// const ServicesContent = () => {
//   return (
//     <div className="flex flex-col  ">
//       <Loans />
//       {/* <Service
//         imageName="Working-capital-and-SMEs-Loans.svg"
//         name="Working capital and SMEs loans"
//       />
//       <Service imageName="Educational-Loans.svg" name="Educational Loans" />
//       <Service imageName="Order-Finance.svg" name="Order Finance" />
//       <Service
//         imageName="Group-Lending-Facility.svg"
//         name="Group Lending Facility"
//       />*/}
//     </div>
//   );
// };

export default Loans;

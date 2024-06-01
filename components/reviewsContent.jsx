import React from "react";
import GetInTouch from "@/components/getInTouch";
import Image from "next/image";
import ReadAllTestimonials from "@/components/readAllTestimonials";
import Review from "@/components/review";

const ReviewsContent = () => {
  return (
    <div className="bg-redishWhite m-5 p-5 flex flex-col h-fit space-y-5 text-black">
      <h2 className={`mb-3 text-2xl  `}>Reviews shared here</h2>

      <div className="flex flex-col space-y-1">
        <p className=" text-black text-start">
          See how we enabled businesses like yours to excel and grow with our
          professional microfinance services.
        </p>
      </div>
      <ReadAllTestimonials />
      <div className="flex flex-col space-y-5 md:flex-row space-x-5 ">
        <ul>
          <li></li>
        </ul>
        <Review
          content="Maguta Capital believed in my dream when others didn't. With their support, my agribusiness flourished, and I can proudly say I am reaping the rewards. Thank you, Maguta, for being my financial backbone!"
          name="Jane M."
          title="Agripreneur"
          province="Mashonaland East"
        />
        <Review
          content="Being a part of Maguta's group-lending program changed my life. No collateral, just trust and support from fellow members. Maguta made financial empowerment a reality for us!"
          name="Samuel K."
          title="Group-Lending Beneficiary"
          province="Matabeleland South"
        />
        <Review
          content="Maguta Capital, my farming partner, turned dreams into reality. Their support and agricultural loans fueled my growth. Grateful for a financial ally that stands with farmers every step of the way!"
          name="Ruth S."
          title="Farmer"
          province="Masvingo"
        />
      </div>
    </div>
  );
};

export default ReviewsContent;

import React from "react";
import Image from "next/image";

const CarouselQoutes = () => {
  return (
    <div class="flex space-x-4 p-1 h-64 bg-white text-black justify-center items-center lg:px-56">
      <div class="w-1/6 bg-blue-200 p-4">
        <button>
          <Image
            src="/leftArrow.svg"
            alt="left arrow button"
            width={60}
            height={24}
            priority
          />
        </button>
      </div>
      <div class="w-3/6 bg-green-200 space-y-5  items-center text-center">
        <p className="italic font-extralight">
          `&quot;Microcredit has shown how you can reach out to people that
          conventional banking cannot. It has demonstrated that it&apos;s a
          doable proposition.`&quot;
        </p>
        <p>– Muhammad Yunus</p>
      </div>

      <div class="w-1/6 bg-red-200 p-4">
        <button>
          <Image
            src="/rightArrow.svg"
            alt="right arrow button"
            width={60}
            height={24}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default CarouselQoutes;

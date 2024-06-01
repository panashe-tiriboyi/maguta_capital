import React from "react";
import Image from "next/image";
import { FooterMenu } from "@/app/navBar";

const FooterCustom = () => {
  return (
    <div className="bg-black">
      <div className=" md:flex md:flex-row md:mt-5 ">
        <div className="md:w-1/3 hidden md:block mx-10  ">
          <Image
            className="md:w-36 mb-5"
            src="/logo.png"
            alt="growing money plant on coins finance and investment"
            width={100}
            height={24}
            priority
          />
          <h2 className="font-semibold text-xl">Contact Us</h2>
          <ul>
            <li>
              <b>Phone: </b>+263782130698
            </li>
            <li>
              {" "}
              <b>Email:</b> info@magutacapital.com
            </li>
          </ul>
          <p>
            {" "}
            <b>Visit Us:</b>
          </p>
          <p>
            Please note that our physical office space is in the process of
            being established. We appreciate your understanding, and we&apos;ll
            update our address once it&apos;s ready.
          </p>
        </div>

        <Image
          className="md:hidden"
          src="/logo.png"
          alt="growing money plant on coins finance and investment"
          width={100}
          height={24}
          priority
        />
        <div className="flex flex-col items-center text-center space-y-1 my-5 md:w-1/3">
          <FooterMenu />
        </div>
        <div className="flex flex-col items-center text-center space-y-5">
          <h2 className="text-3xl md:text-5xl">Connect Online:</h2>
          <div className="flex items-center text-center ">
            <button className="w-fit ">
              <Image
                className="md:w-36"
                src="/facebook.svg"
                alt="facebook logo"
                width={80}
                height={24}
                priority
              />
            </button>
            <button className="w-fit ">
              <Image
                className="md:w-36"
                src="/whatsapp.svg"
                alt="whatsapp logo"
                width={80}
                height={24}
                priority
              />
            </button>
            <button className="w-fit ">
              <Image
                className="md:w-36"
                src="/linkedin.svg"
                alt="linkedin logo"
                width={80}
                height={24}
                priority
              />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-greenButtons m-2 mx-5 p-5 ">
        Maguta Capital. All rights reserved
      </div>
    </div>
  );
};

export default FooterCustom;

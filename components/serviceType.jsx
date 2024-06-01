import React from "react";
import Image from "next/image";

const ServiceType = ({ imageName, name }) => {
  imageName = imageName.toString();
  return (
    <div className="flex flex-row space-x-4">
      <a
        className=" flex place-items-center gap-2 pointer-events-auto p-0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={imageName}
          alt="Maguta Capital Logo"
          width={90}
          height={20}
          priority
        />
      </a>{" "}
      <div className="bg-redishWhite w-full py-5 px-3">
        <p className="text-sm text-greenCustom md:text-xl">{name}</p>
      </div>
    </div>
  );
};

export default ServiceType;

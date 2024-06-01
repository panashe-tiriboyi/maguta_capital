import React from "react";

const review = ({ content, name, title, province }) => {
  return (
    <div className="border bg-white border-greenCustom text-black p-5 space-y-2">
      <p>{content}</p>
      <p>{name}</p>
      <p>
        {title}, {province}
      </p>
    </div>
  );
};

export default review;

"use client ";
import React from "react";
import { useRouter } from "next/navigation";

const Router = () => {
  const router = useRouter();
  return (
    <>
      <a href="/" class="block py-2 px-3 text-gray-900  md:p-0 ">
        <button
          className={`bg-greenButtons p-2 w-20 rounded-lg text-sm text-white ${
            router.pathname === "/" ? "active" : ""
          }`}
        >
          Homek
        </button>
      </a>
    </>
  );
};

export default Router;

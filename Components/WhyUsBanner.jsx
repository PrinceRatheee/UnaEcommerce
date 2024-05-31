import React from "react";

const WhyUsBanner = () => {
  return (
    <div className="w-full h-[20rem] bg-[#fff5ef] flex items-center justify-center gap-[1rem]">
      <div className="w-[8rem] h-[8rem] flex items-center justify-center">
        <img src="/branch.png" alt="Leaf Image" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-[1.5rem]">
        <div className="text-center font-anton font-bold text-[2.3rem]">
            Why Choose Us?
        </div>
        <div className="font-oswald text-[1.2rem]">
          "Our goal is to create a sustainable and healthy lifestyle culture
          that will benefit both the earth and you."
        </div>
      </div>
      <div className="w-[8rem] h-[8rem] flex items-center justify-center">
        <img src="/leaf.png" alt="Leaf Image" className="w-full h-full" />
      </div>
      
    </div>
  );
};

export default WhyUsBanner;

import React from "react";

const Banner = () => {
  return (
    <div className="w-[80%] bg-[#f6f6f6] h-[35rem] my-[2rem] flex justify-between mx-auto">
      <div className="w-[25rem] h-full object cover ">
        <img
          src="/pexels-gary-barnes-6231889.jpg"
          alt="Farmer Image"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col w-[50rem] items-center justify-center font-anton text-[4rem]  font-bold gap-[2rem] px-[1rem] text-center">
        <h1>
          Switch to a <span className="text-[#40A578]">Healthier</span>{" "}
          Lifestyle with <span className="text-[#40A578]">100 % Organic</span>{" "}
          Products
        </h1>
      </div>
    </div>
  );
};

export default Banner;

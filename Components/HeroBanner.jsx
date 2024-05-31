import React from "react";

const HeroBanner = () => {
  return (
    <div className=" mx-auto h-[70vh] overflow-hidden bg-[#fff5ef] flex py-[1rem]">
      <div className="flex items-center justify-center px-[2rem]  flex-col ">
        <h1 className="font-anton text-[4rem] mb-[-1rem]  font-bold ">
          <span className="text-[#40A578]">Naturally</span> Sourced,{" "}
        </h1>
        <div className="flex">
          <h1 className="font-anton text-[4rem]  font-bold">
            {" "}
            Perfectly <span className="text-[#40A578]">Pure</span>
          </h1>
          <img src="/leaves.png" className="w-[4rem]" alt="" />
        </div>
        <div className="px-[4rem] mt-[2rem] font-oswald  py-[1rem] flex gap-[0.3rem] hover:gap-[0.5rem] bg-[#006769] hover:bg-[ ] transition ease-in-out duration-300 text-white cursor-pointer items-center justify-center">
          Explore
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[100%] overflow-hidden">
        <img
          src="/pexels-photo-8540948.jpeg"
          alt="Farmer Image"
          className="w-[60vh]"
        />
      </div>
      <div className="flex items-center justify-center px-[2rem]  flex-col ">
        <h1 className="font-anton text-[3rem] mb-[-1rem]  font-bold ">
          100% <span className="text-[#40A578]">Pure</span>{" "}
        </h1>
        <div className="flex">
          <h1 className="font-anton text-[3rem] mb-[-1rem] font-bold">
            {" "}
            <span className="text-[#40A578]">Organic</span> Products
          </h1>
        </div>
        <h1 className="font-anton text-[3rem] mb-[-1rem]  font-bold">
          Available{" "}
        </h1>
        <h1 className="font-anton text-[3rem] mb-[-1rem]  font-bold">for You !</h1>
      </div>
    </div>
  );
};

export default HeroBanner;

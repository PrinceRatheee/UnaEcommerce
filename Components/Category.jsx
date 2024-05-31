import React from "react";

const Category = () => {
  return (
    <div className="mt-[4vh] flex flex-col">
      <div className="flex flex-col w-[15.5rem]  ml-[4%] items-end">
        <div className="text-[1.4rem] flex gap-[0.5rem] items-center">
          <span className="text-outfit">Shop By </span>
          <div className="font-anton font-bold text-[1.8rem] flex flex-col items-end justify-end">
            Categories
          </div>
        </div>
        <div>
          <div className="w-[3.4rem] h-[0.2rem] bg-[#40A578]" />
        </div>
      </div>

      <div className="mt-[2rem] w-[90%] ml-[4%] flex justify-between flex-wrap ">
        <div className="flex flex-col mb-[2rem]">
          <div className="bg-[#F1F1F1] rounded-full w-[10rem] h-[10rem] cursor-pointer"></div>
          <div className="w-[10rem] flex justify-center mt-[0.3rem] cursor-pointer font-anton font-semibold">Category Name</div>
        </div>
        <div className="flex flex-col mb-[2rem]">
          <div className="bg-[#F1F1F1] rounded-full w-[10rem] h-[10rem] cursor-pointer"></div>
          <div className="w-[10rem] flex justify-center mt-[0.3rem] cursor-pointer font-anton font-semibold">Category Name</div>
        </div>
        <div className="flex flex-col mb-[2rem]">
          <div className="bg-[#F1F1F1] rounded-full w-[10rem] h-[10rem] cursor-pointer"></div>
          <div className="w-[10rem] flex justify-center mt-[0.3rem] cursor-pointer font-anton font-semibold">Category Name</div>
        </div>
        <div className="flex flex-col mb-[2rem]">
          <div className="bg-[#F1F1F1] rounded-full w-[10rem] h-[10rem] cursor-pointer"></div>
          <div className="w-[10rem] flex justify-center mt-[0.3rem] cursor-pointer font-anton font-semibold">Category Name</div>
        </div>
        <div className="flex flex-col mb-[2rem]">
          <div className="bg-[#F1F1F1] rounded-full w-[10rem] h-[10rem] cursor-pointer"></div>
          <div className="w-[10rem] flex justify-center mt-[0.3rem] cursor-pointer font-anton font-semibold">Category Name</div>
        </div>
        
      </div>
    </div>
  );
};

export default Category;

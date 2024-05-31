"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { sliderSettings } from "../utils/sliderSettings";
import Image from "next/image";
const NewlyAdded = () => {
  return (
    <div className="flex flex-col mt-[2rem] pb-[2rem]">
      <div className="flex flex-col w-[15.5rem]  ml-[4%] items-end mb-[3rem]">
        <div className="text-[1.4rem] flex gap-[0.5rem] items-center">
          <span className="text-outfit">Recently</span>
          <div className="font-anton font-bold text-[1.8rem] flex flex-col items-end justify-end">
            Added
          </div>
        </div>
        <div>
          <div className="w-[3.4rem] h-[0.2rem] bg-[#40A578]" />
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          {...sliderSettings}
        >
          <SliderButtons />
          <SwiperSlide>
            <div className="h-[27rem] w-[20rem] bg-[#fafafa]  rounded-xl  ml-[8%] mb-[8%]">
              <div className="bg-[#EBEBEB] rounded-xl mb-[0.5rem] h-[21rem] object-cover overflow-hidden">
                <img
                  src="./buds.png"
                  alt="Product Image"
                  className="w-[20rem] cursor-pointer"
                />
              </div>
              <div className="flex justify-between px-[1rem]">
                <div>
                  <h1 className="font-anton  text-[1rem] font-semibold">
                    Earbuds
                  </h1>
                  <div className="flex gap-[0.4rem] items-center">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                  <p>⭐4.8 </p>
                </div>
                <div className="bg-black w-[7rem] h-[2.5rem] cursor-pointer items-center px-[0.3rem] pt-[0.5rem] text-white justify-center text-center self-center rounded-lg">
                  Buy Now
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[27rem] w-[20rem] bg-[#fafafa]  rounded-xl  ml-[8%] mb-[8%]">
              <div className="bg-[#EBEBEB] rounded-xl mb-[0.5rem] h-[21rem] object-cover overflow-hidden">
                <img
                  src="./buds.png"
                  alt="Product Image"
                  className="w-[20rem] cursor-pointer"
                />
              </div>
              <div className="flex justify-between px-[1rem]">
                <div>
                  <h1 className="font-anton  text-[1rem] font-semibold">
                    Earbuds
                  </h1>
                  <div className="flex gap-[0.4rem] items-center">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                  <p>⭐4.8 </p>
                </div>
                <div className="bg-black w-[7rem] h-[2.5rem] cursor-pointer items-center px-[0.3rem] pt-[0.5rem] text-white justify-center text-center self-center rounded-lg">
                  Buy Now
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[27rem] w-[20rem] bg-[#fafafa]  rounded-xl  ml-[8%] mb-[8%]">
              <div className="bg-[#EBEBEB] rounded-xl mb-[0.5rem] h-[21rem] object-cover overflow-hidden">
                <img
                  src="./buds.png"
                  alt="Product Image"
                  className="w-[20rem] cursor-pointer"
                />
              </div>
              <div className="flex justify-between px-[1rem]">
                <div>
                  <h1 className="font-anton  text-[1rem] font-semibold">
                    Earbuds
                  </h1>
                  <div className="flex gap-[0.4rem] items-center">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                  <p>⭐4.8 </p>
                </div>
                <div className="bg-black w-[7rem] h-[2.5rem] cursor-pointer items-center px-[0.3rem] pt-[0.5rem] text-white justify-center text-center self-center rounded-lg">
                  Buy Now
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[27rem] w-[20rem] bg-[#fafafa]  rounded-xl  ml-[8%] mb-[8%]">
              <div className="bg-[#EBEBEB] rounded-xl mb-[0.5rem] h-[21rem] object-cover overflow-hidden">
                <img
                  src="./buds.png"
                  alt="Product Image"
                  className="w-[20rem] cursor-pointer"
                />
              </div>
              <div className="flex justify-between px-[1rem]">
                <div>
                  <h1 className="font-anton  text-[1rem] font-semibold">
                    Earbuds
                  </h1>
                  <div className="flex gap-[0.4rem] items-center">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                  <p>⭐4.8 </p>
                </div>
                <div className="bg-black w-[7rem] h-[2.5rem] cursor-pointer items-center px-[0.3rem] pt-[0.5rem] text-white justify-center text-center self-center rounded-lg">
                  Buy Now
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[27rem] w-[20rem] bg-[#fafafa]  rounded-xl  ml-[8%] mb-[8%]">
              <div className="bg-[#EBEBEB] rounded-xl mb-[0.5rem] h-[21rem] object-cover overflow-hidden">
                <img
                  src="./buds.png"
                  alt="Product Image"
                  className="w-[20rem] cursor-pointer"
                />
              </div>
              <div className="flex justify-between px-[1rem]">
                <div>
                  <h1 className="font-anton  text-[1rem] font-semibold">
                    Earbuds
                  </h1>
                  <div className="flex gap-[0.4rem] items-center">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                  <p>⭐4.8 </p>
                </div>
                <div className="bg-black w-[7rem] h-[2.5rem] cursor-pointer items-center px-[0.3rem] pt-[0.5rem] text-white justify-center text-center self-center rounded-lg">
                  Buy Now
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[27rem] w-[20rem] bg-[#fafafa]  rounded-xl  ml-[8%] mb-[8%]">
              <div className="bg-[#EBEBEB] rounded-xl mb-[0.5rem] h-[21rem] object-cover overflow-hidden">
                <img
                  src="./buds.png"
                  alt="Product Image"
                  className="w-[20rem] cursor-pointer"
                />
              </div>
              <div className="flex justify-between px-[1rem]">
                <div>
                  <h1 className="font-anton  text-[1rem] font-semibold">
                    Earbuds
                  </h1>
                  <div className="flex gap-[0.4rem] items-center">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                  <p>⭐4.8 </p>
                </div>
                <div className="bg-black w-[7rem] h-[2.5rem] cursor-pointer items-center px-[0.3rem] pt-[0.5rem] text-white justify-center text-center self-center rounded-lg">
                  Buy Now
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[27rem] w-[20rem] bg-[#fafafa]  rounded-xl  ml-[8%] mb-[8%]">
              <div className="bg-[#EBEBEB] rounded-xl mb-[0.5rem] h-[21rem] object-cover overflow-hidden">
                <img
                  src="./buds.png"
                  alt="Product Image"
                  className="w-[20rem] cursor-pointer"
                />
              </div>
              <div className="flex justify-between px-[1rem]">
                <div>
                  <h1 className="font-anton  text-[1rem] font-semibold">
                    Earbuds
                  </h1>
                  <div className="flex gap-[0.4rem] items-center">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                  <p>⭐4.8 </p>
                </div>
                <div className="bg-black w-[7rem] h-[2.5rem] cursor-pointer items-center px-[0.3rem] pt-[0.5rem] text-white justify-center text-center self-center rounded-lg">
                  Buy Now
                </div>
              </div>
            </div>
          </SwiperSlide>
          <br />
          <br />
          <br />
        </Swiper>
      </div>
    </div>
  );
};

export default NewlyAdded;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex gap-[0.8rem] text-[1.2rem] absolute top-[29rem] z-[9999] left-[48%] ">
      <button
        onClick={() => swiper.slidePrev()}
        className="py-[0.2rem] px-[0.8rem] text-[#6200ff] border-none rounded-[5px] bg-[#EEEEFF] cursor-pointer"
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="py-[0.2rem] px-[0.8rem] text-[#6200ff] border-none rounded-[5px] bg-white cursor-pointer shadow-bt"
      >
        &gt;
      </button>
    </div>
  );
};

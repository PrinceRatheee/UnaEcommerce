"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const sliderSettings = {
  


  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    880: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
    1350: {
      slidesPerView: 5,
    },
  },
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex gap-[0.8rem] text-[1.2rem] absolute top-[31rem] z-[9999] left-[48%] ">
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

const VideosDemo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-[15.5rem]  ml-[1%] items-end mb-[3rem]">
        <div className="text-[1.4rem] flex gap-[0.5rem] items-center">
          <span className="text-outfit">Watch & </span>
          <div className="font-anton font-bold text-[1.8rem] flex flex-col items-end justify-end">
            Shop
          </div>
        </div>
        <div>
          <div className="w-[3.4rem] h-[0.2rem] bg-[#40A578]" />
        </div>
      </div>

      <div className="w-[90%] mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          {...sliderSettings}
        >
          <SliderButtons />

          <SwiperSlide>
            <div className="border-[0.1rem] border-solid w-[15rem] h-[30rem] rounded-xl cursor-pointer flex flex-col mx-auto ">
              <div className="w-full h-[22rem] bg-gray-200 rounded-t-xl rounded-b-md ">
                <video
                  className="w-full h-full object-cover rounded-t-xl rounded-b-md"
                  src="/demov.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="w-full h-[8rem] flex items-center justify-center flex-col">
                  <div className="bg-[#EBEBEB] rounded-md h-[5rem] w-[5rem] relative bottom-[3rem] object-contain ">
                    <img
                      src="/buds.png"
                      alt="Product Image"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-oswald font-bold relative bottom-[2rem]">
                    Product Name{" "}
                  </p>
                  <div className="flex gap-[0.4rem] items-center relative bottom-[1rem]">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[0.1rem] border-solid w-[15rem] h-[30rem] rounded-xl cursor-pointer flex flex-col mx-auto ">
              <div className="w-full h-[22rem] bg-gray-200 rounded-t-xl rounded-b-md ">
                <video
                  className="w-full h-full object-cover rounded-t-xl rounded-b-md"
                  src="/demov.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="w-full h-[8rem] flex items-center justify-center flex-col">
                  <div className="bg-[#EBEBEB] rounded-md h-[5rem] w-[5rem] relative bottom-[3rem] object-contain ">
                    <img
                      src="/buds.png"
                      alt="Product Image"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-oswald font-bold relative bottom-[2rem]">
                    Product Name{" "}
                  </p>
                  <div className="flex gap-[0.4rem] items-center relative bottom-[1rem]">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[0.1rem] border-solid w-[15rem] h-[30rem] rounded-xl cursor-pointer flex flex-col mx-auto ">
              <div className="w-full h-[22rem] bg-gray-200 rounded-t-xl rounded-b-md ">
                <video
                  className="w-full h-full object-cover rounded-t-xl rounded-b-md"
                  src="/demov.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="w-full h-[8rem] flex items-center justify-center flex-col">
                  <div className="bg-[#EBEBEB] rounded-md h-[5rem] w-[5rem] relative bottom-[3rem] object-contain ">
                    <img
                      src="/buds.png"
                      alt="Product Image"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-oswald font-bold relative bottom-[2rem]">
                    Product Name{" "}
                  </p>
                  <div className="flex gap-[0.4rem] items-center relative bottom-[1rem]">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[0.1rem] border-solid w-[15rem] h-[30rem] rounded-xl cursor-pointer flex flex-col mx-auto ">
              <div className="w-full h-[22rem] bg-gray-200 rounded-t-xl rounded-b-md ">
                <video
                  className="w-full h-full object-cover rounded-t-xl rounded-b-md"
                  src="/demov.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="w-full h-[8rem] flex items-center justify-center flex-col">
                  <div className="bg-[#EBEBEB] rounded-md h-[5rem] w-[5rem] relative bottom-[3rem] object-contain ">
                    <img
                      src="/buds.png"
                      alt="Product Image"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-oswald font-bold relative bottom-[2rem]">
                    Product Name{" "}
                  </p>
                  <div className="flex gap-[0.4rem] items-center relative bottom-[1rem]">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[0.1rem] border-solid w-[15rem] h-[30rem] rounded-xl cursor-pointer flex flex-col mx-auto ">
              <div className="w-full h-[22rem] bg-gray-200 rounded-t-xl rounded-b-md ">
                <video
                  className="w-full h-full object-cover rounded-t-xl rounded-b-md"
                  src="/demov.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="w-full h-[8rem] flex items-center justify-center flex-col">
                  <div className="bg-[#EBEBEB] rounded-md h-[5rem] w-[5rem] relative bottom-[3rem] object-contain ">
                    <img
                      src="/buds.png"
                      alt="Product Image"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-oswald font-bold relative bottom-[2rem]">
                    Product Name{" "}
                  </p>
                  <div className="flex gap-[0.4rem] items-center relative bottom-[1rem]">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[0.1rem] border-solid w-[15rem] h-[30rem] rounded-xl cursor-pointer flex flex-col mx-auto ">
              <div className="w-full h-[22rem] bg-gray-200 rounded-t-xl rounded-b-md ">
                <video
                  className="w-full h-full object-cover rounded-t-xl rounded-b-md"
                  src="/demov.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="w-full h-[8rem] flex items-center justify-center flex-col">
                  <div className="bg-[#EBEBEB] rounded-md h-[5rem] w-[5rem] relative bottom-[3rem] object-contain ">
                    <img
                      src="/buds.png"
                      alt="Product Image"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-oswald font-bold relative bottom-[2rem]">
                    Product Name{" "}
                  </p>
                  <div className="flex gap-[0.4rem] items-center relative bottom-[1rem]">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[0.1rem] border-solid w-[15rem] h-[30rem] rounded-xl cursor-pointer flex flex-col mx-auto ">
              <div className="w-full h-[22rem] bg-gray-200 rounded-t-xl rounded-b-md ">
                <video
                  className="w-full h-full object-cover rounded-t-xl rounded-b-md"
                  src="/demov.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="w-full h-[8rem] flex items-center justify-center flex-col">
                  <div className="bg-[#EBEBEB] rounded-md h-[5rem] w-[5rem] relative bottom-[3rem] object-contain ">
                    <img
                      src="/buds.png"
                      alt="Product Image"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-oswald font-bold relative bottom-[2rem]">
                    Product Name{" "}
                  </p>
                  <div className="flex gap-[0.4rem] items-center relative bottom-[1rem]">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[0.1rem] border-solid w-[15rem] h-[30rem] rounded-xl cursor-pointer flex flex-col mx-auto ">
              <div className="w-full h-[22rem] bg-gray-200 rounded-t-xl rounded-b-md ">
                <video
                  className="w-full h-full object-cover rounded-t-xl rounded-b-md"
                  src="/demov.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="w-full h-[8rem] flex items-center justify-center flex-col">
                  <div className="bg-[#EBEBEB] rounded-md h-[5rem] w-[5rem] relative bottom-[3rem] object-contain ">
                    <img
                      src="/buds.png"
                      alt="Product Image"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-oswald font-bold relative bottom-[2rem]">
                    Product Name{" "}
                  </p>
                  <div className="flex gap-[0.4rem] items-center relative bottom-[1rem]">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[0.1rem] border-solid w-[15rem] h-[30rem] rounded-xl cursor-pointer flex flex-col mx-auto ">
              <div className="w-full h-[22rem] bg-gray-200 rounded-t-xl rounded-b-md ">
                <video
                  className="w-full h-full object-cover rounded-t-xl rounded-b-md"
                  src="/demov.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="w-full h-[8rem] flex items-center justify-center flex-col">
                  <div className="bg-[#EBEBEB] rounded-md h-[5rem] w-[5rem] relative bottom-[3rem] object-contain ">
                    <img
                      src="/buds.png"
                      alt="Product Image"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-oswald font-bold relative bottom-[2rem]">
                    Product Name{" "}
                  </p>
                  <div className="flex gap-[0.4rem] items-center relative bottom-[1rem]">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[0.1rem] border-solid w-[15rem] h-[30rem] rounded-xl cursor-pointer flex flex-col mx-auto ">
              <div className="w-full h-[22rem] bg-gray-200 rounded-t-xl rounded-b-md ">
                <video
                  className="w-full h-full object-cover rounded-t-xl rounded-b-md"
                  src="/demov.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="w-full h-[8rem] flex items-center justify-center flex-col">
                  <div className="bg-[#EBEBEB] rounded-md h-[5rem] w-[5rem] relative bottom-[3rem] object-contain ">
                    <img
                      src="/buds.png"
                      alt="Product Image"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-oswald font-bold relative bottom-[2rem]">
                    Product Name{" "}
                  </p>
                  <div className="flex gap-[0.4rem] items-center relative bottom-[1rem]">
                    <p className="font-bold text-[1rem]">₹122 </p>
                    <div className="flex items-center">
                      <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                      <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
                    </div>
                    <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                      66% off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>


          <br /><br /><br /><br />
        </Swiper>
      </div>

      {/* <div className="border-[0.1rem] border-solid w-[15rem] h-[30rem] rounded-xl cursor-pointer flex flex-col mx-auto ">
        <div className="w-full h-[22rem] bg-gray-200 rounded-t-xl rounded-b-md ">
          <video
            className="w-full h-full object-cover rounded-t-xl rounded-b-md"
            src="/demov.mp4"
            autoPlay
            loop
            muted
          />
          <div className="w-full h-[8rem] flex items-center justify-center flex-col">
            <div className="bg-[#EBEBEB] rounded-md h-[5rem] w-[5rem] relative bottom-[3rem] object-contain ">
              <img
                src="/buds.png"
                alt="Product Image"
                className="w-full h-full"
              />
            </div>
            <p className="font-oswald font-bold relative bottom-[2rem]">
              Product Name{" "}
            </p>
            <div className="flex gap-[0.4rem] items-center relative bottom-[1rem]">
              <p className="font-bold text-[1rem]">₹122 </p>
              <div className="flex items-center">
                <p className=" text-[0.9rem] text-gray-400">₹122 </p>
                <div className="w-[2rem] h-[0.1rem] bg-gray-400 relative right-[1.8rem] top-[0.05rem] mr-[-2rem]" />
              </div>
              <div className="bg-[#a8d57a] text-[#385c0c] text-[0.9rem] w-[5rem] text-center">
                66% off
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default VideosDemo;

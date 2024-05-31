import React from "react";
import HeroBanner from "../Components/HeroBanner";
import Category from "../Components/Category";
import BestSeller from "../Components/BestSeller";
import VideosDemo from "../Components/VideosDemo";
import TrendingProducts from "../Components/TrendingProducts";
import NewlyAdded from "../Components/NewlyAdded";
import Banner from "../Components/Banner";
import WhyUsBanner from "../Components/WhyUsBanner";
import Blogs from "../Components/Blogs";
import Banner2 from "../Components/Banner2";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <HeroBanner />
      <Category />
      <BestSeller />
      <Banner2/>
      <VideosDemo />
      <Banner />
      <TrendingProducts />
      <WhyUsBanner/>
      <NewlyAdded />
      <Testimonials/>
      <Blogs/>
    </>
  );
};

export default Home;

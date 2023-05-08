import React from "react";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import FeaturedProducts from "../components/FeaturedProducts";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Slider />
      <FeaturedProducts type={"featured"} />
      <Categories />
      <FeaturedProducts type={"trending"} />
      <Contact />
    </div>
  );
};

export default Home;

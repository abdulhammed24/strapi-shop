import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

  return (
    <section>
      <div className="my-12 lg:my-[100px]  container">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 lg:mb-[50px]">
          <h1 className="flex-[2] capitalize text-lg sm:text-2xl font-semibold">
            {type} products
          </h1>
          <p className="flex-[3] text-gray-500 text-xs sm:text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex justify-center gap-[50px]">
          {error ? (
            <div className="flex flex-col gap-5 justify-center items-center w-full">
              <div>
                <img
                  src="https://res.cloudinary.com/abdulhammed/image/upload/v1683993747/portfolio/warning_1_pcswa5.png"
                  alt=""
                />
              </div>

              <div className="text-[#ff0000] text-sm font-semibold">
                <p>Something went wrong!</p>
              </div>
            </div>
          ) : loading ? (
            <div className="flex flex-col gap-5 justify-center items-center w-full">
              <div>
                <img
                  src="https://res.cloudinary.com/abdulhammed/image/upload/v1683994013/portfolio/Rolling-1s-200px_xxdzi3.gif"
                  alt=""
                  className="w-16 h-16"
                />
              </div>
            </div>
          ) : (
            data?.map((item) => <Card item={item} key={item.id} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

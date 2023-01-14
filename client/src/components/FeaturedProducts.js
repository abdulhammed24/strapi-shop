import React from "react";
// import Card from "../Card/Card";
// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  //   const { data, loading, error } = useFetch(
  //     `/products?populate=*&[filters][type][$eq]=${type}`
  //   );

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },

    {
      id: 2,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: " T-Shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },

    {
      id: 3,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },

    {
      id: 4,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Short",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
  ];

  return (
    <div className="my-[100px] mx-[200px]">
      <div className="flex items-center justify-between mb-[50px]">
        <h1 className="flex-[2] capitalize">{type} products</h1>
        <p className="flex-[3] text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="flex justify-center gap-[50px]">
        {/* {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)} */}
      </div>
    </div>
  );
};

export default FeaturedProducts;

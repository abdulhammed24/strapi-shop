import React, { useEffect, useState } from "react";
import Card from "./Card";
// import useFetch from "../hooks/useFetch";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  // const { data, loading, error } = useFetch(`/products`);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL +
            `/products?populate=*&filters[type][$eq]=${type}`
          // process.env.REACT_APP_API_URL + "/products",
          // "http://localhost:1337/api/products?populate=*"
        );

        console.log(res.data.data);
        // console.log(res);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
        {
          // error
          // ? "Something went wrong!"
          // : loading
          // ? "loading"
          // :
          data?.map((item) => (
            <Card item={item} key={item.id} />
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;

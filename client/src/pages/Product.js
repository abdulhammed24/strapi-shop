import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdFavoriteBorder } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { FaBalanceScaleRight } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { addToCart } from "../redux-rtk/cartReducer";

const Product = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="py-5 px-12 flex gap-12">
      {error ? (
        "Something went wrong!"
      ) : loading ? (
        "loading"
      ) : (
        <>
          <div className="flex-1 flex gap-5">
            <div className="flex-1">
              <img
                className="w-full h-[150px] object-cover cursor-pointer mb-2"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                className="w-full h-[150px] object-cover cursor-pointer mb-2"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="flex-[5]">
              <img
                className="w-full max-h-[800px] object-cover"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <h1>{data?.attributes?.title} </h1>
            <span className="text-3xl text-orange-500 font-normal">
              ${data?.attributes?.price}
            </span>
            <p className="text-sm text-justify font-normal">
              {data?.attributes?.desc}
            </p>
            <div className="flex items-center gap-2">
              <button
                className="w-12 h-12 flex items-center justify-center cursor-pointer border-none bg-gray-200"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button
                className="w-12 h-12 flex items-center justify-center cursor-pointer border-none bg-gray-200"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="w-[250px] p-2 bg-orange-500 text-white flex items-center justify-center gap-5 cursor-pointer font-medium"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data?.id,
                    title: data?.attributes?.title,
                    desc: data?.attributes?.desc,
                    price: data?.attributes?.price,
                    img: data?.attributes?.img?.data?.attributes?.url,
                    quantity,
                  })
                )
              }
            >
              <GrCart size={20} /> ADD TO CART
            </button>
            <div className="flex gap-5">
              <div className="flex items-center gap-2 text-orange-500 text-sm">
                <MdFavoriteBorder size={20} /> ADD TO WISH LIST
              </div>
              <div className="flex items-center gap-2 text-orange-500 text-sm">
                <FaBalanceScaleRight size={20} /> ADD TO COMPARE
              </div>
            </div>
            <div className="flex flex-col gap-2 text-gray-500 text-sm mt-8">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr className="border border-solid border-gray-300" />
            <div className="flex flex-col gap-2 text-gray-500 text-sm mt-8">
              <span>DESCRIPTION</span>
              <hr className="border border-solid border-gray-300 w-[200px]" />
              <span>ADDITIONAL INFORMATION</span>
              <hr className="border border-solid border-gray-300 w-[200px]" />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

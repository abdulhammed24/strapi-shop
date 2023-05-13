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
    <section>
      <div className="container my-12 lg:my-[100px]">
        <div className="w-4/5 mx-auto flex gap-12 flex-col md:flex-row">
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
            <>
              <div className="flex-1 flex flex-col-reverse md:flex-row gap-5">
                <div className="flex md:flex-col">
                  <img
                    className="w-full h-12 md:h-[150px] object-cover cursor-pointer md:mb-2"
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.img?.data?.attributes?.url
                    }
                    alt=""
                    onClick={(e) => setSelectedImg("img")}
                  />
                  <img
                    className="w-full h-12 md:h-[150px] object-cover cursor-pointer md:mb-2"
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
              <div className="flex-1 flex flex-col gap-8 text-xl text-black font-semibold">
                <h1>{data?.attributes?.title} </h1>
                <span className="text-xl md:text-3xl text-[#0000ff] font-semibold">
                  ${data?.attributes?.price}
                </span>
                <p className="text-sm text-justify font-semibold">
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
                  className="w-[250px] p-2 bg-[#0000ff] text-white flex items-center justify-center gap-5 cursor-pointer text-sm font-semibold"
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
                  <GrCart size={20} className="text-white" /> ADD TO CART
                </button>
                <div className="flex gap-5 flex-wrap">
                  <div className="flex items-center gap-2 text-[#0000ff] text-sm">
                    <MdFavoriteBorder size={20} /> ADD TO WISH LIST
                  </div>
                  <div className="flex items-center gap-2 text-[#0000ff] text-sm">
                    <FaBalanceScaleRight size={20} /> ADD TO COMPARE
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-gray-500 text-sm font-semibold mt-8">
                  <span>Vendor: Polo</span>
                  <span>Product Type: T-Shirt</span>
                  <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr className="border border-solid border-[#919090]" />
                <div className="flex flex-col gap-2 text-gray-500 text-sm font-semibold mt-8">
                  <span>DESCRIPTION</span>
                  <hr className="border border-solid border-[#919090] w-[200px]" />
                  <span>ADDITIONAL INFORMATION</span>
                  <hr className="border border-solid border-[#919090] w-[200px]" />
                  <span>FAQ</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;

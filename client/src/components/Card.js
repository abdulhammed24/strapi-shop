import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  // console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="w-[280px] flex flex-col gap-[10px] mb-[50px]">
        <div className="w-full h-[400px] overflow-hidden relative group">
          {item?.attributes?.isNew && (
            // {item?.isNew && (
            <span className="absolute top-[5px] left-[5px] bg-white py-[3px] px-[5px] z-[3] text-xs font-medium">
              New Season
            </span>
          )}
          <img
            // src={item.img}
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            className="z-[1] w-full h-full object-cover absolute"
          />
          <img
            // src={item.img2}
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            className="group-hover:z-[2] w-full h-full object-cover absolute"
          />
        </div>
        {/* <h2 className="text-base font-normal">{item?.title}</h2> */}
        <h2 className="text-base font-normal">{item?.attributes?.title}</h2>
        <div className="flex gap-[20px]">
          <h3 className="text-lg font-medium line-through text-gray-500">
            {/* ${item.oldPrice || item?.newPrice + 20} */}$
            {item?.oldPrice || item?.attributes?.price + 20}
          </h3>
          <h3 className="text-lg font-medium">${item?.attributes?.price}</h3>
          {/* <h3 className="text-lg font-medium">${item?.newPrice}</h3> */}
        </div>
      </div>
    </Link>
  );
};

export default Card;

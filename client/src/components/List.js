import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="flex flex-wrap justify-between">
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
  );
};

export default List;

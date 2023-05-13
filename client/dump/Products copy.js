import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../src/components/List";
// import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  console.log(catId);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // const { data, loading, error } = useFetch(
  //   `/sub-categories?[filters][categories][id][$eq]=${catId}`
  // );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    //   setSelectedSubCats(
    //     isChecked
    //       ? [...selectedSubCats, value]
    //       : selectedSubCats.filter((item) => item !== value)
    //   );
  };

  return (
    <div className="py-[30px] px-[50px] flex">
      <div className="flex-1 sticky h-full top-[50px]">
        <div className="mb-[30px]">
          <h2 className="mb-5">Product Categories</h2>
          {/* {data?.map((item) => ( */}
          {/* <div className="mb-3" key={item.id}> */}
          <div className="mb-3">
            <input
              type="checkbox"
              // id={item.id}
              // value={item.id}
              // onChange={handleChange}
            />
            {/* <label className="mb-3" htmlFor={item.id}> */}
            <label className="ml-2">
              {/* {item.attributes.title} */}
              title
            </label>
          </div>
          {/* ))} */}
        </div>
        <div className="mb-[30px]">
          <h2>Filter by price</h2>
          <div className="mb-3">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="mb-[30px]">
          <h2>Sort by</h2>
          <div className="mb-3">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label className="ml-2" htmlFor="asc">
              Price (Lowest first)
            </label>
          </div>
          <div className="mb-3">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label className="ml-2" htmlFor="desc">
              Price (Highest first)
            </label>
          </div>
        </div>
      </div>
      <div className="flex-[3]">
        <img
          className="w-full h-[300px] object-cover mb-[50px]"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
        {/* subCats={selectedSubCats}
        /> */}
      </div>
    </div>
  );
};

export default Products;

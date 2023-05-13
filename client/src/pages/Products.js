import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const { id } = useParams();
  // console.log(id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${id}`
  );

  // console.log(data);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats);

  return (
    <section>
      <div className="container my-12 lg:my-[100px]">
        <div className="w-4/5 mx-auto flex gap-12 flex-col md:flex-row">
          <div className="flex-1 flex flex-col  justify-center items-center md:items-start md:sticky h-full top-[50px]">
            <div className="mb-[30px] flex flex-row gap-5 md:gap-0 flex-wrap items-center md:items-start justify-center md:flex-col">
              <h2 className="md:mb-5 text-base font-semibold">
                Product Categories
              </h2>
              {data?.map((item) => (
                <div className="md:mb-3" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleChange}
                  />
                  <label className="ml-3" htmlFor={item.id}>
                    {item?.attributes?.title}
                  </label>
                </div>
              ))}
            </div>
            <div className="mb-[30px] flex flex-row gap-5 md:gap-0 flex-wrap items-center md:items-start justify-center md:flex-col">
              <h2 className="md:mb-5 text-base font-semibold">
                Filter by price
              </h2>
              <div className="md:mb-3">
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
            <div className="mb-[30px] flex flex-row gap-5 md:gap-0 flex-wrap items-center md:items-start justify-center md:flex-col">
              <h2 className="md:mb-5 text-base font-semibold">Sort by</h2>
              <div className="md:mb-3">
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
              <div className="md:mb-3">
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
            <List
              catId={id}
              maxPrice={maxPrice}
              sort={sort}
              subCats={selectedSubCats}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

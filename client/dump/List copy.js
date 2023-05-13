import React from "react";
import Card from "../src/components/Card";
// import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  //   const { data, loading, error } = useFetch(
  //     `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //       (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //     )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
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
      title: "Coat",
      oldPrice: 19,
      newPrice: 12,
    },

    {
      id: 4,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Short",
      oldPrice: 19,
      newPrice: 12,
    },
  ];

  return (
    <div className="flex flex-wrap justify-between">
      {
        //       loading
        // ? "loading"
        //           :

        data?.map((item) => (
          <Card item={item} key={item.id} />
        ))
      }
    </div>
  );
};

export default List;

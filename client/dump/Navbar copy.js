import React, { useState } from "react";
import { GrSearch, GrCart } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
// import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import Cart from "../src/components/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const products = useSelector((state) => state.cart.products);

  return (
    <div className="h-[80px]">
      <div className="p-[10px_30px] flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center text-lg">
            <img src="/img/en.png" alt="strapi-shop" />
            <MdOutlineKeyboardArrowDown size={20} />
          </div>
          <div className="flex items-center text-lg">
            <span>USD</span>
            <MdOutlineKeyboardArrowDown size={20} />
          </div>
          <div className="flex items-center text-lg">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="flex items-center text-lg">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="flex items-center text-lg">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="text-3xl">
          <Link className="link" to="/">
            LAMASTORE
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center text-lg">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="flex items-center text-lg">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="flex items-center text-lg">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="flex items-center text-lg">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="flex gap-4 cursor-pointer text-[#777]">
            <GrSearch size={20} />
            <BiUser size={20} />
            <MdFavoriteBorder size={20} />
            <div className="relative" onClick={() => setOpen(!open)}>
              <GrCart size={20} />
              <span className="text-base w-5 h-5 rounded-[50%] bg-orange-600 text-white absolute -right-2 -top-2 flex items-center justify-center">
                0
              </span>
              {/* <span>{products.length}</span> */}
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;

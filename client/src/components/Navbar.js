import React, { useState } from "react";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div>
      <div className="p-[10px_30px] flex items-center justify-between">
        <div className="text-xl sm:text-3xl font-semibold">
          <Link className="link" to="/">
            LAMASTORE
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4 cursor-pointer text-[#777]">
            <div className="relative" onClick={() => setOpen(!open)}>
              <GrCart size={20} />
              <span className="text-base w-5 h-5 rounded-[50%] bg-[#0000ff] text-white absolute -right-2 -top-2 flex items-center justify-center">
                {products.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;

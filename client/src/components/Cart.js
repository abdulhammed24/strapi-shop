import React from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, resetCart } from "../redux-rtk/cartReducer";
import { makeRequest } from "../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51KwtJ0LomSQbUOpk77KxrZIEufxWctnl1A9GOWd5smd10fmLSJPU5W9AR9dHX5Y5SgURtTCI7RsQ968eDp4JbcD0001tkOaSPj"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute right-5 top-20 z-50 bg-white p-5 shadow-[0px_0px_7px_-5px_#000]">
      <h1 className="mb-7 text-[#919090] text-lg font-semibold">
        Products in your cart
      </h1>
      {products?.map((item) => (
        <div className="flex items-center gap-5 mb-7" key={item?.id}>
          <img
            className="w-20 h-[100px] object-cover"
            src={process.env.REACT_APP_UPLOAD_URL + item?.img}
            alt=""
          />
          <div className="details">
            <h1 className="text-lg font-semibold">{item?.title}</h1>
            <p className="text-[#919090] mb-3 text-sm">
              {item?.desc?.substring(0, 100)}
            </p>
            <div className="text-[#0000ff]">
              {item?.quantity} x ${item?.price}
            </div>
          </div>
          <FaTrash
            size={20}
            className="text-[#ff0000] text-2xl cursor-pointer"
            onClick={() => dispatch(removeFromCart(item.id))}
          />
        </div>
      ))}
      <div className="flex justify-between  text-sm font-semibold mb-5">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button
        className="w-[250px] p-3 text-sm flex items-center justify-center gap-5 cursor-pointer border-none bg-[#0000ff] text-white font-semibold mb-5"
        onClick={handlePayment}
      >
        PROCEED TO CHECKOUT
      </button>
      <span
        className="text-[#ff0000] text-sm font-semibold cursor-pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;

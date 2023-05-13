import React from "react";
import { MdDeleteOutline } from "react-icons/md";
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
      <h1 className="mb-7 text-gray-300 text-2xl font-normal">
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
            <h1 className="text-lg font-medium">{item?.title}</h1>
            <p className="text-gray-300 mb-3 text-sm">
              {item?.desc?.substring(0, 100)}
            </p>
            <div className="text-orange-500">
              {item?.quantity} x ${item?.price}
            </div>
          </div>
          <MdDeleteOutline
            size={20}
            className="text-red-700 text-3xl cursor-pointer"
            onClick={() => dispatch(removeFromCart(item.id))}
          />
        </div>
      ))}
      <div className="flex justify-between font-medium text-lg mb-5">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button
        className="w-[250px] p-3 flex items-center justify-center gap-5 cursor-pointer border-none bg-orange-600 text-white font-normal mb-5"
        onClick={handlePayment}
      >
        PROCEED TO CHECKOUT
      </button>
      <span
        className="text-red-700 text-xs cursor-pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;

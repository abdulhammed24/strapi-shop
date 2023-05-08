import React from "react";

const Footer = () => {
  return (
    <div className="mx-[200px] mt-[100px] mb-5">
      <div className="flex gap-12">
        <div className="flex-1 flex flex-col gap-3 text-justify text-sm">
          <h1 className="text-base font-medium text-[#555]">Categories</h1>
          <span className="text-gray-500">Women</span>
          <span className="text-gray-500">Men</span>
          <span className="text-gray-500">Shoes</span>
          <span className="text-gray-500">Accessories</span>
          <span className="text-gray-500">New Arrivals</span>
        </div>
        <div className="flex-1 flex flex-col gap-3 text-justify text-sm">
          <h1 className="text-base font-medium text-[#555]">Links</h1>
          <span className="text-gray-500">FAQ</span>
          <span className="text-gray-500">Pages</span>
          <span className="text-gray-500">Stores</span>
          <span className="text-gray-500">Compare</span>
          <span className="text-gray-500">Cookies</span>
        </div>
        <div className="flex-1 flex flex-col gap-3 text-justify text-sm">
          <h1 className="text-base font-medium text-[#555]">About</h1>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-3 text-justify text-sm">
          <h1 className="text-base font-medium text-[#555]">Contact</h1>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-12">
        <div className="flex items-center">
          <span className="text-orange-700 font-bold text-xl">Lamastore</span>
          <span className="ml-5 text-xs text-gray-500">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="strapi-shop" className="h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

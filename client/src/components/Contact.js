import React from "react";
import { GrGoogle, GrInstagram, GrPinterest, GrTwitter } from "react-icons/gr";
import { MdFacebook } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-orange-700 text-white p-4 flex justify-center">
      <div className="w-1/2 flex items-center justify-between">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input
            className="p-[10px] rounded-tl-[5px] rounded-bl-[5px]"
            type="text"
            placeholder="Enter your e-mail..."
          />
          <button className="p-[10px] text-white bg-[#333] rounded-tr-[5px] rounded-br-[5px] ">
            JOIN US
          </button>
        </div>
        <div className="flex gap-[10px]">
          <MdFacebook size={20} />
          <GrInstagram size={20} />
          <GrTwitter size={20} />
          <GrGoogle size={20} />
          <GrPinterest size={20} />
        </div>
      </div>
    </div>
  );
};

export default Contact;

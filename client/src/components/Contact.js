import React from "react";
import { GrGoogle, GrInstagram, GrPinterest, GrTwitter } from "react-icons/gr";
import { MdFacebook } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-[#0000ff] text-white py-8 px-3 flex justify-center">
      <div className=" flex flex-col md:flex-row gap-5 items-center justify-between">
        <span className="text-sm md:text-base font-semibold">
          BE IN TOUCH WITH US:
        </span>
        <div className="h-12 flex justify-center items-center">
          <input
            className="p-[10px] rounded-tl-[5px] rounded-bl-[5px] h-12"
            type="text"
            placeholder="Enter your e-mail..."
          />
          <button className="p-[10px] text-white h-12 text-sm font-semibold bg-[#800080] rounded-tr-[5px] rounded-br-[5px] ">
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

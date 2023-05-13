import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 footer bg-[#d3d3d3]">
      <div className="container">
        <div className="text-xs sm:text-sm md:text-base">
          <div className="flex justify-center items-center flex-wrap gap-10 lg:justify-between  text-black text-center font-semibold">
            <div>
              © Copyright 2023, All rights reserved.{" "}
              <strong className="text-[#0000ff]">The-Store</strong>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <span>
                <span className="footer-links lg:hover:text-joyRibbons_pink transition-colors duration-200 ease-out">
                  Delivery Information
                </span>
              </span>
              <div>|</div>
              <span>
                <span className="footer-links lg:hover:text-joyRibbons_pink transition-colors duration-200 ease-out">
                  Terms &amp; Conditions
                </span>
              </span>
              <div>|</div>
              <span>
                <span className="footer-links lg:hover:text-joyRibbons_pink transition-colors duration-200 ease-out">
                  Privacy Policy
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

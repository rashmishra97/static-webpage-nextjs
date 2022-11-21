import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between ">
      <div className=" flex justify-start ml-10 item-center w-1/2  ">
        <div className=" pl-2 pt-6">
          <Image
            src="/logo.png"
            className="bg-gray-300 rounded-full mb-8"
            alt={""}
            height={80}
            width={80}
          />
        </div>

        <div className=" pt-6 pl-5  ">
          <h1 className="w-700 mt-2  font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-blue-900 ">
            THE TIME STACK
          </h1>
          <h1 className="text-white text-lg pl-1">TECHNOLOGY</h1>
        </div>
      </div>

      <div className=" text-yellow-50 flex  space-x-16 w-2/3 pt-14 font-source">
        <a href="#">Services</a>
        <a href="#">Verticals</a>
        <a href="#">Technologies</a>
        <a href="#">Partners</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;

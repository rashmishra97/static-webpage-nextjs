import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-around items-center  ">
      <div className="">
        <div className="  flex-col pb-4 justify-center items-center ">
          <div
            className="  font-medium font-source
           pl-20 space-x-3 text-5xl pt-20 text-yellow-50"
          >
            Accelerating Your
            <br /> Digital transformation
            <br /> Journey
          </div>

          <h1 className="text-yellow-50 pl-20 font pt-4 text-xl">
            Innovate. Optimize. Automate.
          </h1>
        </div>

        <div className="flex space-x-4 mt-40  pl-20">
          <Image
            src="/oracle_logo.png"
            alt="loading"
            className="w-9 h-9"
            width={100}
            height={100}
          ></Image>
          <Image
            src="/oracle_logo.png"
            className="w-9 h-9"
            alt=""
            width={100}
            height={100}
          ></Image>
          <Image
            src="/aws_logo.jfif"
            className="w-14 h-9"
            width={100}
            height={100}
            alt=""
          ></Image>
          <Image
            src="/digital.png"
            className="w-9 h-9"
            width={100}
            height={100}
            alt=""
          ></Image>
        </div>
      </div>

      <div className="pl-36  pt-5 w-1/2 flex text-center ">
        <Image src="/men.png" width={400} height={550} alt="" />
      </div>
    </div>
  );
};

export default Banner;

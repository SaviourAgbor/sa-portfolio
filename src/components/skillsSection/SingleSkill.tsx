import React from "react";

const SingleSkill = ({ text, imgSvg }) => {
  return (
    <div className="lg:hover:-translate-y-10 hover:-translate-y-2 transition-all duration-500 relative">
      <div className="flex flex-col items-center justify-center">
        <div className="pt-4 md:w-[100px] w-[100px] h-[100px] md:h-[100px] lg:bg-white rounded-full text-orange lg:text-cyan hover:text-darkGrey text-6xl md:text-6xl hover:scale-105 lg:border-4 lg:border-orange transition-all duration-500 flex align-center justify-center">
          {imgSvg}
        </div>
        <p className=" text-center text-white pt-4 text-md font-bold ">{text}</p>
        <div className="lg:-z-10 lg:h-[200px] lg:w-[100px] lg:bg-orange transition-all duration-2000 absolute top-[50px]"></div>
      </div>
    </div>
  );
};

export default SingleSkill;

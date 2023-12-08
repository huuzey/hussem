import React from "react";

const Satisfaction = (props) => {
  const { pic, title } = props;
  return (
    <div className="flex flex-col w-full items-stretch justify-evenly mr-3 gap-2 ">
      <img
        src={pic}
        alt="title"
        className="w-[80%] h-[80%]   rounded-3xl object-contain"
      />
      <button className="text-white border-2  sm:px-1 md:px-0 flex items-center  justify-center sm:text-[3px] md:text-[10px] sm:font-light md:font-semibold py-1 border-black bg-[#32a8a4]   rounded-full">
        {title}
      </button>
    </div>
  );
};

export default Satisfaction;

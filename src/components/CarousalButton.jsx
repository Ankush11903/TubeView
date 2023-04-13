import React, { useState } from "react";
import  { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";

function CarousalButton() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    setStartIndex(startIndex - 1);
  };
  const isSideBarShown = useSelector((state) => state?.side?.isSideBarShown);console.log("hey")
  console.log(isSideBarShown)
  
  

  return (
    <div className={`fixed  top-[54px] ${isSideBarShown ?'left-56':'left-5 '} ${isSideBarShown ?'':'right-5 '} z-40 bg-white  pt-3 pb-3 flex flex-nowrap  ${isSideBarShown && 'max-w-[1000px]'} ${!isSideBarShown && 'max-w-[1250px]'}  pl-5 overflow-x-hidden overflow-y-hidden`}>
      {(startIndex === 0 ?  '' :<div className="absolute inset-0 bg-white border border-red-900"><button
        className="shadow-2xl
         absolute z-10 top-1/2 -translate-x-2 left-2 bg-white text-gray-900 rounded-full p-3 transform -translate-y-1/2 hover:shadow-md focus:outline-none "
        onClick={handlePrev}
      >
        <AiOutlineLeft className="h-4 w-4 " />
        
      </button> <div className="absolute top-0 bottom-0 left-0 right-0 bg-white backdrop-filter backdrop-blur-md"></div></div>)}

      <button
        className="absolute z-10 top-1/2 right-2  bg-white text-gray-900 rounded-full p-3 transform -translate-y-1/2 hover:shadow-md focus:outline-none "
        onClick={handleNext}
      >
        <AiOutlineRight className="h-4 w-4 " />
        
      </button><div className="absolute inset-0 bg-white bg-opacity-100"></div>

      {/* <button
        className="absolute z-10 top-1/2 right-2 bg-white text-gray-900 rounded-full p-4 transform -translate-y-1/2 hover:shadow-md focus:outline-none"
        onClick={handleNext}
      >
        <AiOutlineRight className="h-6 w-6 " />
      </button> */}

      <span
        className="flex justify-evenly  transition-all duration-1000 ease-in-out "
        style={{ transform: `translateX(-${startIndex * 24}rem)` }}
      >
        {/* <h1 className="p-1 border border-red-900 mx-1">hello</h1> */}
        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          All
        </h1>
        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          Computer Programming
        </h1>

        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          Web Development
        </h1>
        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          Mobile Development
        </h1>
        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          Data Science
        </h1>
        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          Machine Learning
        </h1>
        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          Artificial Intelligence
        </h1>
        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          Cyber Security
        </h1>
        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          Cloud Computing
        </h1>
        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          Digital Marketing
        </h1>
        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          Graphic Design
        </h1>
        <h1 className="p-1 min-w-[50px] mx-2 flex justify-center items-center text-center whitespace-nowrap font-normal rounded-lg bg-zinc-100 hover:bg-zinc-300 border">
          Game Development
        </h1>
      </span>
    </div>
  );
}

export default CarousalButton;

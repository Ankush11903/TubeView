// shimmer component
// with tailwind css
import React from "react";

function Shimmer() {
  return (
    <>
      <div className="flex flex-wrap justify-between  ">
        {Array(16)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className=" animate-pulse w-[222px] h-[220px] p-3 m-5 border border-slate-200 rounded-md bg-[#fdfdfd]"
            >
              <div className="animate-pulse w-full h-[135px] border border-neutral-300 rounded-md bg-gray-100"></div>
              <div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <div className="animate-pulse w-8 h-8 rounded-full bg-gray-200"></div>
                    <div className="ml-2">
                      <div className="animate-pulse w-40 h-3 bg-gray-200 rounded-sm"></div>
                   
                      <p className="leading-relaxed mt-3 w-2/3 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
                      <p className="leading-relaxed mt-1 mb-2 w-full h-3 animate-pulse bg-gray-200 rounded-sm"></p>

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Shimmer;

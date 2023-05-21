// shimmer component
// with tailwind css
import React from "react";

function SearchShimmer() {
  return (
    <>
      <div className="ml-64 pt-16">
        {Array(16)
          .fill("")
          .map((e, index) => (
            <div className="flex">
              {/* <div className="mt-2 align-top animate-pulse  border border-slate-200 rounded-md bg-[#fdfdfd]"></div> */}
              <div className="mt-4 w-80 animate-pulse  border border-slate-200 rounded-md bg-[#fdfdfd] h-40"></div>
              <div className="pl-6 pt-8">
                <div className="animate-pulse w-[35rem]  h-7 bg-gray-200 rounded-lg"></div>
                <div className="mt-2 animate-pulse w-[20rem]  h-4 bg-gray-200 rounded-lg"></div>
                <div className="flex">
                  
                  <div className="mt-2 animate-pulse w-8 h-8 rounded-full bg-gray-200"></div>
                  <div className="mt-4 ml-4 align-middle  animate-pulse w-[20rem]  h-4 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="mt-4 animate-pulse w-[30rem]  h-3 bg-gray-200 rounded-lg"></div>
                
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchShimmer;

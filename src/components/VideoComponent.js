import React, { useState } from "react";
// import VideoPlayer from "./VideoPlayer";
import { Link } from "react-router-dom";

export default function VideoComponent( {data} ) {
  console.log(data)
  const [hoveredItems, setHoveredItems] = useState({});

  const handleMouseEnter = (videoId) => {
    setHoveredItems((prev) => ({ ...prev, [videoId]: true }));
  };

  const handleMouseLeave = (videoId) => {
    setHoveredItems((prev) => ({ ...prev, [videoId]: false }));
  };
  // console.log("hoveredItems")
  // console.log(data);
  return (
    
    <div className="flex flex-wrap">
      {data?.map((item) => (
        <Link to={"/watch?v="+item.videoId} ><div
          key={item.videoId}
          className="w-[250px] relative py-2 break-words"
          onMouseEnter={() => handleMouseEnter(item.videoId)}
          onMouseLeave={() => handleMouseLeave(item.videoId)}
        >
          <div className="p-2 rounded-md hover:shadow-xl hover:border hover:border-zinc-300">
            {/* {console.log(item?.richThumbnail && item?.richThumbnail[0]?.url)} */}
            <img
              className="w-56 rounded-lg"
              src={
                hoveredItems[item.videoId]
                  ? item?.richThumbnail ? item?.richThumbnail[0]?.url : item?.thumbnail && item?.thumbnail[0]?.url
                  : Object.keys(item?.thumbnail || {}).length > 1 ? item?.thumbnail[1]?.url : item?.thumbnail && item?.thumbnail[0]?.url

              }
              alt="title"
            />
            <div className="absolute top-[7.6rem] left-[12rem] rounded-lg text-xs px-[0.3rem]  bg-black text-white z-10">{item.lengthText}</div>

            <div className="flex pt-2">
              <img
                className="w-8 h-8 rounded-full mr-4"
                src={item?.channelThumbnail?.[0]?.url}
                alt=""
              />
              <div>
                <h1
                  className="font-medium text-sm"
                  style={{
                    lineHeight: "1.2em",
                    maxHeight: "3.6em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item?.title}
                </h1>
                <h6 className="font-[400] pt-2 text-[#262626] text-[0.7rem]">
                  {item?.channelTitle}
                </h6>
                <h6 className="font-[400] text-[#232323] text-[0.6rem]">
                 {item?.viewCount > 1000000000000 ? (item?.viewCount / 1000000000000).toFixed(1) + "T " : 
                 item?.viewCount > 1000000000 ? (item?.viewCount / 1000000000).toFixed(1) + "B " :
                 item?.viewCount >= 1000000 ? (item?.viewCount % 1000000 < 100000 )?(item?.viewCount / 1000000).toFixed(0) + "M " :  (item?.viewCount / 1000000).toFixed(1) + "M " : 
                 item?.viewCount > 1000 ? (item?.viewCount / 1000).toFixed(1) + "K " : 
                 
                  
                   
                   item.viewCount
                  }
                  views • {item?.publishedTimeText}
                </h6>
                {/* <h6 className="font-[150] text-[#232323] text-[0.6rem]"></h6> */}
                {/* <VideoPlayer /> */}
              </div>
            </div>
          </div>
        </div></Link>
      ))}
    </div>
  );
}

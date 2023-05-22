import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";
import { useGetSearchVideosQuery } from "../utils/callApi.jsx";
import { Link } from "react-router-dom";
import SearchShimmer from "./SearchShimmer.jsx";

export default function SearchPlayer() {
  const [hoveredItems, setHoveredItems] = useState({});

  const handleMouseEnter = (videoId) => {
    setHoveredItems((prev) => ({ ...prev, [videoId]: true }));
  };

  const handleMouseLeave = (videoId) => {
    setHoveredItems((prev) => ({ ...prev, [videoId]: false }));
  };
  // const search = useSelector(selectSearch)
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search_query");
  const { data, loading, error,isFetching } = useGetSearchVideosQuery(search);
  // const [video,setVideo]=React.useState([]);
  // setVideo(data);
  console.log(data);
  

  return (
    isFetching ? <SearchShimmer /> :
    <div className="ml-64 pt-16">
      {/* <h1 className="text-2xl font-bold">Related Videos</h1> */}
      {data?.data?.map((item) => (
        (item.type=="video")?
        <Link to={"/watch?v=" + item.videoId} onClick={()=>console.log("fucked")}>
          <div
            key={item?.id}
            onMouseEnter={() => handleMouseEnter(item.videoId)}
            onMouseLeave={() => handleMouseLeave(item.videoId)}
          >
            <div className="flex mt-2 align-top">
              <img
                className="w-96 rounded-lg"
                src={
                  hoveredItems[item.videoId]
                    ? item?.richThumbnail
                      ? item?.richThumbnail[0]?.url
                      : item?.thumbnail && item?.thumbnail[0]?.url
                    : Object.keys(item?.thumbnail || {}).length > 1
                    ? item?.thumbnail[1]?.url
                    : item?.thumbnail && item?.thumbnail[0]?.url
                }
                alt="title"
              />
              <div className="ml-4 w-full">
                <h1
                  className="font-normal text-2xl"
                  style={{
                    lineHeight: "1em",
                    maxHeight: "2em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item?.title}
                </h1>
                <p className="text-sm text-gray-500 my-2">
                  {item?.viewCount > 1000000000000
                    ? (item?.viewCount / 1000000000000).toFixed(1) + "T "
                    : item?.viewCount > 1000000000
                    ? (item?.viewCount / 1000000000).toFixed(1) + "B "
                    : item?.viewCount >= 1000000
                    ? item?.viewCount % 1000000 < 100000
                      ? (item?.viewCount / 1000000).toFixed(0) + "M "
                      : (item?.viewCount / 1000000).toFixed(1) + "M "
                    : item?.viewCount > 1000
                    ? (item?.viewCount / 1000).toFixed(1) + "K "
                    : item.viewCount}
                  views • {item?.publishedTimeText}
                </p>
                <div className="flex">
                  <img
                    className="rounded-full w-8 h-8"
                    src={ item?.channelThumbnail && item?.channelThumbnail[0]?.url }
                    alt="channel"
                  />
                  <p className="text-xs pl-2 pt-2 text-gray-500">
                  {item?.channelTitle}
                </p>

                </div>
                <p className="text-sm text-gray-500 my-2 flex-wrap"
                // className="font-medium text-sm"
                
                >
                  {item?.description}
                </p>
                
              </div>
            </div>
          </div>
        </Link>:
        (item.type=="channel")?






        <Link to={item.channelTitle} onClick={()=>console.log("ChannelTitle")}>
          
            <div className="flex items-center">
              <img
                className="w-96 mx-16 rounded-lg"
                src={Object.keys(item?.thumbnail || {}).length > 1 ? item?.thumbnail[1]?.url
                    : item?.thumbnail[0] && item?.thumbnail[0]?.url
                }
                alt="title"
              />
              <div className="ml-4  w-full align-middle pl-5">
                <h1
                  className="font-normal text-2xl"
                  style={{
                    lineHeight: "1em",
                    maxHeight: "2em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item?.channelTitle}
                </h1>
                <p className="text-sm text-gray-500 my-2">
                  {item?.subscriberCount > 1000000000000
                    ? (item?.subscriberCount / 1000000000000).toFixed(1) + "T "
                    : item?.subscriberCount > 1000000000
                    ? (item?.subscriberCount / 1000000000).toFixed(1) + "B "
                    : item?.subscriberCount >= 1000000
                    ? item?.subscriberCount % 1000000 < 100000
                      ? (item?.subscriberCount / 1000000).toFixed(0) + "M     "
                      : (item?.subscriberCount / 1000000).toFixed(1) + "M   "
                    : item?.subscriberCount > 1000
                    ? (item?.subscriberCount / 1000).toFixed(1) + "K "
                    : item.subscriberCount}
                         {" "}subscribers 
                </p>
                
                <p className="text-sm text-gray-500 my-2 flex-wrap w-[70%]"
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
                  {item?.description}
                </p>
                
              </div>
            </div>
          {/* </div> */}
        </Link>:<></>



//shorts





      ))}
    </div>
  );
}

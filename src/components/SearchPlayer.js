import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";
import { useGetSearchVideosQuery } from "../utils/callApi.jsx";
import { Link } from "react-router-dom";

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
  const { data, loading, error } = useGetSearchVideosQuery(search);
  // const [video,setVideo]=React.useState([]);
  // setVideo(data);
  console.log(data);

  return (
    <div className="ml-64">
      {/* <h1 className="text-2xl font-bold">Related Videos</h1> */}
      {data?.data?.map((item) => (
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
                
                >
                  {item?.description}
                </p>
                
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
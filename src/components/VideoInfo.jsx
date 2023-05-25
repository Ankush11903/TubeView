import React, { useEffect, useState } from "react";
import VideoComponent from "./VideoComponent";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import {
  useGetSearchVideosQuery,
  useGetTrendingVideosQuery,
  useGetHomeVideosQuery
} from "../utils/callApi";

function VideoInfo() {
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isSideBarShown= useSelector((state) => state?.side?.isSideBarShown);
  const Selector = useSelector((state) => state?.video.video);

  const { data,  isError ,isFetching} =
    Selector === "trending"
      ? useGetTrendingVideosQuery()
      : Selector === "home"?useGetHomeVideosQuery(): useGetSearchVideosQuery(Selector);

  useEffect(() => {
    const fetchVideoData = async () => {
      setIsLoading(true);
      const videoData = await data;
      console.log("video")
      console.log(videoData);
      setVideo(videoData?.data?.filter((item) => item?.type === "video"));
      setIsLoading(false);
    };

    fetchVideoData();
  }, [Selector, data]);

  console.log(isLoading);

  return (
    <div className={`${isSideBarShown ?'ml-56':'ml-5 '} mt-28 `}>
      {isFetching ? (
        <Shimmer />
      ) : (
        <VideoComponent key={video?.videoId} data={video} />
      )}
    </div>
  );
}

export default VideoInfo;

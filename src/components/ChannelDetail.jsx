import React, { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import { AiTwotoneLike } from "react-icons/Ai";
import { AiTwotoneDislike } from "react-icons/Ai";
import VideoDescription from "./VideoDescription";

export default function ChannelDetail({ videoId }) {
  const [data, setData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  console.log("my name is ankush")

  useEffect(() => {
    console.log("api cwalling")
    callApi();
  }, [videoId]);

  useEffect(() => {
    if (data) {
      console.log("dcpadsvihdsaiuvhu09dhu9hdh")
      callApi2();
    }
  }, [data]);

  const callApi = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyAmg8F2nyyOqa5T4Yz-pJg5iQi6jQpYxuE&id=UCViPmftRQIxoaVmlAfPTgdQ`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const callApi2 = async () => {
    try {
      const channelId = data?.items?.[0]?.snippet?.channelId;
      if (channelId) {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyAmg8F2nyyOqa5T4Yz-pJg5iQi6jQpYxuE&id=UCViPmftRQIxoaVmlAfPTgdQ`
        );
        const channelData = await response.json();
        setChannelData(channelData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(data);
  const description=data?.items?.[0]?.snippet?.description;

  return (
    <div className="flex  pt-2 flex-col  w-[48rem] break-words">
      <div>
        <h1
          className="ml-1 items-center font-medium "
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {data?.items?.[0]?.snippet?.title}
        </h1>
      </div>
      <div className="flex items-center mt-2">
        <img
          className="rounded-full w-9 h-9"
          src={channelData?.items?.[0]?.snippet?.thumbnails?.high?.url}
          alt="img"
        />

        <div className="flex flex-col">
          <h1
            className="ml-3 items-center font-medium "
            style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            {channelData?.items?.[0]?.snippet?.title}
          </h1>
          <h1 className="ml-3 items-center font-extralights text-gray-600 text-xs">
            {/* {channelData?.items?.[0]?.statistics?.subscriberCount} */}
            {channelData?.items?.[0]?.statistics?.subscriberCount >
            1000000000000
              ? (
                  channelData?.items?.[0]?.statistics?.subscriberCount /
                  1000000000000
                ).toFixed(1) + "T "
              : channelData?.items?.[0]?.statistics?.subscriberCount >
                1000000000
              ? (
                  channelData?.items?.[0]?.statistics?.subscriberCount /
                  1000000000
                ).toFixed(1) + "B "
              : channelData?.items?.[0]?.statistics?.subscriberCount >= 1000000
              ? channelData?.items?.[0]?.statistics?.subscriberCount % 1000000 <
                100000
                ? (
                    channelData?.items?.[0]?.statistics?.subscriberCount /
                    1000000
                  ).toFixed(0) + "M "
                : (
                    channelData?.items?.[0]?.statistics?.subscriberCount /
                    1000000
                  ).toFixed(1) + "M "
              : channelData?.items?.[0]?.statistics?.subscriberCount > 1000
              ? (
                  channelData?.items?.[0]?.statistics?.subscriberCount / 1000
                ).toFixed(1) + "K "
              : channelData?.items?.[0]?.statistics?.subscriberCount}{" "}
            subscribers
          </h1>
        </div>

        <button className="bg-black text-white font-normal rounded-full ml-8 px-[0.87rem] py-[0.40rem]">
          Subscribe
        </button>

        <div className="flex bg-zinc-200 hover:bg-zinc-300 rounded-full p-2 ml-36">
          {like === true ? (
            <AiTwotoneLike
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                setLike(false), setDislike(false);
              }}
            />
          ) : (
            <BiLike
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                setLike(true), setDislike(false);
              }}
            />
          )}

          <h1
            className="px-3 h-full items-center font-medium  border border-r-zinc-500 cursor-pointer"
            onClick={() => {
              like == true
                ? setLike(false)
                : (setLike(true), setDislike(false));
            }}
          >
            {/* {data?.items?.[0]?.statistics?.likeCount} */}
            {data?.items?.[0]?.statistics?.likeCount > 1000000000000
              ? (
                  data?.items?.[0]?.statistics?.likeCount / 1000000000000
                ).toFixed(1) + " T "
              : data?.items?.[0]?.statistics?.likeCount > 1000000000
              ? (data?.items?.[0]?.statistics?.likeCount / 1000000000).toFixed(
                  1
                ) + " B "
              : data?.items?.[0]?.statistics?.likeCount >= 1000000
              ? data?.items?.[0]?.statistics?.likeCount % 1000000 < 100000
                ? (data?.items?.[0]?.statistics?.likeCount / 1000000).toFixed(
                    0
                  ) + " M "
                : (data?.items?.[0]?.statistics?.likeCount / 1000000).toFixed(
                    1
                  ) + " M "
              : data?.items?.[0]?.statistics?.likeCount > 1000
              ? (data?.items?.[0]?.statistics?.likeCount / 1000).toFixed(0) +
                " K "
              : data?.items?.[0]?.statistics?.likeCount}
          </h1>
          {dislike === true ? (
            <AiTwotoneDislike
              className="w-6 h-6 ml-3 cursor-pointer"
              onClick={() => {
                setDislike(false), setLike(false);
              }}
            />
          ) : (
            <BiDislike
              className="w-6 h-6 ml-3 cursor-pointer"
              onClick={() => {
                setDislike(true), setLike(false);
              }}
            />
          )}
          {/* // <BiDislike className=" w-6 h-6 ml-3" /> */}
        </div>

        <div className="flex bg-zinc-200 rounded-full p-2 ml-2">
          <RiShareForwardLine className="w-8 h-6 pr-2 " />
          Share
        </div>
        <div className="flex bg-zinc-200 rounded-full p-2 ml-2 ">
          <TfiDownload className="w-6 h-6 pr-2" />
          Download
        </div>
      </div>
      <VideoDescription description={description} views={data?.items?.[0]?.statistics?.viewCount} />
    </div>
  );
}

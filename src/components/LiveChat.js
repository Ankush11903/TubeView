import React, { useState } from "react";
import { liveData } from "../utils/ChatSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {liveChatData} from "../config";

export default function LiveChat() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const liveChat = useSelector((state) => state?.chat?.Data);
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  useEffect(() => {
    console.log(liveChat);

    const chatApi = async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,snippet&id=${videoId}&key=AIzaSyAmg8F2nyyOqa5T4Yz-pJg5iQi6jQpYxuE&id=UCViPmftRQIxoaVmlAfPTgdQ`
      );
      const data = await res.json();
      console.log("data");
      console.log(data);
      if (data?.items[0]?.liveStreamingDetails?.activeLiveChatId) {
        const chatRes = await fetch(
          `https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${data?.items[0]?.liveStreamingDetails?.activeLiveChatId}&part=snippet,authorDetails&key=AIzaSyAmg8F2nyyOqa5T4Yz-pJg5iQi6jQpYxuE&id=UCViPmftRQIxoaVmlAfPTgdQ`
        );
        const chatData = await chatRes.json();
        console.log("chatData");
        console.log(chatData);
        chatData.items.map((item) => {
          dispatch(
            liveData({
              image: item?.authorDetails?.profileImageUrl,
              name: item?.authorDetails?.displayName,
              message: item?.snippet?.displayMessage,
            })
          );
        });
      } else {
        console.log("no live chat");
        
          const randomIndex = Math.floor(Math.random() * liveChatData.items.length);
          const randomItem = liveChatData.items[randomIndex];
          console.log("randomItem")
          console.log(randomItem)
          dispatch(
            liveData({
              image: randomItem?.authorDetails?.profileImageUrl,
              name: randomItem?.authorDetails?.displayName,
              message: randomItem?.snippet?.displayMessage,
            })
          );

      }
    };
    const i = setInterval(() => {
      chatApi();
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="w-full h-full  rounded-lg border border-black ">
      <div className="w-full h-10   p-2 font-medium text-base">Live Chat</div>
      <div className="border boder-black h-72 overflow-y-scroll flex flex-col-reverse">
        {liveChat?.map((item) => (
          <div className="flex items-center rounded-md hover:bg-[#86878444]">
          <div className="flex items-center py-[0.3rem] min-w-[10]">
            <img
              className="w-6 ml-3 h-6 rounded-full cursor-pointer"
              src={item?.image}
              alt="User"
            />
          </div>
          <div className="pl-3 text-sm font-normal text-gray-500 flex items-center min-w-[50] ">
            {item?.name}
          </div>
          <p
            className="ml-2 text-sm font-normal whitespace-normal max-w-[200]"
            style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
          >
            {item?.message}
          </p>
        </div>
        
        ))}
      </div>
      <div>
        <div>
          <div className="flex items-center mt-2 ">
            <img
              className="w-6 ml-3 h-6 rounded-full cursor-pointer"
              src="https://yt3.ggpht.com/ytc/AGIKgqOpL8_k8PB8B8iWyCnF4DFIFZJa6_4lyClNdukjATCtGW1b5Kcsm2Jb5VRGZ1rr=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="User"
            />
            <span className="font-semibold text-xs">Ankush Kumar</span>
            <form
              className="flex"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  liveData({
                    image:
                      "https://yt3.ggpht.com/ytc/AGIKgqOpL8_k8PB8B8iWyCnF4DFIFZJa6_4lyClNdukjATCtGW1b5Kcsm2Jb5VRGZ1rr=s88-c-k-c0x00ffffff-no-rj-mo",
                    name: "Ankush",
                    message: comment,
                  })
                );
                e.target.value = "";
                setComment("");
              }}
            >
              <input
                className="w-48 h-7 ml-4 rounded-md border border-gray-400 font-light text-black text-xs pl-2"
                type="text"
                placeholder="Chat publicly as ankush kumar..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="ml-5 p-1 bg-green-100 rounded-lg text-sm font-semibold text-gray-500">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

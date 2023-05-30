import React, { useEffect, useState } from "react";

export default function ChannelDetail({ videoId }) {
  const [data, setData] = useState(null);
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    if (data) {
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

  return (
    <div className="flex items-center">
      <div>
        <img
          className="rounded-full w-9 h-9"
          src={channelData?.items?.[0]?.snippet?.thumbnails?.high?.url}
          alt="img"
        />
      </div>
      <h1 className="ml-3 items-center">
        {data?.items?.[0]?.snippet?.videoTitle}
      </h1>
    </div>
  );
}

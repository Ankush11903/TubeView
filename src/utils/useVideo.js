import { useEffect, useState } from "react";

export const useVideo = () => {
  const [video, setVideo] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9ebcb246e2msh74898c09d833210p128b76jsnf7b9d8e09c77",
      "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
    },
  };

  const callApi = async () => {
    console.log("calling api");
    const response = await fetch(
      "https://yt-api.p.rapidapi.com/trending?geo=IN&category=Music&count=50",
      options
    );
    const data = await response.json();
    console.log("data")
    console.log(data);
    const dataArray = Object.entries(data);
    setVideo(dataArray[0][1]?.filter((item) => item.type === "video"));
  };
  callApi();

  return video;
};

import React from "react";
import { useEffect, useState } from "react";
import VideoComponent from "./VideoComponent";
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
import Shimmer from "./Shimmer";


function VideoInfo() {
  // adding shimmer effect when fetching from api
  const [loading, setLoading] = useState(false);


  const [video, setVideo] = useState([]);
  const Selector = useSelector((state) => state?.video.video);
  console.log("selector")
  console.log(Selector)
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9ebcb246e2msh74898c09d833210p128b76jsnf7b9d8e09c77",
      "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
    },
  };
  

  const callApi = async () => {
    setLoading(true);
    console.log("calling api");
    if(Selector === 'trending') {
      // console.log("new")
        const response = await fetch(
            "https://yt-api.p.rapidapi.com/trending?geo=IN&count=50",
            options
          );
          const data = await response.json();
          // console.log("data");
          // console.log(data.data?.filter(item => item.type === 'video'));
          // const dataArray = Object.entries(data);
          // setVideo(dataArray?.filter((item) => item.type === 'video'));
          setVideo(data.data?.filter(item => item.type === 'video'));
          // console.log(dataArray?.filter((item) => item.type === 'video'));
    }
    else {
      console.log("else")
      console.log(Selector)
        const response = await fetch(
          
          `https://yt-api.p.rapidapi.com/search?query=${Selector}&geo=IN&count=50`,
            options
          );
          const data = await response.json();
          // console.log(data);
          // console.log(data.data);
          // const dataArray = Object.entries(data.data);
          // console.log(dataArray?.filter((item) => item[1].type==='video' ))

          setVideo(data.data?.filter(item => item.type === 'video') );
    }


    

    setLoading(false);
    // setVideo(data?.filter((item) => item.type === 'video'));
    // setVideo((prev) => [...prev, ...data[50]?.data]);
    // console.log(data);
  };

  useEffect(() => {
    
    callApi();
    
  }, [Selector]);

  return (
    <div className="ml-56 mt-28">
      {console.log(video)}
      {
        loading ? <Shimmer /> : <VideoComponent key={video?.videoId} data={video} />
      }
      {/* <VideoComponent key={video?.videoId} data={video} />
      <Shimmer /> */}
    </div>
  );
}

export default VideoInfo;

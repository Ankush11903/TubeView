import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetSide } from "../utils/SideSlice";
import { useSelector } from "react-redux";
import { useGetCommentsQuery } from "../utils/callApi.jsx";

export default function VideoPlayer() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const isSideBarShown = useSelector((state) => state?.side?.isSideBarShown);
  
  const {data, error, isLoading} = useGetCommentsQuery(searchParams.get("v"));
  console.log("data");
  console.log(data);

  useEffect(() => {
    console.log("isSideBarShown");
    // getComments();
    
    dispatch(SetSide(false));
    return () => {
      dispatch(SetSide(true));
    };
  }, []);

  return (
    <div className={`${isSideBarShown?'ml-60' : 'ml-[4.2rem]'} mt-20`}>
       <iframe
        className="w-[790px] h-[450px]"
        width="560"
        height="315"
        title="YouTube video player"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> 
      <div>
        <h1 className="text-2xl font-bold mt-4">Comments</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {data?.data?.map((item) => (
              <div key={item?.id}>
                <div className="flex items-center mt-4">
                  <img

                    className="w-10 h-10 rounded-full"
                    src={item?.authorThumbnail[0]?.url}
                    alt=""
                  />
                  <div className="ml-4">
                    <h1 className="font-bold">{item?.author?.name}</h1>
                    <p className="text-sm text-gray-500">
                      {item?.authorText}
                    </p>
                    <p>
                      {item?.textDisplay}
                    </p>
                    <p>{item?.likesCount} likes</p>
                    <p>{item?.publishDate} </p>
                  </div>
                </div>
              </div>))}
            </div>)}
                    

      </div>
    </div>
  );
}

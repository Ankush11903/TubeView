import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetSide } from "../utils/SideSlice";
import { useSelector } from "react-redux";
import {
  useGetCommentsQuery,
  useGetRelatedVideosQuery,
  useGetVideoInfoQuery,
} from "../utils/callApi.jsx";
import { BiLike, BiDislike } from "react-icons/Bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { liveData } from "../utils/ChatSlice";

export default function VideoPlayer() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const isSideBarShown = useSelector((state) => state?.side?.isSideBarShown);
  const liveChat = useSelector((state) => state?.chat?.Data);

  const { data, error, isLoading } = useGetCommentsQuery(searchParams.get("v"));
  const result = useGetVideoInfoQuery(searchParams.get("v"));
  console.log("result");
  console.log(result);
  const getRelatedVideos = useGetRelatedVideosQuery(searchParams.get("v"));
  // console.log("getRelatedVideos");
  // console.log(getRelatedVideos);
  // console.log("data");
  // console.log(data);

  const [hoveredItems, setHoveredItems] = useState({});

  const handleMouseEnter = (videoId) => {
    setHoveredItems((prev) => ({ ...prev, [videoId]: true }));
  };

  const handleMouseLeave = (videoId) => {
    setHoveredItems((prev) => ({ ...prev, [videoId]: false }));
  };

  useEffect(() => {
    console.log("isSideBarShown");
    // getComments();

    dispatch(SetSide(false));
    return () => {
      dispatch(SetSide(true));
    };
  }, []);

  return (
    <div className={`${isSideBarShown ? "ml-60" : "ml-[4.2rem]"} mt-20 flex`}>
      <div className="">
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
          <h1 className="text-base font-normal mt-4">
            {data?.commentsCount} Comments
          </h1>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {data?.data?.map((item) => (
                <div key={item?.id}>
                  <div className="flex items-center mt-6 w-[750px]">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={item?.authorThumbnail[0]?.url}
                      alt=""
                    />
                    <div className="ml-4">
                      <div className="flex">
                        <h1 className="font-semibold text-xs">
                          @{item?.authorText}
                        </h1>
                        <p className="pl-2 text-xs text-gray-500">
                          {item?.publishedTimeText}
                        </p>
                      </div>

                      <p className="text-sm font-light">{item?.textDisplay}</p>
                      <div className="flex">
                        <BiLike
                          className="mt-2 text-zinc-600 cursor-pointer"
                          style={{ fontSize: "20px" }}
                        />

                        <p className="pt-[0.70rem] text-xs text-gray-800 pl-1 font-light">
                          {item?.likesCount}
                        </p>

                        <BiDislike
                          className="mt-2 text-zinc-600 cursor-pointer ml-3"
                          style={{ fontSize: "20px" }}
                        />

                        <p className="font-semibold text-xs  ml-7 cursor-pointer mt-2">
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-96 p-2">
        <div className="w-full h-full  rounded-lg border border-black">
        <div className="w-full h-10   p-2 font-medium text-base">
          Live Chat
        </div>
        <div className="border boder-black h-72">
          <h1 className="text-2xl font-bold mt-4">{
          console.log("result")}
          {console.log(liveChat)}</h1>
        </div>
        <div>
          <div>
            <div className="flex items-center mt-2">
            <img
          className="w-6 ml-3 h-6 rounded-full cursor-pointer"
          src="https://yt3.ggpht.com/ytc/AGIKgqOpL8_k8PB8B8iWyCnF4DFIFZJa6_4lyClNdukjATCtGW1b5Kcsm2Jb5VRGZ1rr=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="User"
        />
        <span className="font-semibold text-xs">Ankush Kumar</span>
        <form className="flex" onSubmit={(e)=>{
          e.preventDefault();
          dispatch(liveChat({name:"ankush",message:"1234"}));
          e.target[0].value="";

        }}>
        <input
          className="w-48 h-7 ml-4 rounded-md border border-gray-400 font-light text-black text-xs pl-2"
          type="text"
          placeholder="Chat publicly as ankush kumar..."
          
        />
        <button className="mx-1 bg-green-100 rounded-lg text-sm font-semibold text-gray-500">Send</button>


        </form>
</div>

          </div>
        </div>
        </div>
        
        <div className="ml-4">
          <h1 className="text-2xl font-bold">Related Videos</h1>
          {getRelatedVideos?.data?.data?.map((item) => (
            <Link to={"/watch?v=" + item.videoId}>
              <div key={item?.id}>
                <div
                  className="flex items-center mt-2"
                  onMouseEnter={() => handleMouseEnter(item.videoId)}
                  onMouseLeave={() => handleMouseLeave(item.videoId)}
                >
                  <img
                    className="w-56 rounded-lg"
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
                  <div className="ml-4 w-52">
                    <h1
                      className="font-semibold text-xs"
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
                    <p className="text-xs pt-2 text-gray-500">
                      {item?.channelTitle}
                    </p>
                    <p className="text-xs text-gray-500">
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

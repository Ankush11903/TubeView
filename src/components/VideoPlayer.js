import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetSide } from "../utils/SideSlice";
import { useSelector } from "react-redux";

export default function VideoPlayer() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const isSideBarShown = useSelector((state) => state.side.isSideBarShown);

  useEffect(() => {
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
        allowfullscreen
      ></iframe>
    </div>
  );
}

import React ,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import { setVideoState } from "../utils/VideoSlice";
import { Navigate, useNavigate } from "react-router-dom";

const SideBar = () => {
  const isSideBarShown = useSelector((state) => state?.side?.isSideBarShown);
  const dispatch = useDispatch();
  const [hoverItem, setHoverItem] = useState("trending");
  const navigate=useNavigate();


  return (
    isSideBarShown && (
      <div
        className={`fixed  top-[56px] bg-white flex flex-col w-56 overflow-hidden  h-[88vh] mt-3   scrollbar-thin scrollbar-thumb-[#383131] scrollbar-track-[#66646144] hover:overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full  transition duration-500 ease-in-out transition-delay-500 scrollbar-thumb`}
      >
          <div className={`flex w-48 ml-2  rounded-xl   hover:bg-[#f2f1f1] ${hoverItem==="home"?'bg-[#efeeec] border rounded-xl':'bg-white'} cursor-pointer`}
          onClick={()=> dispatch(setVideoState("Home"),setHoverItem("home"),navigate('/'))} >
            <svg
              className="ml-4 w-5"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <g>
                <path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
              </g>
            </svg>

            {/* <svg  className='w-6' viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><g ><path d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z" ></path></g></svg> */}
            <h1 className=" font-[500] text-[0.8rem] ml-6 py-[0.5rem]">Home</h1>
          </div>
        <div
          className={`cursor-pointer flex w-48 ml-2   hover:bg-[#f2f1f1] ${hoverItem==="shorts"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("Shorts"),setHoverItem("shorts"),navigate('/'))}
        >
          {/* <svg c viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g ><path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z" ></path></g></svg> */}
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g height="24" viewBox="0 0 24 24" width="24">
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
            </g>
          </svg>
          {/* <svg className='w-6 ' viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><g height="24" viewBox="0 0 24 24" width="24" ><path d="M17.77 10.32c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z" ></path></g></svg> */}
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Shorts</h1>
        </div>
        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="trending"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("trending"),setHoverItem("trending"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M14.72,17.84c-0.32,0.27-0.83,0.53-1.23,0.66c-1.34,0.33-2.41-0.34-2.62-0.46c-0.21-0.11-0.78-0.38-0.78-0.38 s0.35-0.11,0.41-0.13c1.34-0.54,1.89-1.24,2.09-2.11c0.2-0.84-0.16-1.56-0.31-2.39c-0.12-0.69-0.11-1.28,0.12-1.9 c0.02-0.05,0.12-0.43,0.12-0.43s0.11,0.35,0.13,0.41c0.71,1.51,2.72,2.18,3.07,3.84c0.03,0.15,0.05,0.3,0.05,0.46 C15.8,16.3,15.4,17.26,14.72,17.84z M12.4,4.34c-0.12,0.08-0.22,0.15-0.31,0.22c-2.99,2.31-2.91,5.93-2.31,8.55l0.01,0.03l0.01,0.03 c0.06,0.35-0.05,0.7-0.28,0.96c-0.24,0.26-0.58,0.41-0.95,0.41c-0.44,0-0.85-0.2-1.22-0.6c-0.67-0.73-1.17-1.57-1.5-2.46 c-0.36,0.77-0.75,1.98-0.67,3.19c0.04,0.51,0.12,1,0.25,1.43c0.18,0.6,0.43,1.16,0.75,1.65c1.05,1.66,2.88,2.82,4.78,3.05 c0.42,0.05,0.85,0.08,1.26,0.08c1.34,0,3.25-0.27,4.74-1.57c1.77-1.56,2.35-3.99,1.44-6.06c-0.04-0.1-0.06-0.14-0.09-0.19 l-0.04-0.08c-0.21-0.42-0.47-0.81-0.75-1.14c-0.24-0.3-0.48-0.56-0.79-0.83c-0.3-0.27-0.64-0.51-1-0.77 c-0.46-0.33-0.93-0.67-1.38-1.09C12.98,7.83,12.3,6.11,12.4,4.34 M14.41,2c0,0-0.2,0.2-0.56,0.99c-0.66,1.92-0.15,3.95,1.34,5.39 c0.73,0.69,1.61,1.17,2.36,1.84c0.32,0.29,0.62,0.59,0.89,0.93c0.36,0.42,0.66,0.89,0.91,1.38c0.05,0.1,0.1,0.2,0.14,0.3 c1.12,2.55,0.36,5.47-1.73,7.31C16.23,21.47,14.22,22,12.22,22c-0.47,0-0.95-0.03-1.41-0.09c-2.29-0.28-4.42-1.66-5.63-3.57 c-0.39-0.6-0.68-1.26-0.88-1.93c-0.16-0.54-0.25-1.1-0.29-1.67c-0.12-1.88,0.67-3.63,1.08-4.31c0.41-0.69,1.55-2.18,1.55-2.18 s0,0.03-0.01,0.09C6.41,10.11,7,11.88,8.22,13.22c0.15,0.17,0.27,0.22,0.34,0.22c0.06,0,0.09-0.04,0.08-0.09 C7.79,9.59,8.37,6,11.35,3.7c0.59-0.46,1.51-0.94,1.98-1.18C13.8,2.28,14.41,2,14.41,2L14.41,2z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Trending</h1>
        </div>
        <hr className="my-2    w-10/12 mx-auto" />

        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="shopping"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("shopping"),setHoverItem("shopping"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M7,8c0,2.76,2.24,5,5,5s5-2.24,5-5h-1c0,2.21-1.79,4-4,4s-4-1.79-4-4H7z M16.9,6c-0.46-2.28-2.48-4-4.9-4S7.56,3.72,7.1,6H4 v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V6H16.9z M12,3c1.86,0,3.43,1.27,3.87,3H8.13C8.57,4.27,10.14,3,12,3z M19,20 c0,0.55-0.45,1-1,1H6c-0.55,0-1-0.45-1-1V7h14V20z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Shopping</h1>
        </div>

        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="Music"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("Music"),setHoverItem("Music"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                d="M12,4v9.38C11.27,12.54,10.2,12,9,12c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4V8h6V4H12z M9,19c-1.66,0-3-1.34-3-3 s1.34-3,3-3s3,1.34,3,3S10.66,19,9,19z M18,7h-5V5h5V7z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Music</h1>
        </div>

        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="movies & music"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("movies & music"),setHoverItem("movies & music"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                d="M22.01,4.91l-0.5-2.96L1.64,5.19L2,8v13h20V8H3.06L22.01,4.91z M5,9l1,3h3L8,9h2l1,3h3l-1-3h2l1,3h3l-1-3h3v11H3V9H5z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">
            Movies & Shows
          </h1>
        </div>

        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="live"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("live"),setHoverItem("live"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M14,12c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,10.9,14,12z M8.48,8.45L7.77,7.75C6.68,8.83,6,10.34,6,12 s0.68,3.17,1.77,4.25l0.71-0.71C7.57,14.64,7,13.39,7,12S7.57,9.36,8.48,8.45z M16.23,7.75l-0.71,0.71C16.43,9.36,17,10.61,17,12 s-0.57,2.64-1.48,3.55l0.71,0.71C17.32,15.17,18,13.66,18,12S17.32,8.83,16.23,7.75z M5.65,5.63L4.95,4.92C3.13,6.73,2,9.24,2,12 s1.13,5.27,2.95,7.08l0.71-0.71C4.02,16.74,3,14.49,3,12S4.02,7.26,5.65,5.63z M19.05,4.92l-0.71,0.71C19.98,7.26,21,9.51,21,12 s-1.02,4.74-2.65,6.37l0.71,0.71C20.87,17.27,22,14.76,22,12S20.87,6.73,19.05,4.92z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Live</h1>
        </div>

        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="gaming"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("gaming"),setHoverItem("gaming"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                d="M10,12H8v2H6v-2H4v-2h2V8h2v2h2V12z M17,12.5c0-0.83-0.67-1.5-1.5-1.5S14,11.67,14,12.5c0,0.83,0.67,1.5,1.5,1.5 S17,13.33,17,12.5z M20,9.5C20,8.67,19.33,8,18.5,8S17,8.67,17,9.5c0,0.83,0.67,1.5,1.5,1.5S20,10.33,20,9.5z M16.97,5.15l-4.5,2.53 l-0.49,0.27l-0.49-0.27l-4.5-2.53L3,7.39v6.43l8.98,5.04l8.98-5.04V7.39L16.97,5.15 M16.97,4l4.99,2.8v7.6L11.98,20L2,14.4V6.8 L6.99,4l4.99,2.8L16.97,4L16.97,4z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Gaming</h1>
        </div>

        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="news"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("news"),setHoverItem("news"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                d="M11,11v6H7v-6H11 M12,10H6v8h6V10L12,10z M3,3.03V21h14l4-4V3.03 M20,4v11.99L19.99,16H16v3.99L15.99,20H4V4H20z M18,8H6V6 h12V8z M18,15h-5v-2h5V15z M18,12h-5v-2h5V12z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">News</h1>
        </div>

        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="sports"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("sports"),setHoverItem("sports"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                d="M17 3V5V6V10V10.51L16.99 10.97C16.94 13.1 15.66 14.94 13.74 15.67H13.72L13.66 15.69L13 15.95V16.65V19V20H14V21H15H10V20H11V19V16.65V15.95L10.34 15.71L10.26 15.68H10.25C8.33 14.95 7.05 13.11 7 10.98V10.51V10V6V5V3H17ZM18 2H6V5H4V6V10V11H6.01C6.07 13.53 7.63 15.78 9.97 16.64C9.98 16.64 9.99 16.64 10 16.65V19H9V20H8V22H16V20H15V19H14V16.65C14.01 16.65 14.02 16.65 14.03 16.64C16.36 15.78 17.93 13.54 17.99 11H20V10V6V5H18V2ZM18 10V6H19V10H18ZM5 10V6H6V10H5Z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Sports</h1>
        </div>

        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="learning"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("learning"),setHoverItem("learning"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                d="M16,21h-2.28c-0.35,0.6-0.98,1-1.72,1s-1.38-0.4-1.72-1H8v-1h8V21z M20,10c0,2.96-1.61,5.54-4,6.92V19H8v-2.08 C5.61,15.54,4,12.96,4,10c0-4.42,3.58-8,8-8S20,5.58,20,10z M15,18v-1.66l0.5-0.29C17.66,14.8,19,12.48,19,10c0-3.86-3.14-7-7-7 s-7,3.14-7,7c0,2.48,1.34,4.8,3.5,6.06L9,16.34V18H15z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Learning</h1>
        </div>

        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="fashion & beauty"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("fashion & beauty"),setHoverItem("fashion & beauty"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                d="M12.5,6.44v-0.5C13.36,5.71,14,4.93,14,4c0-1.1-0.9-2-2-2s-2,0.9-2,2h1c0-0.55,0.45-1,1-1s1,0.45,1,1s-0.45,1-1,1h-0.5v1.44 L4,13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2L12.5,6.44z M6.66,12L12,7.33L17.34,12H6.66z M14,18H7v-5h7V18z M15,15v-2h2v2H15z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">
            Fashion & Beauty
          </h1>
        </div>

        <hr className="my-2    w-10/12 mx-auto" />
        <div className="ml-6 w-48 rounded-xl  text-base font-normal">
          More from YouTube
        </div>

        <div
         className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="youtube premium"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
         onClick={() => dispatch(setVideoState("youtube premium"),setHoverItem("youtube premium"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <defs className="style-scope yt-icon">
                <radialGradient
                  cx="5.4%"
                  cy="7.11%"
                  r="107.93%"
                  fx="5.4%"
                  fy="7.11%"
                  gradientTransform="matrix(.70653 0 0 1 .016 0)"
                  className="style-scope yt-icon"
                >
                  <stop
                    offset="0%"
                    stop-color="#FFF"
                    className="style-scope yt-icon"
                  ></stop>
                  <stop
                    offset="100%"
                    stop-color="#FFF"
                    stop-opacity="0"
                    className="style-scope yt-icon"
                  ></stop>
                </radialGradient>
              </defs>
              <g fill="none" fillRule="evenodd" className="style-scope yt-icon">
                <path d="M1 1h21.77v22H1z" className="style-scope yt-icon"></path>
                <g fillRule="nonzero" className="style-scope yt-icon">
                  <path
                    fill="#F00"
                    d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                    className="style-scope yt-icon"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    d="M9.68 8.9v6.18l5.84-3.1"
                    className="style-scope yt-icon"
                  ></path>
                  <path
                    fill="#000"
                    fillOpacity=".12"
                    d="M9.68 8.88l5.13 3.48.73-.38"
                    className="style-scope yt-icon"
                  ></path>
                  <path
                    fill="#FFF"
                    fillOpacity=".2"
                    d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                    className="style-scope yt-icon"
                  ></path>
                  <path
                    fill="#3E2723"
                    fillOpacity=".2"
                    d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                    className="style-scope yt-icon"
                  ></path>
                  <path
                    fill="#FFF"
                    fillOpacity=".2"
                    d="M9.68 15.08v.1l5.84-3.08v-.12"
                    className="style-scope yt-icon"
                  ></path>
                  <path
                    fill="#3E2723"
                    fillOpacity=".2"
                    d="M9.68 8.9v-.13l5.84 3.1v.1"
                    className="style-scope yt-icon"
                  ></path>
                  <path
                    fill="url(#youtube_round__a)"
                    fillOpacity=".1"
                    d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                    transform="translate(1 4.208)"
                    className="style-scope yt-icon"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">
            Fashion & Beauty
          </h1>
        </div>
        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="youtube studio"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("youtube studio"),setHoverItem("youtube studio"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                fill="red"
                d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"
                className="style-scope yt-icon"
              ></path>
              <path
                fill="#fff"
                d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"
                className="style-scope yt-icon"
              ></path>
              <path
                fill="red"
                d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"
                className="style-scope yt-icon"
              ></path>
              <path
                fill="#fff"
                d="M9.88 15.25 15.5 12 9.88 8.75z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">
            Youtube Studio
          </h1>
        </div>

        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="youtube music"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("youtube music"),setHoverItem("youtube music"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <circle
                fill="#FF0000"
                cx="12"
                cy="12"
                r="10"
                className="style-scope yt-icon"
              ></circle>
              <polygon
                fill="#FFFFFF"
                points="10,14.65 10,9.35 15,12 "
                className="style-scope yt-icon"
              ></polygon>
              <path
                fill="#FFFFFF"
                d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Youtube Music</h1>
        </div>

        <div
          className={`cursor-pointer flex w-48 ml-2 rounded-xl  hover:bg-[#f2f1f1] ${hoverItem==="youtube kids"?'bg-[#efeeec] border rounded-xl':'bg-white'}`}
          onClick={() => dispatch(setVideoState("youtube kids"),setHoverItem("youtube kids"),navigate('/'))}
        >
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <circle
                fill="#FF0000"
                cx="12"
                cy="12"
                r="10"
                className="style-scope yt-icon"
              ></circle>
              <polygon
                fill="#FFFFFF"
                points="10,14.65 10,9.35 15,12 "
                className="style-scope yt-icon"
              ></polygon>
              <path
                fill="#FFFFFF"
                d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Youtube Kids</h1>
        </div>

        <hr className="my-2    w-10/12 mx-auto" />

        <div className="flex w-48 rounded-xl  hover:bg-[#f2f1f1]  ml-2">
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Settings</h1>
        </div>

        <div className="flex w-48 rounded-xl  hover:bg-[#f2f1f1]  ml-2">
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">
            Report history
          </h1>
        </div>

        <div className="flex w-48 rounded-xl  hover:bg-[#f2f1f1]  ml-2">
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Help</h1>
        </div>

        <div className="flex w-48 rounded-xl  hover:bg-[#f2f1f1]  ml-2">
          <svg
            className="ml-4 w-5"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g className="style-scope yt-icon">
              <path
                d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Send Feedback</h1>
        </div>

        <hr className="my-2    w-10/12 mx-auto" />
        <div className="text-xs font-semibold ml-6 ">
          About Press Copyright
          <br />
          Contact us Creators Advertise Developers
          <br />
          <br />
          Terms Privacy Policy & Safety
          <br />
          How YouTube works
          <br />
          Test new features
          <br />
          <br />
        </div>

        <div className="text-xs ml-5 font-thin">© 2023 Google LLC</div>
      </div>
    )
  );
};

export default SideBar;

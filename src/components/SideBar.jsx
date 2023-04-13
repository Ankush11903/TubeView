import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setVideoState } from "../utils/VideoSlice";

const SideBar = () => {
  const isSideBarShown = useSelector((state) => state?.side?.isSideBarShown);
  const dispatch = useDispatch();
  console.log("isSideBarShown")
  console?.log(isSideBarShown);
  return (
    isSideBarShown && (
      <div
        className={`fixed  top-[56px] bg-white flex flex-col w-56 overflow-hidden  h-[100vh] mt-3   scrollbar-thin scrollbar-thumb-[#383131] scrollbar-track-[#66646144] hover:overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full  transition duration-500 ease-in-out transition-delay-500 scrollbar-thumb`}
      >
       <Link to="/" > <div className="flex w-48 ml-2 border rounded-xl  hover:bg-[#f2f1f1] bg-[#efeeec]">
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
        </div></Link>
        <div className="flex w-48 rounded-xl  hover:bg-[#f2f1f1]  ml-2 ">
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
        <div className="flex w-48 rounded-xl  hover:bg-[#f2f1f1]  ml-2" onClick={()=>dispatch(setVideoState("trending")) }>
        <svg className="ml-4 w-5" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"  ><g ><path d="M14.72,17.84c-0.32,0.27-0.83,0.53-1.23,0.66c-1.34,0.33-2.41-0.34-2.62-0.46c-0.21-0.11-0.78-0.38-0.78-0.38 s0.35-0.11,0.41-0.13c1.34-0.54,1.89-1.24,2.09-2.11c0.2-0.84-0.16-1.56-0.31-2.39c-0.12-0.69-0.11-1.28,0.12-1.9 c0.02-0.05,0.12-0.43,0.12-0.43s0.11,0.35,0.13,0.41c0.71,1.51,2.72,2.18,3.07,3.84c0.03,0.15,0.05,0.3,0.05,0.46 C15.8,16.3,15.4,17.26,14.72,17.84z M12.4,4.34c-0.12,0.08-0.22,0.15-0.31,0.22c-2.99,2.31-2.91,5.93-2.31,8.55l0.01,0.03l0.01,0.03 c0.06,0.35-0.05,0.7-0.28,0.96c-0.24,0.26-0.58,0.41-0.95,0.41c-0.44,0-0.85-0.2-1.22-0.6c-0.67-0.73-1.17-1.57-1.5-2.46 c-0.36,0.77-0.75,1.98-0.67,3.19c0.04,0.51,0.12,1,0.25,1.43c0.18,0.6,0.43,1.16,0.75,1.65c1.05,1.66,2.88,2.82,4.78,3.05 c0.42,0.05,0.85,0.08,1.26,0.08c1.34,0,3.25-0.27,4.74-1.57c1.77-1.56,2.35-3.99,1.44-6.06c-0.04-0.1-0.06-0.14-0.09-0.19 l-0.04-0.08c-0.21-0.42-0.47-0.81-0.75-1.14c-0.24-0.3-0.48-0.56-0.79-0.83c-0.3-0.27-0.64-0.51-1-0.77 c-0.46-0.33-0.93-0.67-1.38-1.09C12.98,7.83,12.3,6.11,12.4,4.34 M14.41,2c0,0-0.2,0.2-0.56,0.99c-0.66,1.92-0.15,3.95,1.34,5.39 c0.73,0.69,1.61,1.17,2.36,1.84c0.32,0.29,0.62,0.59,0.89,0.93c0.36,0.42,0.66,0.89,0.91,1.38c0.05,0.1,0.1,0.2,0.14,0.3 c1.12,2.55,0.36,5.47-1.73,7.31C16.23,21.47,14.22,22,12.22,22c-0.47,0-0.95-0.03-1.41-0.09c-2.29-0.28-4.42-1.66-5.63-3.57 c-0.39-0.6-0.68-1.26-0.88-1.93c-0.16-0.54-0.25-1.1-0.29-1.67c-0.12-1.88,0.67-3.63,1.08-4.31c0.41-0.69,1.55-2.18,1.55-2.18 s0,0.03-0.01,0.09C6.41,10.11,7,11.88,8.22,13.22c0.15,0.17,0.27,0.22,0.34,0.22c0.06,0,0.09-0.04,0.08-0.09 C7.79,9.59,8.37,6,11.35,3.7c0.59-0.46,1.51-0.94,1.98-1.18C13.8,2.28,14.41,2,14.41,2L14.41,2z"></path></g></svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Trending</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>

        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
        <div className="flex w-48  rounded-xl  hover:bg-[#f2f1f1] ml-2">
          <svg
            className="ml-4 w-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
            </g>
          </svg>
          <h1 className="font-normal  text-[.9rem] ml-6 py-2">Libarary</h1>
        </div>
      </div>
    )
  );
};

export default SideBar;

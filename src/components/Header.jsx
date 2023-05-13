import React, { useEffect, useState } from "react";
import youtubeLogo from "../assets/YouTube-Logo-PNG7.png";
import { useDispatch, useSelector } from "react-redux";
import { setToggle, SetSide } from "../utils/SideSlice";
import { Link , useNavigate} from "react-router-dom";
import { setVideoState } from "../utils/VideoSlice";



const Header = () => {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetSide(true));
  }, []);
  const setSearch = useSelector((state) => state.search);
  // console.log(setSearch);

  useEffect(() => {
    // i want to fetch an api after 200ms of user typing
    // i want to cancel the previous fetch request if user is still typing
    // i want to fetch the api only if user has stopped typing for 200ms

    const timer = setTimeout(async () => {
      console.log(setSearch?.value);
      if (false) {
        // setSearchValue(setSearch?.value[value]);
      } else {
        // const response = await fetch(
        //   "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        //     value
        // );
        // const data = await response.json();
        // dispatch(SetSearch({ [value]: data[1] }));

        // // dispatch(SetSearch({[value]:[data[1]]}))
        // setSearchValue(data[1]);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const handleSearchItemClick = (valu) => {
    console.log("jfu");
    setValue(valu);
    setShowSearch(false);
    dispatch(setVideoState(valu));
    navigate(`/`)
  };

  const handleKeyDown = (e) => {
    console.log("entered")
    if (e.key === "Enter") {
      dispatch(setVideoState(value));
      setValue("");
      navigate(`/results?search_query=${value}`)
    }
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-white grid grid-flow-col mr-6">
      <div className="flex col-span-9">
        <div>
          <svg
            onClick={() => dispatch(setToggle())}
            className="w-6 pt-4 ml-6"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
            </g>
          </svg>
        </div>

        {/* import { Link } from 'react-router-dom'; */}

        <div>
          <Link to="/">
            <div className="flex">
              <img
            onClick={() => dispatch(setVideoState("home"))}
              className="w-[2.7rem] pt-[0.78rem] ml-[1.45rem] cursor-pointer"
              src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"
              alt="youtube logo"
            />
            <h1 className="pt-[0.78rem] font-extrabold text-lg -ml-1">TubeView</h1>
            </div>
            
          </Link></div>
        

        <h6 className="font-medium text-neutral-600 text-[0.60rem] pt-[0.65rem] cursor-pointer pl-1">
          IN
        </h6>
      </div>
      <div className="flex pt-2 col-span-8">
        {showSearch && (
          <div className="absolute z-50 bg-white w-[27rem] mt-10 rounded-b-lg ">
            {searchValue.map((item) => (
              <div
                className="flex items-center p-2 cursor-pointer "
                onClick={() => handleSearchItemClick(item)}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <g>
                    <path d="M21.71,20.29l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L21.71,20.29z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
                  </g>
                </svg>
                <p className="text-sm font-sans font-normal">{item}</p>
              </div>
            ))}
          </div>
        )}
        <input
         onKeyDown={handleKeyDown}
          className="h-8 border  border-gray-300 shadow-sm  w-[27rem]
  rounded-l-full  focus:outline outline-blue-600  pl-3 z-50 placeholder-[#898989] text-sm font-sans font-normal"
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={() => setShowSearch(true)}
          onBlur={() => {
            setTimeout(() => setShowSearch(false), 400);

            // Delay hiding the search results to allow time for the click event to register
          }}
        />
      

        <Link to={"/results?search_query=" + value}><button className="border border-gray-300 bg-gray-50 rounded-r-full h-8 w-12 " 
        onClick={()=>{
          dispatch(setVideoState(value));
          setValue("");
        }}>
          <svg
            className="h-5 pl-3"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
            </g>
          </svg>
        </button></Link>
        <div className="text-black">
          <svg
            className="h-[20px] w-[24px] mt-1 ml-4 cursor-pointer"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="flex col-span-5 justify-evenly ">
        <svg
          className="w-6"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g>
            <path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"></path>
          </g>
        </svg>
        <svg
          className="w-6"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g>
            <path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"></path>
          </g>
        </svg>
        <img
          className="w-8 h-8 rounded-full cursor-pointer mt-3"
          src="https://yt3.ggpht.com/ytc/AL5GRJU7DbYpvpSUKwkz4A4--kczqJiF1vucvBzBroyLcDyUR1WGcKSGvaDjynRljlcx=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Header;

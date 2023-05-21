import React from "react";
import ReactDOM from "react-dom/client";

import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';


import { Provider } from "react-redux";
import store from "../utils/Store";

// import Footer from "./footer";
import VideoContainer from "./videoContainer";
import VideoPlayer from "./VideoPlayer";
import Body from "./body";
import Header from "./Header";
import SearchPlayer from "./SearchPlayer";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VideoContainer  />,
      },
      {
        path: "/watch",
        element: <VideoPlayer  />,
      },
      {
        path: "/results",
        element: <SearchPlayer  />,
      },
    ],
  },
]);




function App() {
  return (
    <Provider store={store}>
      {/* <Component {...pageProps} />
      <Analytics /> */}
      <Header  />
      <Body  />
      
      {/* <RouterProvider router={router} /> */}
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);

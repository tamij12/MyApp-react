import React from "react";

import "./App.css";
import Home from "../../pages/home";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Post from "../../pages/post";
import CreateNewPost from "../../pages/createNewPost";


export default function App() {
  return (<>
  {/* <Home/> */}
    <BrowserRouter>
    <Routes>

      <Route path="/">
        <Route index element={<Home/>}></Route>
      </Route>

      <Route path="/post">
        <Route index element={<Post/>}></Route>
      </Route>

      <Route path="/newpost">
        <Route index element={<CreateNewPost/>}></Route>
      </Route>

    </Routes>
    </BrowserRouter>
  </>
     
  );
}

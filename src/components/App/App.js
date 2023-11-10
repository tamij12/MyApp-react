import React from "react";

import "./App.css";
import Home from "../../pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../../pages/post";
import CreateNewPost from "../../pages/createNewPost";
import MainLayout from "../../layouts/MainLayout";
import Blogs from "../../context/blogs";
import NavBarWriteLayout from "../../layouts/NavBarWrite/NavBarWriteLayout";
import NavBarBlogLayout from "../../layouts/NavBarBlog/NavBarBlogLayout";
import ViewPost from "../ViewPost/ViewPost";
import Edit from "../../pages/Edit/edit";

export default function App() {
  return (
    <>
      <Blogs>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />}></Route>
            </Route>

            <Route path="/post" element={<NavBarBlogLayout />}>
              <Route index element={<Post />}></Route>
              <Route path=":id" element={<ViewPost />} />
              <Route path=":id/editpost" element={<Edit />} />
            </Route>

            <Route path="/newpost" element={<NavBarWriteLayout />}>
              <Route index element={<CreateNewPost />}></Route>
            </Route>
            
          </Routes>
        </BrowserRouter>
      </Blogs>
    </>
  );
}

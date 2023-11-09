import React, { useContext, useState } from "react";
import PostBrowser from "../../components/PostBrowser/PostBrowser";
import { postsContext } from "../../context/blogs";

export default function Posts() {
  const { posts, setPosts } = useContext(postsContext);

  return <PostBrowser posts={posts} />;
}

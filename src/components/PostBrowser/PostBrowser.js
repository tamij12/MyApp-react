import React from "react";
import Post from "../Post/Post";

export default function PostBrowser(props) {
  const { posts } = props;
  return (
    <React.Fragment>
      {posts.map((post, index) => {
        return <Post key={index} {...post} />;
      })}
    </React.Fragment>
  );
}

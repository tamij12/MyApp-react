import React, { useContext, useEffect } from "react";
import PostBrowser from "../../components/PostBrowser/PostBrowser";
import { postsContext } from "../../context/blogs";

export default function Posts() {
  const { posts, setPosts } = useContext(postsContext);

  useEffect(() => {
    const fetchComments = async (postId) => {
      const response = await fetch(
        `http://localhost:5001/commentsbypost/${postId}`
      );
      const data = await response.json();

      return data.length;
    };

    const fetchPosts = async () => {
      const response = await fetch("http://localhost:5001/posts");
      const data = await response.json();

      // Convert date to dateString in dd/mm/yyyy format
      await data.forEach(async (post) => {
        const date = new Date(post.createdAt);
        const dateString = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`;
        post.createdAt = dateString;
      });

      console.log(data, "context");

      setPosts(data);
    };
    fetchPosts();
  }, []);

  return <PostBrowser posts={posts} />;
}

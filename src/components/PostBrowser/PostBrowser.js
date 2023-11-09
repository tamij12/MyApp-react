import React ,{useContext} from "react";
import Post from "../Post/Post";

import { postsContext } from "../../context/blogs";


export default function PostBrowser (props) {
    // const { posts, setPosts } = useContext(postsContext);
    const { posts } = props;
    return(
        <React.Fragment>
            {
                posts.map((post, index) => {
                    return <Post key={index} {...post}/>
                })
            }
        </React.Fragment>
    )
}
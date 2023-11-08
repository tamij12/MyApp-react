import React from "react";
import Comment from "../Comment/Comment";

export default function CommentBrowser(props) {
    const { comments } = props;

return(
    <React.Fragment>
        {
                comments.map((comments, index) => {
                    return <Comment key={index} {...comments}/>
                })
            }
    </React.Fragment>
)
}
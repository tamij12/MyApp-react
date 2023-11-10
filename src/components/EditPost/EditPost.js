import React, {useContext,useEffect} from "react";

import {MdFileDownloadDone} from "react-icons/md";
import { Form, FormGroup } from "react-bootstrap";

import { useParams } from "react-router-dom";

import { postsContext } from "../../context/blogs";

export default function EditPost() {
  const { posts, setPosts } = useContext(postsContext);

  const { id } = useParams();


  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const response = await fetch(`http://localhost:5001/post/${id}`);
  //     const data = await response.json();

  //     // Convert date to dateString in dd/mm/yyyy format
  //     const date = new Date(data.createdAt);
  //     const dateString = `${date.getDate()}/${
  //       date.getMonth() + 1
  //     }/${date.getFullYear()}`;
  //     data.createdAt = dateString;

  //     setPosts(data);
  //   };

  //   fetchPost();
  // }, []);

  return (
    <React.Fragment>
      <div className="container row">
        <div className="col-lg-4"></div>
        <div className="row col-sm-12 col-lg-8">
          <Form 
        //   onSubmit={}
          >
            <FormGroup>
              <div className="mb-3">
                <textarea
                  placeholder="Title"
                  className="form-control text-area-post fw-bold"
                  id="title-post"
                  rows="3"
                //   onBlur={handleTitle}
                ></textarea>
              </div>
            </FormGroup>

            <FormGroup>
              <div className="mb-3">
                <textarea
                  placeholder="Tell your story..."
                  className="form-control text-area-post"
                  id="description-post"
                  rows="5"
                //   onBlur={handleDescription}
                ></textarea>
              </div>
            </FormGroup>

            <FormGroup>
              <div className="mb-3">
                <textarea
                  placeholder="What's your name?"
                  className="form-control form-post-info"
                  id="author-post"
                  rows="2"
                //   onBlur={handleAuthor}
                ></textarea>
              </div>
            </FormGroup>

            <FormGroup>
              <div className="mb-3">
                <input
                  id="img-post"
                  placeholder="Any image?"
                  type="url"
                  className="form-control form-post-info"
                />
              </div>
            </FormGroup>

            <FormGroup>
              <div className="div-button-add">
                <button
                //   onClick={addPost}
                  type="submit"
                  className="button-add-comment"
                //   disabled={!isValid}
                >
                  <MdFileDownloadDone className="b-add" />
                </button>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
}

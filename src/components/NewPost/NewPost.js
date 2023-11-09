import React, { useState, useContext } from "react";

import "./newPost.scss";

import { GrAddCircle } from "react-icons/gr";
import { Form, FormGroup } from "react-bootstrap";

import { postsContext } from "../../context/blogs";

export default function NewPost() {
  const { posts, setPosts } = useContext(postsContext);

  // const [posts, setNewPost] = useState([
  //   {
  //     id: 0,
  //     img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4a36h8rBHhUXJIlB8vl8yw.png",
  //     titulo: "I Asked ChatGPT To Find Me Free Money",
  //     autor: "Pablo Cormick",
  //     creacion: "27 / 11 / 2023",
  //     descripcion:
  //       "Regardless, resilience serves to buffer PTSD such that people with greater resilience are less likely to develop pathological outcomes following significant trauma. Not only that, but while many aspects of resilience are innate (related to biological factors affecting brain plasticity, for example), many resilience factors are learnable (“modifiable”). It is these modifiable factors people need to target, train, and track.",
  //   },
  //   {
  //     id: 1,
  //     img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*B_88pVqHoDNOTc3vr4AK-Q.png",
  //     titulo: "2-Minute Rule to Become a Master at Coding — Atomic Habits",
  //     autor: "Jhonny Bruhs Azirc",
  //     creacion: "25 / 10 / 2023",
  //     descripcion:
  //       "Have you ever started watching an online video tutorial and, in the middle of that video, the tutorial becomes boring for you? Or you always tell yourself that this time you’re going to finish an online course, but when you sit down and start learning, it feels like any other tedious task like washing dishes and laundry. And at the end, you find it impossible to stay productive and make progress.",
  //   },
  // ]);

  const [valid, setValid] = useState({
    title: false,
    author: false,
    description: false,
    img: false,
  });

  const isValid = valid.title && valid.author && valid.description;

  const handleTitle = (e) => {
    e.preventDefault();

    const value = e.target.value;
    if (value.length < 5) {
      alert("El titulo debe tener al menos 5 caracteres.");
      setValid({
        ...valid,
        title: false,
      });
    } else {
      setValid({
        ...valid,
        title: true,
      });
    }
  };

  const handleDescription = (e) => {
    e.preventDefault();

    const value = e.target.value;
    if (value.length < 20) {
      alert("El contenido debe tener al menos 20 caracteres.");
      setValid({
        ...valid,
        description: false,
      });
    } else {
      setValid({
        ...valid,
        description: true,
      });
    }
  };

  const handleAuthor = (e) => {
    e.preventDefault();

    const value = e.target.value;
    if (value === "") {
      alert("Debes ingresar un nombre.");
      setValid({
        ...valid,
        author: false,
      });
    } else {
      setValid({
        ...valid,
        author: true,
      });
    }
  };

  function addPost() {
    const title = document.getElementById("title-post").value;
    const description = document.getElementById("description-post").value;
    const author = document.getElementById("author-post").value;
    const img = document.getElementById("img-post").value;

    const changedPosts = [
      {
        id: posts.length,
        title: title,
        description: description,
        author: author,
        img: img,
      },
      ...posts,
    ];
    console.log(changedPosts);
    setPosts(changedPosts);
  }

  const validateForm = (e) => {
    e.preventDefault();

    const title = document.getElementById("title-post").value;
    const description = document.getElementById("description-post").value;
    const author = document.getElementById("author-post").value;
    const img = document.getElementById("img-post").value;

    if (title.length < 5) {
      alert("El titulo debe tener al menos 5 caracteres.");
    }
    if (description.length < 20) {
      alert("El contenido debe tener al menos 20 caracteres.");
    }
    if (author === "") {
      alert("Debes ingresar un nombre.");
    }

    if (title.length >= 5 && description.length >= 20 && author !== "") {
      alert("Blog creado correctamente.");
    }

    const data = {
      title,
      description,
      author,
      img,
    };

    console.log(data);
  };

  return (
    <React.Fragment>
      <div className="container row">
        <div className="col-lg-4"></div>
        <div className="row col-sm-12 col-lg-8">
          <Form onSubmit={validateForm}>
            <FormGroup>
              <div className="mb-3">
                <textarea
                  placeholder="Title"
                  className="form-control text-area-post fw-bold"
                  id="title-post"
                  rows="3"
                  onBlur={handleTitle}
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
                  onBlur={handleDescription}
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
                  onBlur={handleAuthor}
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
                  onClick={addPost}
                  type="submit"
                  className="button-add-comment"
                  disabled={!isValid}
                >
                  <GrAddCircle className="b-add" />
                </button>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
}

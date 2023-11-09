import React, { useState, useContext } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./newPost.scss";

import { GrAddCircle } from "react-icons/gr";
import { IoIosNotificationsOutline, IoIosMore } from "react-icons/io";
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
        id: posts.length ,
        title: title,
        description: description,
        author: author,
        img: img,
      },
      ...posts,
    ];
    console.log(changedPosts)
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
      <Navbar expand="lg" className="shadow p-3 mb-2 bg-body-tertiary rounded">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            React-App
          </Navbar.Brand>
          <div className="buttons-nav d-flex flex-row-reverse">
            <div className="img-profile">
              <img
                className="img-profile-nav rounded-circle"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"
              />
            </div>
            <div>
              <button className="b-nav">
                <IoIosNotificationsOutline />
              </button>
            </div>
            <div>
              <button className="b-nav">
                <IoIosMore />
              </button>
            </div>
            <div>
              <button className="btn btn-success disabled rounded-pill b-publish">
                Publish
              </button>
            </div>
          </div>
        </Container>
      </Navbar>

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

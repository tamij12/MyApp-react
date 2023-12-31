import React from "react";

import "./viewPost.scss";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { BiEdit } from "react-icons/bi";
import {
  IoMdPlay,
  IoIosMore,
  IoIosChatbubbles,
  IoIosBookmark,
} from "react-icons/io";
import { IoShareOutline, IoHeart } from "react-icons/io5";
import Offcanvas from "react-bootstrap/Offcanvas";
import Comments from "../Comments/Comments";

export default function ViewPost() {
  const [post, setPost] = React.useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:5001/post/${id}`);
      const data = await response.json();

      // Convert date to dateString in dd/mm/yyyy format
      const date = new Date(data.createdAt);
      const dateString = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      data.createdAt = dateString;

      setPost(data);
    };

    fetchPost();
  }, []);

  const [showComments, setShowComments] = useState(false);

  const handleCloseCommments = () => setShowComments(false);
  const handleShowComments = () => setShowComments(true);

  return (
    <React.Fragment>
      {post && (
        <>
          <div className="container row">
            <div className=" col-lg-3 "></div>
            <div className="view-post col-lg-9 shadow">
              <div className="post">
                <div>
                  <h1 className="title">{post.title}</h1>
                </div>
                <div>
                  <h2 className="sub-title">{post.content}</h2>
                </div>
                <hr />
                <div className="info-profile">
                  <div className="img-profile">
                    <img
                      className="rounded-circle"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"
                    />
                  </div>
                  <div className="author-name-date">
                    <div className="author-name">
                      <div>
                        <p>{post.author?.name}</p>
                      </div>
                      <div>
                        <p className="p-author-name">.</p>
                      </div>
                      <div>
                        <button> Follow</button>
                      </div>
                    </div>
                    <div className="date">
                      <span>6 min read</span>
                      <span className="p-author-name">.</span>
                      <span>{post.createdAt}</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="actions">
                  <div>
                    <button className="b-actions rounded-pill btn btn-outline-secondary">
                      <IoMdPlay />
                      Listen
                    </button>
                  </div>
                  <div>
                    <button className="b-actions rounded-pill btn btn-outline-secondary">
                      <IoShareOutline />
                      Share
                    </button>
                  </div>
                  <div>
                    <button className="b-actions rounded-pill btn btn-outline-secondary">
                      <IoIosMore />
                      More
                    </button>
                  </div>
                </div>
                <div className="img-post">
                  <div>
                    <img className="image-post" src={post.img} />
                  </div>
                </div>
                <div className="description-post">
                  <span>{post.content}</span>
                  <div>
                    <p>{post.author?.name}</p>
                  </div>
                </div>
              </div>
              <div className="topics">
                <div>
                  <button className="b-topics btn btn-outline-light">
                    Apps
                  </button>
                </div>
                <div>
                  <button className="b-topics btn btn-outline-light">
                    Software
                  </button>
                </div>
                <div>
                  <button className="b-topics btn btn-outline-light">
                    Mobile
                  </button>
                </div>
                <div>
                  <button className="b-topics btn btn-outline-light">
                    Productivity
                  </button>
                </div>
              </div>
              <div className="reactions">
                <div className="applaud-comments">
                  <div>
                    <button className="b loveit">
                      <IoHeart />
                    </button>
                    <span>5.5k</span>
                  </div>
                  <div>
                    <button onClick={handleShowComments} className="b comments">
                      <IoIosChatbubbles />
                    </button>
                    <Offcanvas
                      placement="end"
                      show={showComments}
                      onHide={handleCloseCommments}
                    >
                      <Comments />
                    </Offcanvas>
                    <span>{post.comments}</span>
                  </div>
                </div>
                <div className="save-share-more">
                  <div>
                    <button className="b save">
                      <IoIosBookmark />
                    </button>
                  </div>
                  <div>
                    <Link to={`/editpost`}>
                      <button className="b save">
                        <BiEdit />
                      </button>
                    </Link>
                  </div>

                  <div>
                    <button className="b share">
                      <IoShareOutline />
                    </button>
                  </div>

                  <div>
                    <button className="b more">
                      <IoIosMore />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
}

import React from "react";

import "./comments.scss";

import Dropdown from "react-bootstrap/Dropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import NewComment from "../NewComment/NewComment";
import CommentBrowser from "../CommentBrowser/CommentBrowser";

import { MdOutlineExpandMore } from "react-icons/md";

export default function Comments() {
  const commentsArray = [
    {
      id: 0,
      name: "tamijangosrz",
      description: "i love it",
    },
    {
      id: 1,
      name: "tamijangosrz",
      description: "its good",
    },
    {
      id: 2,
      name: "tamijangosrz",
      description: "hello",
    },
  ];
  return (
    <React.Fragment>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Responses (140)</Offcanvas.Title>
        <div>
          <span>
            MOST RELEVANT <MdOutlineExpandMore />{" "}
          </span>
        </div>
      </Offcanvas.Header>
      <hr />
      <Offcanvas.Body>
        <Dropdown className="dropdown-off">
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            className="dropdown-b"
          >
            What are you thoughts?
          </Dropdown.Toggle>
          <hr />
          <Dropdown.Menu className="dropdown-menu-comment">
            <NewComment />
          </Dropdown.Menu>
        </Dropdown>
        <CommentBrowser comments={commentsArray} />
      </Offcanvas.Body>
    </React.Fragment>
  );
}

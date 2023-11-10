import React from "react";

import Card from "react-bootstrap/Card";

import "./comment.scss";

export default function Comment(props) {
  const { name, description } = props;
  return (
    <React.Fragment>
      <Card
        className="card-comment"
        border="light card-comment"
        style={{ width: "22rem" }}
      >
        <Card.Header className="card-header-comment d-flex">
          <div className="div-img-profile">
            <img
              className="rounded-circle"
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*KhCJEW9fAOnmMWZrz4JxDQ.jpeg"
            />
          </div>
          <div>{name}</div>
        </Card.Header>
        <Card.Body>
          <Card.Title>Hello! I'm {name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>

      <br />
    </React.Fragment>
  );
}

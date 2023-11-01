import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./post.scss";

export default function Post(props) {
  const { img, titulo, autor, creacion, descripcion } = props;
  return (
    <div className="posts bg-body-tertiary">
      <Card style={{ width: "50rem" }}
        className="card-post shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <Card.Title>{titulo}</Card.Title>
        <hr/>
        <Card.Img svariant="top" src={img}  height={350}/>
        <hr/>
        <Card.Body>
          <Card.Text className="fw-bold"> {autor}</Card.Text>
          <Card.Text>{descripcion}</Card.Text>
          <p className="d-flex justify-content-end">{creacion}</p>
          <Button variant="primary">More info...</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

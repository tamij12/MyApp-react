import React from "react";

import Card from "react-bootstrap/Card";

 export default function Comment (props) {
    const {   name, description } = props;
    return (
        <React.Fragment>
            
        <Card border="light card-comment" style={{ width: "22rem" }}>
          <Card.Header>{name}</Card.Header>
          <Card.Body>
            <Card.Title>Hello! I'm {name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        </React.Fragment>
    )
 }
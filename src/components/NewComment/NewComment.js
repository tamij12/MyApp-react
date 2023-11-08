import React from "react";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function NewComment() {
  return (
    <React.Fragment>
      <Card.Header>
        <div>
          <div className="img-author">
            <img src="" />
          </div>
          <div className="author-name">
            <span>Tamijangosrz</span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="What are you thoughts?"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
          <div>
            <div>
              <button>b</button>
              <button>i</button>
            </div>
            <div>
              <button>cancel</button>
              <button>respond</button>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </React.Fragment>
  );
}

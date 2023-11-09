import React from "react";

import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "./navbar.scss";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="shadow p-3 mb-2 bg-body-tertiary rounded">
      <Container className="d-flex">
        <Navbar.Brand href="#home" className="fw-bold">
          React-App
        </Navbar.Brand>
        <div className="nav-links d-flex">
          <div className="div-link">
            <Link className="link" to="/">Our Story</Link>
          </div>
          <div className="div-link">
            <Link className="link" to="/post">Post</Link>
          </div>
          <div className="div-link">
            <Link className="link" to="/newpost">Write</Link>
          </div>
          <div>
              <button className="btn btn-success  rounded-pill ">
                Get Started
              </button>
            </div>
        </div>
      </Container>
    </Navbar>
  );
}

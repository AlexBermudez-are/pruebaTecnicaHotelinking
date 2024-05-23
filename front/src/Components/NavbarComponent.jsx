import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { ReactComponent as Login } from "../Assets/login.svg";
import { ReactComponent as Logout } from "../Assets/logout.svg";
import "./NavbarStyles.css";

const NavbarComponent = ({ setControllSesion }) => {
  const getKey = localStorage.getItem("key");
  const [state, setstate] = useState(false)

  const closeSession = () => {
    const confirmaCerrarSesion = window.confirm(
      "Sure of close session?"
    );
    if (confirmaCerrarSesion) {
      localStorage.removeItem("key");
      setstate(!state)
    }
  }

  useEffect(() => {
    if (!getKey) setControllSesion("login");
  }, [state]);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="container-Navbar" bg="primary" data-bs-theme="primary">
        <Nav className="me-auto">
          <Link className="links-To-Pages" to="/">
            Home
          </Link>
          <Link className="links-To-Pages" to="/profile">
            Cupones
          </Link>
        </Nav>
        <section className="section-Sessions-In-Out">
          {!getKey ? (
            <div
              onClick={() => setControllSesion("login")}
              className="vector-login"
            >
              <Login />
            </div>
          ) : (
            <div
              onClick={closeSession}
              className="vector-Logout"
            >
              <Logout />
            </div>
          )}
        </section>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

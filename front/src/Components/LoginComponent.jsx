/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from "react";
import axios from "axios";
import "./LoginStyles.css";
import { Spinner } from "react-bootstrap";

let initialState = {
  email: "",
  password: "",
};

const LoginComponent = ({ setControllSesion }) => {
  const [FormLogin, setFormLogin] = useState(initialState);
  const logFail = useRef(),
    failLogueo = useRef(),
    spinner = useRef();

  const validarusuario = async (e) => {
    e.preventDefault();

    try {
      spinner.current.className = "spinner-Login active";
      await axios
        .post("http://127.0.0.1:8000/api/user/login", FormLogin, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((user) => {
          localStorage.setItem("key", user.data.user.id);
          spinner.current.className = "spinner-Login";
          alert("User Logged succesfully");
          setTimeout(() => {
            setControllSesion(false);
          }, 300);
        });
    } catch (error) {
      spinner.current.className = "spinner-Login";
      logFail.current.className = "sesion-Fallida-E active";
      failLogueo.current.className = "input-Usuario-Contenedor active";
      alert("Loggin failed: " + error.response.data.Error);
      setTimeout(() => {
        logFail.current.className = "sesion-Fallida-E";
        failLogueo.current.className = "input-Usuario-Contenedor";
      }, 3000);
    }
  };

  const actualizarDatos = (e) => {
    setFormLogin({
      ...FormLogin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="input-Usuario-Padre"
      onClick={() => setControllSesion(false)}
    >
      <form
        className="input-Usuario-Contenedor"
        ref={failLogueo}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={validarusuario}
      >
        <div className="titulo-Sesion">
          <h1 className="inicia-Sesion-Home">Inicia Sesión</h1>
          <button
            className="btn-Usuario-X"
            onClick={() => setControllSesion(false)}
          >
            <p className="btn-x-Close">x</p>
          </button>
        </div>
        <div className="inputs-Sesion">
          <label htmlFor="email">
            <p>Email:</p>
            <input
              autoComplete="off"
              placeholder="Ejemplo@gmail.com..."
              type="email"
              name="email"
              className="input-Email"
              onChange={actualizarDatos}
              value={FormLogin.email}
              required
            />
          </label>
          <label htmlFor="password">
            <p>Contraseña:</p>
            <input
              placeholder="contraseña..."
              type="password"
              name="password"
              className="input-Contraseña"
              onChange={actualizarDatos}
              value={FormLogin.password}
              required
            />
          </label>
          <span className="sesion-Fallida-E" ref={logFail}>
            {" "}
            Usuario ó contraseña incorrectos.
          </span>
        </div>
        <button type="submit" className="ingresar-Login-Usuario">
          Ingresar
        </button>
        <div className="extra-Login">
          <button
            className="btn-Extra"
            type="button"
            onClick={() => setControllSesion("register")}
          >
            Crear Cuenta
          </button>
          <button
            className="btn-Extra"
            type="button"
            onClick={() => alert("ni modo bro jsjsj xdddd")}
          >
            ¿Olvidaste tu contraseña?{" "}
          </button>
        </div>
      </form>
      <div ref={spinner} className="spinner-Login">
        <Spinner
          style={{
            width: "5rem",
            height: "5rem",
            marginTop: "10%",
            marginBottom: "10%",
          }}
          animation="grow"
          variant="danger"
        />
      </div>
    </div>
  );
};

export default LoginComponent;

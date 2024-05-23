/* eslint-disable react-hooks/exhaustive-deps */
// import FormEnviado from '../ContactoComponents/FormEnviado'
import React, { useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./RegisterStyles.css";
import axios from "axios";

const CrearCuenta = ({ setControllSesion }) => {
  let initialState = {
    name: "",
    password: "",
    email: "",
    subname: "",
  };
  const [FormRegister, setFormRegister] = useState(initialState);
  const refFormWrong = useRef();
  const ref = useRef();
  const spinner = useRef();

  const validarusuario = async (e) => {
    e.preventDefault();
    try {
      spinner.current.className = "spinner-Login active";
      await axios
        .post("http://127.0.0.1:8000/api/user/register", FormRegister, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((el) => {
          spinner.current.className = "spinner-Login";
          localStorage.setItem("key", el.data.id)
          alert("User created succesfully")
          setTimeout(() => {
            setControllSesion(false);
          }, 3000);
        });
    } catch (error) {

      spinner.current.className = "spinner-Login";
      ref.current.className = "span-Error-Crear-C active";
      refFormWrong.current.className = "input-C-Usuario-Contenedor active";

      alert("Failed to register: " + error.response.data.Error);

      setTimeout(() => {
        ref.current.className = "span-Error-Crear-C";
        refFormWrong.current.className = "input-C-Usuario-Contenedor";
        setControllSesion(false);
      }, 3000);
    }
  };

  const actualizarDatos = (e) => {
    setFormRegister({
      ...FormRegister,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="input-C-Usuario-Padre"
      onClick={() => setControllSesion(false)}
    >
      <form
        className="input-C-Usuario-Contenedor"
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={validarusuario}
        ref={refFormWrong}
      >
        <div className="titulo-Sesion">
          <h1 className="crear-Cuenta-Home">Crear Cuenta</h1>
          <button
            className="btn-C-Usuario-X"
            onClick={() => setControllSesion(false)}
          >
            x
          </button>
        </div>
        <section className="crear-C-Inputs">
          <div className="inputs-C-Sesion">
            <label htmlFor="name">
              <p style={{ margin: "0", color: "#495057" }}>Nombre:</p>
              <input
                placeholder="Nombre..."
                type="text"
                name="name"
                className="input-C-name"
                onChange={actualizarDatos}
                value={FormRegister.name}
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{5,20}$"
                title="El name no puede contener menos de 10 y mas de 20 caracteres"
                required
              />
            </label>
            <label htmlFor="email">
              <p style={{ margin: "0", color: "#495057" }}>Email:</p>
              <input
                placeholder="Ejemplo@gmail.com"
                type="email"
                name="email"
                className="input-C-email"
                onChange={actualizarDatos}
                pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                required
              />
            </label>
          </div>
          <div className="inputs-C-Sesion">
            <label htmlFor="subname">
              <p style={{ margin: "0", color: "#495057" }}>Apellido:</p>
              <input
                placeholder="Apellido..."
                type="text"
                name="subname"
                className="input-C-subname"
                onChange={actualizarDatos}
                value={FormRegister.subname}
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{5,20}$"
                title="El subname no puede contener menos de 10 y mas de 20 caracteres"
                required
              />
            </label>
            <label htmlFor="password">
              <p style={{ margin: "0", color: "#495057" }}>Contraseña:</p>
              <input
                placeholder="Contraseña..."
                type="password"
                name="password"
                className="input-C-password"
                onChange={actualizarDatos}
                value={FormRegister.password}
                pattern="(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
                title="La password debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
                required
              />
            </label>
          </div>
        </section>
        <span ref={ref} className="span-Error-Crear-C">
          El email ingresado ya esta en uso
        </span>
        <button type="submit" className="crear-Usuario">
          Ingresar
        </button>
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
      </form>
    </div>
  );
};

export default CrearCuenta;

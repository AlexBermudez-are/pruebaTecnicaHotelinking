import React, { useEffect, useState } from "react";
import OfferComponent from "../Components/Home/OfferComponent";
import LoginComponent from "../Components/LoginComponent";
import RegisterComponent from "../Components/RegisterComponent";
import NavbarComponent from "../Components/NavbarComponent";

const Home = () => {
  const getKey = localStorage.getItem("key");
  const [controllSesion, setControllSesion] = useState(false);

  useEffect(() => {
    if (!getKey) setControllSesion("login");
  }, []);

  return (
    <div>
      {controllSesion === "login" && (
        <LoginComponent setControllSesion={setControllSesion} />
      )}
      {controllSesion === "register" && (
        <RegisterComponent setControllSesion={setControllSesion} />
      )}
      <NavbarComponent
        controllSesion={controllSesion}
        setControllSesion={setControllSesion}
      />
      <OfferComponent setControllSesion={setControllSesion} />
    </div>
  );
};

export default Home;

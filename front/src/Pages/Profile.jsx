import React, { useEffect, useState } from "react";
import NavbarComponent from "../Components/NavbarComponent";
import LoginComponent from "../Components/LoginComponent";
import RegisterComponent from "../Components/RegisterComponent";
import CuponsComponent from "../Components/Profile/CuponsComponent";

const Profile = () => {
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
      <CuponsComponent setControllSesion={setControllSesion}/>
    </div>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import "./CuponsStyles.css";
import axios from "axios";
import CuponCardComponent from "./CuponCardComponent";
import { Spinner } from "react-bootstrap";

const CuponsComponent = ({ setControllSesion }) => {
  const [offersState, setOffersState] = useState([]);

  const id = localStorage.getItem("key");

  useEffect(() => {
    const getOffers = async () => {
      const offers = await axios.get(`http://127.0.0.1:8000/api/user/${id}`),
        offerData = await offers.data.cupons;
      setOffersState([...offersState, ...offerData]);
    };

    id ? getOffers() : setControllSesion("login");
  }, []);

  return (
    <div className="container-Offers">
      {!id ? (
        <p>Debes iniciar sesión</p>
      ) : offersState.length > 0 ? (
        offersState.map((offer, index) => (
          <CuponCardComponent
            key={index}
            setControllSesion={setControllSesion}
            offer={offer}
          />
        ))
      ) : (
        <Spinner
          style={{
            width: "5rem",
            height: "5rem",
            marginTop: "10%",
            marginBottom: "10%",
          }}
          animation="grow"
          variant="black"
        />
      )}
    </div>
  );
};

export default CuponsComponent;

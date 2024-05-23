/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import "./OfferStyles.css";
import { Spinner } from "react-bootstrap";

const OfferComponent = ({ setControllSesion }) => {
  const [offersState, setOffersState] = useState([]);

  useEffect(() => {
    const getOffers = async () => {
      const offers = await axios.get("http://127.0.0.1:8000/api/offers"),
        offerData = await offers.data;
      setOffersState([...offersState, ...offerData]);
    };
    getOffers();
  }, []);

  return (
    <div className="container-Offers">
      {offersState.length > 0 ? (
        offersState.map((offer, index) => (
          <CardComponent
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

export default OfferComponent;

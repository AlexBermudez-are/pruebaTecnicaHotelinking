import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import buzo from "../../Assets/buzo.jpg";
import calcetines from "../../Assets/calcetines.jpg";
import camisa from "../../Assets/camisa.jpg";
import camison from "../../Assets/camison.jpg";
import campera from "../../Assets/campera.jpg";
import falda from "../../Assets/falda.jpg";
import pantalon from "../../Assets/pantalon.jpg";
import pants from "../../Assets/pants.jpg";
import short from "../../Assets/short.jpg";
import vestido from "../../Assets/vestido.jpg";
import "./CuponCardStyles.css";
import axios from "axios";

const CuponCardComponent = ({ offer, setControllSesion }) => {
  const productImage = {
    buzos: buzo,
    calcetas: calcetines,
    short: short,
    camison: camison,
    camisa: camisa,
    pantalon: pantalon,
    faldas: falda,
    vestido: vestido,
    pants: pants,
    camperas: campera,
  };

  const reemededCoupon = async (offerId) => {

    const getKey = localStorage.getItem("key")

    if (!getKey) return setControllSesion("login")

    try {
      await axios.put(
        `http://localhost:8000/api/user/cupon/${getKey}`,
        {},
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        }
      );

      alert("Coupon reedemed successfully");
    } catch (error) {
      alert("Failed to reedem coupon: " + error.response.data.error);
    }
  };

  return (
    <div className="cupon-Card-Container">
      <Card className="focus-Cupon-Card">
        <Card.Img
          variant="top"
          className="card-Image"
          src={productImage[offer.offer.product]}
        />
        <Card.Body>
          <Card.Title>{offer.offer.product}</Card.Title>
          <Card.Text>{offer.offer.description}</Card.Text>
          <Card.Text>
            Descuento del{" "}
            <mark style={{ color: "red", fontWeight: "bold" }}>
              {offer.offer.discount}%
            </mark>
          </Card.Text>
          <Button onClick={() => reemededCoupon(offer.id)} variant="danger">
            Canjear cupon!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CuponCardComponent;

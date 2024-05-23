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
import "./CardStyles.css";
import axios from "axios";

const CardComponent = ({ offer, setControllSesion }) => {
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

  const generateCoupon = async (offerId) => {

    const getKey = localStorage.getItem("key")

    if (!getKey) return setControllSesion("login")

    try {
      await axios.post(
        "http://localhost:8000/api/user/cupon/create",
        {
          code: Math.floor(100000 + Math.random() * 900000),
          state: "active",
          user_id: getKey,
          offer_id: offerId,
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        }
      );

      alert("Coupon generated successfully");
    } catch (error) {
      console.error("Error generating coupon:", error);
      alert("Failed to generate coupon: " + error.response.data.Error);
    }
  };

  return (
    <div className="card-Container">
      <Card className="focus-Card">
        <Card.Img
          variant="top"
          className="card-Image"
          src={productImage[offer.product]}
        />
        <Card.Body className="body-Card-Container">
          <Card.Title>{offer.product}</Card.Title>
          <Card.Text>{offer.description}</Card.Text>
          <Card.Text style={{display:"flex", flexDirection:"column"}}>{`$ ${offer.original_price}`}</Card.Text>
          <Card.Text>Precio Original</Card.Text>
          <Card.Text>
            Descuento del{" "}
            <mark style={{ color: "red", fontWeight: "bold" }}>
              {offer.discount}%
            </mark>
          </Card.Text>
          <Button className="btn-Get-Coupon" onClick={() => generateCoupon(offer.id)} variant="danger">
            Obtener Cupon!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;

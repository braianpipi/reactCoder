import React from "react";
import { Alert } from "react-bootstrap";
const FinalMessage = ({purchaseID}) => {
  return (
    <Alert variant="success">
      <Alert.Heading>Muchas Gracias , Nos Pondremos en Contacto a La Brevedad</Alert.Heading>
      <p>
        Tu compra fue realizada con exito! Muchas gracias por elegirnos!
      </p>
      <hr />
      <p className="mb-0">
        Haz el seguimiento de tu compra con tu ticket con el numero = {purchaseID};
      </p>
    </Alert>
  );
};

export default FinalMessage;

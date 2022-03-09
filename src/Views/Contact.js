import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import FinalMessage from "../components/FinalMessage/FinalMessage";
const InitialState = {
  name: "",
  //   email: "",
  //   pago: "",
  comentario: "",
};
const Contact = () => {
  const [values, setValues] = useState(InitialState);
  const [purchaseID, setPurchaseId] = useState("");
  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    setPurchaseId(docRef.id);
    setValues(InitialState);
  };

  return (
    <Form className="container" onSubmit={onSubmit}>
      <Form.Control
        name="name"
        value={values.name}
        size="lg"
        type="text"
        placeholder="Nombre"
        onChange={onChange}
      />
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          email="email"
          value={values.email}
          onChange={onChange}
        />
        <Form.Text className="text-muted">Necesitamos tu mail.</Form.Text>
      </Form.Group> */}
      {/* <Form.Select
        className="mb-3"
        aria-label="Medio de pago"
        pago="pago"
        value={values.pago}
        onChange={onChange}
      >
        <option>Elegir medio de Pago</option>
        <option value="Credito">Credito</option>
        <option value="Efectivo">Efectivo</option>
        <option value="MercadoPago">MercadoPago</option>
      </Form.Select> */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label
          comentario="comentario"
          value={values.comentario}
          onChange={onChange}
        >
          Compartinos un comentario
        </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="success" type="submit">
        Enviar
      </Button>
      {purchaseID && <FinalMessage purchaseID={purchaseID} />}
    </Form>
  );
};

export default Contact;

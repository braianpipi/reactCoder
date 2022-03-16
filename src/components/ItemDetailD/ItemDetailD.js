import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Item from "../Item/Item";


// import { CardBody, CardTitle } from 'reactstrap'
function ItemDetailD() {
    const [Product, setProduct] = useState([]);
  
    let id = useParams();
    let productID = id.id;
  
    useEffect(() => {
      axios(`https://fakestoreapi.com/products/${productID}`).then((res) =>
        setProduct(res.data)
      );
  
    }, [productID]);
    return (
            <div key={Product.id}>
              <Item  data={Product} />
            </div>

          );
  }
  
  export default ItemDetailD;








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


const Contact = () => {
  let [email, setEmail] = useState("");
  let [validemail, setValidemail] = useState("");
  let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  let validEmailEmail = email === validemail;
  let { addedProducts, setAddedProducts, total } = useContext(CartContext);

  const [values, setValues] = useState(initialState);

  const [purchaseId, setPurchaseId] = useState("");

  //capturo la fecha para pasarla despues al docRef y que me de esa info en firebase
  const d = new Date();
  let date = `${d.getDate()}/${1 + d.getMonth()}/${d.getFullYear()}`;

  //Tomo los valores de los campos del form
  const getValues = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchases"), {
      buyer: values,
      items: addedProducts,
      date: date,
      total: total,
      email: email
    });
    setPurchaseId(docRef.id);
    setValues(initialState);
    addedProducts.forEach((product) => {
      let newstock = product.stock - product.quantity;
      let productRef = doc(db, "Products", product.id);
      updateDoc(productRef, {
        stock: newstock,
      });
    });
    setAddedProducts([]);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleValidEmail = (event) => {
    setValidemail(event.target.value);
  };
  return (
    <>
      <form className="form" onSubmit={submit}>
        <div className="form-floating mb-3 inputContainer">
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={getValues}
            className="form-control"
            id="floatingName"
            placeholder="Name"
          />
          <label htmlFor="floatingName">Nombre</label>
        </div>
        <div className="form-floating mb-3 inputContainer">
          <input
            type="text"
            name="apellido"
            value={values.apellido}
            onChange={getValues}
            className="form-control"
            id="floatingLastName"
            placeholder="Apellido"
          />
          <label htmlFor="floatingLastName">Apellido</label>
        </div>
        <div className="form-floating mb-3 inputContainer">
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={getValues}
            className="form-control"
            id="floatingAddress"
            placeholder="Ciudad"
          />
          <label htmlFor="floatingAddress">Ciudad</label>
          <div className="field  col-xs-12">
            {validEmail === true ? (
              <div>
                <input
                  required
                  id="form-input-control-error-email"
                  label="Email"
                  placeholder="ejemplo@ejemplo.com"
                  onChange={handleEmail}
                  value={values.email}
                  onChange={getValues}
                />

                {email !== validemail ? (
                  <input
                    required
                    id="form-input-control-error-email"
                    label="Re-Email"
                    placeholder="ejemplo@ejemplo.com"
                    value={values.email}
                        error={{
                          content: "Los correos no coinciden",
                          pointing: "below",
                        }}
                    onChange={handleValidEmail}
                  />
                ) : (
                  <input
                    required
                    value={values.email}
                    id="form-input-control-error-email"
                    label="Re-Email"
                    placeholder="ejemplo@ejemplo.com"
                    onChange={handleValidEmail}
                  />
                )}
              </div>
            ) : (
              <div>
                <input
                  required
                  value={values.email}
                  id="form-input-control-error-email"
                  label="Correo electronico"
                  placeholder="ejemplo@ejemplo.com"
                  error={{
                    content: "Ingresa un correo valido",
                    pointing: "below",
                  }}
                  onChange={handleEmail}
                />
              </div>
            )}
          </div>
        </div>
        {!validEmailEmail ? null : (
          <Button variant="success" size="lg">
            Finalizar
          </Button>
        )}
      </form>
      {purchaseId && <FinalMessage purchaseID={purchaseId} />}
    </>
  );
};

import React, { useState, useContext } from 'react';
// import { Form, Button } from "react-bootstrap";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { CartContext } from '../components/CartContext/CartContex';
import FinalMessage from "../components/FinalMessage/FinalMessage";
import { Button } from 'react-bootstrap';
const initialState= {
  nombre: "",
  apellido: "",
  Email: ""
}
const Contact = () => {

  let { addedProducts, setAddedProducts, total } = useContext(CartContext);

  const [values, setValues] = useState(initialState);

  const [purchaseId, setPurchaseId] = useState('');

  //capturo la fecha para pasarla despues al docRef y que me de esa info en firebase
  const f = new Date();
  let fecha = `${f.getDate()}/${1 + f.getMonth()}/${f.getFullYear()}`

  //Tomo los valores de los campos del form
  const getValues = (e) => {
      const {value, nombre} = e.target;
      setValues({...values, [nombre]: value});
  }

  const submit = async (e) => {
      e.preventDefault();
      const docRef = await addDoc(collection(db, "purchases"), {
          buyer: values, items: addedProducts, fecha: fecha, total: total
      });
      setPurchaseId(docRef.id);
      setValues(initialState);
      addedProducts.forEach(product => {
          let newstock = product.stock - product.quantity;
          let productRef = doc(db, 'Products', product.id); 
          updateDoc(productRef, {
              stock: newstock
          })
      })
      setAddedProducts([]);
  }

  return(
    <div className='container'>
        <form className="form" onSubmit={submit}>
            <div className="form-floating mb-3 inputContainer">
                <input type="text" nombre="nombre" value={values.nombre} onChange={getValues} className="form-control" id="floatingName" placeholder="Name" />
                <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3 inputContainer">
                <input type="text" nombre="apellido" value={values.apellido} onChange={getValues} className="form-control" id="floatingLastName" placeholder="Last nombre" />
                <label htmlFor="floatingLastName">Last nombre</label>
            </div>
            <div className="form-floating mb-3 inputContainer">
                <input type="text" nombre="Email" value={values.Email} onChange={getValues} className="form-control" id="floatingAddress" placeholder="Address" />
                <label htmlFor="floatingAddress">Email</label>
            </div>
            <div className='container'>

            <Button variant="success" type="submit" size="lg">
            Finalizar
            </Button>
            </div>

        </form>
        {purchaseId && <FinalMessage purchaseID={purchaseId} />}        
    </div>
)
};

export default Contact;
 

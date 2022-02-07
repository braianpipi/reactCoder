import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import ItemCount from "../../ItemCount";

const ItemListContainer = ({nombre, precio, descripcion, img, stock}) => {
  return (<div>

    <Card>
      <CardImg
        alt="Card image cap"
        src={img}
        width="20px"
        />
      <CardBody>
        <CardTitle tag="h5">
          {nombre}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {precio}
        </CardSubtitle>
        <CardText>
          {descripcion}
          </CardText>

        <ItemCount/>
      </CardBody>
    </Card>
          </div>
  )}

export default ItemListContainer;
import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

const ItemListContainer = ({nombre, precio, descripcion, img, stock}) => {
  return (<div>

    <Card>
      <CardImg
        alt="Card image cap"
        src={img}
        width="100%"
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
                  <CardText>
          {stock}
          </CardText>
          <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      </CardBody>
    </Card>
          </div>
  )}

export default ItemListContainer;
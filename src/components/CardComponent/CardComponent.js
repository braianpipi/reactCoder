import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const CardComponent = ({nombre, precio, descripcion, img}) => {
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
      </CardBody>
    </Card>
          </div>
  )}

export default CardComponent;
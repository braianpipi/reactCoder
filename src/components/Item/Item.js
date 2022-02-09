import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import ItemCount from '../../ItemCount';

const Item = ({data}) => {
  return (<div>
    <Card>
      <CardImg
        alt="Card image cap"
        src={data.image}
        width="20px"
        />
      <CardBody>
        <CardTitle tag="h5">
          {data.title}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {data.price}$
        </CardSubtitle>
        <CardText>
          {data.description}
          </CardText>

        <ItemCount/>
      </CardBody>
    </Card>
          </div>
  )}

export default Item;

import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import ItemCount from '../components/Item/ItemCount';
import "../components/Item/Item.css";

const ItemDetailView = ({data}) => {
  return (<div>
      
    <Card>
      <CardImg className="imagenCard"
        alt="Card image cap"
        src={data.image}
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

export default ItemDetailView;
import React from 'react';
import axios from 'axios';
import Links from './Links';
import { Card, Badge, Button, } from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import { getPrice } from './utils';


 
function CardItem({item, isLogedIn}) {

  const cardStyle = { width: 250, minHeight: 200, margin: 'auto', padding: 10 };
  const imageStyle = { width: '100%', objectFit: 'contain', padding: 5, maxHeight: 200 };

  const token = localStorage.getItem('eshop_jwt');

  const addToCart = () => {
    if (!isLogedIn) {
      alert('Login terlebih dahulu');
    } else {
      axios.post(`https://eshop.reskimulud.my.id/carts`, {productId: item.id, quantity: 1}, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }).then(res => alert(res.data.message))
        .catch(err => alert(err.response.data.message))
    }
  };

  return (
    <Card style={cardStyle}>
      <Card.Img style={imageStyle} variant="top" src={`https://eshop.reskimulud.my.id/products/image/${item.image}`} />
      <Card.Body>
        <Card.Title>
          <Links to='/product'>
            {item.title}
          </Links>
        </Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
          <h6>
            <Badge bg='secondary'>{getPrice(item.price)}</Badge>
          </h6>
          <Button onClick={addToCart} className='btn btn-outline-dark'>
            <MdAddShoppingCart  />
          </Button>
        </div>
      </Card.Body>
    </Card>

  );
}

export default CardItem;
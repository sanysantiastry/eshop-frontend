import React from 'react';
import axios from 'axios';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';
import { getPrice } from './utils';

function CartItem({item, setHasFetched}) {

    const token = localStorage.getItem('eshop_jwt');

  const imageStyle = { width: '100%', objectFit: 'contain', maxHeight: 80 };

  const deleteCartItem = (itemId) => {
    axios.delete(`https://eshop.reskimulud.my.id/carts/${itemId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }).then(res => alert(res.data.message))
      .catch(err => err.response.data.message)
      .finally(() => setHasFetched(false))
  };

  return (
    <Card className='p-3 mt-2'>
        <Row>
            <Col className='col-1'>
            <Card.Img style={imageStyle} variant="top" src={`https://eshop.reskimulud.my.id/products/image/${item.image}`} />
            </Col>
            <Col className='col-10' >
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle>{getPrice(item.price)}</Card.Subtitle>
                <Card.Text>qty : {item.quantity}</Card.Text>
            </Col>
            <Col className='col-1 d-flex justify-content-center align-items-center'>
                <Button onClick={() => deleteCartItem(item.id)} className='btn btn-outline-danger'>
                    <MdDeleteForever/>
                </Button>

            </Col>
        </Row>
        </Card>
  );
}

export default CartItem;
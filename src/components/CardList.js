import React, { useEffect, useState } from 'react';
import { Row,Col } from 'react-bootstrap';
import CardItem from './CardItem';
import axios from 'axios';

 
function CardList(isLogedIn) {
const [products, setProducts] = useState([]);

useEffect(() => {
 axios.get('https://eshop.reskimulud.my.id/products')
  .then((res) => setProducts(res.data.data.products))
}, []);

  return (
   <Row xs={1} xl={4} sm={2} lg={3} md={3} >
   {products.map((product) => (
     <Col key={product.id} >
     <CardItem isLogedIn={isLogedIn} item={product}/>
     </Col>
   ))}
   </Row>
  );
}

export default CardList;
import React from 'react';
import CardList from '../components/CardList';
import { Container } from 'react-bootstrap';

function Home(isLogedIn){
    return (
        <Container>
        <h1>Home</h1>
        <CardList isLogedIn={isLogedIn}/>
        </Container>
      );

}
export default Home;

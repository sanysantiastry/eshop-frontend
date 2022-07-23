import React from 'react';
import { Navbar as NavBar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MdShoppingCart,MdPerson, MdOutlineShop } from 'react-icons/md';
 
function Navbar({isLogedIn}) {
    const navigate = useNavigate();

    const iconCursor = {cursor : 'pointer'};

  return (
    <NavBar>
        <Container>
            <NavBar.Brand>
              <MdOutlineShop style={iconCursor} onClick={() => navigate('/')} className='me-2' size={32} color="royalblue" />
              E-SHOP</NavBar.Brand>
            <Nav>
                {isLogedIn ?
                  <>
                  <MdShoppingCart style={iconCursor} onClick={() => navigate('/carts')} className='me-3' size={23}  />
                  <MdPerson style={iconCursor} onClick={() => navigate('/profile')} size={23}  />
                  </>
                  :
                  <>
                  <Button onClick={()=> navigate('/auth/login')} className='me-2' >sign in</Button>
                <Button onClick={()=> navigate('/auth/register')} variant='outline-primary' >Register</Button>
                </>
                }
            </Nav>
        </Container>
    </NavBar>
  );
}

export default Navbar;
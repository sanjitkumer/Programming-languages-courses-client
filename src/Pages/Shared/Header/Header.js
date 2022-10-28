import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then( () => {})
    .catch(error => console.error(error))
  }


    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/' ><img src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" style={{height: '40px'}}  alt=''/>Programming Language</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/category/:id' >Courses</Link></Nav.Link>
            <Nav.Link> <Link to='/faq' >FAQ</Link> </Nav.Link>
            <Nav.Link> <Link to='/blog' >Blog</Link> </Nav.Link>
            <Nav.Link>
            <div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="customSwitches"/>
  <label class="custom-control-label" for="customSwitches">Toggle this switch element</label>
</div></Nav.Link>           
          </Nav>

          <Nav>
          
            <Nav.Link href="#deets">
            {
                user?.uid ?
                <>
                 <span>  {user?.displayName}</span>
                 <Button variant="light" onClick={handleLogOut}>Log out</Button>
                </>
               
                :
                <>
                <Link className='p-2' variant="primary" to= '/login'> Login</Link>
                <Link to='/register'>Register</Link>
                </>
              }
              </Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ?
              <Image title={user.displayName} style={{height: '40px'}} roundedCircle src={user?.photoURL} ></Image>
              :
             <FaUser></FaUser>              
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;
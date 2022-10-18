
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import icon from '../img/icon.jpg'

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
     
        <Navbar.Brand href="/" className='white'> <img src={icon} alt="BigCo Inc. logo"/>NewsZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-center"
            style={{ maxHeight: '350px' }}
            navbarScroll
          >
            <Nav.Link className='white' href="/business">Business</Nav.Link>
            <Nav.Link className='white' href="/entertainment">Bntertainment</Nav.Link>
            <Nav.Link className='white' href="/general">General</Nav.Link>
            <Nav.Link className='white' href="/health">Health</Nav.Link>
            <Nav.Link className='white' href="/science">Science</Nav.Link>
            <Nav.Link className='white' href="/sports">Sports</Nav.Link>
            <Nav.Link className='white' href="/technology">Technology</Nav.Link>
      
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
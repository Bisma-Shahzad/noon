import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {img1} from './Noon.png';

function NavScrollExample() {
  return (
    <Navbar style={{ "background-color": "yellow" }} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" width="100px"/></Navbar.Brand>
        <img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="noon"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <NavDropdown title="Delivered to" id="navbarScrollingDropdown">
              
            </NavDropdown>
            <Form className="d-flex mb-0" >
              <Form.Control
                type="search"
                placeholder="What are you looking for?"
                className="me-2"
                aria-label="Search"
                style= {{width: "800px"}}
              />
            </Form>
</Nav>
<Nav style={{padding: '5px'}}>
            <Nav.Link href="#action1" className="ms-auto" style={{fontWeight: 'bold', color: 'grey'}}>Sign in</Nav.Link>
            
            <Nav.Link href="#action2" style={{borderLeft: '1px solid lightgrey', fontWeight: 'bold', color: 'grey'}}>Cart</Nav.Link>

            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
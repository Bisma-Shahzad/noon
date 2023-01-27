import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';


function Secondnav() {
    const category= ['ELECTRONICS', "MEN", "WOMEN", "HOME", "BEAUTY & FRAGRANCES", "BABY & TOYS", "SPORTS", "BESTSELLERS", "SELL ON NOON"];

    return (
        <Navbar style={{ "background-color": "white", "font-weight": "bold" }} expand="lg">
            <Container fluid>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <NavDropdown title={
                            <span className="text-primary pe-auto">ALL CATEGORIES</span>
                        } id="navbarScrollingDropdown" style={{ "border-right": " 1px solid black" }}>

                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#action2" style={{ color: 'black', "margin-right": "10px"}}>ELECTRONICS</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: 'black', "margin-right": "10px"}}>MEN</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: 'black', "margin-right": "10px"}}>WOMEN</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: 'black', "margin-right": "10px"}}>HOME</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: 'black', "margin-right": "10px"}}>BEAUTY & FRAGRANCES</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: 'black', "margin-right": "10px"}}>BABY & TOYS</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: 'black', "margin-right": "10px"}}>SPORTS</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: 'black', "margin-right": "10px"}}>BESTSELLERS</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: 'black', "margin-right": "10px"}}>SELL ON NOON</Nav.Link>
                        {/* {category.map((x, i) => {
                            <Nav.Link href="#action2" style={{ color: 'red' }}>x[i]</Nav.Link>
                        })} */}

                        
                        <Button variant="secondary" style={{ padding: "1px", height: "20px", "font-size": '10px', 'margin-top': "10px" }}>Huge Saving</Button>
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Secondnav;
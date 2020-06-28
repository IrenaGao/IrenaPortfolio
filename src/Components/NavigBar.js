import React from 'react';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavigBar(props){
    return(
        <div>
            <Router>
                {/* <Container fluid={true}> */}
                    <NavBar expand="lg">
                        <Nav className="nav ml-auto mt-4" style={{marginRight: "5%"}}>
                            {/* <Nav.Link className="navitem ml-5" to="/">HOME</Nav.Link>
                            <Nav.Link className="navitem ml-5" to="/about">ABOUT ME</Nav.Link>
                            <Nav.Link className="navitem ml-5" href="">RESUME</Nav.Link> */}
                            <NavDropdown title="Dropdown" className="navitem ml-5" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action2">Action2</NavDropdown.Item>
                            </NavDropdown>
                            {/* <Nav.Link className="navitem ml-5" href="">CONTACT</Nav.Link> */}
                        </Nav>
                    </NavBar>
                {/* </Container> */}
            </Router>
        </div>
    );
}
export default NavigBar;
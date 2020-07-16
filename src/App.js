import React, { useState}  from 'react';
import TextLoop from 'react-text-loop';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
import './App.css';
import Chet from './assets/chetthumbnail.png';
import Diya from './assets/diyathumbnail.png';
import Snapchat from './assets/snapchatthumbnail.png';
import Home from './pages/index.js';
import About from './pages/about.js';
import Misc from './pages/misc.js';
import NavigBar from './Components/NavigBar.js';
import NavBar from 'react-bootstrap/NavBar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import ResumeDev from './assets/Irena_Gao_resume_software.pdf';
import ResumeUX from './assets/Irena_Gao_resume_UX.pdf';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Router>
               <Container fluid={true}>
                   {/* <Navbar bg="transparent" expand="lg">
                       <Navbar.Toggle aria-controls="navbar-toggle"/>
                       <Navbar.Collapse id="navbar-toggle">
                           <Nav className="ml-auto">
                               <h5> <Link className="nav-link navtext" to="/">HOME</Link></h5>
                               <h5> <Link className="nav-link navtext" to="/contact">CONTACT</Link></h5>
                               <h5> <Link className="nav-link navtext" to="/me">ABOUT ME</Link></h5>
                           </Nav>
                       </Navbar.Collapse>
                   </Navbar> */}

                   <NavBar collapseOnSelect expand="lg">
                        <Nav className="nav ml-auto mt-4" style={{marginRight: "5%"}}>
                            <Nav.Link className="navitem ml-5" href="/">HOME</Nav.Link>
                            <Nav.Link className="navitem ml-5" href="/about">ABOUT ME</Nav.Link>
                            <NavDropdown title="RESUME" className="navitem navresume ml-5" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href={ResumeDev} target="_blank">Development</NavDropdown.Item>
                                <NavDropdown.Item href={ResumeUX} target="_blank">Design</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="navitem ml-5" href="">CONTACT</Nav.Link>
                        </Nav>
                    </NavBar>
                   <Route path="/" exact render={() => <Home />} />
                   <Route path="/about" render={() => <About />} />
                   <Route path="/resumedev" render={() => <ResumeDev />} />
                   <Route path="/misc" render={() => <Misc />} />
               </Container>
           </Router>
    </div>
  );
}

export default App;

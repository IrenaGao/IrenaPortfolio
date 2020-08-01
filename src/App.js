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

import Github from './assets/githublogo.png';
import LinkedIn from './assets/linkedinlogo.png';
import Email from './assets/gmaillogo.png';
import Medium from './assets/mediumlogo.png';
import Logo from './assets/personallogo.png';

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
        <Row style={{maxWidth: "100%", marginTop: "1.5%"}}>
          <Col>
            <a href="/"><img src={Logo} width="80%" style={{marginLeft: "10%", marginBottom: "0.5%"}} /></a>
          </Col>
               <Container>
                   <NavBar collapseOnSelect expand="lg">
                    <Navbar.Toggle aria-controls="navbar-toggle" />
                      <Navbar.Collapse id="navbar-toggle">
                        <Nav className="nav ml-auto" style={{marginRight: "2%"}}>
                            <Nav.Link className="navitem ml-5" href="/">HOME</Nav.Link>
                            <Nav.Link className="navitem ml-5" href="/about">ABOUT ME</Nav.Link>
                            <NavDropdown title="RESUME" className="navitem navresume ml-5" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href={ResumeDev} target="_blank" className="font">Development</NavDropdown.Item>
                                <NavDropdown.Item href={ResumeUX} target="_blank" className="font">Design</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="CONTACT" className="navitem navresume ml-5" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href={ResumeUX} target="_blank" className="font" style={{marginTop: "2%"}}>
                                  <img src={LinkedIn} width="30px" style={{marginRight: "8%", marginTop: "-3%"}}/>LinkedIn
                                </NavDropdown.Item>
                                <NavDropdown.Item href={ResumeUX} target="_blank" className="font" style={{marginTop: "3%"}}>
                                  <img src={Email} width="30px" style={{marginRight: "8%", marginTop: "-3%"}}/>Email
                                </NavDropdown.Item>
                                <NavDropdown.Item href={ResumeDev} target="_blank" className="font" style={{marginTop: "3%"}}>
                                  <img src={Github} width="30px" style={{marginRight: "8%", marginTop: "-3%"}}/>Github
                                </NavDropdown.Item>
                                <NavDropdown.Item href={ResumeDev} target="_blank" className="font" style={{marginTop: "3%"}}>
                                  <img src={Medium} width="30px" style={{marginRight: "8%", marginTop: "-3%"}}/>Medium
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                      </Navbar.Collapse>
                    </NavBar>
                    </Container>
                    </Row>
                   <Route path="/" exact render={() => <Home />} />
                   <Route path="/about" render={() => <About />} />
                   <Route path="/resumedev" render={() => <ResumeDev />} />
                  <Route path="/misc" render={() => <Misc />} />
           </Router>
    </div>
  );
}

export default App;

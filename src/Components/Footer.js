import React from 'react';

import LinkedIn from '../assets/linkedinlogo.png';
import Email from '../assets/gmaillogo.png';
import Github from '../assets/githublogo.png';
import Medium from '../assets/mediumlogo.png';

import Heart from '../assets/heart.png';
import BackToTop from '../assets/up-arrow.png';

function Footer(props) {
    return(
        <div className="footer" style={{backgroundColor: "#f2f7ff", overflow: "hidden", color: "rgb(55, 55, 55)"}}>
            <div className="gratitude" style={{textAlign: "center"}}>
                <h4><img src ={Heart} width="40px" /> Thanks for visiting, come again soon!</h4>
            </div>
            <a href="#firstrow">
                <img className="totop" src ={BackToTop} width="55px" style={{display: "block", marginRight: "auto", marginLeft: "auto"}}/>
            </a>
            <span style={{marginBottom: "0.5%", paddingLeft: "4%"}}>Interested in learning more?
                <span className="footerlogos"> 
                    <a href="https://linkedin.com/in/irenagao/" target="_blank">
                        <img width="30px" src={LinkedIn} style={{marginLeft: "1%"}} />
                    </a>
                    <a href="mailto: ijg24@cornell.edu" target="_blank">
                        <img width="30px" src={Email} style={{}} />
                    </a>
                    <a href="https://github.com/irenagao/" target="_blank">
                        <img width="30px" src={Github} style={{}} />
                    </a>
                    <a href="https://medium.com/@ijg24/" target="_blank">
                        <img width="30px" src={Medium} style={{}} />
                    </a>
                </span>
            </span>
            <span className="copyright" style={{paddingBottom: "0.5%", paddingRight: "4%"}}>©2020 Designed and developed by Irena using <a target="_blank" href="https://reactjs.org/">ReactJS</a></span>
        </div>
    );
}
export default Footer;
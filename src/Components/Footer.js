import React from 'react';

import LinkedIn from '../assets/linkedinlogo.png';
import Email from '../assets/gmaillogo.png';
import Github from '../assets/githublogo.png';
import Medium from '../assets/mediumlogo.png';

function Footer(props) {
    return(
        <div style={{textAlign: "center", backgroundColor: "#f2f7ff", marginTop: "3%", paddingTop: "2%"}}>
            Keep in touch, and come back soon! <br></br>
            <img width="30px" src={LinkedIn} /><img width="30px" src={Email} /><img width="30px" src={Github} /><img width="30px" src={Medium} /><br></br>
            Design and code by Irena using React
        </div>
    );
}
export default Footer;
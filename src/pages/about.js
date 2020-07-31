import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import prototype from '../assets/prototype.png';
import userresearch from '../assets/userresearch.png';
import storyboard from '../assets/storyboard.png';
import cardsorting from '../assets/cardsorting.png';
import mockup from '../assets/mockup.png';
import contextmapping from '../assets/contextmapping.png';
import userflows from '../assets/userflows.png';
import data from '../assets/data.png';
import figma from '../assets/figma.png';
import balsamiq from '../assets/balsamiq.png';
import invision from '../assets/invision.png';
import photoshop from '../assets/photoshop.png';
import illustrator from '../assets/illustrator.png';
import htmlcss from '../assets/htmlcss.png';
import php from '../assets/php.png';
import js from '../assets/javascript.png';
import python from '../assets/python.png';
import sql from '../assets/sql.png';
import react from '../assets/react.png';

import Grid from '@material-ui/core/Grid';
import CustomText from '../Components/Skills';
import CustomText2 from '../Components/Skills2';
import CustomText3 from '../Components/Skills3';
import Slideshow from '../Components/Slideshow.js';
import AboutText from '../Components/AboutText.js';
import Footer from '../Components/Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';

var icons = [
    {
        img: prototype,
        text: "Prototyping/Wireframing"
    },
    {
        img: userresearch,
        text: "User Research/Insights"
    },
    {
        img: storyboard,
        text: "Storyboarding"
    },
    {
        img: cardsorting,
        text: "Card Sorting"
    },
    {
        img: mockup,
        text: "Mockup"
    },
    {
        img: contextmapping,
        text: "Context Mapping"
    },
    {
        img: userflows,
        text: "User Flows"
    },
    {
        img: data,
        text: "Data Analysis"
    }
]

var icons2 = [
    {
        img: photoshop,
        text: "Adobe Photoshop"
    },
    {
        img: illustrator,
        text: "Adobe Illustrator"
    },
    {
        img: figma,
        text: "Figma"
    },
    {
        img: balsamiq,
        text: "Balsamiq"
    },
    {
        img: invision,
        text: "Invision"
    }
]

var icons3 = [
    {
        img: htmlcss,
        text: "HTML/CSS"
    },
    {
        img: php,
        text: "PHP"
    },
    {
        img: js,
        text: "Javascript"
    },
    {
        img: python,
        text: "Python (& Flask)"
    },
    {
        img: sql,
        text: "SQL (MySQL/SQLite)"
    },
    {
        img: react,
        text: "React/Vue.js"
    }
]

function About(props) {
    let iconimg = '';
    return (
        <div>
            <AboutText />
            <h2 style={{textAlign: "center", paddingTop: "1.5%", marginTop: "60px", color: "#007bff"}}>What do I know? Ask me about...</h2>
            <div style={{backgroundColor: "#f2f7ff", width: "100%", margin: "", borderRadius: "0px"}}>
                <h3 className="mt-4" style={{textAlign: "center", paddingTop: "28px"}}>Design</h3><hr width="95%" />
                {/* <p><b>Interaction/Visual:</b></p> */}
                <Grid container alignItems="left" className="mt-4" style={{width: "80%", marginLeft: "10%", marginRight: "10%"}}> 
                    <Grid item> 
                        <p><b>Interaction/Visual:</b></p>
                    </Grid>
                    {makeImgs(icons)}
                </Grid>
                <hr width="30%" />
                <Grid container className="mt-4" alignItems="left" style={{paddingBottom: "2%", width: "80%", marginLeft: "10%", marginRight: "10%"}}>
                    <Grid item>
                        <p><b>Software</b></p>
                    </Grid>
                    {makeImgs2(icons2)}
                </Grid>
            {/* </div>
            <div style={{backgroundColor: "#f2f7ff", width: "90%", margin: "auto", borderRadius: "20px"}}> */}
                <h3 className="mt-4" style={{textAlign: "center", paddingTop: "30px"}}>Development</h3><hr width="95%" />
                <Grid container justify="center" className="mt-4" style={{paddingBottom: "30px", width: "80%", marginLeft: "10%", marginRight: "10%"}}>
                    {makeImgs3(icons3)}
                </Grid>
            </div>
            <h2 style={{textAlign: "center", marginTop: "70px", color: "#007bff"}}>What else have I done in this life?</h2>
            <Slideshow />
            {/* <div style={{border: "solid", borderWidth: "3px", borderColor: "#007bff", borderRadius: "10px", width: "45%", textAlign: "center", marginTop: "5%", marginLeft: "27.5%"}}>
                <Button style={{fontSize: "25px", marginTop: "7%", marginBottom: "2%", borderRadius: "7px"}}>Learn more</Button>
                <p style={{paddingBottom: "2%"}}>about my past & side hobbies!</p>
            </div> */}
            <Footer />
        </div>
    );
}

function makeImgs(icons) {
    return icons.map(icon => {
        return <CustomText image={icon.img} text={icon.text} />
    });
}

function makeImgs2(icons2) {
    return icons2.map(icon2 => {
        return <CustomText2 image={icon2.img} text={icon2.text} />
    })
}

function makeImgs3(icons3) {
    return icons3.map(icon3 => {
        return <CustomText2 image={icon3.img} text={icon3.text} />
    })
}
export default About
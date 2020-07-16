import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Me from '../assets/mespring.jpg';

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
    },
    {
        img: photoshop,
        text: "Adobe Photoshop"
    },
    {
        img: illustrator,
        text: "Adobe Illustrator"
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
            <Row className="responsive" style={{marginLeft: "6%", marginTop: "5%"}}>
                {/* <Col style={{borderStyle: "", borderColor: "", width: "10%"}}> */}
                <img className="responsive" style={{height: "550px"}}src = {Me} />
                {/* </Col> */}
                <Col className="responsive" style={{marginLeft: "5%", width: "50%", marginRight: "5%", marginTop: "3%"}}>
                <h1>Hey, welcome to my humble abode! :)</h1>
                <h4 className="mb-4">Feel free to sit down! Would you like coffee, tea, anything?</h4>
                <p>Let's get to know each other. I'm a rising senior @Cornell studying Information Science, concentrating in behavioral science
                and minoring in business.
                I'm currently interning remotely @Cuseum, @Diya Health, and running a startup incubator @LCL, but based in Rochester, NY.</p>
                <p>I'm particularly interested in leveraging the pain points of users to design a solution and implement software
                to make their lives easier. Impact is important to me, so I want to use my technical skills to address the healthcare and 
                environmental fields and make these limited resources more accessible to all.</p>
                <p>When the workweek's over and the weekend comes, I love exploring the rolling waterfalls of Ithaca or the bustling streets of 
                the city (not during COVID, of course!). I value my time through relationships and cherish time with my friends and family.</p>
                <p>Now that you know a bit about me, would you like to get real coffee? Let's get in touch by email or connect on LinkedIn!</p>
                </Col>
            </Row>
            <h2 style={{textAlign: "center", paddingTop: "1.5%", marginTop: "4%", color: "#007bff"}}>What do I know? Ask me about...</h2>
            <div style={{backgroundColor: "#f2f7ff", width: "100%", margin: "", borderRadius: "0px"}}>
                <h3 className="mt-4" style={{textAlign: "center", paddingTop: "2%"}}>Design</h3><hr width="95%" />
                {/* <p><b>Interaction/Visual:</b></p> */}
                <Grid container alignItems="left" className="mt-4" style={{width: "80%", marginLeft: "10%", marginRight: "10%"}}> 
                    <Grid item> 
                        <p><b>Interaction/Visual:</b></p>
                    </Grid>
                    {makeImgs(icons)}
                </Grid><hr width="30%" />
                <Grid container className="mt-4" alignItems="left" style={{paddingBottom: "2%", width: "80%", marginLeft: "10%", marginRight: "10%"}}>
                    <Grid item>
                        <p><b>Software:</b></p>
                    </Grid>
                    {makeImgs2(icons2)}
                </Grid>
            {/* </div>
            <div style={{backgroundColor: "#f2f7ff", width: "90%", margin: "auto", borderRadius: "20px"}}> */}
                <h3 className="mt-4" style={{textAlign: "center", paddingTop: "2%"}}>Development</h3><hr width="95%" />
                <Grid container justify="center" className="mt-4" style={{paddingBottom: "2%", width: "80%", marginLeft: "10%", marginRight: "10%"}}>
                    {makeImgs3(icons3)}
                </Grid>
            </div>
            <h2 style={{textAlign: "center", marginTop: "5%", color: "#007bff"}}>What else have I done in this life?</h2>
            <Slideshow />
            <div style={{border: "solid", borderWidth: "3px", borderColor: "#007bff", borderRadius: "10px", width: "45%", textAlign: "center", marginTop: "5%", marginLeft: "27.5%"}}>
                <Button style={{fontSize: "25px", marginTop: "7%", marginBottom: "2%", borderRadius: "7px"}}>Learn more</Button>
                <p style={{paddingBottom: "2%"}}>about my past & side hobbies!</p>
            </div>
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
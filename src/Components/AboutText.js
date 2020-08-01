import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Me from '../assets/mespring.jpg';
import Cornell from '../assets/cornelllogo.png';
import Cuseum from '../assets/cuseumlogo.jpeg';
import Empeq from '../assets/empeqlogo.png';
import LCL from '../assets/lcllogo.png';
import Waterfall from '../assets/waterfalllogo.png';
import City from '../assets/citylogo.png';
import Friends from '../assets/friendsfamilylogo.png';
import Coffee from '../assets/coffeelogo.png';
import Button from 'react-bootstrap/Button';

function AboutText(props) {
    return (
        <div>
            <Row style={{ marginLeft: "6%", marginTop: "5%" }}>
                <img className="responsive" src={Me} />
                <Col style={{ marginLeft: "5%", marginRight: "5%", marginTop: "40px" }}>
                    <h1>Hey, welcome to my humble abode! :)</h1>
                    <h4 className="mb-4">Feel free to sit down! Would you like coffee, tea, anything?</h4>
                    <p>Let's get to know each other.
                    I'm a rising senior <span style={{ color: "#B31B1B" }}>@Cornell</span> <img width="30px" src={Cornell} /> studying Information Science, concentrating in behavioral & data science and minoring in
                    business & statistics. I'm currently interning remotely
                    <a href="https://cuseum.com" target="_blank">
                            <span style={{ color: "#308f95" }}> @Cuseum </span>
                        </a> <img width="30px" src={Cuseum} /> , 
                    <a target="_blank" href="https://empeq.co">
                            <span style={{ color: "#0cc4d7" }}> @EMPEQ </span>
                        </a><img width="30px" src={Empeq} /> , and running a startup incubator
                    <a target="_blank" href="https://lifechanginglabs.com">    
                            <span style={{ color: "#B92427" }}> @LCL </span> 
                        </a><img width="30px" src={LCL} /> , but
                    based in Rochester, NY.</p>
                    <p>I love <span style={{fontWeight: "600"}}>software development</span>, <span style={{fontWeight: "600"}}>UX Design</span>, and <span style={{fontWeight: "600"}}>product management</span>. I'm particularly interested in leveraging the pain points of users to design a solution and implement software
                    to make their lives easier. Impact is important to me, so I want to use my technical skills to address the
                    healthcare and environmental fields and make these limited resources more accessible to all.</p>
                    <p>When the workweek's over and the weekend comes, I love exploring the 
                    rolling waterfalls <img width="30px" src={Waterfall} /> of Ithaca or the bustling streets of
                    the city <img width="30px" src={City} /> (not during COVID, of course!). I value my time through relationships and cherish time with my friends and family <img width="30px" src={Friends} /> .</p>
                    <p>Now that you know a bit about me, would you like to get real coffee <img src={Coffee} width="30px" /> ? I'm always open to exciting new opportunities. Let's get in touch by <a href="mailto:ijg24@cornell.edu">email</a> or connect on <a target="_blank" href="https://linkedin.com/in/irenagao">LinkedIn</a>!</p>
                    <Button href="/misc" style={{fontSize: "25px", marginTop: "3%", marginBottom: "2%", borderRadius: "7px"}}>See Past Experience :)</Button>
                </Col>
            </Row>
        </div>
    )
}
export default AboutText;
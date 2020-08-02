import React from 'react';
import TextLoop from 'react-text-loop';
import Night from '../assets/naturebackground.jpg';
import project from '../assets/project.png';

function IndexHeading(props) {

    return (
        <div className="firsttext mt-4" id="firsttext" style={{color: "white", paddingBottom: "5%", marginBottom: "7%", paddingRight: "5%", paddingLeft: "5%"}}>
            <h1 style={{fontSize: "500%", paddingTop: "7%", marginBottom: "2%", color: "#9dccff"}}><span className="emoji">👋</span> Hey, I'm Irena.</h1>
            <div className="textloop mt-3">
                I am a <TextLoop>
                    <em>product designer,</em>
                    <em>software developer,</em>
                    <em>product manager,</em>
                    <em>Cornell student,</em>
                </TextLoop>
            </div>
            <p>designing solutions and implementing software that solves problems.</p>
            <p style={{marginTop: "2%"}}>I'm the Program Coordinator @ <a href="https://lifechanginglabs.com/" className="headerstyle" target="_blank">Life Changing Summer</a>, SWE Intern @ <a href="https://cuseum.com/" className="headerstyle2" target="_blank">Cuseum.</a></p>
            <p style={{color: "black", marginTop: "60px"}}>View my work below :).</p>
            <img src={project} width="60px" />
        </div>
    );
}

export default IndexHeading;
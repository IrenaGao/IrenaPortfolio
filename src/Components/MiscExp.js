import React from 'react';

function MiscExp(props) {
    return (
        <div style={{marginLeft: "15%", width: "70%", marginTop: "70px"}}>
            <a target="_blank" href={props.exp.linksolo}>
                <h3 style={{display: "inline-block", marginRight: "2px", marginBottom: "10px"}}>
                    {props.exp.title}</h3> </a>
            <a target="_blank"  href={props.exp.linksolo2}>
                <span style={{fontSize: "25px"}}>
                    {props.exp.role}
                </span>
            </a>
            <span className="time" style={{marginLeft: "2%", fontSize: "20px", color: "rgb(155, 155, 155)", display: "block"}}>{props.exp.time}</span>
            {props.exp.buttonlink !== undefined && <p style={{fontSize: "20px", marginLeft: "1%"}}>
                <a className="viewextra" target="_blank" href={props.exp.link}>{props.exp.buttonlink}</a>
                <a className="viewextra" style={{marginLeft: "5%"}} target="_blank" href={props.exp.github}>{props.exp.buttongithub}</a>
            </p>}
            <p style={{marginLeft: "2%", marginRight: "1%", marginTop: "7px"}}>{props.exp.tasks}
                <a href={props.exp.hacklink} target="_blank">{props.exp.hack}</a></p>
            <p style={{marginLeft: "2%", marginRight: "1%"}}>{props.exp.tasks2}</p>
        </div>
    );
}
export default MiscExp;
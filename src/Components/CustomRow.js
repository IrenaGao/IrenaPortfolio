import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function CustomRow(props){
    return(
        <div>
            <Grid container>
                <Grid item>
                <div className="view">
                    <img className='responsive' id='border' src={props.item.img} />
                    {props.item.overview !== undefined &&
                    <div className="overview">
                        <a href={props.item.titlelink} target="_blank">
                            {props.item.title}
                        </a>
                        {props.item.overview}
                    </div>
                    }
                    <a onClick={()=> window.open(props.item.link)}>
                        <div style={{top: "42%"}} className="text2">
                            {props.item.button}
                        </div>
                    </a>
                    {props.item.button2 !== undefined && 
                        <a onClick={()=> window.open(props.item.link2)}>
                            <div style={{top: "61%"}} className="text2">
                                {props.item.button2}
                            </div>
                        </a> 
                    }
                </div>
                    <div className="title mt-4">
                        <text>
                            <span style={{color: '#007bff'}}>
                                {props.item.role}
                            </span>
                            <span style={{color: 'rgb(177, 177, 177)'}}> // {props.item.time}</span>
                        </text>
                    </div>
                    <div style={{fontWeight: 650, marginLeft: "0.5%", marginTop: "1%", marginBottom: "1.5%"}}>
                        {props.item.tools}
                    </div>
                    <div className="text mt-1">
                        <text>{props.item.text}</text>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
export default CustomRow;
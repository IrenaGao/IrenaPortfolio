import React from 'react';
import Grid from '@material-ui/core/Grid';

function CustomRow(props){
    return(
        <div>
            <Grid container>
                <Grid item>
                <div className="view">
                    <a onClick={()=> window.open(props.item.link)}>
                        <img className='responsive' id='border' src={props.item.img} />
                        <div class="text2">{props.item.button}</div>
                    </a>
                </div>
                    <div className="title mt-3">
                        <text><span style={{color: '#007bff'}}>{props.item.role}</span>
                        <span style={{color: 'lightgray'}}>{props.item.title}</span></text>
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
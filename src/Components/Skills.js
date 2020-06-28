import React from 'react';
import Grid from '@material-ui/core/Grid';

function Skills(props) {
    return (
        <div style={{marginRight: "2%"}}>
            <Grid item className="ml-4">
                <img style={{width: '30px'}} src={props.image} />
                <text className="ml-2">{props.text}</text>
            </Grid>
        </div>
    );
}
export default Skills;
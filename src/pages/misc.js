import React from 'react';
import MiscExp from '../Components/MiscExp';

var exp = [
    {
        title: 'Life Changing Labs',
        role: 'Program Coordinator, Brand/Marketing VP',
        time: 'June 2019 - Present',
        tasks: ''
    },
    {
        title: 'MicroDot',
        role: 'Product Developer',
        time: 'June 2019 - August 2019',
        tasks: ''
    },
    {
        title: 'Chime Song Requester',
        role: 'Product Designer',
        time: 'November 2019 - December 2019',
        tasks: ''
    },
    {
        title: 'Solarize',
        role: 'Product Developer',
        time: 'June 2019 - December 2019',
        tasks: ''
    }
]

var classexp = [
    {
        title: 'Botanic Buzzline',
        role: 'Software Developer',
        time: 'November 2019 - December 2019',
        tasks: ''
    },
    {
        title: 'Doctors Without Borders',
        role: 'Software Developer',
        time: 'April 2019 - May 2019',
        tasks: ''
    },
    {
        title: 'VR Collaboration',
        role: 'Team Sublead',
        time: 'February 2020 - May 2020',
        tasks: ''
    }
]

var hsexp = [
    {
        title: 'Odyssey of the Mind',
        time: '2016-2017',
        tasks: ''
    },
    {
        title: 'Piano',
        time: '2007 - 2017',
        tasks: ''
    },
    {
        title: 'Tennis',
        time: '2009 - 2017',
        tasks: ''
    }
]

function mapExp(exps) {
    return exps.map(exp => {
        return <MiscExp exp={exp} />
    })
} 

function Misc(props) {
    return(
        <div style={{backgroundColor: "#f2f7ff", marginTop: "3%"}}>
            <h1 style={{textAlign: "center"}}>Work Experience</h1>
            {mapExp(exp)}
        </div>
    );
}
export default Misc;
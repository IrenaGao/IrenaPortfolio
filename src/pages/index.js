import React from 'react';
import TextLoop from 'react-text-loop';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CustomRow from '../Components/CustomRow';
import Footer from '../Components/Footer';

// Card pictures
import Chet from '../assets/chetthumbnail.png';
import Diya from '../assets/diyathumbnail.png';
import Snapchat from '../assets/snapchatthumbnail.png';
import LCL from '../assets/lclthumbnail.png';
import AguaClara from '../assets/aguaclarathumbnail.png';
import Dynalec from '../assets/dynalecthumbnail.png';
import Cuseum from '../assets/cuseumthumbnail.png';

import Design from '../assets/paper-boat.png';
import Development from '../assets/code.png';
import IndexHeading from '../Components/index-heading.js';
import Grid from '@material-ui/core/Grid';
import NavigBar from '../Components/NavigBar.js';

import 'bootstrap/dist/css/bootstrap.min.css';

// Layout format : 
//Components -> Row (create your own row not use the one from bootstrap)
//In Main page, create an array of all your experiences then make a function that loops thru this array and return a row component with all required fields


//State of items

var items = [
    {
        img: Chet,
        role: 'Designer',
        title: 'INFO 3450: HCI Design',
        text: 'Led a team of five designers to assess pain points and iterate in high-fidelity of chore management problems students face.',
        link: 'https://medium.com/@ijg24/chet-motivating-chore-completion-through-a-virtual-pet-7ecf5d5934a',
        button: "View Case Study"
    },
    {
        img: Diya,
        role:  'Design Lead',
        title: 'DiyaHealth',
        titlelink: 'https://diyahealth.org',
        text: 'Redesigned patient dashboard view and landing pages to enhance doctor-patient communication.',
        button: "COMING SOON"
    },
    {
        img: Snapchat,
        role:  'Designer',
        title: 'INFO 1998: Intro to Digital Product Design',
        text: 'Redesigned Snapchat Discover Page to improve relevancy and interest to users.',
        link: 'https://medium.com/@ijg24/snapchat-concept-designing-for-a-more-relevant-discover-page-999207ca4cea',
        button: "View Case Study"
    },
    {
        img: LCL,
        role:  'Design Coordinator',
        title: 'Life Changing Labs',
        titlelink: 'https://lifechanginglabs.com/',
        text: 'Designed quarter cards and cover photos to market entrepreneurship resources across campus.',
        button: "View Designs"
    }
];

var items2 = [
    {
        img: AguaClara,
        role:  'Website Lead',
        title: 'AguaClara',
        titlelink: 'http://aguaclara.cornell.edu',
        text: 'Redesigned website and added content to increase visitor interest.',
        button: "View Github"
    },
    {
        img: Dynalec,
        role: 'SWE Intern',
        title: 'Dynalec Corp',
        titlelink: 'https://www.dynalec.com',
        text: 'Built a program to help company managers maintain a database of 150+ employees and courses they have taken.',
        button: "View Github"
    },
    {
        img: Cuseum,
        role: 'SWE Intern',
        title: 'Cuseum',
        titlelink: 'https://cuseum.com',
        text: 'Built a web app allowing users to purchase museum tickets by voice recognition.',
        button: "View Github"
    }
]


//Make Row Function for each experience, it takes in an parameter type array call items (Helper func)
function makeItem(items){
    return items.map(item => {
        return <Grid style={{marginTop: "2%", marginLeft: "4%"}} item justify='center' ><CustomRow item={item} /></Grid>
    })
}

function makeItem2(items){
    return items.map(item => {
        return <Grid style={{marginTop: "2%", marginLeft: "4%"}} item justify='center' ><CustomRow item={item} /></Grid>
    })
}

// everything on home page!
function Home(props) {
    return (
        <div>
            <IndexHeading />
            <p style={{textAlign: "center", fontSize: "20px", marginBottom: "-0.5%"}}>
                <a href="#finddesign" className="design" style={{marginRight: "5%", color: "rgb(146, 146, 146)"}}>View Design</a> 
                <a href="#finddev" className="dev" style={{marginLeft: "5%", color: "rgb(146, 146, 146)"}}>View Development</a>
            </p>
            <hr style={{width: "85%", color: "#007bff"}}/>
            <h2 id="finddesign" style={{textAlign: "center", marginTop: "1%", paddingTop: "2%", color: "#77b9ff", marginRight: "2%"}}>
                <img src={Design} width="60px" style={{marginTop: "-1%"}} /> Design</h2>
            <Grid container style={{maxWidth: '100%'}} justify='center' spacing={3}>{makeItem(items)}</Grid>

            <hr style={{marginTop: "4%", width: "85%", color: "#007bff"}}/>
            <h2 id="finddev" style={{textAlign: "center", marginTop: "", paddingTop: "2%", color: "#77b9ff", marginRight: "2%"}}>
                <img src={Development} width="55px" style={{marginTop: ""}} /> Development</h2>
            <Grid container style={{maxWidth: '100%'}} justify='center' spacing={3}>{makeItem2(items2)}</Grid>
            <Footer />
        </div>
    );
}
export default Home;
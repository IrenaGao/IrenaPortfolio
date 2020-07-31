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
        button: "View Case Study",
        button2: "View Poster",
        link2: "https://www.figma.com/file/beWVDuAdaWk4XgRMvVsqJ0/Chet-Poster?node-id=0%3A1",
    },
    {
        img: Diya,
        role:  'Design Lead',
        title: 'DiyaHealth',
        titlelink: 'https://diyahealth.org',
        text: 'Redesigned patient dashboard view and landing pages to enhance doctor-patient communication.',
        button: "View Case Study",
        button2: "View Github",
        link2: "https://github.com/amitbansal17/amitbansal17.github.io",
        overview: "DiyaHealth aims to enhance remote communication between doctors and patients during quarantine."
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
        link: 'https://www.figma.com/file/X8VUMQQjJidRyYLu9GQQxF/LCL-Designs?node-id=0%3A1',
        button: "View Designs",
        overview: "LCL promotes entrepreneurial resources for student startups across Cornell and ambitious high school students."
    }
];

var items2 = [
    {
        img: AguaClara,
        role:  'Website Lead',
        title: 'AguaClara',
        titlelink: 'http://aguaclara.cornell.edu',
        text: 'Redesigned website and added content to increase visitor interest.',
        button: "View Website Github",
        link2: "https://github.com/AguaClara/aguaclaracornell",
        button2: "View Python Github",
        link2: "https://github.com/AguaClara/aguaclara_tutorial/tree/add-tutorials",
        overview: "AguaClara implements gravity-powered water filtration techniques in Honduras, bringing clean water to their communities."
    },
    {
        img: Dynalec,
        role: 'SWE Intern',
        title: 'Dynalec Corp',
        titlelink: 'https://www.dynalec.com',
        text: 'Built a program to help company managers maintain a database of 150+ employees and courses they have taken.',
        button: "View Github",
        link: "https://github.com/IrenaGao/dynalectrainingprogram",
        overview: "Dynalec manufactures radios and other equipment for the US navy."
    },
    {
        img: Cuseum,
        role: 'SWE Intern',
        title: 'Cuseum',
        titlelink: 'https://cuseum.com',
        text: 'Built a web app allowing users to purchase museum tickets by voice recognition.',
        button: "View Github",
        link: "https://github.com/cuseum/voice-ticketing-kiosk",
        overview: "A Techstars startup, Cuseum digitizes membership and artifacts in museums to increase visitor retention."
    }
];


//Make Row Function for each experience, it takes in an parameter type array call items (Helper func)
function makeItem(items){
    return items.map(item => {
        return <Grid style={{marginTop: "2%", marginBottom: "1%", marginLeft: "4%"}} item justify='center' ><CustomRow item={item} /></Grid>
    })
}

function makeItem2(items){
    return items.map(item => {
        return <Grid style={{marginBottom: "1%", marginTop: "2%", marginLeft: "4%"}} item justify='center' ><CustomRow item={item} /></Grid>
    })
}

// everything on home page!
function Home(props) {
    return (
        <div>
            <IndexHeading />
            <p id="viewdesdev" style={{textAlign: "center", fontSize: "20px", marginBottom: "-0.5%"}}>
                <a href="#finddesign" id="design" style={{marginRight: "5%", color: "rgb(146, 146, 146)"}}>View Design</a> 
                <a href="#finddev" id="dev" style={{marginLeft: "5%", color: "rgb(146, 146, 146)"}}>View Development</a>
            </p>
            <hr style={{width: "85%", color: "#007bff"}}/>
            <h2 id="finddesign" style={{textAlign: "center", marginTop: "", paddingTop: "2%", color: "#77b9ff", marginRight: "2%"}}>
                <img src={Design} width="60px" /> Design
            </h2>
            <Grid container style={{maxWidth: '100%'}} justify='center' spacing={3}>{makeItem(items)}</Grid>

            <hr style={{marginTop: "4%", width: "85%", color: "#007bff"}}/>
            <h2 id="finddev" style={{textAlign: "center", marginTop: "", paddingTop: "2%", color: "#77b9ff", marginRight: "2%"}}>
                <img src={Development} width="55px" /> Development
            </h2>
            <Grid container style={{maxWidth: '100%'}} justify='center' spacing={3}>{makeItem2(items2)}</Grid>
            <Footer />
        </div>
    );
}
export default Home;
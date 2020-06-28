import React from 'react';
import TextLoop from 'react-text-loop';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CustomRow from '../Components/CustomRow';
import Chet from '../assets/chetthumbnail.png';
import Diya from '../assets/diyathumbnail.png';
import Snapchat from '../assets/snapchatthumbnail.png';
import LCL from '../assets/lclthumbnail.png';
import AguaClara from '../assets/aguaclarathumbnail.png';
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
        title: ' // INFO 3450: HCI Design',
        text: 'Led a team of five designers to assess pain points and iterate in high-fidelity of chore management problems students face.',
        link: 'https://medium.com/@ijg24/chet-motivating-chore-completion-through-a-virtual-pet-7ecf5d5934a',
        button: "View Case Study"
    },
    {
        img: Diya,
        role:  'Design Lead',
        title: ' // DiyaHealth',
        text: 'Redesigned patient dashboard view and landing pages to enhance doctor-patient communication.',
        button: "COMING SOON"
    },
    {
        img: Snapchat,
        role:  'Designer',
        title: ' // INFO 1998: Intro to Digital Product Design',
        text: 'Redesigned Snapchat Discover Page to improve relevancy and interest to users.',
        link: 'https://medium.com/@ijg24/snapchat-concept-designing-for-a-more-relevant-discover-page-999207ca4cea',
        button: "View Case Study"
    },
    {
        img: LCL,
        role:  'Design Coordinator',
        title: ' // Life Changing Labs',
        text: 'Designed quarter cards and cover photos to market entrepreneurship resources across campus.',
        button: "View Designs"
    },
    {
        img: AguaClara,
        role:  'Website Lead',
        title: ' // AguaClara',
        text: 'Redesigned website and added content to increase visitor interest.',
        button: "View Github"
    }
];


//Make Row Function for each experience, it takes in an parameter type array call items (Helper func)
function makeItem(items){
    return items.map(item => {
        return <Grid style={{marginTop: "5%", marginLeft: "4%"}} item justify='center' ><CustomRow item={item} /></Grid>
    })
}

function Home(props) {
    return (
        <div>
            <IndexHeading />
            <Grid container style={{maxWidth: '100%'}} justify='center' spacing={3}>{makeItem(items)}</Grid>
        </div>
    );
}
export default Home;
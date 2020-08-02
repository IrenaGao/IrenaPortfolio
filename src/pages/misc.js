import React from 'react';
import MiscExp from '../Components/MiscExp';
import Footer from '../Components/Footer.js';

var exp = [
    {
        title: 'Life Changing Labs:',
        role: 'Program Coordinator',
        time: "June '19 - Present",
        tasks: 'Launched entire curriculum teaching HTML/CSS & UX Design. Instructed first ever virtual daily classes on web development to high school students to speak their interest in entrepreneurship and build the MVP.',
        tasks2: 'Launched the first ever virtual university incubator, leading workshops with 30+ competitive incubator participants. Coordinated with highly renowned mentors and speakers and offered thousands of dollars in funding.'
    },
    {
        title: 'MicroDot:',
        role: 'Product Developer',
        time: "June - Aug '19",
        tasks: 'Designed prototype of an online marketplace using Figma and coded website using HTML/CSS, PHP, and MySQL. Goal was to use a digital currency to stimulate spending in lagging economies.',
        github: 'https://github.com/IrenaGao/MicroDot',
        link: 'https://www.figma.com/file/QhLirTRTbwsBCFqclzkl24PE/MicroDot-Web-App-Design?node-id=0%3A1',
        buttongithub: 'View Github',
        buttonlink: 'View Figma'
    },
    {
        title: 'Chime Song Requester:',
        role: 'Product Designer',
        time: "Nov - Dec '19",
        tasks: 'Designed app using Figma to request songs played at the Cornell clock tower in the ',
        hack: 'AppDev Hack Challenge.',
        hacklink: 'https://www.cornellappdev.com/courses/hack-challenge',
        linksolo: 'https://www.figma.com/file/rBVuNon8vdcHqt4ObMJBPc/chime-song-requester?node-id=0%3A1'
    },
    {
        title: 'Solarize:',
        role: 'Product Developer',
        time: "June - Dec '19",
        tasks: 'Designed and coded website prototype of an order form using Figma and HTML/CSS, helping potential customers determine the most efficient solar panel to attach to their trailers.',
        link: 'https://www.figma.com/file/LDeestm7FS6JzTobFfjnTIpw/Solarize',
        github: 'https://github.com/IrenaGao/solarize',
        buttongithub: 'View Github',
        buttonlink: 'View Figma'
    }
]

var classexp = [
    {
        title: 'Botanic Buzzline:',
        role: 'Software Developer',
        time: "Nov - Dec '19",
        tasks: 'Led a team to develop a website in HTML/CSS for Botanic Buzzline, a Cornell club promoting the importance of local pollinators for the environment.',
        link: 'https://shielded-stream-32218.herokuapp.com/index.html',
        github: 'https://github.coecis.cornell.edu/info1300-fa2018/golden-mammoth-project-4',
        buttonlink: 'View Website',
        buttongithub: 'View Github'
    },
    {
        title: 'Doctors Without Borders:',
        role: 'Software Developer',
        time: "April - May '19",
        tasks: 'Led a team to develop a website using HTML/CSS, PHP, and SQLite for Doctors without Borders, a Cornell branch of an organization conducting medical projects in third-world countries.',
        linksolo: 'https://github.coecis.cornell.edu/info2300-sp2019/gray-tiger-project-4'
    },
    {
        title: 'VR Collaboration:',
        role: 'Team Sublead',
        time: "Feb - May '20",
        tasks: 'Sub-led a research project planning to conduct studies on the importance of Virtual Reality in team collaboration.',
        linksolo: 'https://www.figma.com/file/9b7YgcqSJtgU5BTSVgvcrI/CMC-Poster?node-id=1%3A4'
    }
]

var nontechexp = [
    {
        title: 'Cornell Annual Fund: ',
        role: 'Student Caller',
        time: "Feb '18 - Feb '20",
        tasks: 'Called hundreds of alumni to update records and build rapport to keep them connected to the Cornell community. Helped raise thousands of dollars each year by encouraging alumni to donate to Cornell and keep facilities/organizations running.'
    },
    {
        title: 'Operation DEEP: ',
        role: 'Co-Director',
        time: "Jul '18",
        tasks: 'Launched the first ever English summer camp teaching 100+ middle school students in rural Anhui, China. Created entire teaching curriculum involving varied exploratory topics, offering assistance in Mandarin Chinese when necessary.'
    },
    {
        role: 'Odyssey of the Mind',
        time: "2016-2017",
        tasks: 'Competed in a team of 7 (Pittsford High School) with a creative problem-solving skit. Placed third internationally and won an award of creativity in the states competition.',
        linksolo2: 'https://www.odysseyofthemind.com/wf2016/scores.html'
    },
    {
        role: 'Piano',
        time: "2007 - 2017",
        tasks: 'Awarded Honors Pre-Collegiate Diplomas in Piano & Music Theory. Won honors at multiple competitions, took music theory & piano lessons at Eastman School of Music.',
        linksolo2: 'https://www.esm.rochester.edu/community/diplomas/honors-jury/'
    },
    {
        role: 'Tennis',
        time: "2009 - 2017",
        tasks: 'Varsity captain, undefeated throughout high school. Won tournaments and reached state qualifiers semifinals.'
    }
]

function mapExp(exps) {
    return exps.map(exp => {
        return <MiscExp exp={exp} />
    })
} 

function Misc(props) {
    return(
        <div style={{backgroundColor: "#f2f7ff", marginTop: "3%", paddingTop: "65px"}}>
            <h1 style={{textAlign: "center"}}>Additional Work Experience</h1>
            <hr style={{width: "10%", marginTop: "30px", backgroundColor: "lightgray", height: "1px"}} />
            {mapExp(exp)}
            <h1 style={{textAlign: "center", marginTop: "75px"}}>Class Experience</h1>
            <hr style={{width: "10%", marginTop: "30px", backgroundColor: "lightgray", height: "1px"}} />
            {mapExp(classexp)}
            <h1 style={{textAlign: "center", marginTop: "75px"}}>Non-technical Experience</h1>
            <hr style={{width: "10%", marginTop: "30px", backgroundColor: "lightgray", height: "1px"}} />
            {mapExp(nontechexp)}
            <hr style={{width: "75%", marginTop: "90px", marginBottom: "-2%"}} />
            <Footer />
        </div>
    );
}
export default Misc;
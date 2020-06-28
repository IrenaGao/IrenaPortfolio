import React from 'react';
import { Fade } from 'react-slideshow-image';

import tennis from '../assets/tenniswin.jpg';
import om from '../assets/OMworlds.jpg';
import gorge from '../assets/ithacagorge.jpg';
import honduras from '../assets/hondurasplant.jpg';

const fadeImages = [
    tennis,
    honduras,
    om,
    gorge,
];

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }

const Slideshow = () => {
return (
    <div className="slide-container">
    <Fade {...fadeProperties}>
        <div className="each-fade">
        <div className="image-container">
            <img src={fadeImages[0]} />
        My team was undefeated all four years of high school tennis. As first doubles, my partner and I celebrate another successful season with a smile :) 
        </div>
        </div>
        <div className="each-fade">
        <div className="image-container">
            <img src={fadeImages[1]} />
        Over winter break of 2020, I traveled with my AguaClara team to Honduras. It was truly an eye-opening experience, we visited water plants and helped clean the water wherever we could.
        </div>
        </div>
        <div className="each-fade">
        <div className="image-container">
            <img src={fadeImages[2]} />
        I had the privilege of attending the 2016 Odyssey of the Mind World Finals. I not only made friends with people around the world but also took home a third place medal! 
        </div>
        </div>
        <div className="each-fade">
        <div className="image-container">
            <img src={fadeImages[3]} />
        </div>
        </div>
    </Fade>
    </div>
)
}
export default Slideshow;
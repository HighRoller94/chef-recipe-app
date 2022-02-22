import React from 'react'
import Aos from 'aos';

import "aos/dist/aos.css";

import image1 from '../../assets/hero/image1.svg';
import image2 from '../../assets/hero/image2.svg';
import image3 from '../../assets/hero/image3.svg';

function HeroContent() {
    return (
        <div className="content__page">
            <div className="content__container">
                <div className="content__imagery">
                    <div className="main__image">
                        <img src={image1} alt="" />
                    </div>
                    <div className="secondary__images">
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                    </div>
                    
                </div>
                <div className="content__text">
                    <h1>Top 10 recipes for Christmas and New Year</h1>
                    <h4>by john doe</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et delore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo...</p>
                    
                </div>
                
            </div>
        </div>
    )
}

export default HeroContent

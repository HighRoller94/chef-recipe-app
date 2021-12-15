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
                <div data-aos="fade-right" className="content__imagery">
                    <div>
                        <img className="main__image" src={image1} alt="" />
                    </div>
                    <div className="secondary__images">
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                    </div>
                </div>
                <div data-aos="fade-left" className="content__text">
                    <h1>Top 10 recipes for Christmas and New Year</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et delore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo...</p>
                    <div className="content__view">
                        <h2>See post</h2>
                        <svg className="forward__icon" xmlns="http://www.w3.org/2000/svg" width="8.354" height="14.611" viewBox="0 0 8.354 14.611">
                            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M17.082,13.5,11.553,7.974a1.04,1.04,0,0,1,0-1.475,1.053,1.053,0,0,1,1.479,0L19.3,12.76a1.042,1.042,0,0,1,.03,1.44l-6.29,6.3a1.044,1.044,0,0,1-1.479-1.475Z" transform="translate(-11.246 -6.196)" fill="#2c2c2c"/>
                        </svg>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HeroContent

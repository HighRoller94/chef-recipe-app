import React from 'react'

import HeroContent from '../components/Home/HeroContent';
import Blog from '../components/Home/Blog';
import Newsletter from '../components/Home/Newsletter';

function Home() {
    return (
        <div className="hero__section">
            <div className="border">
                <span className="bar"></span><p>some holiday favourites</p><span className="bar"></span>
            </div>
            <HeroContent />
            <div className="border">
                <span className="bar"></span><p>just in time</p><span className="bar"></span>
            </div>
            <Blog />
            <div className="border">
                <span className="bar"></span><p>one of us</p><span className="bar"></span>
            </div>
            <Newsletter />
        </div>
    )
}

export default Home

import React from 'react'

import HeroContent from '../components/Home/HeroContent';
import Blog from '../components/Home/Blog';
import Newsletter from '../components/Home/Newsletter';

function Home() {
    return (
        <div className="hero__section">
            <HeroContent />
            <Blog />
        </div>
    )
}

export default Home

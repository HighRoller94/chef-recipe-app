import React, { useEffect } from 'react'
import Aos from 'aos';

import "aos/dist/aos.css";

function Blog() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div data-aos="fade-up" className="blog__container">
            <div className="blog__header">
                <h1>Eight Festive Foods From Around The World...</h1>
                <p>By John Doe</p>
            </div>
            <div className="blog__images">
                <div className="blog__image">
                </div>
                <div className="blog__image">
                </div>
                <div className="blog__image">
                </div>
            </div>
        </div>
        
    )
}

export default Blog

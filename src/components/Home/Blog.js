import React, { useEffect } from 'react'
import Aos from 'aos';

import "aos/dist/aos.css";

function Blog() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="blog__section">
            <div data-aos="fade-up" className="blog__container">
                <div className="blog__header">
                    <h1>Eight Festive Foods From Around The World...</h1>
                    <p>By John Doe</p>
                </div>
                <div className="blog__images">
                    <div className="blog__image">
                        <svg className="heart__icon" xmlns="http://www.w3.org/2000/svg" width="31.538" height="28.222" viewBox="0 0 31.538 28.222">
                            <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M23.958,3.835a7.087,7.087,0,0,0-9.67.7L13.267,5.592,12.246,4.54a7.087,7.087,0,0,0-9.67-.7A7.442,7.442,0,0,0,2.062,14.61L12.09,24.964a1.625,1.625,0,0,0,2.348,0L24.466,14.61a7.437,7.437,0,0,0-.508-10.774Z" transform="translate(2.502 0.256)" fill="#ed7575" stroke="#f3a2a2" stroke-width="2"/>
                        </svg>
                        <p>Christmas Beef Fondue</p>
                    </div>
                    <div className="blog__image">
                        <svg className="heart__icon" xmlns="http://www.w3.org/2000/svg" width="31.538" height="28.222" viewBox="0 0 31.538 28.222">
                            <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M23.958,3.835a7.087,7.087,0,0,0-9.67.7L13.267,5.592,12.246,4.54a7.087,7.087,0,0,0-9.67-.7A7.442,7.442,0,0,0,2.062,14.61L12.09,24.964a1.625,1.625,0,0,0,2.348,0L24.466,14.61a7.437,7.437,0,0,0-.508-10.774Z" transform="translate(2.502 0.256)" fill="#ED7575" stroke="#F3A2A2" stroke-width="2"/>
                        </svg>
                        <p>Festive Fish Main</p>
                    </div>
                    <div className="blog__image">
                        <svg className="heart__icon" xmlns="http://www.w3.org/2000/svg" width="31.538" height="28.222" viewBox="0 0 31.538 28.222">
                            <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M23.958,3.835a7.087,7.087,0,0,0-9.67.7L13.267,5.592,12.246,4.54a7.087,7.087,0,0,0-9.67-.7A7.442,7.442,0,0,0,2.062,14.61L12.09,24.964a1.625,1.625,0,0,0,2.348,0L24.466,14.61a7.437,7.437,0,0,0-.508-10.774Z" transform="translate(2.502 0.256)" fill="#ED7575" stroke="#F3A2A2" stroke-width="2"/>
                        </svg>
                        <p>Christmas Stollen</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Blog

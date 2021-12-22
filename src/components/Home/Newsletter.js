import React from 'react'

import Aos from 'aos';

import "aos/dist/aos.css";

function Newsletter() {
    return (
        <div data-aos="fade-right" className="newsletter__section">
            <div className="newsletter__left">
                <h1>Sign up to our newsletter</h1>
                <p>to receive weekly updates!</p>
            </div>
            <div data-aos="fade-left" className="newsletter__right">
                <form onClassName="newsletter__form">
                    <div className="text__field">
                        <input type="text" name="email" required />
                        <label htmlFor="email" className="label__name">
                            <span className="content__name">email address</span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter

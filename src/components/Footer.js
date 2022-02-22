import React, { useEffect }from 'react'

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        });
    }

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="container">
                    <div className="footer__logo">
                        <h2 onClick={scrollToTop}>chef</h2>
                        <p>Connect with us</p>
                        <div className="footer__icons">
                            {/* Facebook Icon */}
                            <svg className="footer__icon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 27.465 27.299">
                                <g id="Group_161" data-name="Group 161" transform="translate(0 0)">
                                    <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="13.27" cy="13.29" rx="13.27" ry="13.29" transform="translate(0.254 0.719)" fill="#fff"/>
                                    <path id="Icon_awesome-facebook" data-name="Icon awesome-facebook" d="M28.028,14.3A13.733,13.733,0,1,0,12.149,27.861v-9.6H8.661V14.3h3.488V11.269c0-3.441,2.049-5.342,5.187-5.342A21.134,21.134,0,0,1,20.41,6.2V9.573H18.678a1.985,1.985,0,0,0-2.238,2.145V14.3h3.809l-.609,3.97h-3.2v9.6A13.737,13.737,0,0,0,28.028,14.3Z" transform="translate(-0.563 -0.563)" fill="#f3a2a2"/>
                                </g>
                            </svg>
                            {/* Instagram Icon */}
                            <svg className="footer__icon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32">
                                <g id="Group_45" data-name="Group 45" transform="translate(-1767 -15.961)">
                                    <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(1767 15.961)" fill="#f3a2a2" stroke="#f3a2a2" strokeWidth="1.5">
                                    <circle cx="16" cy="16" r="16" stroke="none"/>
                                    <circle cx="16" cy="16" r="15.25" fill="none"/>
                                    </g>
                                    <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M8.654,6.455a4.438,4.438,0,1,0,4.438,4.438A4.431,4.431,0,0,0,8.654,6.455Zm0,7.324a2.885,2.885,0,1,1,2.885-2.885A2.891,2.891,0,0,1,8.654,13.778Zm5.655-7.505a1.035,1.035,0,1,1-1.035-1.035A1.033,1.033,0,0,1,14.309,6.273Zm2.939,1.051A5.123,5.123,0,0,0,15.85,3.7a5.157,5.157,0,0,0-3.627-1.4c-1.429-.081-5.713-.081-7.142,0A5.149,5.149,0,0,0,1.454,3.693,5.14,5.14,0,0,0,.056,7.32c-.081,1.429-.081,5.713,0,7.142a5.123,5.123,0,0,0,1.4,3.627,5.163,5.163,0,0,0,3.627,1.4c1.429.081,5.713.081,7.142,0a5.123,5.123,0,0,0,3.627-1.4,5.157,5.157,0,0,0,1.4-3.627c.081-1.429.081-5.709,0-7.138ZM15.4,16a2.921,2.921,0,0,1-1.645,1.645c-1.139.452-3.843.348-5.1.348s-3.967.1-5.1-.348A2.921,2.921,0,0,1,1.906,16c-.452-1.139-.348-3.843-.348-5.1s-.1-3.967.348-5.1A2.921,2.921,0,0,1,3.551,4.145c1.139-.452,3.843-.348,5.1-.348s3.967-.1,5.1.348A2.921,2.921,0,0,1,15.4,5.79c.452,1.139.348,3.843.348,5.1S15.854,14.86,15.4,16Z" transform="translate(1774.348 21.068)" fill="#fff"/>
                                </g>
                            </svg>
                            {/* Twitter Icon */}
                            <svg className="footer__icon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32">
                                <g id="Group_49" data-name="Group 49" transform="translate(-1828 -17)">
                                    <g id="Group_46" data-name="Group 46" transform="translate(61 1.039)">
                                    <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(1767 15.961)" fill="#f3a2a2" stroke="#f3a2a2" strokeWidth="1.5">
                                        <circle cx="16" cy="16" r="16" stroke="none"/>
                                        <circle cx="16" cy="16" r="15.25" fill="none"/>
                                    </g>
                                    </g>
                                    <path id="Icon_feather-twitter" data-name="Icon feather-twitter" d="M19.112,4.493A8.726,8.726,0,0,1,16.6,5.718a3.586,3.586,0,0,0-6.292,2.4v.8A8.534,8.534,0,0,1,3.1,5.293S-.1,12.5,7.1,15.7a9.318,9.318,0,0,1-5.6,1.6c7.2,4,16.011,0,16.011-9.206a3.6,3.6,0,0,0-.064-.664,6.18,6.18,0,0,0,1.665-2.938Z" transform="translate(1833.694 21.333)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="footer__links">
                        <h2>Quick Links</h2>
                        <p>Vegetarian</p>
                        <p>Breakfast</p>
                        <p>Lunch</p>
                        <p>Dinner</p>
                    </div>
                    <div className="footer__media">
                        <h2>Media</h2>
                        <p>Get in touch</p>
                        <p>Submit a recipe</p>
                        <p>Jobs</p>
                        <p>Services</p>
                    </div>
                    <div className="footer__legal">
                        <h2>Legal</h2>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Sitemap</p>
                        <p>Cookie Settings</p>
                    </div>
                </div>
                <div className="footer__copyright">
                    <h4 className="copyright">Copyright Chef 2021</h4>
                    <p className="icon">&copy;</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

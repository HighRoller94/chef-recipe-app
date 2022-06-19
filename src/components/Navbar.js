import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import RestaurantIcon from '@material-ui/icons/Restaurant';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Navbar({ savedCount }) {
    const [sidebar, setSidebar] = useState(false);
    const [button, setButton] = useState(true);

    const showMobileMenu = () => setSidebar(!sidebar);
    const closeMobileMenu = () => setSidebar(false);

    const showMobileMenuButton = () => {
        if (window.innerWidth <= 768) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showMobileMenuButton();
    }, [])

    window.addEventListener('resize', showMobileMenuButton);

    return (
        <div className="nav">
            <div className="navbar">
                <div className="nav__left">
                    {!sidebar ? (
                        <MenuIcon className="navbar__toggle" onClick={showMobileMenu} />
                    ) : (
                        <CloseIcon className="navbar__toggle" onClick={closeMobileMenu} />
                    )}
                    <div className="navbar__logo" >
                        <Link to="/"><h1 className="nav__logo">eatz</h1></Link>
                    </div>
                    <ul className={sidebar ? 'navbar__menu active' : 'navbar__menu'}>
                        <li className="navbar__item">
                            <Link onClick={closeMobileMenu} to="/"><h1 className="navbar__links">Search</h1></Link>
                        </li>
                        <li className="navbar__item">
                            <Link onClick={closeMobileMenu} to="/recipes"><h1 className="navbar__links">My Recipes</h1></Link>
                        </li>
                        <li className="navbar__item">
                            <Link onClick={closeMobileMenu} to="/recipes"><h1 className="navbar__links">Meal Planner</h1></Link>
                        </li>
                    </ul>
                </div>
                <div className="nav__right">
                    <h4>Follow us!</h4>
                    <div className="nav__icons">
                        {/* Facebook Icon */}
                        <svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27.329 27.164">
                            <path id="Icon_awesome-facebook" data-name="Icon awesome-facebook" d="M27.891,14.227a13.664,13.664,0,1,0-15.8,13.5V18.177H8.621v-3.95h3.471V11.216c0-3.424,2.039-5.316,5.161-5.316a21.029,21.029,0,0,1,3.059.267V9.528H18.589a1.975,1.975,0,0,0-2.227,2.134v2.565h3.79l-.606,3.95H16.362v9.549A13.669,13.669,0,0,0,27.891,14.227Z" transform="translate(-0.563 -0.563)" fill="#F3A2A2"/>
                        </svg>
                        {/* Instagram Icon */}
                        <svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 32 32">
                            <g id="Group_45" data-name="Group 45" transform="translate(-1767 -15.961)">
                                <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(1767 15.961)" fill="#F3A2A2" stroke="#F3A2A2" strokeWidth="1.5">
                                <circle cx="16" cy="16" r="16" stroke="none"/>
                                <circle cx="16" cy="16" r="15.25" fill="none"/>
                                </g>
                                <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M8.654,6.455a4.438,4.438,0,1,0,4.438,4.438A4.431,4.431,0,0,0,8.654,6.455Zm0,7.324a2.885,2.885,0,1,1,2.885-2.885A2.891,2.891,0,0,1,8.654,13.778Zm5.655-7.505a1.035,1.035,0,1,1-1.035-1.035A1.033,1.033,0,0,1,14.309,6.273Zm2.939,1.051A5.123,5.123,0,0,0,15.85,3.7a5.157,5.157,0,0,0-3.627-1.4c-1.429-.081-5.713-.081-7.142,0A5.149,5.149,0,0,0,1.454,3.693,5.14,5.14,0,0,0,.056,7.32c-.081,1.429-.081,5.713,0,7.142a5.123,5.123,0,0,0,1.4,3.627,5.163,5.163,0,0,0,3.627,1.4c1.429.081,5.713.081,7.142,0a5.123,5.123,0,0,0,3.627-1.4,5.157,5.157,0,0,0,1.4-3.627c.081-1.429.081-5.709,0-7.138ZM15.4,16a2.921,2.921,0,0,1-1.645,1.645c-1.139.452-3.843.348-5.1.348s-3.967.1-5.1-.348A2.921,2.921,0,0,1,1.906,16c-.452-1.139-.348-3.843-.348-5.1s-.1-3.967.348-5.1A2.921,2.921,0,0,1,3.551,4.145c1.139-.452,3.843-.348,5.1-.348s3.967-.1,5.1.348A2.921,2.921,0,0,1,15.4,5.79c.452,1.139.348,3.843.348,5.1S15.854,14.86,15.4,16Z" transform="translate(1774.348 21.068)" fill="#fff"/>
                            </g>
                        </svg>
                        {/* Twitter Icon */}
                        <svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 32 32">
                            <g id="Group_49" data-name="Group 49" transform="translate(-1828 -17)">
                                <g id="Group_46" data-name="Group 46" transform="translate(61 1.039)">
                                <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(1767 15.961)" fill="#F3A2A2" stroke="#F3A2A2" strokeWidth="1.5">
                                    <circle cx="16" cy="16" r="16" stroke="none"/>
                                    <circle cx="16" cy="16" r="15.25" fill="none"/>
                                </g>
                                </g>
                                <path id="Icon_feather-twitter" data-name="Icon feather-twitter" d="M19.112,4.493A8.726,8.726,0,0,1,16.6,5.718a3.586,3.586,0,0,0-6.292,2.4v.8A8.534,8.534,0,0,1,3.1,5.293S-.1,12.5,7.1,15.7a9.318,9.318,0,0,1-5.6,1.6c7.2,4,16.011,0,16.011-9.206a3.6,3.6,0,0,0-.064-.664,6.18,6.18,0,0,0,1.665-2.938Z" transform="translate(1833.694 21.333)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            </g>
                        </svg>
                    </div>
                    <div className="favourites">
                        <h4>{savedCount}</h4>
                        <Link to="/recipes"><FavoriteIcon className="fav__icon"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
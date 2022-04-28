import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { useHistory } from 'react-router-dom'
import Aos from 'aos';

import SearchIcon from '@material-ui/icons/Search';

import image1 from '../assets/hero/image1.svg';
import image2 from '../assets/hero/image2.svg';
import image3 from '../assets/hero/image3.svg';

import "aos/dist/aos.css";

function Home() {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('')

    const getSearch = e => {
        setQuery(search);
        history.push(`/search/${search}`)
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <motion.div className="hero__section"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}>
            <div className="search__section">
                <div className="search">
                    <div className="search__header">
                        <h1>Find a Recipe</h1>
                    </div>
                    <form onSubmit={getSearch}>
                        <div className="form">
                            <div className="search__box">
                                <SearchIcon className="search__icon" />
                                <input type="text" spellCheck="false" value={search} onChange={e => setSearch(e.target.value)}  />
                            </div>
                            <button type="submit" disabled={!search} className="search__button">Search</button>
                            <div className="advanced__search">
                                <p>Advanced search</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="content__page" data-aos="fade-up">
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
                        <h1>Top 10 Recipes for Christmas and New Year</h1>
                        <h4>by john doe</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et delore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo...</p>
                    </div>
                </div>
            </div>
            <div className="blog__container" data-aos="fade-up">
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
        </motion.div>
    )
}

export default Home

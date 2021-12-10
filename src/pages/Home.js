import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Home() {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('')
    
    const getSearch = e => {
        setQuery(search);
        history.push(`/search/${search}`)
    }
    
    return (
        <div className="home__page">
            <div className="hero__section">
                <div className="hero__search">
                    <h1>Find a recipe</h1>
                    <p>New recipes everyday!</p>
                        <form onSubmit={getSearch}>
                            <div className="form">
                                <div className="search__box">
                                    <SearchIcon className="search__icon" />
                                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for your next meal..." />
                                </div>
                                <button type="submit" className="search__button">Search</button>
                            </div>
                        </form>
                </div>
            </div>
            <div className="simply__section">
                    <div className="simply__header">
                        <h1>SIMPLY THE BEST...</h1>
                        <div className="simply__container">
                            <div className="simply__text">
                                <p>Search the worlds biggest catalogue of recipes, food products and nutritional information and create your next new and exciting meal! </p>
                                <p>Search the worlds biggest catalogue of recipes, food products and nutritional information and create your next new and exciting meal! </p>
                                <div className="pref__icon">
                                    <span>Got a preference?</span>
                                    <ArrowForwardIcon className="forward__icon"/>
                                </div>
                            </div>
                            <div className="simply__preferences">
                                <div className="simply__vegeimage">
                                    <div className="vegeimage__info">
                                        <h1>Vegetarian Dishes</h1>
                                    </div>
                                </div>
                                <div className="simply__chickenimage">
                                    <div className="chickenimage__info">
                                        <h1>Chicken Dishes</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="lowcal__section">
                <div className="lowcal__header">
                    <h1>LOOKING FOR SOMETHING ON THE LIGHTER SIDE?</h1>
                    <div className="lowcal__subheader">
                        <p>Try our range of recipes under 600cal!</p>
                        <ArrowForwardIcon className="forward__icon" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home

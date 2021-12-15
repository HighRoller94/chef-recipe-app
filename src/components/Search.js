import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';

function Search() {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('')
    
    const getSearch = e => {
        setQuery(search);
        history.push(`/search/${search}`)
    }
    
    return (
        <div className="home__page">
            <div className="search__section">
                <div className="search">
                    <h1>New recipes everyday!</h1>
                        <form onSubmit={getSearch}>
                            <div className="form">
                                <div className="search__box">
                                    <SearchIcon className="search__icon" />
                                    <input type="text" spellcheck="false" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for your next meal..." />
                                </div>
                                <button type="submit" className="search__button">Search</button>
                                <p>Advanced search</p>
                            </div>
                        </form>
                </div>
            </div>
            
        </div>
    )
}

export default Search

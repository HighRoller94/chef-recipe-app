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
    )
}

export default Search

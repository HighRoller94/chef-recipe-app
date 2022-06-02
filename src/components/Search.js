import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const getSearch = e => {
        setQuery(search);
        navigate(`/search/${search}`)
    }

    return (
        <div className="search">
            <form onSubmit={getSearch}>
                <div className="form">
                    <div className="search__box">
                        <SearchIcon className="search__icon" />
                        <input type="text" spellCheck="false" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for your next meal..." />
                        <button type="submit" disabled={!search}></button>
                    </div>
                </div>
            </form>
            <div className="filter">
                <p>Filter</p>
                <KeyboardArrowDownIcon className="filter__icon" />
            </div>
        </div>
    )
}

export default Search
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';

import RefineSearch from './RefineSearch';

function Search({ getParams }) {
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
            <RefineSearch getParams={getParams} />
        </div>
    )
}

export default Search
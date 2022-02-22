import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

import Recipes from '../components/Recipes';
import Pagination from '../components/Pagination';

import arrow from '../assets/arrow.svg'

import '../styles/styles.scss'

function Results() {
    const [recipes, setRecipes] = useState([]);
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const { id } = useParams();
    const [pagination, setPagination] = useState(0);
    const [pages, setPages] = useState();
    const [next, setNext] = useState();
    const [prev, setPrev] = useState();

    const APP_ID = "8ba5b485";
    const APP_KEY = "b4e695ac6bd457749d819e171da3500e";

    useEffect(() => {
        getRecipes();
    }, [id, pagination]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${id}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data)
        setRecipes(data.hits)
        setPrev(data)
        setPages(data.count)
        setNext(data?._links?.next?.href)
    }

    const getSearch = e => {
        setQuery(search);
        history.push(`/search/${search}`)
    }

    return (
        <div className="results__page">
            <div className="search__header">
                <div className="search__container">
                    <div className="float__bar"></div>
                    <div className="search__title">
                        <h1>Search results for "{id}"</h1>
                        {recipes == 0 ? (
                            <p>Searching...</p>
                        ) : (
                            <p>{pages} matching results</p>
                        )}
                    </div>
                </div>
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
                </div>
                <div className="filter">
                    <p>Filter</p>
                    <KeyboardArrowDownIcon className="filter__icon" />
                </div>
            </div>
            <img className="arrow" src={arrow}  alt="" />
            {recipes == 0 ? (
                <div className="loading__recipes">
                    <CircularProgress color="secondary" />
                </div>
            ) : (
                <Recipes pages={pages} recipes={recipes} pagination={pagination} setPagination={setPagination} />
            )}
            <Pagination next={next} setNext={setNext} prev={prev} setPrev={setPrev} setRecipes={setRecipes} pages={pages} />
        </div>
    )
}

export default Results

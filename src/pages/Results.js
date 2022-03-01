import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

import Recipe from '../components/Recipe';
import Pagination from '../components/Pagination';

import arrow from '../assets/arrow.svg'

import '../styles/styles.scss'

function Results() {
    const [recipes, setRecipes] = useState([]);
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const { id } = useParams();
    const [totalPages, setTotalPages] = useState();

    const [pagination, setPagination] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageLink, setPageLink] = useState(currentPage);
    const APP_ID = "8ba5b485";
    const APP_KEY = "b4e695ac6bd457749d819e171da3500e";

    useEffect(() => {
        getRecipes();
        
        const scrollTopIcon = document.querySelector('.scroll__top');
        const scrollTop = () => {
            scrollTopIcon.classList.toggle('active', window.scrollY > 800);
        }
        window.addEventListener('scroll', scrollTop);
    }, [id, pagination, currentPage]);


    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${id}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${pagination}&to=${pagination+20}`);
        const data = await response.json();
        setRecipes(data.hits)
        setCurrentPage(currentPage)
        setPageLink(currentPage)
        setTotalPages(data.count)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        });
    }

    const getSearch = e => {
        setQuery(search);
        history.push(`/search/${search}`)
    }

    return (
        <div className="results__page">
            <div className="scroll__top" onClick={scrollToTop} >
                <KeyboardArrowUpIcon className="icon" />
            </div>
            <div className="search__header">
                <div className="float__bar"></div>
                <div className="search__title">
                    <h1>Search results for "<span>{id}</span>"</h1>
                    {recipes == 0 ? (
                        <p>Searching...</p>
                    ) : (
                        <p>{totalPages?.toLocaleString()} matching results</p>
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
                <div className="filter">
                    <p>Filter</p>
                    <KeyboardArrowDownIcon className="filter__icon" />
                </div>
            </div>
            {recipes == 0 ? (
                <div className="loading__recipes">
                    <CircularProgress color="secondary" />
                </div>
            ) : (
                <div className="recipes">
                    {recipes?.map((recipe) =>
                        <Recipe key={recipe.label} recipe={recipe}/>
                    )}
                </div>
            )}
            <Pagination pageLink={pageLink} setPageLink={setPageLink} currentPage={currentPage} setCurrentPage={setCurrentPage} setRecipes={setRecipes} totalPages={totalPages} pagination={pagination} setPagination={setPagination} />
        </div>
    )
}

export default Results

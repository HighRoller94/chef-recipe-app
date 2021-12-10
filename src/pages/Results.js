import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

import Recipes from '../components/Recipes'

import '../styles/styles.scss'

function Results() {
    const [recipes, setRecipes] = useState([]);
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const { id } = useParams();
    const [pagination, setPagination] = useState(0)
    const [pages, setPages] = useState()

    const APP_ID = "8ba5b485";
    const APP_KEY = "b4e695ac6bd457749d819e171da3500e";

    const getSearch = e => {
        setQuery(search);
        history.push(`/search/${search}`)
    }

    useEffect(() => {
        getRecipes();
    }, [id, pagination]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${id}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${pagination}&to=${pagination+10}`);
        const data = await response.json();
        setPages(data.count)
        console.log(data.count)
        setRecipes(data.hits)
    }

    return (
        <div className="results__page">
            <div className="banner__background">
                <div className="search__header">
                    <h1>Results for {id}</h1>
                </div>
                <div className="recipes__search">
                    <form onSubmit={getSearch}>
                        <div className="search__box">
                            <SearchIcon className="search__icon" />
                            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for your next meal..." />
                        </div>
                    </form>
                </div>
                <div className="sub__options">
                    <span className="sub__option">beef</span>
                    <span className="sub__option">pork</span>
                    <span className="sub__option">chicken</span>
                    <span className="sub__option">lamb</span>
                    <span className="sub__option">pizza</span>
                    <span className="sub__option">salads</span>
                    <span className="sub__option">burgers</span>
                    <span className="sub__option">vegetarian</span>
                </div>
            </div>
            <Recipes pages={pages} recipes={recipes} pagination={pagination} setPagination={setPagination} />
        </div>
    )
}

export default Results

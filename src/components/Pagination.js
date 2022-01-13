import React, { useState, useEffect }from 'react'
import { useHistory } from 'react-router-dom'

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

function Pagination({ recipes, setRecipes, next, setNext, pages, prev, setPrev }) {
    const history = useHistory()
    const totalPageNumber = Math.ceil(pages/20);
    const [currentPage, setCurrentPage] = useState(1);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        });
    }

    const getMoreRecipes = async () => {
        const response = await fetch(`${next}`)
        const data = await response.json();
        console.log(data)
        setRecipes(data.hits)
        setCurrentPage(currentPage + 1)
        setNext(data._links.next.href)
        scrollToTop();
    }

    const getPreviousRecipes = async () => {
        setRecipes(prev.hits)
        setCurrentPage(currentPage - 1)
        scrollToTop();
    }

    return (
        <div className="pagination">
            <KeyboardArrowLeftIcon onClick={getPreviousRecipes} className="pagination__icon"/>
            <p>{currentPage} of {totalPageNumber}</p>
            <KeyboardArrowRightIcon onClick={getMoreRecipes} className="pagination__icon"/>
        </div>
    )
}

export default Pagination

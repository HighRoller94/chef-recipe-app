import React, { useState } from 'react'

import Recipe from './Recipe'

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

function Recipes({ pages, recipes, pagination, setPagination }) {
    const totalPageNumber = Math.ceil(pages/10);
    const [currentPage, setCurrentPage] = useState(1);

    const prevPage = () => {
        if (pagination === 0) {
            return;
        } else {
            setPagination(pagination-10);
            setCurrentPage(currentPage-1);
        }
    };

    const nextPage = () => {
        setPagination(pagination+10);
        setCurrentPage(currentPage+1)
    };

    return (
        <div>
            <div className="recipes">
                {recipes?.map((recipe) =>
                    <Recipe key={recipe.label} recipe={recipe}/>
                )}
            </div>
            <div className="pagination">
                <KeyboardArrowLeftIcon onClick={prevPage} />
                <p>{currentPage} of {totalPageNumber}</p>
                <KeyboardArrowRightIcon onClick={nextPage} />
            </div>
        </div>
    )
}

export default Recipes

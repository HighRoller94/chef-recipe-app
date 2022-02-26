import React, { useState, useEffect }from 'react'
import { useHistory } from 'react-router-dom'

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

function Pagination({ pageLink, setPageLink, currentPage, setCurrentPage, pagination, setPagination, totalPages }) {
    const totalPageNumber = Math.ceil(totalPages/20);

    useEffect(() => {
        const pageLinks = document.querySelectorAll(".pages p");
        pageLinks.forEach(link => {
            let linkDiv = link.parentElement
            linkDiv.classList.remove('active')
            if (link.innerHTML == currentPage) {
                let linkDiv = link.parentElement
                linkDiv.classList.toggle('active')
            }
        })
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        });
    }

    const getMoreRecipes = async () => {
        setPagination(pagination+20)
        setCurrentPage(currentPage+1)
        setPageLink(currentPage+1)
        scrollToTop();
    }

    const getPreviousRecipes = async () => {
        if (pagination===0) {
            return;
        } else {
            setPagination(pagination-20)
            if (currentPage === 1) {
                return;
            } else {
                setCurrentPage(currentPage-1)
            }
        }
    }

    return (
        <div className="pagination">
            {currentPage === 1 ? (
                <div className="pages__container">
                    <KeyboardArrowLeftIcon onClick={getPreviousRecipes} className="pagination__backIcon"/>
                    <div className="pages">
                        <p className="pages__link">{currentPage}</p>
                    </div>
                    <div className="pages" onClick={getMoreRecipes}>
                        <p className="pages__link">{currentPage+1}</p>
                    </div>
                    <div className="pages">
                        <p className="pages__link">{currentPage+2}</p>
                    </div>
                    <p className="pages__ellipses">...</p>
                    <div className="pages">
                        <p className="pages__link">{currentPage+4}</p>
                    </div>
                    <KeyboardArrowRightIcon onClick={getMoreRecipes} className="pagination__forwardIcon"/>
                </div>
            ) : (
                <div className="pages__container">
                    <KeyboardArrowLeftIcon onClick={getPreviousRecipes} className="pagination__backIcon"/>
                    <div className="pages" onClick={getPreviousRecipes}>
                        <p className="pages__link">{currentPage-1}</p>
                    </div>
                    <div className="pages">
                        <p className="pages__link">{currentPage}</p>
                    </div>
                    <div className="pages" onClick={getMoreRecipes}>
                        <p className="pages__link">{currentPage+1}</p>
                    </div>
                    <p className="pages__ellipses">...</p>
                    <div className="pages">
                        <p className="pages__link">{currentPage+4}</p>
                    </div>
                    <KeyboardArrowRightIcon onClick={getMoreRecipes} className="pagination__forwardIcon"/>
                </div>
            )}          
        </div>
    )
}

export default Pagination

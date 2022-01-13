import React from 'react'
import { useLocation } from 'react-router-dom'

import RestaurantIcon from '@material-ui/icons/Restaurant';

function Recipe() {
    const location = useLocation()
    const recipe = location.state

    console.log(recipe)
    return (
        <div className="recipe__page">
            <div className="recipe__header">
                <div className="float__bar"></div>
                <div className="recipe__title">
                    <h1 className="recipe__name">{recipe.recipe.recipe.label}</h1>
                    <p>{recipe.recipe.recipe?.dietLabels[0]} · {recipe.recipe.recipe?.dietLabels[1]}</p>
                </div>
                <div className="recipe__counter">
                    <RestaurantIcon className="yield__icon" />
                    <p>{recipe.recipe.recipe.yield}</p>
                </div>
            </div>
            <div className="border">
                <span className="bar"></span><p>treat yourself</p><span className="bar"></span>
            </div>
            <div className="recipe__container">

            </div>
        </div>
    )
}

export default Recipe

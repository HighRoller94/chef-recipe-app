import React from 'react'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestaurantIcon from '@material-ui/icons/Restaurant';

function Recipe({ recipe }) {

    return (
        <div className="recipe">
            <div className="recipe__image">
                <img src={recipe.recipe.image} alt="" />
            </div>
            <div className="recipe__info">
                <div className="recipe__header">
                    <p>{recipe.recipe?.dietLabels[0]}</p>
                    <h1>{recipe.recipe.label}</h1>
                </div>
                <div className="recipe__icons">
                    <FavoriteIcon className="fav__icon" />
                    <div className="recipe__counter">
                        <RestaurantIcon className="yield__icon" />
                        <p>{recipe.recipe.yield}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe

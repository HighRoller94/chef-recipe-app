import React from 'react'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Recipe({ recipe }) {

    return (
        <div className="recipe">
            <div>
                <img src={recipe.recipe.image} alt="" />
            </div>
            <div className="recipe__info">
                <div className="recipe__header">
                    <h1>{recipe.recipe.label}</h1>
                    <FavoriteIcon className="fav__icon"/>
                </div>
                <p>{recipe.recipe.dietLabels}</p>
                <div className="recipe__auth">
                    <p>By {recipe.recipe.source}</p>
                    <button>View Recipe</button>
                </div>
            </div>
        </div>
    )
}

export default Recipe

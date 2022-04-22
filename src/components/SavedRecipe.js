import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

import FavoriteIcon from '@material-ui/icons/Favorite';
import RestaurantIcon from '@material-ui/icons/Restaurant';

function SavedRecipe({ recipe, updateCount }) {

    const RecipeRemovedToast = () => {
        return (
            <div>
                <img src={recipe.recipe.image} alt="recipe__image" />
                <p>{recipe.recipe.label} removed from favourites</p>
            </div>
        )
    };

    const displayRemovedMsg = () => {
        toast(
            <RecipeRemovedToast />
        )
    }

    const removeRecipeFromFavourites = () => {
        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
        savedRecipes.forEach(savedRecipe => {
            if (savedRecipe.recipe.uri === recipe.recipe.uri) {
                const index = savedRecipes.indexOf(savedRecipe)
                if (index > -1) {
                    savedRecipes.splice(index, 1)
                    localStorage.setItem(`savedRecipes`, JSON.stringify(savedRecipes));;
                }
            }
        })
    }

    return (
        <motion.div 
            className="saved__recipe"
            whileHover={{opacity: 1}}
            layout
            >
            <Link to={{
            pathname: `/${recipe.recipe.label}`,
            state: {
                recipe: recipe.recipe
            }
            }}
            >
            <div className="recipe__image">
                <img src={recipe.recipe.image} alt="" />
            </div>
            </Link>
            <div className="recipe__info">
                <div className="recipe__header">
                    {recipe.recipe?.dietLabels[0] ? (
                        <p>{recipe.recipe?.dietLabels[0]}</p>
                    ) : (
                        <p>{recipe.recipe?.healthLabels[0]}</p>
                    )}
                    
                    <h1>{recipe.recipe.label}</h1>
                </div>
                <div className="recipe__icons">
                    <FavoriteIcon className="fav__icon" onClick={() => { removeRecipeFromFavourites(); updateCount(); displayRemovedMsg(); }} />
                    <div className="recipe__counter">
                        <RestaurantIcon className="yield__icon" />
                        <p>{recipe.recipe.yield}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SavedRecipe
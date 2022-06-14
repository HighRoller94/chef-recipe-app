import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';

import { toast } from 'react-toastify';

import "aos/dist/aos.css";

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestaurantIcon from '@material-ui/icons/Restaurant';

function Recipe({ recipe, count, updateCount }) {
    const [saved, setSaved] = useState("");

    const RecipeAddedToast = () => {
        return (
            <Link to="/recipes">
                <div className="recipe__toast">
                    <img src={recipe.recipe.image} alt="recipe__image" />
                    <p>{recipe.recipe.label} added to favourites!</p>
                </div>
            </Link>
        )
    };

    const displayAddedMsg = () => {
        toast(
            RecipeAddedToast, {
                toastId: "1"
            }
        );
    }

    const RecipeRemovedToast = () => {
        return (
            <div className="recipe__toast">
                <img src={recipe.recipe.image} alt="recipe__image" />
                <p>{recipe.recipe.label} removed from favourites!</p>
            </div>
        )
    };

    const displayRemovedMsg = () => {
        toast(
            <RecipeRemovedToast />
        )
    }

    const saveRecipeToFavourites = () => {
        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
        savedRecipes.forEach(savedRecipe => {
            if (savedRecipe.recipe.uri === recipe.uri) {
                return;
            }
        })
        savedRecipes.push(recipe);
        localStorage.setItem(`savedRecipes`, JSON.stringify(savedRecipes));
        setSaved(true);
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
                setSaved(false);
            }
        })
    }
    
    useEffect(() => {
        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
        savedRecipes.forEach(savedRecipe => {
            if (savedRecipe.recipe.uri === recipe.recipe.uri) {
                setSaved(true);
            } 
        })
        Aos.init({ duration: 2000 });

    }, [recipe]);

    return (
            <div className="recipe">
                <Link 
                    to={`/${recipe?.recipe.label}`}
                    state={{ recipe: recipe.recipe }}
                >
                <div className="recipe__image" data-aos="fade" >
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
                        {saved ? (
                            <FavoriteIcon className="fav__icon" onClick={() => { removeRecipeFromFavourites(); updateCount(); displayRemovedMsg(); }}/>
                        ) : (
                            <FavoriteBorderIcon className="fav__icon" onClick={() => { saveRecipeToFavourites(); updateCount(); displayAddedMsg(); }} />
                        )}
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
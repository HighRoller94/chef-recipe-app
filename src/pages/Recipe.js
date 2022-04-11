import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import RestaurantIcon from '@material-ui/icons/Restaurant';
import LanguageIcon from '@material-ui/icons/Language';
import LocalDining from '@material-ui/icons/LocalDining';
import AccessTime from '@material-ui/icons/AccessTime';
import Info from '@material-ui/icons/Info';
import SimCard from '@material-ui/icons/SimCard';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Recipe() {
    const location = useLocation()
    const recipe = location.state

    const calories = Math.round(recipe?.recipe.calories)
    const caloriesServing = Math.round(Math.round(recipe?.recipe.calories) / recipe?.recipe.yield)
    const fat = Math.round(recipe?.recipe.totalNutrients.FAT.quantity / recipe?.recipe.yield)
    const protein = Math.round(recipe?.recipe.totalNutrients.PROCNT.quantity / recipe?.recipe.yield)
    const carbs = Math.round(recipe?.recipe.totalNutrients.CHOCDF.quantity / recipe?.recipe.yield)
    const sugars = Math.round(recipe?.recipe.totalNutrients.SUGAR.quantity / recipe?.recipe.yield)

    const ingredients = recipe?.recipe.ingredientLines

    console.log(recipe)
    return (
        <motion.div className="recipe__page"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}>
            <div className="recipe__container">
                <div className="recipe__header">
                    <div className="float__bar"></div>
                    <div className="recipe__title">
                        <h1 className="recipe__name">{recipe?.recipe.label}</h1>
                        <div className="recipe__infos">
                            {recipe?.recipe.dietLabels[0] ? (
                                <div className="recipe__label">
                                    <p>{recipe?.recipe.dietLabels[0]}</p>
                                    {recipe.recipe.dietLabels[1] ? (
                                        <p><FiberManualRecordIcon className="dot"/>{recipe.recipe.dietLabels[1]}</p>
                                    ) : (
                                        null
                                    )}
                                </div>
                            ) : (
                                <div classsName="recipe__label">
                                    <p>{recipe?.recipe.healthLabels[0]}</p>
                                    
                                </div>
                            )}
                        </div>
                        
                        {recipe.recipe.totalTime ? (
                            <div className="recipe__time">
                                <AccessTime className="icon"/>
                                <p>{recipe.recipe.totalTime} minutes</p>
                            </div>
                        ) : (
                            null
                        )}
                    </div>
                    <div className="recipe__fav">
                        <FavoriteIcon className="icon" />
                    </div>
                </div>
                <span className="bar"></span>
                <div className="recipe__grid">
                    <div className="recipe__firstCol">
                        <div className="recipe__image">
                            <img src={recipe.recipe.image} alt="" />
                        </div>
                        <div className="recipe__nutritional">
                            <div className="recipe__nutrients">
                                <h3>Total Calories (per serving)</h3>
                                <p>{caloriesServing}kcal</p>
                            </div>
                            <div className="recipe__nutrients">
                                <h3>Fat</h3>
                                <p>{fat}g</p>
                            </div>
                            <div className="recipe__nutrients">
                                <h3>Protein</h3>
                                <p>{protein}g</p>
                            </div>
                            <div className="recipe__nutrients">
                                <h3>Carbohydrates</h3>
                                <p>{carbs}g</p>
                            </div>
                            <div className="recipe__sugars">
                                <h3>of sugars</h3>
                                <p>{sugars}g</p>
                            </div>
                        </div>
                    </div>
                    <div className="recipe__secondCol">
                        <div className="ingredients__border">
                            <span className="bar"></span>
                        </div>
                        <ul className="recipe__ingredients">
                            <div className="recipe__counter">
                                <h3>INGREDIENTS</h3>
                                <RestaurantIcon className="yield__icon" />
                                <p>{recipe.recipe.yield}</p>
                            </div>
                            {ingredients?.map((ingredient) => 
                                <li>{ingredient}</li>
                            )}
                        <div className="ingredients__border">
                            <span className="bar"></span>
                        </div>
                        </ul>
                    </div>
                    <div className="recipe__thirdCol">
                        <SimCard className="recipe__cardIcon" />
                        <div className="info__header">
                            <h2>RECIPE</h2>
                            <h4>{recipe.recipe.source}</h4>
                        </div>
                        <div className="info__url">
                            <h2>Link</h2>
                            <div className="recipe__info">
                                <LanguageIcon className="info__icon"/>
                                <a href={recipe.recipe.url} target="_blank">{recipe.recipe.label}</a>
                            </div>
                        </div>
                        <div className="info__mealType">
                            <h2>Meal Type</h2>
                            <div className="recipe__info">
                                <LocalDining className="info__icon"/>
                                <p>{recipe.recipe.mealType[0]}</p>
                            </div>
                        </div>
                        <div className="info__dishType">
                            <h2>Dish Type</h2>
                            <div className="recipe__info">
                                <p>{recipe.recipe.dishType[0]}</p>
                            </div>
                        </div>
                        <div className="info__totalTime">
                            <h2>Total Time</h2>
                            <div className="recipe__info">
                                <AccessTime className="info__icon"/>
                                <p>{recipe.recipe.totalTime} minutes</p>
                            </div>
                        </div>
                        <div className="info__totalCal">
                            <h2>Total Calories</h2>
                            <div className="recipe__info">
                                <Info className="info__icon"/>
                                <p>{calories} cal ({recipe.recipe.yield} servings) </p>
                            </div>
                        </div>
                        <div className="info__cuisineType">
                            <h2>Cuisine Type</h2>
                            <div className="recipe__info">
                                <p>{recipe.recipe.cuisineType[0]}</p>
                            </div>
                        </div>
                        <div className="info__cuisineType">
                            <h2>Yield</h2>
                            <div className="recipe__info">
                                <p>Serves {recipe.recipe.yield}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="bar"></span>
            </div>
        </motion.div>
    )
}

export default Recipe

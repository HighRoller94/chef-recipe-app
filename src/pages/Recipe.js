import React from 'react'
import { useLocation } from 'react-router-dom'

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
        <div className="recipe__page">
            <div className="recipe__container">
                <div className="recipe__header">
                    <div className="float__bar"></div>
                    <div className="recipe__title">
                        <h1 className="recipe__name">{recipe.recipe.label}</h1>
                        <div className="recipe__label">
                            <p className="recipe__label">{recipe.recipe?.dietLabels[0]}</p>
                            {recipe.recipe.dietLabels[1] ? (
                                <p><FiberManualRecordIcon className="dot"/>{recipe.recipe.dietLabels[1]}</p>
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                    <div className="recipe__counter">
                        <RestaurantIcon className="yield__icon" />
                        <p>{recipe.recipe.yield}</p>
                    </div>
                </div>

                <div className="recipe__grid">
                    <div className="recipe__firstCol">
                        <div className="recipe__image">
                            <img src={recipe.recipe.image} alt="" />
                        </div>
                        <div className="recipe__nutritional">
                            <div className="recipe__cals">
                                <h3>Total Calories (per serving)</h3>
                                <p>{caloriesServing}kcal</p>
                            </div>
                            <div className="recipe__fat">
                                <h3>Fat</h3>
                                <p>{fat}g</p>
                            </div>
                            <div className="recipe__protein">
                                <h3>Protein</h3>
                                <p>{protein}g</p>
                            </div>
                            <div className="recipe__carbs">
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
                        <div className="recipe__ingredients">
                            <h3>INGREDIENTS</h3>
                            {ingredients?.map((ingredient) => 
                                <li>{ingredient}</li>
                            )}
                        </div>
                    </div>
                    <div className="recipe__thirdCol">
                            <div className="recipe__info">
                                <SimCard className="recipe__cardIcon" />
                                <div className="info__header">
                                    <h2>RECIPE</h2>
                                    <p>{recipe.recipe.source}</p>
                                </div>
                                <div className="info__url">
                                    <h2>Link</h2>
                                    <div className="url">
                                        <LanguageIcon className="info__icon"/>
                                        <a href={recipe.recipe.url} target="_blank">{recipe.recipe.label}</a>
                                    </div>
                                </div>
                                <div className="info__mealType">
                                    <h2>Meal Type</h2>
                                    <div className="mealType">
                                        <LocalDining className="info__icon"/>
                                        <p>{recipe.recipe.mealType[0]}</p>
                                    </div>
                                </div>
                                <div className="info__dishType">
                                    <h2>Dish Type</h2>
                                    <div className="dishType">
                                        <p>{recipe.recipe.dishType[0]}</p>
                                    </div>
                                </div>
                                <div className="info__totalTime">
                                    <h2>Total Time</h2>
                                    <div className="totalTime">
                                        <AccessTime className="info__icon"/>
                                        <p>{recipe.recipe.totalTime} minutes</p>
                                    </div>
                                </div>
                                <div className="info__totalCal">
                                    <h2>Total Calories</h2>
                                    <div className="totalCal">
                                        <Info className="info__icon"/>
                                        <p>{calories} cal ({recipe.recipe.yield} servings) </p>
                                    </div>
                                </div>
                                <div className="info__cuisineType">
                                    <h2>Cuisine Type</h2>
                                    <div className="cuisineType">
                                        <p>{recipe.recipe.cuisineType[0]}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="extra__recipes">
                    <h2>Not to your taste? Check out some more recipes!</h2>
                </div>
            </div>
        </div>
    )
}

export default Recipe

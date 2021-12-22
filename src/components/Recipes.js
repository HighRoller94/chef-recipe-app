import React, { useState } from 'react'

import Recipe from './Recipe'

function Recipes({ recipes}) {
    
    return (
        <div>
            <div className="recipes">
                {recipes?.map((recipe) =>
                    <Recipe key={recipe.label} recipe={recipe}/>
                )}
            </div>
            
        </div>
    )
}

export default Recipes

// src/components/RecipeList.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useRecipeStore } from './recipeStore';
import RecipeCard from './RecipeCard'; // Assuming you have a RecipeCard component

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <RecipeCard recipe={recipe} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../data.json'; // Assuming the mock data is in data.json

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-700">Loading recipe...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Recipe Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {recipe.title}
      </h1>

      {/* Recipe Summary */}
      <p className="text-lg text-gray-600 mb-6">
        {recipe.summary}
      </p>

      {/* Ingredients Section */}
      {recipe.ingredients && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions Section */}
      {recipe.instructions && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;


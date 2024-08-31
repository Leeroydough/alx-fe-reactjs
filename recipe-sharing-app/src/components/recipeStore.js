// src/components/recipeStore.js

import create from 'zustand';
import { v4 as uuidv4 } from 'uuid'; // To generate unique IDs for recipes

const useRecipeStore = create(set => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, { ...newRecipe, id: uuidv4() }]
  })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  // Delete a recipe by ID
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),

  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => set(state => {
    state.searchTerm = term;
    state.filterRecipes(); // Trigger filtering whenever search term updates
  }),

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export default useRecipeStore;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm'; // Import the AddRecipeForm component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg mb-6">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Recipe Sharing Platform</h1>
          <p className="text-gray-700">Welcome to your Recipe Sharing Platform. Start adding your favorite recipes now!</p>
        </div>
        
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


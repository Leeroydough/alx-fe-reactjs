import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Recipe Sharing Platform</h1>
        <p className="text-gray-700">Welcome to your Recipe Sharing Platform. Start adding your favorite recipes now!</p>
      </div>
         <div className="App">
      <HomePage />
    </div>
    </div>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

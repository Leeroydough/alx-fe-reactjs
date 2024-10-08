// src/App.jsx
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './components/WelcomeMessage';  // Import the WelcomeMessage component
import UserProfile from './components/UserProfile'; // Import UserProfile component
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Header />
      <WelcomeMessage />  {/* Include the WelcomeMessage component here */}
      <UserProfile 
        name="Alice" 
        age={25}  // Pass age as a number
        bio="Loves hiking and photography" 
      />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;

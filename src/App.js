import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Home from './Pages/Home';
import RecipeDetail from './Pages/RecipeDetail';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';
import AboutUs from './Pages/AboutUs';


function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/recipe/name/:name" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

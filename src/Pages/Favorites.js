import React, { useEffect, useState } from 'react';
import { getFavorites } from '../utils/favorites';
import { useNavigate } from 'react-router-dom';
import '../Style/Favorites.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  if (favorites.length === 0) return <p>No favorites added yet.</p>;

  return (
    <div className="favorites">
        <div className="back-button" onClick={() => navigate(-1)}>
            <AiOutlineArrowLeft className="back-icon" /> 
        </div>
      <h2>Your Favorite Recipes</h2>
      <div className="recipe-grid">
        {favorites.map(meal => (
          <div className="card" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
            <button onClick={() => navigate(`/recipe/${meal.idMeal}`)}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

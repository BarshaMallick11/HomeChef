import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import '../Style/RecipeDetail.css';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { isFavorite, toggleFavorite } from '../utils/favorites';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import {breakfastRecipes} from '../data/breakfastRecipes';
import {mainCourseRecipes} from '../data/mainCourseRecipes';
import {snacksRecipes} from '../data/snacksRecipes';
import dessertsRecipes from '../data/dessertsRecipes';
import saladRecipes from '../data/saladRecipes';


const RecipeDetail = () => {
  const { id } = useParams();
  const navigate= useNavigate();
  const [meal, setMeal] = useState(null);
  const[isFav, setIsFav]= useState(false);

  const tipsAndTime = {
    '52795': {
      time: '40 minutes',
      tips: 'Marinate the chicken overnight for deeper flavor.'
    },
    '52781': {
      time: '45 minutes',
      tips: 'Use fresh cream for a richer tikka masala.'
    },
    '52825': {
      time: '30 minutes',
      tips: 'Blanch spinach before blending to retain green color.'
    },
    '52773': {
      time: '1 hour',
      tips: 'Cook on low heat to tenderize the lamb perfectly.'
    },
    '52814': {
      time: '50 minutes',
      tips: 'Use thick curd in the marinade for creamy texture.'
    },
    '52944': {
      time: '35 minutes',
      tips: 'Use basmati rice and fresh veggies for better aroma.'
    },
    '52868': {
      time: '25 minutes',
      tips: 'Use full-fat milk for richer and creamier Kheer.'
    },
    '52807': {
      time: '30 minutes',
      tips: 'Paneer tastes best when lightly fried before adding.'
    },
    '52841': {
      time: '45 minutes',
      tips: 'Simmer on low flame after adding cream.'
    },
    '52813': {
      time: '50 minutes',
      tips: 'Add garam masala at the end for better aroma.'
    },
    '52806': {
      time: '30 minutes',
      tips: 'Add butter and lemon juice while finishing.'
    },
    // Add more tips as needed
  };

  useEffect(() => {
    console.log("Recipe ID:",id);
    if(!id) return;

    const recipeId=String(id);
    if (recipeId.startsWith('break')) {
      const item = breakfastRecipes.find(r => r.idMeal === recipeId);
      if (item) setMeal(item);
      else setMeal(null);
    }else if (recipeId.startsWith('main')) {
      const item = mainCourseRecipes.find(r => r.idMeal === recipeId);
      setMeal(item || null);
    } else if (recipeId.startsWith('snack')) {
      const item = snacksRecipes.find(r => r.idMeal === recipeId);
      setMeal(item || null);
    } else if (recipeId.startsWith('dessert')) {
      const item = dessertsRecipes.find(r => r.idMeal === recipeId);
      setMeal(item || null);
    } else if (recipeId.startsWith('salad')) {
      const item=saladRecipes.find(r=>r.idMeal===recipeId);
      setMeal(item||null);  
    } else {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.meals && data.meals.length > 0) {
            setMeal(data.meals[0]);
          } else {
            setMeal(null);
          }
        })
        .catch((error)=>{
          console.error("Error fetching recipe:", error);
        });
      
    }
  }, [id]);
  useEffect(()=>{
    if (meal) setIsFav(isFavorite(meal.idMeal));
  },[meal]);
  const getIngredients = () => {
    if (meal.ingredients) return meal.ingredients;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ing && ing.trim()) {
        ingredients.push(`${ing} - ${measure}`);
      }
    }
    return ingredients;
  };
  const handleAddToFavorites = () => {
    toggleFavorite(meal);
    setIsFav(isFavorite(meal.idMeal));
  };

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="recipe-detail">
      <div className="top-bar">
        <div className="back-icon" onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft size={22} />
        </div>
        <div className="favorite-icon" onClick={handleAddToFavorites}>
          {isFav ? <FaHeart color="red" size={24} /> : <FaRegHeart color="gray" size={24} />}
        </div>
      </div>

      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      {meal.description && <p className="intro">{meal.description}</p>}

      <h3>Ingredients</h3>
      <ul>
        {getIngredients().map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h3 className="section-title">Time Taken</h3>
      <div className="time-info">
        {meal.timeTaken || tipsAndTime[meal.idMeal]?.time || 'Time info not available'}
      </div>

      <h3>Recipe Instructions</h3>
      {meal.strInstructions ? (
          <p>{meal.strInstructions}</p>
        ) :(
          <p>No instructions available</p>
      )}
      <h3 className="section-title">Tips</h3>
      <p className="recipe-instructions">
        {meal.tips || tipsAndTime[meal.idMeal]?.tips || 'No special tips for this recipe.'}
      </p>
    </div>
  );
};

export default RecipeDetail;

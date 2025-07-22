import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../Style/Home.css';

import { breakfastRecipes } from '../data/breakfastRecipes';
import { mainCourseRecipes } from '../data/mainCourseRecipes';
import { snacksRecipes } from '../data/snacksRecipes';
import dessertsRecipes from '../data/dessertsRecipes';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);

  // ✅ Load fixed popular recipes on mount
  const popularRecipes = () => {
    const fixedMealIds = [
      '52795', '52781', '52825', '52773', '52814',
      '52944', '52868', '52807', '52841', '52813',
    ];

    Promise.all(
      fixedMealIds.map(id =>
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then(res => res.json())
          .catch(() => null)
      )
    )
      .then(results => {
        const meals = results
          .map(r => (r && r.meals && r.meals[0] ? r.meals[0] : null))
          .filter(Boolean);
        setRecipes(meals);
      })
      .catch(err => {
        console.error('Error fetching popular meals:', err);
        setRecipes([]);
      });
  };

  useEffect(() => {
    popularRecipes();
  }, []);

  // ✅ Combined local + API search
  const handleSearch = () => {
    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();

      const localResults = [
        ...breakfastRecipes,
        ...mainCourseRecipes,
        ...snacksRecipes,
        ...dessertsRecipes,
      ].filter(recipe => recipe.strMeal.toLowerCase().includes(lowerSearch));

      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
          const apiResults = data.meals || [];
          const allResults = [...localResults, ...apiResults].filter(
            (recipe, index, self) =>
              index === self.findIndex(r => r.idMeal === recipe.idMeal)
          );
          setRecipes(allResults);
        })
        .catch(err => {
          console.error('Search failed:', err);
          setRecipes(localResults);
        });
    }
  };

  // ✅ Local categories including salad
  const handleCategoryClick = (category) => {
    if (category === 'Salad') {
      const saladRecipes = [
        { idMeal: 'salad1', strMeal: 'Greek Salad', strMealThumb: '/images/greek_salad.jpg' },
        { idMeal: 'salad2', strMeal: 'Caesar Salad', strMealThumb: '/images/caesar_salad.jpg' },
        { idMeal: 'salad3', strMeal: 'Fruit Salad', strMealThumb: '/images/fruit_salad.jpg' },
        { idMeal: 'salad4', strMeal: 'Corn Salad', strMealThumb: '/images/corn_salad.jpg' },
        { idMeal: 'salad5', strMeal: 'Sprouts Salad', strMealThumb: '/images/sprouts_salad.jpg' },
        { idMeal: 'salad6', strMeal: 'Pasta Salad', strMealThumb: '/images/pasta_salad.jpg' },
        { idMeal: 'salad7', strMeal: 'Paneer Salad', strMealThumb: '/images/paneer_salad.jpg' },
        { idMeal: 'salad8', strMeal: 'Chickpea Salad', strMealThumb: '/images/chickpea_salad.webp' },
        { idMeal: 'salad9', strMeal: 'Beetroot Salad', strMealThumb: '/images/beetroot_salad.jpg' },
        { idMeal: 'salad10', strMeal: 'Carrot Cabbage Salad', strMealThumb: '/images/carrot_cabbage_salad.jpg' },
      ];
      setRecipes(saladRecipes);
    } else if (category === 'Breakfast') {
      setRecipes(breakfastRecipes);
    } else if (category === 'MainCourse') {
      setRecipes(mainCourseRecipes);
    } else if (category === 'Snacks') {
      setRecipes(snacksRecipes);
    } else if (category === 'Desserts') {
      setRecipes(dessertsRecipes);
    }
  };

  return (
    <>
      <Navbar />

      <header className="home-header">
        <div className="header-content">
          <h1>Welcome to HomeChef</h1>
          <p>Your Daily Dose Of Delicious Ideas!</p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a recipe (e.g., egg)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </header>

      <main className="home-main">
        <h2>Choose a Category</h2>
        <div className="category-buttons">
          <button onClick={popularRecipes}>Popular Recipes</button>
          <button onClick={() => handleCategoryClick('Salad')}>Salad</button>
          <button onClick={() => handleCategoryClick('Breakfast')}>Breakfast</button>
          <button onClick={() => handleCategoryClick('MainCourse')}>Main Course</button>
          <button onClick={() => handleCategoryClick('Snacks')}>Snacks</button>
          <button onClick={() => handleCategoryClick('Desserts')}>Desserts</button>
        </div>

        <h2 style={{ marginTop: '30px' }}>Popular Recipes</h2>
        <div className="recipe-grid">
          {recipes.length > 0 ? (
            recipes.map((meal) => (
              <div className="recipe-card" key={meal.idMeal}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h4>{meal.strMeal}</h4>
                <button className="view-btn" onClick={() => navigate(`/recipe/${meal.idMeal}`)}>
                  View Recipe
                </button>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;

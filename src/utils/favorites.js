export const getFavorites = () => {
  const favs = localStorage.getItem('favorites');
  return favs ? JSON.parse(favs) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const isFavorite = (id) => {
  const favs = getFavorites();
  return favs.some(f => f.idMeal === id);
};

export const toggleFavorite = (meal) => {
  let favs = getFavorites();
  const exists = favs.find(f => f.idMeal === meal.idMeal);
  if (exists) {
    favs = favs.filter(f => f.idMeal !== meal.idMeal);
  } else {
    favs.push(meal);
  }
  saveFavorites(favs);
};

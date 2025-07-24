const saladRecipes = [
  {
    idMeal: 'salad1',
    strMeal: 'Greek Salad',
    strMealThumb: '/images/greek_salad.jpg',
    description:'A refreshing Mediterranean salad made with crunchy cucumbers, juicy tomatoes, onions, olives, and feta cheese, dressed with olive oil and herbs.',
    ingredients: [
      'Tomatoes - 2 cups chopped',
      'Cucumber - 1 cup sliced',
      'Red Onion - ½ cup sliced',
      'Feta Cheese - ½ cup crumbled',
      'Olives - ¼ cup',
      'Olive Oil - 2 tbsp',
      'Oregano - 1 tsp',
      'Salt - as needed',
      'Black Pepper - as needed'
    ],
    strInstructions:
      '1. Combine tomatoes, cucumber, onion, feta, and olives in a bowl.\n' +
      '2. Drizzle with olive oil and sprinkle oregano, salt, and pepper.\n' +
      '3. Toss gently and serve chilled.',
    timeTaken: '15 minutes',
    tips: 'Use cold ingredients and serve immediately for freshness.'
  },
  {
    idMeal: 'salad2',
    strMeal: 'Caesar Salad',
    strMealThumb: '/images/caesar_salad.jpg',
    description:'',
    ingredients: [
      'Romaine Lettuce - 2 cups chopped',
      'Croutons - ½ cup',
      'Parmesan Cheese - ¼ cup shredded',
      'Caesar Dressing - 3 tbsp',
      'Black Pepper - a pinch'
    ],
    strInstructions:
      '1. In a large bowl, add romaine lettuce.\n' +
      '2. Toss with Caesar dressing.\n' +
      '3. Add croutons and Parmesan on top.\n' +
      '4. Sprinkle black pepper and serve.',
    timeTaken: '10 minutes',
    tips: 'Use homemade croutons for better crunch.'
  },
  {
    idMeal: 'salad3',
    strMeal: 'Fruit Salad',
    strMealThumb: '/images/fruit_salad.jpg',
    description:'A colorful mix of seasonal fruits like apples, bananas, grapes, and oranges, lightly tossed with honey or citrus juice for a naturally sweet flavor.',
    ingredients: [
      'Apple - ½ cup chopped',
      'Banana - 1 sliced',
      'Grapes - ½ cup',
      'Orange - ½ cup pieces',
      'Honey - 1 tbsp',
      'Lemon Juice - 1 tsp',
      'Mint - few leaves'
    ],
    strInstructions:
      '1. Combine all fruits in a bowl.\n' +
      '2. Add honey and lemon juice.\n' +
      '3. Mix gently and garnish with mint.',
    timeTaken: '10 minutes',
    tips: 'Chill fruits before mixing for better taste.'
  },
  {
    idMeal: 'salad4',
    strMeal: 'Corn Salad',
    strMealThumb: '/images/corn_salad.jpg',
    description:'A vibrant salad made with sweet corn, onions, tomatoes, and capsicum, seasoned with lemon juice, salt, and chaat masala for a tangy twist.',
    ingredients: [
      'Boiled Corn - 1 cup',
      'Cucumber - ½ cup chopped',
      'Tomato - ½ cup chopped',
      'Onion - ¼ cup chopped',
      'Lemon Juice - 1 tbsp',
      'Coriander Leaves - 2 tbsp',
      'Salt - to taste',
      'Chili Powder - ½ tsp'
    ],
    strInstructions:
      '1. Mix corn, cucumber, tomato, and onion.\n' +
      '2. Add lemon juice, salt, chili powder.\n' +
      '3. Mix well and top with coriander.',
    timeTaken: '15 minutes',
    tips: 'Use sweet corn for a better flavor.'
  },
  {
    idMeal: 'salad5',
    strMeal: 'Sprouts Salad',
    strMealThumb: '/images/Sprout-Salad.jpg',
    description:'A protein-rich and healthy mix of moong sprouts, chopped veggies, and lemon juice — perfect for a light and nutritious snack.',
    ingredients: [
      'Green Moong Sprouts - 1 cup',
      'Tomato - ½ cup chopped',
      'Onion - ¼ cup chopped',
      'Cucumber - ½ cup chopped',
      'Lemon Juice - 1 tbsp',
      'Salt - to taste',
      'Chaat Masala - 1 tsp'
    ],
    strInstructions:
      '1. Take boiled or raw sprouts in a bowl.\n' +
      '2. Mix with veggies, salt, and chaat masala.\n' +
      '3. Add lemon juice and mix well.',
    timeTaken: '10 minutes',
    tips: 'Use fresh sprouts to avoid bitterness.'
  },
  {
    idMeal: 'salad6',
    strMeal: 'Pasta Salad',
    strMealThumb: '/images/pasta_salad.jpg',
    description:'A cold salad made with cooked pasta, bell peppers, olives, cherry tomatoes, and Italian dressing — creamy or vinaigrette-based.',
    ingredients: [
      'Boiled Pasta - 1 cup',
      'Bell Peppers - ½ cup chopped',
      'Sweet Corn - ¼ cup',
      'Mayonnaise - 2 tbsp',
      'Salt - as required',
      'Pepper - ½ tsp'
    ],
    strInstructions:
      '1. Mix pasta, corn, and bell peppers.\n' +
      '2. Add mayo, salt, and pepper.\n' +
      '3. Chill before serving.',
    timeTaken: '20 minutes',
    tips: 'Use tricolor pasta for visual appeal.'
  },
  {
    idMeal: 'salad7',
    strMeal: 'Paneer Salad',
    strMealThumb: '/images/paneer_salad.jpg',
    description:'Soft paneer cubes mixed with fresh veggies and herbs, seasoned with pepper, salt, and lemon juice — a protein-packed Indian-style salad.',
    ingredients: [
      'Paneer Cubes - 1 cup',
      'Tomato - ½ cup chopped',
      'Cucumber - ½ cup chopped',
      'Capsicum - ¼ cup',
      'Salt - to taste',
      'Lemon Juice - 1 tbsp',
      'Black Pepper - ½ tsp'
    ],
    strInstructions:
      '1. Lightly sauté paneer cubes.\n' +
      '2. Mix with chopped veggies.\n' +
      '3. Add lemon juice, salt, pepper and toss.',
    timeTaken: '15 minutes',
    tips: 'Use grilled paneer for a smoky flavor.'
  },
  {
    idMeal: 'salad8',
    strMeal: 'Chickpea Salad',
    strMealThumb: '/images/chickpea_salad.webp',
    description:'Boiled chickpeas tossed with onions, tomatoes, cucumber, coriander, and Indian spices — wholesome and rich in protein and fiber.',
    ingredients: [
      'Boiled Chickpeas - 1 cup',
      'Tomato - ½ cup chopped',
      'Onion - ¼ cup chopped',
      'Cucumber - ½ cup chopped',
      'Lemon Juice - 1 tbsp',
      'Coriander - handful',
      'Salt - as needed',
      'Chaat Masala - ½ tsp'
    ],
    strInstructions:
      '1. Combine chickpeas with veggies.\n' +
      '2. Add lemon juice, salt, and chaat masala.\n' +
      '3. Mix and garnish with coriander.',
    timeTaken: '20 minutes',
    tips: 'Soak chickpeas overnight for faster cooking.'
  },
  {
    idMeal: 'salad9',
    strMeal: 'Beetroot Salad',
    strMealThumb: '/images/beetroot_salad.jpg',
    description:'Grated or chopped beets mixed with carrots, onions, and lemon dressing — known for its earthy flavor and rich color.',
    ingredients: [
      'Boiled Beetroot - 1 cup grated',
      'Curd - ½ cup',
      'Cumin Powder - ¼ tsp',
      'Salt - to taste',
      'Coriander - 1 tbsp'
    ],
    strInstructions:
      '1. Mix beetroot with curd and cumin powder.\n' +
      '2. Add salt and garnish with coriander.\n' +
      '3. Chill before serving.',
    timeTaken: '15 minutes',
    tips: 'Use roasted cumin for better aroma.'
  },
  {
    idMeal: 'salad10',
    strMeal: 'Carrot Cabbage Salad',
    strMealThumb: '/images/carrot_cabbage_salad.jpg',
    description:'A crunchy combo of shredded carrot and cabbage, seasoned with salt, lemon, and mustard seeds — a simple and healthy side dish.',
    ingredients: [
      'Grated Carrot - ½ cup',
      'Shredded Cabbage - ½ cup',
      'Lemon Juice - 1 tbsp',
      'Salt - to taste',
      'Black Pepper - ½ tsp',
      'Mustard Seeds - ¼ tsp',
      'Oil - 1 tsp'
    ],
    strInstructions:
      '1. Lightly sauté mustard seeds in oil.\n' +
      '2. Mix all salad ingredients in a bowl.\n' +
      '3. Add lemon juice, salt, and pepper. Toss and serve.',
    timeTaken: '12 minutes',
    tips: 'Add green chili for a spicy kick.'
  }
];

export default saladRecipes;

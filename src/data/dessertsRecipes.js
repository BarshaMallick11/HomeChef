const dessertRecipes = [
  {
    idMeal: "dessert1",
    strMeal: "Rasgulla",
    strMealThumb: "/images/rasgulla.webp",
    description: "Rasgulla is a Bengali dessert made from chenna (curdled milk) balls soaked in light sugar syrup.",
    strInstructions:
      "1. Boil milk and curdle it with lemon juice to separate chenna.\n" +
      "2. Rinse chenna, drain, and knead for 10 mins into a smooth dough.\n" +
      "3. Make small smooth balls.\n" +
      "4. Boil water with sugar and cardamom.\n" +
      "5. Add balls and boil covered for 15–18 mins.\n" +
      "6. Cool and serve chilled.",
    timeTaken: "1 hour",
    tips: "Knead chenna properly for spongy texture.",
    ingredients: [
      "Milk - 1 liter",
      "Lemon juice - 2 tbsp",
      "Sugar - 1 cup",
      "Water - 4 cups",
      "Cardamom - 2"
    ]
  },
  {
    idMeal: "dessert2",
    strMeal: "Jalebi",
    strMealThumb: "/images/jalebi.jpg",
    description: "Crispy spiral-shaped sweet dipped in sugar syrup, popular across India.",
    strInstructions:
      "1. Make batter using maida, curd, and ferment 8 hours.\n" +
      "2. Prepare sugar syrup with cardamom and saffron.\n" +
      "3. Pour batter in spiral shape in hot ghee.\n" +
      "4. Fry till golden, dip in warm syrup.\n" +
      "5. Serve hot.",
    timeTaken: "10 hours (incl. fermentation)",
    tips: "Use piping bottle for better spiral shapes.",
    ingredients: [
      "Maida - 1 cup",
      "Curd - 1/2 cup",
      "Baking soda - 1 pinch",
      "Sugar - 1.5 cups",
      "Water - 3/4 cup",
      "Saffron - few strands",
      "Ghee - for frying"
    ]
  },
  {
    idMeal: "dessert3",
    strMeal: "Sandesh",
    strMealThumb: "/images/sandesh.jpg",
    description: "Sandesh is a Bengali sweet made from soft chenna and sugar, sometimes flavored with cardamom or saffron.",
    strInstructions:
      "1. Prepare fresh chenna from boiled milk.\n" +
      "2. Knead well for 10 minutes.\n" +
      "3. Add powdered sugar and cardamom.\n" +
      "4. Shape into balls or flatten.\n" +
      "5. Garnish and refrigerate before serving.",
    timeTaken: "30 minutes",
    tips: "Do not overcook chenna to avoid dryness.",
    ingredients: [
      "Milk - 1 liter",
      "Lemon juice - 2 tbsp",
      "Sugar - 1/2 cup",
      "Cardamom - 2",
      "Pistachio - for garnish"
    ]
  },
  {
    idMeal: "dessert4",
    strMeal: "Ras Malai",
    strMealThumb: "/images/ras_malai.jpg",
    description: "Ras Malai are soft paneer discs soaked in creamy saffron-flavored milk.",
    strInstructions:
      "1. Make rasgulla as base.\n" +
      "2. Flatten them gently.\n" +
      "3. Boil milk till reduced, add sugar, saffron, and cardamom.\n" +
      "4. Add paneer discs and chill.\n" +
      "5. Garnish with nuts and serve cold.",
    timeTaken: "1.5 hours",
    tips: "Do not overcook milk, stir constantly.",
    ingredients: [
      "Rasgulla - 10 pcs",
      "Milk - 1 liter",
      "Sugar - 1/3 cup",
      "Saffron - few strands",
      "Cardamom - 2",
      "Pistachio - for garnish"
    ]
  },
  {
    idMeal: "dessert5",
    strMeal: "Cheese Cake",
    strMealThumb: "/images/cheese_cake.jpg",
    description: "Creamy and smooth dessert made from cream cheese on a biscuit base, often topped with fruits.",
    strInstructions:
      "1. Crush biscuits and mix with melted butter.\n" +
      "2. Press into a pan as base.\n" +
      "3. Mix cream cheese, sugar, vanilla, and whipped cream.\n" +
      "4. Pour over crust and refrigerate 6 hours.\n" +
      "5. Top with fruits or sauce.",
    timeTaken: "7 hours (incl. chilling)",
    tips: "Use springform pan for easy removal.",
    ingredients: [
      "Cream cheese - 200g",
      "Whipping cream - 1/2 cup",
      "Sugar - 1/2 cup",
      "Vanilla - 1 tsp",
      "Digestive biscuits - 1 cup",
      "Butter - 3 tbsp"
    ]
  },
  {
    idMeal: "dessert6",
    strMeal: "Hot Chocolate",
    strMealThumb: "/images/hot_chocolate.jpg",
    description: "Rich and smooth drink made by melting chocolate in hot milk.",
    strInstructions:
      "1. Heat milk in saucepan.\n" +
      "2. Add cocoa powder, sugar, and stir.\n" +
      "3. Add chopped dark chocolate.\n" +
      "4. Whisk until melted and frothy.\n" +
      "5. Serve hot with whipped cream.",
    timeTaken: "10 minutes",
    tips: "Use real dark chocolate for richness.",
    ingredients: [
      "Milk - 2 cups",
      "Cocoa powder - 2 tbsp",
      "Sugar - 2 tbsp",
      "Dark chocolate - 50g",
      "Whipped cream - optional"
    ]
  },
  {
    idMeal: "dessert7",
    strMeal: "Red Velvet",
    strMealThumb: "/images/red_velvet.jpg",
    description: "Moist red cake with a hint of cocoa, layered with cream cheese frosting.",
    strInstructions:
      "1. Mix maida, cocoa, baking powder, and red food color.\n" +
      "2. Whisk butter, sugar, eggs.\n" +
      "3. Add dry ingredients and buttermilk alternately.\n" +
      "4. Bake at 180°C for 25–30 mins.\n" +
      "5. Frost with cream cheese and layer.",
    timeTaken: "1.5 hours",
    tips: "Do not overbake to retain moisture.",
    ingredients: [
      "Maida - 1.5 cups",
      "Sugar - 1 cup",
      "Butter - 1/2 cup",
      "Cocoa - 1 tbsp",
      "Egg - 2",
      "Buttermilk - 1 cup",
      "Red food color - 1 tsp"
    ]
  },
  {
    idMeal: "dessert8",
    strMeal: "Chocolate Ice Cream",
    strMealThumb: "/images/chocolate_icecream.jpg",
    description: "Creamy homemade chocolate ice cream made without an ice cream machine.",
    strInstructions:
      "1. Whip cream to soft peaks.\n" +
      "2. Mix condensed milk and cocoa powder.\n" +
      "3. Fold into cream.\n" +
      "4. Freeze for 6–8 hours.\n" +
      "5. Scoop and serve.",
    timeTaken: "8 hours (incl. freezing)",
    tips: "Use good quality cocoa powder.",
    ingredients: [
      "Whipping cream - 1 cup",
      "Condensed milk - 1/2 cup",
      "Cocoa powder - 2 tbsp",
      "Vanilla extract - 1 tsp"
    ]
  },
  {
    idMeal: "dessert9",
    strMeal: "Gulab Jamun",
    strMealThumb: "/images/gulab_jamun.webp",
    description: "Soft deep-fried khoya balls soaked in warm sugar syrup.",
    strInstructions:
      "1. Mix khoya, maida, and a pinch of baking soda.\n" +
      "2. Shape into smooth balls.\n" +
      "3. Fry on low heat till golden.\n" +
      "4. Soak in warm sugar syrup for 1 hour.\n" +
      "5. Serve warm.",
    timeTaken: "1 hour",
    tips: "Do not fry on high heat to avoid raw center.",
    ingredients: [
      "Khoya - 1 cup",
      "Maida - 2 tbsp",
      "Baking soda - pinch",
      "Sugar - 1.5 cups",
      "Water - 1 cup",
      "Cardamom - 2"
    ]
  },
  {
    idMeal: "dessert10",
    strMeal: "Mango Cake",
    strMealThumb: "/images/mango_cake.jpg",
    description: "Moist mango-flavored cake with fresh mango puree and light sponge.",
    strInstructions:
      "1. Mix maida, baking powder, and salt.\n" +
      "2. Whisk mango puree, oil, and sugar.\n" +
      "3. Combine both and pour into cake tin.\n" +
      "4. Bake at 180°C for 30–35 mins.\n" +
      "5. Cool and frost if desired.",
    timeTaken: "1 hour",
    tips: "Use Alphonso mangoes for natural flavor.",
    ingredients: [
      "Maida - 1.5 cups",
      "Mango puree - 1 cup",
      "Sugar - 3/4 cup",
      "Oil - 1/2 cup",
      "Baking powder - 1.5 tsp",
      "Salt - 1/4 tsp"
    ]
  }
];

export default dessertRecipes;

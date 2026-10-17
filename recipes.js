// Recipe data. Add a new object to this array to add a recipe to the site.
const RECIPES = [
  {
    id: "shakshuka",
    title: "Shakshuka",
    emoji: "🍳",
    category: "Breakfast",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    description: "Eggs gently poached in a spiced tomato and pepper sauce. Serve with crusty bread.",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, diced",
      "1 red bell pepper, diced",
      "3 garlic cloves, minced",
      "1 tsp ground cumin",
      "1 tsp smoked paprika",
      "¼ tsp chili flakes",
      "1 can (400 g) crushed tomatoes",
      "6 eggs",
      "Salt and pepper",
      "Fresh parsley or cilantro, chopped",
      "Crumbled feta (optional)"
    ],
    steps: [
      "Heat the olive oil in a large skillet over medium heat. Add the onion and pepper and cook until soft, about 6 minutes.",
      "Stir in the garlic, cumin, paprika and chili flakes and cook for 1 minute until fragrant.",
      "Pour in the tomatoes, season with salt and pepper, and simmer for 10 minutes until slightly thickened.",
      "Make 6 small wells in the sauce and crack an egg into each one.",
      "Cover and cook for 5–8 minutes, until the whites are set but the yolks are still runny.",
      "Scatter over herbs and feta and serve straight from the pan."
    ]
  },
  {
    id: "banana-pancakes",
    title: "Fluffy Banana Pancakes",
    emoji: "🥞",
    category: "Breakfast",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    description: "Soft, sweet pancakes that use up overripe bananas.",
    ingredients: [
      "2 ripe bananas",
      "200 g all-purpose flour",
      "2 tsp baking powder",
      "½ tsp cinnamon",
      "Pinch of salt",
      "2 eggs",
      "240 ml milk",
      "2 tbsp melted butter, plus more for the pan",
      "Maple syrup, to serve"
    ],
    steps: [
      "Mash the bananas in a large bowl until mostly smooth.",
      "Whisk in the eggs, milk and melted butter.",
      "In a separate bowl combine the flour, baking powder, cinnamon and salt, then fold into the wet ingredients until just combined. A few lumps are fine.",
      "Heat a lightly buttered pan over medium heat. Pour in about ¼ cup of batter per pancake.",
      "Cook until bubbles form on the surface, about 2 minutes, then flip and cook 1 minute more.",
      "Serve warm with maple syrup and sliced banana."
    ]
  },
  {
    id: "caprese-salad",
    title: "Caprese Salad",
    emoji: "🍅",
    category: "Salad",
    time: 10,
    servings: 2,
    difficulty: "Easy",
    description: "Ripe tomatoes, fresh mozzarella and basil with good olive oil. Summer on a plate.",
    ingredients: [
      "3 large ripe tomatoes",
      "250 g fresh mozzarella",
      "Handful of fresh basil leaves",
      "3 tbsp extra-virgin olive oil",
      "1 tbsp balsamic glaze (optional)",
      "Flaky sea salt and black pepper"
    ],
    steps: [
      "Slice the tomatoes and mozzarella into rounds about 1 cm thick.",
      "Arrange them on a platter, alternating and overlapping, tucking basil leaves between them.",
      "Drizzle with olive oil and balsamic glaze.",
      "Season with flaky salt and freshly ground pepper just before serving."
    ]
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    emoji: "🥗",
    category: "Salad",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    description: "A crunchy, tangy salad of cucumber, tomato, olives and feta.",
    ingredients: [
      "1 cucumber, chopped",
      "4 tomatoes, cut into wedges",
      "1 small red onion, thinly sliced",
      "1 green bell pepper, sliced",
      "100 g Kalamata olives",
      "200 g block of feta",
      "4 tbsp olive oil",
      "1 tbsp red wine vinegar",
      "1 tsp dried oregano"
    ],
    steps: [
      "Combine the cucumber, tomatoes, onion, pepper and olives in a large bowl.",
      "Whisk together the olive oil, vinegar and half the oregano with a pinch of salt.",
      "Pour the dressing over the vegetables and toss gently.",
      "Place the block of feta on top, sprinkle with the remaining oregano and drizzle with a little more oil."
    ]
  },
  {
    id: "spaghetti-carbonara",
    title: "Spaghetti Carbonara",
    emoji: "🍝",
    category: "Main",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    description: "The Roman classic: silky egg and cheese sauce with crispy guanciale. No cream needed.",
    ingredients: [
      "400 g spaghetti",
      "150 g guanciale or pancetta, diced",
      "4 egg yolks + 1 whole egg",
      "80 g Pecorino Romano, finely grated",
      "Plenty of freshly ground black pepper",
      "Salt for the pasta water"
    ],
    steps: [
      "Bring a large pot of salted water to the boil and cook the spaghetti until al dente.",
      "Meanwhile, fry the guanciale in a large dry pan over medium heat until crisp and the fat has rendered. Turn off the heat.",
      "Whisk the yolks, whole egg, Pecorino and a generous amount of pepper in a bowl.",
      "Reserve a mug of pasta water, then drain the pasta and add it to the guanciale pan, tossing to coat.",
      "Let the pan cool for 1 minute, then pour in the egg mixture, tossing constantly and adding splashes of pasta water until glossy and creamy.",
      "Serve immediately with extra Pecorino and pepper."
    ]
  },
  {
    id: "chicken-tikka-masala",
    title: "Chicken Tikka Masala",
    emoji: "🍛",
    category: "Main",
    time: 60,
    servings: 4,
    difficulty: "Medium",
    description: "Charred, marinated chicken in a rich, spiced tomato-cream sauce.",
    ingredients: [
      "700 g boneless chicken thighs, cut into chunks",
      "200 g plain yogurt",
      "2 tsp garam masala, divided",
      "1 tsp turmeric",
      "2 tsp ground cumin, divided",
      "2 tbsp butter or ghee",
      "1 large onion, finely chopped",
      "4 garlic cloves, minced",
      "1 tbsp grated ginger",
      "1 can (400 g) tomato purée",
      "200 ml heavy cream",
      "Salt, cilantro and basmati rice to serve"
    ],
    steps: [
      "Mix the yogurt with 1 tsp garam masala, the turmeric, 1 tsp cumin and a pinch of salt. Coat the chicken and marinate for at least 30 minutes.",
      "Grill or broil the chicken on high heat until charred in spots, about 10 minutes.",
      "Melt the butter in a large pan and cook the onion until golden, about 8 minutes. Add the garlic, ginger and remaining spices and cook for 1 minute.",
      "Add the tomato purée and simmer for 10 minutes.",
      "Stir in the cream and the chicken and simmer for another 10 minutes.",
      "Season to taste, garnish with cilantro and serve with rice or naan."
    ]
  },
  {
    id: "beef-tacos",
    title: "Weeknight Beef Tacos",
    emoji: "🌮",
    category: "Main",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    description: "Quick, spiced ground beef tacos with all your favourite toppings.",
    ingredients: [
      "500 g ground beef",
      "1 onion, diced",
      "2 garlic cloves, minced",
      "2 tsp chili powder",
      "1 tsp ground cumin",
      "1 tsp smoked paprika",
      "½ tsp dried oregano",
      "120 ml tomato sauce",
      "8 small tortillas",
      "Toppings: shredded lettuce, diced tomato, cheese, sour cream, lime wedges"
    ],
    steps: [
      "Brown the beef in a large skillet over medium-high heat, breaking it up as it cooks. Drain excess fat.",
      "Add the onion and garlic and cook until softened, about 4 minutes.",
      "Stir in the spices, then the tomato sauce and a splash of water. Simmer for 5 minutes until thick.",
      "Warm the tortillas in a dry pan or wrapped in foil in the oven.",
      "Fill the tortillas with the beef and pile on your toppings. Finish with a squeeze of lime."
    ]
  },
  {
    id: "mushroom-risotto",
    title: "Mushroom Risotto",
    emoji: "🍄",
    category: "Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    description: "Creamy arborio rice with earthy mushrooms, white wine and Parmesan.",
    ingredients: [
      "300 g arborio rice",
      "400 g mixed mushrooms, sliced",
      "1.2 L hot vegetable stock",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "120 ml dry white wine",
      "3 tbsp butter",
      "2 tbsp olive oil",
      "60 g Parmesan, grated",
      "Fresh thyme or parsley"
    ],
    steps: [
      "Sauté the mushrooms in 1 tbsp oil and 1 tbsp butter until golden. Season and set aside.",
      "In the same pan, soften the onion in the remaining oil for 5 minutes, then add the garlic.",
      "Add the rice and stir for 2 minutes until the edges turn translucent.",
      "Pour in the wine and stir until absorbed.",
      "Add the stock one ladle at a time, stirring often and waiting until each addition is absorbed, for about 18–20 minutes.",
      "When the rice is creamy and just tender, stir in the mushrooms, remaining butter and Parmesan. Rest 2 minutes, then serve with herbs."
    ]
  },
  {
    id: "chickpea-curry",
    title: "Coconut Chickpea Curry",
    emoji: "🥥",
    category: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    description: "A cosy, vegan one-pot curry made almost entirely from pantry staples.",
    ingredients: [
      "2 cans (400 g each) chickpeas, drained",
      "1 can (400 ml) coconut milk",
      "1 can (400 g) chopped tomatoes",
      "1 onion, diced",
      "3 garlic cloves, minced",
      "1 tbsp grated ginger",
      "2 tbsp curry powder",
      "2 handfuls baby spinach",
      "1 tbsp oil",
      "Juice of 1 lime",
      "Salt, cilantro and rice to serve"
    ],
    steps: [
      "Heat the oil in a large pot and cook the onion until soft, about 5 minutes.",
      "Add the garlic, ginger and curry powder and cook for 1 minute.",
      "Stir in the tomatoes, coconut milk and chickpeas. Simmer for 15 minutes.",
      "Stir in the spinach until wilted, then add lime juice and salt to taste.",
      "Serve over rice, topped with cilantro."
    ]
  },
  {
    id: "tomato-soup",
    title: "Roasted Tomato Soup",
    emoji: "🥣",
    category: "Soup",
    time: 50,
    servings: 4,
    difficulty: "Easy",
    description: "Deeply flavoured soup from oven-roasted tomatoes and garlic. Perfect with a grilled cheese.",
    ingredients: [
      "1 kg ripe tomatoes, halved",
      "1 red onion, quartered",
      "1 head of garlic, top sliced off",
      "3 tbsp olive oil",
      "500 ml vegetable stock",
      "Handful of fresh basil",
      "Salt and pepper",
      "Splash of cream (optional)"
    ],
    steps: [
      "Heat the oven to 200 °C (400 °F).",
      "Spread the tomatoes and onion on a tray, add the garlic, drizzle with oil and season well.",
      "Roast for 35–40 minutes until soft and caramelised at the edges.",
      "Squeeze the garlic out of its skins and tip everything into a pot with the stock and basil.",
      "Simmer for 5 minutes, then blend until smooth. Adjust seasoning and stir in cream if using."
    ]
  },
  {
    id: "chicken-noodle-soup",
    title: "Chicken Noodle Soup",
    emoji: "🍜",
    category: "Soup",
    time: 45,
    servings: 6,
    difficulty: "Easy",
    description: "The comforting classic, with tender chicken, vegetables and egg noodles.",
    ingredients: [
      "2 chicken breasts or 4 thighs",
      "2 L chicken stock",
      "2 carrots, sliced",
      "2 celery stalks, sliced",
      "1 onion, diced",
      "2 garlic cloves, minced",
      "150 g egg noodles",
      "1 bay leaf",
      "1 tbsp butter",
      "Fresh parsley and lemon juice"
    ],
    steps: [
      "Melt the butter in a large pot and cook the onion, carrot and celery for 6 minutes.",
      "Add the garlic, stock, bay leaf and chicken. Bring to a simmer and cook for 20 minutes.",
      "Remove the chicken, shred it with two forks and return it to the pot.",
      "Add the noodles and cook according to the package instructions.",
      "Season with salt, pepper and a squeeze of lemon, then stir in parsley."
    ]
  },
  {
    id: "chocolate-chip-cookies",
    title: "Chocolate Chip Cookies",
    emoji: "🍪",
    category: "Dessert",
    time: 30,
    servings: 24,
    difficulty: "Easy",
    description: "Crisp at the edges, chewy in the middle and loaded with chocolate.",
    ingredients: [
      "225 g butter, softened",
      "150 g brown sugar",
      "100 g white sugar",
      "2 eggs",
      "2 tsp vanilla extract",
      "300 g all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "300 g chocolate chips"
    ],
    steps: [
      "Heat the oven to 180 °C (350 °F) and line two baking trays.",
      "Cream the butter and both sugars until light and fluffy. Beat in the eggs and vanilla.",
      "Mix in the flour, baking soda and salt until just combined, then fold in the chocolate chips.",
      "Scoop tablespoon-sized balls onto the trays, spacing them well apart.",
      "Bake for 10–12 minutes until golden at the edges but still soft in the centre.",
      "Cool on the tray for 5 minutes before moving to a rack."
    ]
  },
  {
    id: "tiramisu",
    title: "Tiramisu",
    emoji: "☕",
    category: "Dessert",
    time: 30,
    servings: 8,
    difficulty: "Medium",
    description: "Coffee-soaked ladyfingers layered with a light mascarpone cream. Best made a day ahead.",
    ingredients: [
      "4 egg yolks",
      "100 g sugar",
      "500 g mascarpone",
      "300 ml heavy cream",
      "300 ml strong espresso, cooled",
      "2 tbsp coffee liqueur or marsala (optional)",
      "About 30 ladyfingers",
      "Cocoa powder for dusting"
    ],
    steps: [
      "Whisk the yolks and sugar until pale and thick. Beat in the mascarpone until smooth.",
      "Whip the cream to soft peaks and fold it into the mascarpone mixture.",
      "Combine the espresso and liqueur in a shallow dish.",
      "Quickly dip each ladyfinger in the coffee and lay them in a single layer in a dish.",
      "Spread half the cream over the top. Repeat with another layer of soaked ladyfingers and the remaining cream.",
      "Cover and chill for at least 6 hours, ideally overnight. Dust generously with cocoa before serving."
    ]
  },
  {
    id: "lemonade",
    title: "Fresh Mint Lemonade",
    emoji: "🍋",
    category: "Drink",
    time: 10,
    servings: 6,
    difficulty: "Easy",
    description: "Bright, tart and refreshing, with a cooling hit of fresh mint.",
    ingredients: [
      "6 lemons, juiced (about 240 ml)",
      "150 g sugar",
      "1.2 L cold water",
      "Large handful of fresh mint",
      "Ice and lemon slices to serve"
    ],
    steps: [
      "Heat the sugar with 240 ml of the water until dissolved. Add half the mint and leave to cool.",
      "Strain the syrup into a jug and add the lemon juice and the remaining water.",
      "Taste and adjust with more water or sugar.",
      "Serve over ice with lemon slices and fresh mint leaves."
    ]
  }
];

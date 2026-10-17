// Recipe data. Add a new object to this array to add a recipe to the site.
// All recipes are by Christian Duffau-Rasmussen, translated from the Danish
// originals at https://duffau.github.io/recipes/
//
// `ingredients` and `steps` are lists of groups: { title?, items, note? }.
// `serves`, `credits` (the original inspiration) and `intro` are optional.
// Stove settings like "6 out of 9" refer to a hob dial that goes up to 9.
const AUTHOR = {
  name: "Christian Duffau-Rasmussen",
  url: "https://duffau.github.io/recipes/"
};

const RECIPES = [
  {
    id: "smashed-cucumber",
    title: "Smashed Cucumber Salad",
    emoji: "🥒",
    category: "Salads",
    serves: "4",
    url: "https://duffau.github.io/recipes/smashed-cucumber",
    ingredients: [
      {
        items: [
          "2 cucumbers (~500 g)",
          "2.5 tsp sugar",
          "2 tsp sesame oil",
          "3 tsp light soy sauce",
          "1.5 tbsp rice vinegar",
          "2-4 garlic cloves (finely chopped)",
          "1-2 tsp chili oil (optional)",
          "2 tsp toasted sesame seeds",
          "A small handful of chopped cilantro"
        ]
      }
    ],
    steps: [
      {
        title: "Dressing",
        items: [
          "Combine the sugar, sesame oil, soy sauce and rice vinegar in a large bowl",
          "Whisk until the sugar has dissolved"
        ]
      },
      {
        title: "Cucumber",
        items: [
          "Finely chop the garlic",
          "Smash the cucumbers with the flat of a heavy knife or a meat mallet",
          "Chop the cucumber into uneven 2-5 cm pieces",
          "Put the cucumber and garlic in the large bowl with the dressing",
          "Toss the cucumber in the dressing"
        ]
      },
      {
        title: "To serve",
        items: [
          "Arrange the smashed cucumbers on a platter",
          "Sprinkle the toasted sesame seeds over the top"
        ]
      }
    ]
  },
  {
    id: "romaine-salat",
    title: "Romaine Lettuce in Garlic-Soy Sauce",
    emoji: "🥬",
    category: "Salads",
    url: "https://duffau.github.io/recipes/romaine-salat-i-hvidløgssauce",
    credits: ["Kenji Lopez-Alt – Too Much Romaine? Try This Chinese Recipe (Kenji’s Cooking Show)"],
    ingredients: [
      {
        items: [
          "1 head of romaine lettuce or 3 little gem lettuces",
          "4-5 garlic cloves",
          "2 tbsp oyster sauce",
          "1 tbsp soy sauce"
        ]
      }
    ],
    steps: [
      {
        title: "Prep",
        items: [
          "Separate the lettuce into whole leaves and rinse",
          "Finely chop the garlic",
          "Bring a pot, sauté pan or wok of 1% salted water to the boil"
        ]
      },
      {
        title: "Sauce",
        items: [
          "Heat some oil in a small pot",
          "Fry the garlic over medium-high heat (7 out of 9) for 3-4 min (don’t let it brown)",
          "Add the soy sauce and oyster sauce",
          "Add 3 tbsp of the salted water"
        ]
      },
      {
        title: "Blanch the lettuce",
        items: ["Cook the whole lettuce leaves in the boiling water for 20-30 seconds"]
      },
      {
        title: "To serve",
        items: [
          "Lift the lettuce out of the boiling water",
          "Arrange on a platter",
          "Pour the garlic-soy sauce over the lettuce"
        ]
      }
    ]
  },
  {
    id: "spidskaal-parmesancreme",
    title: "Roasted Pointed Cabbage with Parmesan Cream",
    emoji: "🥬",
    category: "Salads",
    serves: "3-4",
    url: "https://duffau.github.io/recipes/spidskaal-med-parmesan-creme",
    ingredients: [
      {
        items: [
          "1 pointed (sweetheart) cabbage",
          "200 g crème fraîche 18%",
          "50 g Parmesan",
          "1 unwaxed lemon",
          "3 tbsp olive oil",
          "Salt",
          "Black pepper",
          "Parsley"
        ]
      }
    ],
    steps: [
      {
        title: "Prep the cabbage",
        items: [
          "Remove the outermost leaves",
          "Trim off the bottom of the stem",
          "Cut the cabbage into 6-8 wedges"
        ]
      },
      {
        title: "Prep the Parmesan cream",
        items: [
          "Finely grate the Parmesan",
          "Grate the zest from 1/2 lemon",
          "Stir the crème fraîche together with the Parmesan, lemon zest, 1 tbsp olive oil and the juice of 1/2 lemon",
          "Season to taste with salt, pepper and lemon juice"
        ]
      },
      {
        title: "Roast the cabbage",
        items: [
          "Place on a baking tray",
          "Brush with 2 tbsp olive oil",
          "Roast at 200 °C for 30-45 minutes until tender"
        ]
      },
      {
        title: "To serve",
        items: [
          "Spread the Parmesan cream on a platter",
          "Place the roasted cabbage on top",
          "Sprinkle with grated lemon zest and chopped parsley"
        ]
      }
    ]
  },
  {
    id: "bolognese",
    title: "Pasta Bolognese",
    emoji: "🍝",
    category: "Pasta",
    serves: "8",
    url: "https://duffau.github.io/recipes/bolognese/",
    ingredients: [
      {
        items: [
          "400 g ground pork, min. 12% fat",
          "400 g ground beef, min. 12% fat",
          "2 large onions",
          "2 celery stalks",
          "2 large carrots",
          "6 garlic cloves",
          "2 cans (800 g) whole peeled tomatoes",
          "2 glasses white wine (~30 cl)",
          "1 sprig fresh rosemary",
          "4 sprigs fresh thyme",
          "4 bay leaves (dried)",
          "2 star anise",
          "100 g Parmesan",
          "Salt",
          "Pepper",
          "Sugar",
          "Vinegar"
        ]
      }
    ],
    steps: [
      {
        title: "Prep",
        items: [
          "Using a coarse grater, grate the onion, celery and carrot",
          "Finely chop the garlic",
          "Mix the pork and beef together",
          "Form the mince into 10-12 lumps for easier browning",
          "Finely grate the Parmesan"
        ]
      },
      {
        title: "Sauce",
        items: [
          "Heat 8 tbsp olive oil in an ovenproof pot with a lid",
          "Fry small lumps of the mince over medium heat (6 out of 9). They don’t need to be cooked through, but should brown well on at least one side. Season each batch with salt and pepper.",
          "Transfer the browned mince to a bowl",
          "Fry the grated vegetables in the oil over medium heat (6 out of 9). Season with salt and pepper. Cook until the onions are translucent and the vegetables are tender.",
          "Pour in the white wine and scrape the browned bits from the bottom of the pot",
          "Add the peeled tomatoes and crush them with a spoon",
          "Return the meat to the pot",
          "Add the aromatics: rosemary, thyme, bay leaves and star anise",
          "Put the lid on and place the pot in the oven at 150-160 °C (conventional heat)",
          "Let it simmer for 30 minutes to 5 hours – the longer the better",
          "Take it out of the oven",
          "Season to taste with salt, sugar and a good vinegar"
        ]
      },
      {
        title: "Cook the pasta",
        items: [
          "Bring water with 1% salt to the boil, i.e. 10 g salt per litre of water.",
          "Cook the pasta 2 minutes less than the packet says",
          "Reserve 100-200 ml of pasta water",
          "Drain the pasta"
        ]
      },
      {
        title: "Bring it together",
        items: [
          "Transfer the pasta to a large sauté pan",
          "Toss the pasta in the sauce in the sauté pan",
          "Add 4-6 tbsp pasta water to loosen the sauce",
          "Let the sauce and pasta simmer for 1-2 min, stirring",
          "If the sauce is too dry, add more pasta water",
          "Turn off the heat",
          "Add the grated Parmesan and stir until it has melted into the sauce",
          "Add 2-3 tbsp olive oil and stir",
          "Serve topped with grated Parmesan"
        ]
      }
    ]
  },
  {
    id: "pasta-pesto-genovese",
    title: "Pasta Pesto Genovese",
    emoji: "🌿",
    category: "Pasta",
    serves: "4",
    url: "https://duffau.github.io/recipes/pasta-pesto-genovese/",
    intro: [
      "The best result comes from using a mortar and pestle. Crushing the basil leaves releases more aromatic compounds, because far more cell walls are broken than in a blended version."
    ],
    ingredients: [
      {
        items: [
          "400 g linguine/bucatini/spaghettoni/spaghetti",
          "1 basil plant, 10-15 cm",
          "1 garlic clove, peeled",
          "40 g pine nuts",
          "50 g Parmesan",
          "Extra virgin olive oil",
          "Coarse salt",
          "Black pepper"
        ]
      }
    ],
    steps: [
      {
        title: "Prep",
        items: [
          "Rinse and pick the basil leaves",
          "Peel and roughly chop the garlic",
          "Grate the Parmesan very finely"
        ]
      },
      {
        title: "Pesto in a mortar",
        items: [
          "Put the basil leaves and a little coarse salt in a mortar",
          "Crush the basil leaves to a paste",
          "Add the garlic and crush",
          "Add the pine nuts and crush",
          "Add the finely grated Parmesan",
          "Add olive oil and stir until smooth",
          "The consistency should be loose",
          "Season with black pepper"
        ]
      },
      {
        title: "Cook the pasta",
        items: [
          "Bring water with 1% salt to the boil, i.e. 10 g salt per litre of water.",
          "Cook the pasta 2 minutes less than the packet says",
          "Reserve 100-200 ml of pasta water",
          "Drain the pasta"
        ]
      },
      {
        title: "Bring it together",
        items: [
          "Put the pesto in a large plastic bowl (plastic loses less heat)",
          "Toss the pasta in the bowl",
          "Add 3 tbsp pasta water to make a smooth pesto sauce",
          "Stir until the sauce comes together",
          "If the sauce is too dry, add more pasta water",
          "Season to taste with salt, pepper and perhaps some lemon juice",
          "Serve topped with grated Parmesan"
        ]
      }
    ]
  },
  {
    id: "ragu-bianco",
    title: "Pasta Ragù Bianco",
    emoji: "🍋",
    category: "Pasta",
    serves: "4",
    url: "https://duffau.github.io/recipes/ragu-bianco/",
    ingredients: [
      {
        items: [
          "200 g ground pork, min. 12% fat",
          "200 g fresh plain salsiccia sausage (can be replaced with ground pork)",
          "1 large onion",
          "1 celery stalk",
          "1 large carrot",
          "3 garlic cloves",
          "1 lemon",
          "1 sprig fresh rosemary",
          "1 glass white wine (~15 cl)",
          "50 g Parmesan",
          "125 ml heavy cream"
        ]
      }
    ],
    steps: [
      {
        title: "Prep",
        items: [
          "Using a fine grater, grate the zest of half a lemon",
          "Chop the onion, celery, carrot and garlic in a food processor or into small dice with a knife",
          "Chop the rosemary very finely",
          "Grate the Parmesan on a fine grater",
          "Mix the ground pork and the salsiccia meat with black pepper, the rosemary and the lemon zest"
        ]
      },
      {
        title: "Sauce",
        items: [
          "Heat 4 tbsp olive oil in a sauté pan",
          "Fry the mince over medium heat (6 out of 9) in small “lumps”. It doesn’t need to be cooked through, but should brown well on at least one side. Salt each batch.",
          "Transfer the browned mince to a bowl",
          "Fry the chopped vegetables in the oil over medium heat (6 out of 9). Season with salt and pepper. Cook until the onions are translucent and the vegetables are tender.",
          "Pour in the white wine and scrape the browned bits from the bottom of the pan",
          "Pour in the cream",
          "Let it simmer for 10-30 min"
        ]
      },
      {
        title: "Cook the pasta",
        items: [
          "Bring water with 1% salt to the boil, i.e. 10 g salt per litre of water.",
          "Cook the pasta 2 minutes less than the packet says",
          "Reserve 100-200 ml of pasta water",
          "Drain the pasta"
        ]
      },
      {
        title: "Bring it together",
        items: [
          "Toss the pasta in the sauce in the sauté pan",
          "Add a little more cream if you like",
          "Add 2-3 tbsp pasta water to loosen the sauce",
          "Let the sauce and pasta simmer for 1-2 min, stirring",
          "If the sauce is too dry, add more pasta water",
          "Turn off the heat",
          "Add the grated Parmesan and stir until it has melted into the sauce",
          "Add the juice of half a lemon",
          "Season to taste with salt, pepper and lemon",
          "Serve topped with grated Parmesan"
        ]
      }
    ]
  },
  {
    id: "pasta-alla-norcina",
    title: "Pasta alla Norcina",
    emoji: "🍄",
    category: "Pasta",
    serves: "6",
    url: "https://duffau.github.io/recipes/pasta-alla-norcina/",
    credits: ["America’s Test Kitchen – Pasta alla Norcina"],
    ingredients: [
      {
        items: [
          "230 g ground pork (20-30% fat if possible)",
          "450 g orecchiette pasta (can be replaced with conchiglie or mezzi rigatoni)",
          "230 g cremini mushrooms (or other mushrooms)",
          "180 g heavy cream",
          "120 ml white wine",
          "45 g Pecorino Romano",
          "7 tsp olive oil",
          "3 garlic cloves",
          "3 tbsp fresh parsley",
          "1.25 tsp fresh rosemary",
          "1 tbsp lemon juice",
          "1/8 tsp baking soda",
          "Salt",
          "Black pepper"
        ]
      }
    ],
    steps: [
      {
        title: "Pork",
        items: [
          "Mix 4 tbsp water with 1 tsp salt and 1 tsp baking powder until dissolved.",
          "Mix the pork into the salt/baking powder solution.",
          "Let it rest for 10 min.",
          "Add finely chopped rosemary, finely grated or pressed garlic and finely grated nutmeg. Mix until well combined.",
          "Form the mince into one thick patty. Heat a pan with a little oil and sear the patty hard on both sides. It should get plenty of colour without the inside cooking through.",
          "Once seared, transfer to a chopping board and chop into small pieces. Set aside in a bowl with 1 dl cream so the flavour seeps into the cream."
        ],
        note: "Baking powder is a mix of baking soda (sodium bicarbonate), which is alkaline, and an acid. The alkali raises the pH of the meat, which helps it hold on to moisture and brown faster."
      },
      {
        title: "Sauce and pasta",
        items: [
          "Put the pasta water on. A 1% salt solution (1.5 tsp per litre) is about right.",
          "Chop the mushrooms into small pieces in a blender or mini chopper.",
          "Put the mushrooms in a high-sided sauté pan with enough water to cover the bottom.",
          "Boil until the water has evaporated. This breaks down the structure of the mushrooms so they release their water and lose their ability to soak up fat.",
          "Add olive oil to the pan and sauté the mushrooms until lightly browned.",
          "Put the pasta on to cook.",
          "Once the chopped mushrooms have taken on colour, add a glass of white wine and let it reduce completely.",
          "Add freshly chopped rosemary and finely chopped garlic.",
          "Pour in the cream and meat.",
          "Simmer until the meat is cooked.",
          "Turn down the heat. Add a large handful of grated Pecorino Romano.",
          "Season to taste with lemon juice, salt and pepper.",
          "Drain the pasta, tip it into the sauté pan with the sauce and make sure it’s well coated."
        ]
      }
    ]
  },
  {
    id: "pasta-kaernemaelk-mynte-pistacie",
    title: "Pasta with Buttermilk, Mint and Pistachios",
    emoji: "🫛",
    category: "Pasta",
    serves: "4",
    url: "https://duffau.github.io/recipes/pasta-kærnemælk-mynte-pistacie",
    credits: ["Bon Appétit – Orecchiette with Buttermilk, Peas and Pistachios"],
    ingredients: [
      {
        items: [
          "30 g pistachios",
          "400 g pasta",
          "Salt",
          "400 g peas (fresh or frozen)",
          "3 tbsp butter",
          "2 tbsp extra virgin olive oil, plus more for drizzling",
          "2 medium leeks, white and light green parts only, halved lengthwise and thinly sliced",
          "3 garlic cloves, thinly sliced",
          "½ tsp crushed red pepper flakes",
          "1 small bunch of mint, divided",
          "200 ml buttermilk",
          "100 g Parmesan, finely grated, plus more for serving",
          "Freshly ground black pepper",
          "2 tbsp fresh lemon juice"
        ]
      }
    ],
    steps: [
      {
        title: "Prep",
        items: [
          "Preheat the oven to 175 °C.",
          "Toast the pistachios on a baking tray, turning once, until golden brown, 5–8 minutes.",
          "Let the pistachios cool, then crush them coarsely with a measuring cup or a glass.",
          "Clean the leeks, halve lengthwise and slice thinly"
        ]
      },
      {
        title: "Cook the pasta and peas",
        items: [
          "Bring water with 1% salt to the boil, i.e. 10 g salt per litre of water.",
          "Cook the pasta 2 minutes less than the packet says",
          "Add the peas for the last 2 minutes",
          "Reserve 100-200 ml of pasta water",
          "Drain the pasta and peas"
        ]
      },
      {
        title: "Buttermilk sauce",
        items: [
          "Heat the butter and 2 tbsp oil in a heavy-bottomed pot over medium heat (6 out of 9).",
          "Cook the leeks, garlic, red pepper flakes and 3 mint sprigs, stirring, until the leeks are soft but not browned, 6–8 minutes.",
          "Season with salt.",
          "Add the buttermilk and bring to a simmer.",
          "Remove the mint and discard"
        ]
      },
      {
        title: "Bring it together",
        items: [
          "Use a slotted spoon to transfer the pasta and peas to the leek mixture.",
          "Add 85 g Parmesan.",
          "Cook, stirring vigorously and adding a little pasta water if needed, until the sauce is creamy and coats the pasta, about 1 minute.",
          "Season with salt and pepper.",
          "Remove from the heat and add the lemon juice.",
          "Pick the leaves from the remaining mint sprigs, tear them over the pasta and toss.",
          "Divide the pasta between bowls.",
          "Top with pistachios and Parmesan, and drizzle with oil."
        ]
      }
    ]
  },
  {
    id: "pasta-tomat-kikaerter",
    title: "Pasta with Tomato and Chickpeas",
    emoji: "🍅",
    category: "Pasta",
    serves: "6",
    url: "https://duffau.github.io/recipes/pasta-tomat-kikærte",
    ingredients: [
      {
        items: [
          "600 g pasta",
          "800 g whole peeled tomatoes (canned)",
          "400 g chickpeas (canned, pre-cooked)",
          "3-5 tbsp extra virgin olive oil",
          "1 medium onion, finely chopped",
          "2 garlic cloves, finely chopped",
          "1 small bunch of parsley",
          "1/4 tsp grated lemon zest (zest of 1/2 lemon)",
          "1 tsp sugar",
          "Freshly ground black pepper",
          "Salt"
        ]
      }
    ],
    steps: [
      {
        title: "Prep",
        items: [
          "Finely chop the onion and garlic",
          "Grate the lemon zest",
          "Finely chop the parsley",
          "Blend 1/3-1/2 of the chickpeas with a little of their liquid",
          "Blend the tomatoes with all the juice from the can"
        ]
      },
      {
        title: "Tomato sauce",
        items: [
          "Heat 2 tbsp oil in a sauté pan over medium-high heat (7 out of 9).",
          "Cook the onion and garlic until the onion is soft and translucent, 3–5 minutes.",
          "Season with salt",
          "Add the blended tomatoes and bring to the boil.",
          "Reduce by 25%-50%, 10-20 minutes",
          "Add the blended chickpeas and the whole chickpeas",
          "Stir well",
          "Season with salt, pepper and sugar"
        ]
      },
      {
        title: "Cook the pasta",
        items: [
          "Bring water with 1% salt to the boil, i.e. 10 g salt per litre of water.",
          "Cook the pasta 2 minutes less than the packet says",
          "Reserve 100-200 ml of pasta water",
          "Drain the pasta"
        ]
      },
      {
        title: "Bring it together",
        items: [
          "Transfer the pasta to the tomato sauce.",
          "Add 2 tbsp olive oil",
          "Cook, stirring vigorously and adding a little pasta water if needed, until the sauce is creamy and coats the pasta, about 1 minute.",
          "Remove from the heat and add the lemon zest and parsley.",
          "Serve with Parmesan and/or gremolata"
        ]
      }
    ]
  },
  {
    id: "biang-biang",
    title: "Biang Biang Noodles",
    emoji: "🍜",
    category: "Asian",
    serves: "7 noodles",
    url: "https://duffau.github.io/recipes/biang-biang/",
    ingredients: [
      {
        items: [
          "250 g all-purpose flour – 100% baker’s percentage",
          "130 g water – 52% baker’s percentage",
          "3 g fine salt – ~1% baker’s percentage",
          "Sunflower oil for coating the dough"
        ]
      }
    ],
    steps: [
      {
        title: "Make the dough",
        items: [
          "Mix the salt and flour",
          "Gradually add the water while stirring in one circular direction",
          "Knead the dough lightly until uniform",
          "Let it rest, covered, for 15-20 minutes so the dough fully hydrates",
          "Knead the dough for 5 minutes",
          "Let it rest, covered, for 10 minutes",
          "Roll the dough into a cylinder 2.5 cm in diameter",
          "Cut into 7 pieces, each 6.4 cm long",
          "Roll each of the 7 pieces out into a 5 cm x 10 cm x 1 cm rectangle",
          "Coat each rectangle with sunflower oil",
          "Let them rest under cling film for 30-60 minutes"
        ]
      },
      {
        title: "Stretch and cook the noodles",
        items: [
          "Bring 2 litres of water to the boil",
          "Stretch the noodles by holding each end firmly and swinging up and down",
          "Drop the noodles into the boiling water",
          "Lift the noodles out after 3-5 min, or when they float to the surface"
        ]
      }
    ]
  },
  {
    id: "pad-kra-pao",
    title: "Pad Kra Pao",
    emoji: "🌶️",
    category: "Asian",
    serves: "4",
    url: "https://duffau.github.io/recipes/pad-kra-pao/",
    ingredients: [
      {
        items: [
          "400 g ground pork",
          "1 bunch Thai basil or regular basil",
          "6-8 garlic cloves, peeled",
          "1-2 Thai chilies (use a milder chili or red bell pepper for less heat)",
          "1 shallot or 1/4 red onion",
          "2 tsp sugar",
          "1 tbsp soy sauce",
          "2 tbsp fish sauce",
          "2 tsp oyster sauce",
          "2 tsp dark soy sauce (optional – mostly for colour)"
        ]
      }
    ],
    steps: [
      {
        title: "Prep the vegetables",
        items: [
          "Roughly chop the garlic, chili and onion",
          "Put the garlic, chili and onion in a mini chopper or mortar",
          "Add 2 tsp sugar",
          "Chop or pound the aromatics to a fine paste"
        ]
      },
      {
        title: "Prep the sauce",
        items: ["Mix the soy sauce, fish sauce and oyster sauce"]
      },
      {
        title: "Prep the basil",
        items: ["Rinse and pick a handful of basil leaves"]
      },
      {
        title: "Cook",
        items: [
          "Heat 3 tbsp neutral oil in a sauté pan or wok",
          "Fry the aromatic paste for a couple of minutes over medium-high heat (7 out of 9), until the sharp onion smell fades.",
          "Add the ground pork",
          "Add a pinch of salt",
          "Fry the pork until it is 1 minute from cooked through",
          "Add the sauce mixture",
          "Stir",
          "Add a handful of basil leaves",
          "Let the leaves wilt while stirring",
          "Serve with rice and a fried egg on top"
        ]
      }
    ]
  },
  {
    id: "butter-chicken",
    title: "Butter Chicken",
    emoji: "🍛",
    category: "Asian",
    url: "https://duffau.github.io/recipes/butter-chicken",
    credits: [
      "Matty Matheson – Simple Butter Chicken (Vice)",
      "Matty Matheson’s Finger Lickin’ Butter Chicken (Munchies, YouTube)"
    ],
    ingredients: [
      {
        items: [
          "6 tbsp olive oil",
          "5 garlic cloves",
          "2 bird’s eye chilies",
          "2 long red chilies",
          "2 medium onions, roughly chopped",
          "10 cm ginger, peeled",
          "125 ml ghee",
          "3 tbsp tomato paste",
          "3 tbsp turmeric",
          "2 tbsp chili powder",
          "2 tbsp garam masala",
          "2 tbsp ground coriander",
          "2 tbsp ground cumin",
          "785 g tomato passata",
          "1 tbsp dried fenugreek leaves",
          "4 boneless, skinless chicken breasts, cut into 2.5 cm cubes (about 1 kg)",
          "500 ml heavy cream",
          "115 g butter",
          "Fresh cilantro",
          "Cooked jasmine rice, to serve"
        ]
      }
    ],
    steps: [
      {
        title: "Prep",
        items: ["Put the olive oil, garlic, chilies, onions and ginger in a blender and purée until smooth."]
      },
      {
        title: "Butter chicken sauce",
        items: [
          "Heat the ghee in a large cast-iron pot over medium-high heat (7 out of 9).",
          "Add the onion purée and cook until the mixture darkens slightly and softens, about 15 minutes.",
          "Add the turmeric, chili powder, garam masala, coriander and cumin",
          "Add the tomato paste and sauté for 5 minutes, or until dark and sticky.",
          "Add 375 ml water and scrape up the browned bits from the bottom of the pot.",
          "Stir in the passata and fenugreek leaves and turn the heat up to high. Bring to the boil, then lower the heat to keep it at a simmer.",
          "Cover and cook, stirring occasionally, until thick, about 1 hour.",
          "Add the chicken and cook until it is done, about 15 minutes more.",
          "Add the cream and butter and stir.",
          "Season with salt and serve garnished with fresh cilantro, alongside steamed jasmine rice."
        ]
      }
    ]
  },
  {
    id: "japansk-karry",
    title: "Japanese Curry",
    emoji: "🍛",
    category: "Asian",
    serves: "4",
    url: "https://duffau.github.io/recipes/japansk-karry",
    credits: ["Kenji Lopez-Alt – Japanese Curry (Kare Raisu), YouTube"],
    ingredients: [
      {
        items: [
          "4 tbsp butter or oil",
          "450 g chicken breast, cut into ~4 cm pieces",
          "1/2 large onion, cut into ~1.5 cm slices",
          "3-4 garlic cloves, finely chopped",
          "1 cm fresh ginger, finely chopped",
          "2-3 tbsp Japanese curry powder (S&B), massaman curry powder or another yellow curry powder",
          "4 tbsp flour",
          "1 litre chicken stock or water",
          "1 large potato, peeled and cut into ~4 cm pieces",
          "1 large carrot, peeled and cut into ~4 cm pieces",
          "1 tbsp honey",
          "1 dl raisins",
          "2.5 dl (frozen) green peas",
          "Salt",
          "Freshly ground black or white pepper"
        ]
      },
      {
        title: "To serve",
        items: [
          "Steamed white rice",
          "Thinly sliced spring onions",
          "Pickled daikon or eggplant"
        ]
      }
    ],
    steps: [
      {
        title: "Prep",
        items: [
          "Cut the chicken into large chunks (~4 cm)",
          "Slice the onion into 1.5 cm slices",
          "Finely chop the garlic and ginger",
          "Peel the potato and carrot and cut into large chunks (~4 cm)",
          "Measure out the curry powder, flour, raisins and peas so they’re ready"
        ]
      },
      {
        title: "Sauce",
        items: [
          "Heat the butter/oil over high heat until it just starts to smoke. Turn down to medium-high.",
          "Fry the chicken, stirring, until lightly browned (~3 min)",
          "Add the onion, season with salt and pepper, and cook until the onions are soft (~3 min)",
          "Add the garlic and ginger and fry briefly until fragrant (~30 sec)",
          "Add the curry powder and toast lightly (~30 sec)",
          "Add the flour and stir well until all of it is absorbed (~30 sec)",
          "Pour in the stock/water and stir to dissolve the flour",
          "Add the potatoes, carrot, honey and raisins",
          "Bring to the boil, turn down and simmer gently under a lid until the vegetables are tender but not falling apart (~10 min)",
          "Season to taste with salt, pepper and a little more honey if needed",
          "Stir in the peas at the end"
        ]
      },
      {
        title: "Cook the rice",
        items: [
          "Rinse the rice well in cold water",
          "Cook the rice according to the packet (typically 1 part rice to 1.2-1.5 parts water)",
          "Keep the rice warm until serving"
        ]
      },
      {
        title: "Bring it together",
        items: [
          "Serve the curry sauce hot over a portion of steamed rice",
          "Sprinkle with thinly sliced garlic chives or spring onions",
          "Serve with Japanese pickles (pickled daikon or eggplant)"
        ]
      }
    ]
  },
  {
    id: "smash-burger",
    title: "Smash Burger",
    emoji: "🍔",
    category: "Sandwiches",
    url: "https://duffau.github.io/recipes/burger/",
    intro: [
      "The most important part of a burger is the patty. No amount of condiments can make up for a bad patty. The burger is the ultimate comfort food and should be an umami bomb, set against a backdrop of mild, well-balanced flavours.",
      "The quality of the meat, the cut and the fat percentage have a big influence on how much the beef flavour comes through. Use chuck as the main component (in Denmark, bovklump or tykkam are the closest cuts) and a very fatty piece of brisket to bring the fat up to at least 20%. Avoid gas-packed supermarket beef – the fat percentage is too low and the packaging makes the meat tougher.",
      "The smash technique maximises the crust: a ball of ground beef is pressed out onto a very hot cooking surface with a sturdy metal spatula, giving optimal contact between the meat and the surface.",
      "The special sauce is what ties the whole burger together. Its most important ingredient (besides mayo) is the adobo sauce from a can of chipotle chilies."
    ],
    ingredients: [
      {
        title: "Beef patties",
        items: [
          "1000 g chuck (bovklump/tykkam)",
          "500 g brisket",
          "Coarse salt",
          "Pepper"
        ]
      },
      {
        title: "Special sauce",
        items: [
          "120 ml mayonnaise",
          "30 ml ketchup",
          "15 ml finely grated onion",
          "15 ml pickle juice (preferably dill)",
          "10 ml adobo sauce from a can of chipotle chilies",
          "0.75 g celery salt",
          "0.75 g coarse salt"
        ]
      },
      {
        title: "Equipment",
        items: [
          "Meat grinder with a 6 mm plate",
          "Charcoal or gas grill",
          "Cast-iron griddle plate for the grill",
          "Offset metal spatula, min. 11 cm wide. Not flexible."
        ]
      }
    ],
    steps: [
      {
        title: "Beef patties",
        items: [
          "Trim all the fat from the brisket.",
          "Trim all the fat from the chuck.",
          "Weigh out meat and fat so the mix is 20-25% fat. Save the leftover meat.",
          "Cut the meat and fat into 2-3 cm cubes and spread them out on a baking tray.",
          "Put the meat and fat cubes in the freezer for 30-60 minutes, until the surface is frozen.",
          "Grind the meat and fat cubes twice through the 6 mm plate.",
          "Form the mince into 80-90 g balls. Pick a size and be consistent.",
          "Refrigerate the balls until needed."
        ]
      },
      {
        title: "Special sauce",
        items: ["Stir all the ingredients together"]
      }
    ]
  },
  {
    id: "croque-monsieur",
    title: "Croque Monsieur",
    emoji: "🥪",
    category: "Sandwiches",
    serves: "3-4",
    url: "https://duffau.github.io/recipes/croque-monsieur/",
    ingredients: [
      {
        items: [
          "8 thick slices of white sandwich bread",
          "200 g firm cheese (Emmental, Gruyère, Cheddar or similar)",
          "150 g cooked ham",
          "60 g flour",
          "60 g butter",
          "300-400 ml milk (cold)",
          "Nutmeg",
          "Black pepper"
        ]
      }
    ],
    steps: [
      {
        title: "Prep",
        items: [
          "Grate the cheese on a coarse grater",
          "Cut the ham into pieces that match the size of the bread",
          "Weigh out the flour and butter for the béchamel"
        ]
      },
      {
        title: "Béchamel – the roux",
        items: [
          "Melt the butter in a pot at 6 out of 9",
          "Add all the flour",
          "Whisk",
          "Cook the flour and butter mixture for 5 min, stirring",
          "Add all the cold milk",
          "Whisk out all the lumps",
          "Bring gently to the boil",
          "Simmer until it reaches the thickness you want",
          "Take the pot off the heat"
        ]
      },
      {
        title: "Béchamel – seasoning",
        items: [
          "Add salt, grated nutmeg and pepper",
          "Taste and adjust"
        ]
      },
      {
        title: "Assemble the croque monsieur",
        items: [
          "Preheat the oven to 220 °C with the grill on",
          "Lay the bread out on an oven rack",
          "Put the ham on the bread slices",
          "Spread béchamel over the ham",
          "Sprinkle the grated cheese over the top",
          "Put a baking tray lined with foil at the bottom of the oven to catch any cheese",
          "Bake for ~5 minutes, two-thirds of the way up the oven, at 220 °C with the grill on"
        ]
      }
    ]
  },
  {
    id: "hot-sauce",
    title: "Hot Sauce",
    emoji: "🌶️",
    category: "Sauces",
    url: "https://duffau.github.io/recipes/hot-sauce/",
    ingredients: [
      {
        items: [
          "200 g chilies",
          "300 ml vinegar",
          "300 g sugar",
          "300 ml water",
          "2 tbsp cornstarch",
          "Salt"
        ]
      }
    ],
    steps: [
      {
        items: [
          "Remove the stems from the chilies and halve them",
          "Bring the brine (vinegar, sugar and water) to the boil",
          "Add the chilies to the hot brine",
          "Let them steep for 5-10 minutes",
          "Blend until completely smooth",
          "Strain",
          "Return to the pot",
          "Whisk the cornstarch into a little of the sauce in a bowl",
          "Add it to the sauce in the pot",
          "Bring to the boil",
          "Let it cool"
        ]
      }
    ]
  },
  {
    id: "salsa-verde",
    title: "Salsa Verde",
    emoji: "🫑",
    category: "Sauces",
    url: "https://duffau.github.io/recipes/salsa-verde/",
    ingredients: [
      {
        items: [
          "Canned green tomatillos (can be replaced with tomatoes)",
          "Green bell pepper",
          "Jalapeños",
          "Onion",
          "Garlic",
          "Cilantro",
          "Salt"
        ]
      }
    ],
    steps: [
      {
        title: "Prep",
        items: [
          "Remove the seeds and core from the green bell pepper",
          "Peel and halve the onion",
          "Leave the skin on the garlic"
        ]
      },
      {
        title: "Cook",
        items: [
          "Spread the vegetables out in an even layer on a baking tray",
          "Roast all the vegetables under the oven grill for about 10 minutes, until blackened on the surface and soft",
          "Peel the garlic",
          "Put everything in a blender",
          "Add salt",
          "Add cilantro",
          "Blend",
          "Pour into a smoking-hot pan with a little neutral oil",
          "Let it simmer for 1 min",
          "Pour off",
          "Taste and adjust"
        ]
      }
    ]
  },
  {
    id: "asiatiske-basis-saucer",
    title: "Basic Asian Sauces",
    emoji: "🥢",
    category: "Sauces",
    url: "https://duffau.github.io/recipes/asiatiske-basis-saucer",
    intro: [
      "These Asian sauces are an attempt to collect some of the fundamental building blocks of Chinese and Southeast Asian cooking. The hope is that they can serve as a foundation for exploring Asian flavours and techniques.",
      "All aromatics such as onion, garlic, ginger, chili and spices are left out to give a flexible base. The sauces work as they are, but it’s natural to add aromatics and adjust the ratios to create new variations.",
      "Stir fry: an important detail with soy-based sauces is that they should come into direct contact with the hot pan or wok. At high heat, spontaneous caramelisation and Maillard reactions develop deeper, more complex flavours. So make sure the pan is hot enough before adding the sauce.",
      "All amounts are ratios (parts)."
    ],
    ingredients: [
      {
        title: "Chinese stir-fry sauce",
        items: ["3 parts light soy sauce", "2 parts oyster sauce", "1 part dark soy sauce"],
        note: "Stir fries of all kinds of meat and vegetables. Works well for fried rice and noodles. Feel free to add Shaoxing wine, sugar and sesame oil. Leave out the dark soy for a very basic stir-fry sauce."
      },
      {
        title: "Thai stir-fry sauce",
        items: ["3 parts fish sauce", "2 parts light soy sauce", "1 part sesame oil"],
        note: "Stir fries of all kinds of meat and vegetables. Feel free to add oyster sauce, sugar and/or tamarind paste, which is the base of the classic Thai fried noodle dish “Pad Thai”."
      },
      {
        title: "Pad Kra Pao stir-fry sauce",
        items: ["2 parts fish sauce", "1 part light soy sauce", "1 part oyster sauce", "1 part sugar", "0.5 part dark soy sauce"],
        note: "Inspired by the Thai dish “Pad Kra Pao”, where ground pork is glazed in the sauce and holy basil is the key aromatic. Works with vegetables, all kinds of meat and other aromatics like garlic and ginger."
      },
      {
        title: "Chinese “red braised pork” sauce",
        items: ["5 parts Shaoxing wine", "2 parts sugar (caramelised)", "2 parts light soy sauce", "1 part dark soy sauce"],
        note: "A glaze for pork belly. Toss bite-sized pieces of pork belly in hot caramel. Add the sauces. Braise until tender."
      },
      {
        title: "Barbecue",
        items: ["2 parts ketchup", "1 part kecap manis", "1 part brown sugar"],
        note: "Barbecued chicken and pork, e.g. as a glaze for spare ribs."
      },
      {
        title: "Gyoza dipping sauce",
        items: ["3 parts light soy sauce", "3 parts Chinese black vinegar", "1 part sesame oil"],
        note: "A tangy sauce for dipping gyoza, spring rolls, dumplings and the like."
      },
      {
        title: "Thai dipping sauce (Nam Jim Jaew base)",
        items: ["2 parts tamarind paste", "1 part fish sauce", "1 part lime juice", "1 part sugar"],
        note: "A dip for BBQ chicken and grilled beef and pork."
      },
      {
        title: "Soy-based vinaigrette",
        items: ["5 parts rice vinegar", "3 parts light soy sauce", "3 parts sugar", "2 parts sesame oil"],
        note: "A dressing for salads, e.g. smashed cucumber salad."
      },
      {
        title: "Fish-sauce vinaigrette (Nuoc Cham base)",
        items: ["2 parts water", "2 parts fish sauce", "1 part sugar", "1 part rice vinegar", "1 part lime juice"],
        note: "A dip for Vietnamese summer rolls and spring rolls, or a dressing for rice noodle salad."
      }
    ],
    steps: []
  },
  {
    id: "pizza-dej",
    title: "Neapolitan Pizza Dough",
    emoji: "🍕",
    category: "Baking",
    serves: "4",
    url: "https://duffau.github.io/recipes/pizza-dej/",
    intro: [
      "This dough has 65% hydration, which is at the low end for a Neapolitan pizza, but it makes the dough easier to work with and shape."
    ],
    ingredients: [
      {
        items: [
          "570 g Tipo “00” wheat flour",
          "8 g dry yeast",
          "17 g salt",
          "370 g water at 24 °C"
        ]
      }
    ],
    steps: [
      {
        items: [
          "Combine the ingredients in a stand mixer",
          "Knead for 15-20 minutes until it passes the windowpane test",
          "Shape into a ball",
          "Let it rise at room temperature for ~10 hours",
          "Refrigerate",
          "Shape into 4 balls",
          "Refrigerate until ready to use"
        ]
      }
    ]
  },
  {
    id: "scones",
    title: "Scones",
    emoji: "🧁",
    category: "Baking",
    serves: "6-8 scones",
    url: "https://duffau.github.io/recipes/scones/",
    credits: ["Jamie Oliver – How To Make Scones"],
    ingredients: [
      {
        items: [
          "300 g all-purpose flour",
          "150 g butter (unsalted)",
          "1 tsp (~2 g) salt",
          "4 tsp (~10 g) baking powder",
          "4 tsp (~15 g) sugar",
          "225 g milk"
        ]
      }
    ],
    steps: [
      {
        title: "Make the dough",
        items: [
          "Mix the dry ingredients",
          "Cut the cold butter into cubes",
          "Rub the butter cubes into the flour mixture",
          "Add the milk and press together until it just forms a cohesive dough",
          "Let it rest in the fridge for 30 minutes"
        ]
      },
      {
        title: "Shape the scones",
        items: [
          "Roll out to 2-3 cm thick",
          "Cut out the scones",
          "Preferably don’t reuse the leftover dough after cutting (it will be less flaky)",
          "Brush with melted butter, olive oil, egg wash or milk",
          "Bake at 180 °C for 15 minutes"
        ]
      }
    ]
  }
];

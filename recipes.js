// Recipe data. Add a new object to this array to add a recipe to the site.
// All recipes are by Christian Duffau-Rasmussen, from https://duffau.github.io/recipes/
//
// `ingredients` and `steps` are lists of groups: { title?, items, note? }.
// `serves`, `credits` (the original inspiration) and `intro` are optional.
const AUTHOR = {
  name: "Christian Duffau-Rasmussen",
  url: "https://duffau.github.io/recipes/"
};

const RECIPES = [
  {
    id: "smashed-cucumber",
    title: "‘Smashed Cucumber’ Salat",
    emoji: "🥒",
    category: "Salater",
    serves: "4",
    url: "https://duffau.github.io/recipes/smashed-cucumber",
    ingredients: [
      {
        items: [
          "2 stk agurk (~500g)",
          "2.5 tsk. sukker",
          "2 tsk. sesamolie",
          "3 tsk. lys sojasovs",
          "1.5 spsk. risvineddike",
          "2-4 fed hvidløg (finthakket)",
          "1-2 tsk. chilolie (valgfrit)",
          "2 tsk. ristede sesamfrø",
          "en lille håndfuld hakket koriander"
        ]
      }
    ],
    steps: [
      {
        title: "Dressing",
        items: [
          "Bland sukker, sesamolie, sojasovs og risvineddike i en stor skål",
          "Pisk til sukker er opløst"
        ]
      },
      {
        title: "Agurk",
        items: [
          "Hak hvidløg fint",
          "Knus agurker med bagsiden af en tung kniv eller en kødhammer",
          "Hak agurk i ujævne stykker af 2-5 cm",
          "Placer agurk og hvidløg i stor skål med dressing",
          "Vend agurk i dressing"
        ]
      },
      {
        title: "Anret",
        items: [
          "Anret knuste agurker på et fad",
          "Drys ristede sesamfrø ud over"
        ]
      }
    ]
  },
  {
    id: "romaine-salat",
    title: "Romaine Salat i Hvidløg-sojasauce",
    emoji: "🥬",
    category: "Salater",
    url: "https://duffau.github.io/recipes/romaine-salat-i-hvidløgssauce",
    credits: ["Kenji Lopez-Alt – Too Much Romaine? Try This Chinese Recipe (Kenji’s Cooking Show)"],
    ingredients: [
      {
        items: [
          "1 stk romaine salathoved eller 3 stk. hjertesalathoveder",
          "4-5 fed hvidløg",
          "2 spsk. Østerssauce",
          "1 spsk. Sojasauce"
        ]
      }
    ],
    steps: [
      {
        title: "Prep.",
        items: [
          "Del salat i hele blade og skyl",
          "Hak hvidløg fint",
          "Sæt en gryde, sauterpande eller wok over med 1% salt/vand opløsning"
        ]
      },
      {
        title: "Sauce",
        items: [
          "Varm olie op i en lille gryde",
          "Steg hvidløg ved middelhøj varme (7 ud af 9) i 3-4 min (lad ikke brune)",
          "Tilsæt sojasauce og østerssauce",
          "Tilsæt 3 spsk. saltet vand"
        ]
      },
      {
        title: "Blancher salat",
        items: ["Lad de hele salatblade tilberede i 20-30 sek. i kogende vand"]
      },
      {
        title: "Anretning",
        items: [
          "Tag salat op af kogende vand",
          "Anret på fad",
          "Hæld soja-hvidløgsauce ud over salat"
        ]
      }
    ]
  },
  {
    id: "spidskaal-parmesancreme",
    title: "Spidskål med Parmesancreme",
    emoji: "🥬",
    category: "Salater",
    serves: "3-4",
    url: "https://duffau.github.io/recipes/spidskaal-med-parmesan-creme",
    ingredients: [
      {
        items: [
          "1 Spidskål",
          "200g Cremefraiche 18%",
          "50g Parmesan",
          "1 Citron (uden overfladebehandling)",
          "3 spsk Olivenolie",
          "Salt",
          "Sort peber",
          "Persille"
        ]
      }
    ],
    steps: [
      {
        title: "Prep. spidskål",
        items: [
          "Fjern yderste blade",
          "Skær nederste af stilken fra",
          "Skær spidskål i 6-8 både"
        ]
      },
      {
        title: "Prep. parmesancreme",
        items: [
          "Riv parmesan fint",
          "Riv citronskal fra en 1/2 citron",
          "Rør creme fraiche sammen med parmesan, citronskal, 1 spsk olivenolie og saft fra 1/2 citron",
          "Smag til med salt, peber og citronsaft"
        ]
      },
      {
        title: "Bag spidskål",
        items: [
          "Læg på bageplade",
          "Smør ind i 2 spsk olivenolie",
          "Bag ved 200 grader i 30-45 minutter til mør"
        ]
      },
      {
        title: "Anret",
        items: [
          "Smør parmesancreme ud på et fad",
          "Læg bagte spidskål ovenpå",
          "Drys revet citronskal og hakket persille ud over"
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
          "400g Hakket svinekød min. 12% fedt",
          "400g Hakket oksekød min. 12% fedt",
          "2 Store løg",
          "2 Stænger Bladselleri",
          "2 Store Gulerødder",
          "6 fed Hvidløg",
          "2 Dåser (800g) Flåede tomater",
          "2 glas Hvidvin (~30 cl)",
          "1 stængel frisk Rosmarin",
          "4 stængler frisk Timian",
          "4 Laurbærblade (tørret)",
          "2 Stk Stjerneanis",
          "100 g Parmesan",
          "Salt",
          "Peber",
          "Sukker",
          "Eddike"
        ]
      }
    ],
    steps: [
      {
        title: "Prep.",
        items: [
          "Med et groft rivejern, riv løg, bladselleri og gulerod",
          "Hak hvidløg fint",
          "Rør svinekød og oksekød sammen",
          "Lav 10-12 klumper kødfars for nemmere bruning",
          "Riv Parmesan fint"
        ]
      },
      {
        title: "Sauce",
        items: [
          "Varm 8 spsk olivenolie op i en gryde som kan gå i ovnen med låg",
          "Steg små klumper af kødfars af på middel varme (6 ud af 9). Behøver ikke blive gennemstegt, men bør brune godt på mindst en side. Tilsæt salt og peber til hvert batch.",
          "Tag stegt fars op i en skål",
          "Steg hakkede grøntsager i olien ved middel varme (6 ud af 9). Tilsæt salt og peber. Steg til løg er gennemsigtige og grøntsagerne er møre.",
          "Hæld hvidvin på, og skrab brændte kødrester fri fra bunden af panden",
          "Hæld flåede tomater på og mos dem med en ske",
          "Kom kød tilbage i gryden",
          "Tilsæt aromater: rosmarin, timian, laurbærblade og stjerneanis",
          "Sæt gryde med låg i ovnen ved 150-160 grader over/under varme",
          "Lad simre i 30 min til 5 timer – desto længere desto bedre",
          "Tag ud af ovnen",
          "Smag til med salt, sukker og god eddike"
        ]
      },
      {
        title: "Kog pasta",
        items: [
          "Sæt vand over med 1% salt. Dvs. 1 liter vand 10 g salt.",
          "Kog pastaen 2 minutter mindre end hvad der står på pakken",
          "Tag 100-200 ml pastakogevand fra",
          "Dræn pasta"
        ]
      },
      {
        title: "Samle retten",
        items: [
          "Overfør pastaen til en stor sauterpande",
          "Vend pastaen rundt i saucen i sauterpanden",
          "Tilsæt 4-6 spsk. pastavand for at jævne saucen",
          "Lad sauce og pasta simre i 1-2 min under omrøring",
          "Er saucen for tør tilsæt mere pastavand",
          "Sluk for blusset",
          "Tilsæt revet parmesan og rør til den er smeltet ud i saucen",
          "Tilsæt 2-3 spsk olivenolie og rør rundt",
          "Server med revet parmesan ovenpå"
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
      "Det bedste resultat opnås ved at bruge en morter. At knuse basilikumbladene udløser flere aromastoffer, da langt flere cellevægge bliver ødelagt, sammenlignet med en blendet version."
    ],
    ingredients: [
      {
        items: [
          "400g Linguine/Bucatini/Spaghettoni/Spaghetti",
          "1 plante Basilikum 10-15 cm",
          "1 fed hvidløg afskallet",
          "40 g Pinjekerner",
          "50 g Parmesan",
          "Ekstra Jomfru Olivenolie",
          "Groft salt",
          "Sort peber"
        ]
      }
    ],
    steps: [
      {
        title: "Prep.",
        items: [
          "Skyl og pluk basilikumblade",
          "Afskal hvidløg og hak groft",
          "Riv parmesan meget fint"
        ]
      },
      {
        title: "Pesto i morter",
        items: [
          "Kom basilikumblade og lidt groft salt i en morter",
          "Knus basilikumblade til en mos",
          "Tilsæt og mos hvidløg",
          "Tilsæt og mos pinjekerner",
          "Tilsæt fint revet Parmesan",
          "Tilsæt olivenolie og rør homogen",
          "Konsistensen skal være lind",
          "Smag til med sort peber"
        ]
      },
      {
        title: "Kog pasta",
        items: [
          "Sæt vand over med 1% salt. Dvs. 1 liter vand 10 g salt.",
          "Kog pastaen 2 minutter mindre end hvad der står på pakken",
          "Tag 100-200 ml pastakogevand fra",
          "Dræn pasta"
        ]
      },
      {
        title: "Samle retten",
        items: [
          "Kom pesto i en stor plastikskål (plastik taber mindre varme)",
          "Vend pastaen rundt i skålen",
          "Tilsæt 3 spsk. pastavand for at skabe en jævnet pestosauce",
          "Rør rundt indtil saucen samler sig",
          "Er saucen for tør tilsæt mere pastavand",
          "Smag til med salt, peber og evt. citronsaft",
          "Server med revet parmesan ovenpå"
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
          "200g Hakket svinekød min. 12% fedt",
          "200g Fersk Salsiccia naturel pølse (kan erstattes med hakket svinekød)",
          "1 Stort løg",
          "1 Stang Bladselleri",
          "1 Stor gulerod",
          "3 fed hvidløg",
          "1 Citron",
          "1 stængel frisk Rosmarin",
          "1 glas hvidvin (~15 cl)",
          "50 g Parmesan",
          "125 ml Piskefløde"
        ]
      }
    ],
    steps: [
      {
        title: "Prep.",
        items: [
          "Med et fint rivejern, riv skrællen af en halv citron",
          "Hak løg, bladselleri, gulerod og hvidløg i foodprocessor eller i små tern med kniv",
          "Hak rosmarin helt fint",
          "Riv parmesan på fint rivejern",
          "Rør svinekød og fars fra Salsiccia sammen med sort peber, rosmarin og citronskal"
        ]
      },
      {
        title: "Sauce",
        items: [
          "Varm 4 spsk olivenolie op i sauterpande",
          "Steg kødfars af på middel varme (6 ud af 9) i små “klumper”. Behøver ikke blive gennemstegt, men bør brune godt på mindst en side. Tilsæt salt til hvert batch.",
          "Tag stegt fars op i en skål",
          "Steg hakkede grøntsager i olien ved middel varme (6 ud af 9). Tilsæt salt og peber. Steg til løg er gennemsigtige og grøntsagerne er møre.",
          "Hæld hvidvin på, og skrab brændte kødrester fri fra bunden af panden",
          "Hæld piskefløde på",
          "Lad simre i 10-30 min"
        ]
      },
      {
        title: "Kog pasta",
        items: [
          "Sæt vand over med 1% salt. Dvs. 1 liter vand 10 g salt.",
          "Kog pastaen 2 minutter mindre end hvad der står på pakken",
          "Tag 100-200 ml pastakogevand fra",
          "Dræn pasta"
        ]
      },
      {
        title: "Samle retten",
        items: [
          "Vend pastaen rundt i saucen i sauterpanden",
          "Tilsæt eventuelt lidt fløde",
          "Tilsæt 2-3 spsk. pastavand for at jævne saucen",
          "Lad sauce og pasta simre i 1-2 min under omrøring",
          "Er saucen for tør tilsæt mere pastavand",
          "Sluk for blusset",
          "Tilsæt revet parmesan og rør til den er smeltet ud i saucen",
          "Tilsæt saft fra en halv citron",
          "Smag til med salt, peber og citron",
          "Server med revet parmesan ovenpå"
        ]
      }
    ]
  },
  {
    id: "pasta-alla-norcina",
    title: "Pasta Alla Norcina",
    emoji: "🍄",
    category: "Pasta",
    serves: "6",
    url: "https://duffau.github.io/recipes/pasta-alla-norcina/",
    credits: ["America’s Test Kitchen – Pasta alla Norcina"],
    ingredients: [
      {
        items: [
          "230g Hakket svinekød (20-30% fedt hvis muligt)",
          "450g Orecchiette pasta (kan substitueres med Conchiglie eller Mezzi Rigatoni)",
          "230g Brune champignon (eller anden svamp)",
          "180g Piskefløde",
          "120ml Hvidvin",
          "45g Pecorino romano",
          "7 tsk Olivenolie",
          "3 fed Hvidløg",
          "3 spsk Frisk Persille",
          "1,25 tsk Frisk rosmarin",
          "1 spsk Citronsaft",
          "1/8 tsk Natron",
          "Salt",
          "Sort peber"
        ]
      }
    ],
    steps: [
      {
        title: "Svinefars",
        items: [
          "Put 4 spsk vand med 1 tsk salt og 1 tsk bagepulver. Opløs i vandet.",
          "Bland svinekødet i salt/bagepulver-opløsningen.",
          "Lad hvile i 10 min.",
          "Tilsæt fint hakket rosmarin, fint revet eller presset hvidløg og fint revet muskatnød. Rør sammen til godt homogen.",
          "Lav en tyk hakkebøf af farsen. Varm en pande med lidt olie i bunden og steg farsen hårdt på begge sider. Der skal komme godt med farve uden at det indre bliver tilberedt.",
          "Når stegt, sæt op på skærebræt og hak i små stykker. Sæt til side i en skål med 1 dl fløde, så trækker smagen ud i fløden."
        ],
        note: "Bagepulver er en blanding af natron (natriumbikarbonat), som er basisk, og en syre. Basen højner pH-værdien i kødet, som gør at det holder bedre på fugt og bruner hurtigere."
      },
      {
        title: "Sauce og pasta",
        items: [
          "Sæt pastavand over. 1% saltopløsning (1.5 tsk per liter) er passende.",
          "Put champignon op i en blender/minihakker og hak i små stykker.",
          "Sæt champignon i en sautépande (med høje sider) med vand til det dækker bunden.",
          "Lad koge til vandet er fordampet. Dette bryder strukturen ned i svampene, så de smider vand og mister deres evne til at suge fedtstof.",
          "Tilsæt olivenolie i sautépanden, og sautér champignon til de er let brunede.",
          "Sæt pasta over.",
          "Når de hakkede champignon har fået farve, tilsæt et glas hvidvin og lad koge helt ind.",
          "Tilsæt frisk hakket rosmarin og fint hakket hvidløg.",
          "Hæld fløde + kød op i.",
          "Lad simre til kødet er tilberedt.",
          "Skru ned for varmen. Tilsæt en stor håndfuld revet Pecorino Romano.",
          "Smag til med citronsaft, salt og peber.",
          "Dræn pasta og kom op i sautépanden med sovsen, og sørg for den er godt coated."
        ]
      }
    ]
  },
  {
    id: "pasta-kaernemaelk-mynte-pistacie",
    title: "Pasta m. Kærnemælk, mynte og pistacienødder",
    emoji: "🫛",
    category: "Pasta",
    serves: "4",
    url: "https://duffau.github.io/recipes/pasta-kærnemælk-mynte-pistacie",
    credits: ["Bon Appétit – Orecchiette with Buttermilk, Peas and Pistachios"],
    ingredients: [
      {
        items: [
          "30 g pistacienødder",
          "400 g pasta",
          "Salt",
          "400 g ærter (friske eller frosne)",
          "3 spsk. smør",
          "2 spsk. ekstra jomfru olivenolie, plus mere til dryp",
          "2 mellemstore porrer, kun de hvide og lysegrønne dele, skåret i halve på langs, tyndt skåret",
          "3 hvidløgsfed, tyndt skåret",
          "½ tsk. knuste røde peberflager",
          "1 lille bundt mynte, opdelt",
          "200 ml kærnemælk",
          "100 g Parmesan, fint revet, plus mere til servering",
          "Friskkværnet sort peber",
          "2 spsk. frisk citronsaft"
        ]
      }
    ],
    steps: [
      {
        title: "Prep.",
        items: [
          "Forvarm ovnen til 175°C.",
          "Rist pistacienødderne på en bageplade, vend én gang, indtil de er gyldenbrune, 5–8 minutter.",
          "Lad pistacienødderne afkøle, og knus dem derefter groft med et målebæger eller et glas.",
          "Rens porrer, halver på langs og skær i tynde skiver"
        ]
      },
      {
        title: "Kog pasta og ærter",
        items: [
          "Sæt vand over med 1% salt. Dvs. 1 liter vand 10 g salt.",
          "Kog pastaen 2 minutter mindre end hvad der står på pakken",
          "Tilsæt ærter når der mangler 2 minutter",
          "Tag 100-200 ml pastakogevand fra",
          "Dræn pasta og ærter"
        ]
      },
      {
        title: "Kærnemælkssauce",
        items: [
          "Opvarm smør og 2 spsk. olie i en tykbundet gryde over medium varme (6 ud af 9).",
          "Steg porrer, hvidløg, røde peberflager og 3 myntegrene under omrøring, indtil porrerne er bløde, men ikke brunede, 6–8 minutter.",
          "Krydr med salt.",
          "Tilsæt kærnemælk; bring til simring.",
          "Tag mynten op og kassér"
        ]
      },
      {
        title: "Samle retten",
        items: [
          "Brug en hulske til at overføre pasta og ærter til porreblandingen.",
          "Tilsæt 85 g Parmesan.",
          "Kog under kraftig omrøring og tilsæt lidt pastavand hvis nødvendigt, indtil saucen er cremet og dækker pastaen, ca. 1 minut.",
          "Krydr med salt og peber.",
          "Fjern fra varmen; tilsæt citronsaft.",
          "Riv blade fra de resterende myntegrene, riv over pastaen og vend rundt.",
          "Fordel pastaen i skåle.",
          "Top med pistacienødder og Parmesan; dryp med olie."
        ]
      }
    ]
  },
  {
    id: "pasta-tomat-kikaerter",
    title: "Pasta m. Tomat og kikærter",
    emoji: "🍅",
    category: "Pasta",
    serves: "6",
    url: "https://duffau.github.io/recipes/pasta-tomat-kikærte",
    ingredients: [
      {
        items: [
          "600 g pasta",
          "800 g flåede tomater (fra dåse)",
          "400 g kikærter (forkogte på dåse)",
          "3-5 spsk. ekstra jomfru olivenolie",
          "1 mellemstort løg, fint hakket",
          "2 hvidløgsfed, fint hakket",
          "1 lille bundt persille",
          "1/4 tsk. revet citronskal (skal fra 1/2 citron)",
          "1 tsk. sukker",
          "Friskkværnet sort peber",
          "Salt"
        ]
      }
    ],
    steps: [
      {
        title: "Prep.",
        items: [
          "Hak løg og hvidløg fint",
          "Riv citronskal",
          "Hak persille fint",
          "Blend 1/3-1/2 af kikærterne med lidt kikærtevand",
          "Blend tomaterne med alt saft fra dåsen"
        ]
      },
      {
        title: "Tomatsauce",
        items: [
          "Opvarm 2 spsk. olie i sautépande over medium høj varme (7 ud af 9).",
          "Steg løg og hvidløg indtil løg er bløde og gennemsigtige, 3–5 minutter.",
          "Krydr med salt",
          "Tilsæt blendede tomater; bring til kogepunktet.",
          "Lad reducere med 25%-50%; 10-20 minutter",
          "Tilsæt blendede kikærter og hele kikærter",
          "Rør godt sammen",
          "Krydr med salt, peber og sukker"
        ]
      },
      {
        title: "Kog pasta",
        items: [
          "Sæt vand over med 1% salt. Dvs. 1 liter vand 10 g salt.",
          "Kog pastaen 2 minutter mindre end hvad der står på pakken",
          "Tag 100-200 ml pastakogevand fra",
          "Dræn pasta"
        ]
      },
      {
        title: "Samle retten",
        items: [
          "Overfør pasta til tomatsaucen.",
          "Tilsæt 2 spsk. olivenolie",
          "Kog under kraftig omrøring og tilsæt lidt pastavand hvis nødvendigt, indtil saucen er cremet og dækker pastaen, ca. 1 minut.",
          "Fjern fra varmen; tilsæt citronskal og persille.",
          "Server med parmesan og/eller gremolata"
        ]
      }
    ]
  },
  {
    id: "biang-biang",
    title: "Biang Biang Nudler",
    emoji: "🍜",
    category: "Asiatisk",
    serves: "7 nudler",
    url: "https://duffau.github.io/recipes/biang-biang/",
    ingredients: [
      {
        items: [
          "250 g Hvedemel (Almindeligt) – 100% bagerprocent",
          "130 g Vand – 52% bagerprocent",
          "3 g Fint salt – ~1% bagerprocent",
          "Solsikkeolie til at dække dejen"
        ]
      }
    ],
    steps: [
      {
        title: "Lav dej",
        items: [
          "Bland salt og mel",
          "Tilføj vand gradvist mens du blander i en ensrettet cirkulær bevægelse",
          "Ælt dejen let indtil den er ensartet",
          "Lad hvile dækket i 15-20 minutter for at lade dejen hydrere fuldt ud",
          "Ælt dejen i 5 minutter",
          "Lad hvile dækket i 10 minutter",
          "Rul dejen ud til en cylinder med en diameter på 2,5 cm",
          "Skær i 7 cylindre af 6,4 cm længde",
          "Rul hver af de 7 cylindre ud til rektangler på 5cm x 10cm x 1cm",
          "Dæk hvert rektangel med solsikkeolie",
          "Lad hvile dækket under husholdningsfilm i 30-60 minutter"
        ]
      },
      {
        title: "Stræk nudler og tilbered",
        items: [
          "Bring 2 l vand til kogepunktet",
          "Stræk nudler ved at holde et fast greb i hver ende og sving op og ned",
          "Dump nudler ned i kogende vand",
          "Tag nudler op efter 3-5 min eller når de flyder på overfladen"
        ]
      }
    ]
  },
  {
    id: "pad-kra-pao",
    title: "Pad Kra-Pao",
    emoji: "🌶️",
    category: "Asiatisk",
    serves: "4",
    url: "https://duffau.github.io/recipes/pad-kra-pao/",
    ingredients: [
      {
        items: [
          "400g Hakket Svinekød",
          "1 bundt Thai basilikum eller alm. Basilikum",
          "6-8 fed hvidløg afskallet",
          "1-2 Thai chili (substituer med mildere chili eller rød peberfrugt for mildere styrke)",
          "1 Skalotteløg eller 1/4 Rødløg",
          "2 tsk sukker",
          "1 spsk. Soyasauce",
          "2 spsk. Fiskesauce",
          "2 tsk. Østerssauce",
          "2 tsk. Mørk Soya (valgfri – mest for farven)"
        ]
      }
    ],
    steps: [
      {
        title: "Prep. grøntsager",
        items: [
          "Hak groft: hvidløg, chili og løg",
          "Kom hvidløg, chili og løg i en minihakker eller morter",
          "Tilsæt 2 tsk sukker",
          "Hak eller knus de aromatiske grøntsager til en fin mos"
        ]
      },
      {
        title: "Prep. sauce",
        items: ["Bland Soyasauce, Fiskesauce og Østerssauce"]
      },
      {
        title: "Prep. basilikum",
        items: ["Skyl og pluk en håndfuld basilikumblade"]
      },
      {
        title: "Tilbered",
        items: [
          "Varm 3 spsk. smagsneutral olie op i en sauterpande eller wok",
          "Steg aromatisk grøntsagsmos i et par minutter ved middel-høj varme (7 ud af 9). Steg indtil skarp løgduft aftager.",
          "Tilsæt hakket svin",
          "Tilsæt et nip salt",
          "Lad svinekød stege til det er 1 min fra gennemstegt",
          "Tilsæt sauceblanding",
          "Rør",
          "Tilsæt en håndfuld basilikumblade",
          "Lad bladene falde sammen under omrøring",
          "Server med ris og spejlæg på toppen"
        ]
      }
    ]
  },
  {
    id: "butter-chicken",
    title: "Butter Chicken",
    emoji: "🍛",
    category: "Asiatisk",
    url: "https://duffau.github.io/recipes/butter-chicken",
    credits: [
      "Matty Matheson – Simple Butter Chicken (Vice)",
      "Matty Matheson’s Finger Lickin’ Butter Chicken (Munchies, YouTube)"
    ],
    ingredients: [
      {
        items: [
          "6 spsk. olivenolie",
          "5 hvidløgsfed",
          "2 fugleøjnechilier",
          "2 lange røde chilier",
          "2 mellemstore løg, groft hakket",
          "10 cm ingefær, skrællet",
          "125 ml ghee",
          "3 spsk. tomatpuré",
          "3 spsk. gurkemeje",
          "2 spsk. chilipulver",
          "2 spsk. garam masala",
          "2 spsk. malet koriander",
          "2 spsk. malet spidskommen",
          "785 gram tomatpassata",
          "1 spsk. tørrede bukkehornsblade",
          "4 kyllingebryster uden ben og skind, skåret i 2,5 cm tern (omtrent 1 kilogram)",
          "500 ml piskefløde",
          "115 gram smør",
          "Frisk koriander",
          "Kogt jasminris, til servering"
        ]
      }
    ],
    steps: [
      {
        title: "Prep.",
        items: ["Placér olivenolie, hvidløg, chilier, løg og ingefær i en blender og purér til det er glat."]
      },
      {
        title: "Butter chicken sauce",
        items: [
          "Opvarm ghee i en stor støbejernsgryde over medium-høj varme (7 ud af 9).",
          "Tilføj løgpuréen og steg, indtil blandingen mørkner let og blødgør, ca. 15 minutter.",
          "Tilføj gurkemeje, chilipulver, garam masala, koriander og spidskommen",
          "Tilføj tomatpuré og sauter i 5 minutter, eller indtil det er mørkt og klistret.",
          "Tilsæt 375 ml vand. Skrab brunede stykker op fra bunden af gryden.",
          "Rør tomatpassata og bukkehornsblade i og skru op for varmen til høj. Bring til kogepunktet, reducer derefter varmen for at opretholde en simren.",
          "Dæk til og kog under lejlighedsvis omrøring, indtil det er tykt, ca. 1 time.",
          "Tilføj kyllingen og kog indtil kyllingen er tilberedt, ca. 15 minutter mere.",
          "Tilføj fløde og smør og rør.",
          "Krydr med salt og server pyntet med frisk koriander sammen med dampet jasminris."
        ]
      }
    ]
  },
  {
    id: "japansk-karry",
    title: "Japansk Karry",
    emoji: "🍛",
    category: "Asiatisk",
    serves: "4",
    url: "https://duffau.github.io/recipes/japansk-karry",
    credits: ["Kenji Lopez-Alt – Japanese Curry (Kare Raisu), YouTube"],
    ingredients: [
      {
        items: [
          "4 spsk. smør eller olie",
          "450 g kyllingebryst, skåret i stykker á ca. 4 cm",
          "1/2 stort løg, skåret i skiver á ca. 1,5 cm",
          "3-4 fed hvidløg, finthakket",
          "1 cm frisk ingefær, finthakket",
          "2-3 spsk. japansk karrypulver (S&B), masaman karrypulver eller anden gul karrypulver",
          "4 spsk. mel",
          "1 liter kyllingebouillon eller vand",
          "1 stor kartoffel, skrællet og skåret i stykker á ca. 4 cm",
          "1 stor gulerod, skrællet og skåret i stykker á ca. 4 cm",
          "1 spsk. honning",
          "1 dl rosiner",
          "2,5 dl (frosne) grønne ærter",
          "Salt",
          "Sort eller hvid peber, friskkværnet"
        ]
      },
      {
        title: "Til servering",
        items: [
          "Dampet hvid ris",
          "Fintskårne forårsløg",
          "Syltet daikon eller aubergine"
        ]
      }
    ],
    steps: [
      {
        title: "Prep.",
        items: [
          "Skær kylling i store tern (ca. 4 cm)",
          "Skær løg i skiver á 1,5 cm",
          "Hak hvidløg og ingefær fint",
          "Skræl og skær kartoffel og gulerod i store tern (ca. 4 cm)",
          "Mål karrypulver, mel, rosiner og ærter af, så de er klar"
        ]
      },
      {
        title: "Sauce",
        items: [
          "Varm smør/olie op ved høj varme indtil det lige begynder at ryge. Skru ned til middelhøj varme.",
          "Steg kylling under omrøring til den er let brunet (ca. 3 min.)",
          "Tilsæt løg, krydr med salt og peber, og steg videre til løgene er bløde (ca. 3 min.)",
          "Tilsæt hvidløg og ingefær, steg kort til det dufter (ca. 30 sek.)",
          "Tilsæt karrypulver og rist let (ca. 30 sek.)",
          "Tilsæt mel og rør godt rundt til alt melet er opsuget (ca. 30 sek.)",
          "Hæld bouillon/vand i og rør, så melet opløses",
          "Tilsæt kartofler, gulerod, honning og rosiner",
          "Bring i kog, skru ned og lad simre let under låg til grøntsagerne er møre men ikke udkogte (ca. 10 min.)",
          "Smag til med salt, peber og evt. ekstra honning",
          "Rør ærter i til sidst"
        ]
      },
      {
        title: "Kog ris",
        items: [
          "Skyl risene godt i koldt vand",
          "Kog ris efter pakkens anvisning (typisk 1 del ris til 1,2-1,5 dele vand)",
          "Hold risene varme til servering"
        ]
      },
      {
        title: "Samle retten",
        items: [
          "Server karrysaucen varm over en portion dampet ris",
          "Drys med tyndtskårne kinesiske purløg eller forårsløg",
          "Server med japanske pickles (syltet daikon eller aubergine)"
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
      "Det vigtigste element i en burger er bøffen. Alle kondimenter i verden kan ikke kompensere for en dårlig bøf. Burgeren er det ultimative komfort food og bør derfor være en umami-bombe, med et bagtæppe af milde, velafbalancerede smage.",
      "Kødets kvalitet, udskæringen og fedtprocenten har stor indflydelse på hvor meget oksesmagen står frem. Brug bovklump eller tykkam (det tætteste man kommer på den amerikanske udskæring “chuck”) som hovedbestanddel, og et meget fedtholdigt stykke oksebryst for at højne fedtprocenten til minimum 20%. Undgå gaspakket oksekød fra supermarkedet – fedtprocenten er for lav, og pakningen gør kødet mere sejt.",
      "Smash-teknikken maksimerer mængden af stegeskorpe: en kugle hakkekød presses ud på en meget varm stegeoverflade med en fast metalpalet, så man opnår optimal kontakt mellem kød og stegeoverflade.",
      "Special sauce er den som binder hele burgeren sammen. Den vigtigste ingrediens (udover mayo) er adobo-saucen fra en dåse chipotle chilier."
    ],
    ingredients: [
      {
        title: "Beef patties",
        items: [
          "1000 g Bovklump/Tykkam",
          "500 g Oksebryst",
          "Groft salt",
          "Peber"
        ]
      },
      {
        title: "Special sauce",
        items: [
          "120 ml mayonnaise",
          "30 ml ketchup",
          "15 ml fint revet løg",
          "15 ml saft fra syltede agurker (gerne med dildsmag)",
          "10 ml adobo sauce fra dåse chipotle chilier",
          "0.75 g selleri salt",
          "0.75 g groft salt"
        ]
      },
      {
        title: "Udstyr",
        items: [
          "Kødhakker med 6 mm hulskive",
          "Kul- eller gasgrill",
          "Støbejernsplade til grill",
          "Vinklet metalpalet min. 11 cm i bredden. Ikke bøjelig."
        ]
      }
    ],
    steps: [
      {
        title: "Beef patties",
        items: [
          "Puds alt fedt fra oksebryst.",
          "Puds alt fedt fra bovklump/tykkammen.",
          "Vej kød og fedt af så der er 20-25% fedt. Gem det overskydende kød.",
          "Skær kød og fedt i 2-3 cm tern og spred ud på en bageplade.",
          "Sæt kød- og fedttern i fryseren i 30-60 minutter, til de er overfladisk frosne.",
          "Hak kød- og fedttern på kødhakker 2 gange med 6mm hulskive.",
          "Form kugler af farsen på 80g-90g. Vælg en størrelse og vær konsistent.",
          "Sæt farskugler på køl til de skal bruges."
        ]
      },
      {
        title: "Special sauce",
        items: ["Rør alle ingredienser sammen"]
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
          "8 tykke skiver toast eller formbrød",
          "200g Fast ost (Emmentaler, Gruyère, Cheddar el. lignende)",
          "150g Kogt skinke",
          "60 g Mel",
          "60 g Smør",
          "300-400 ml Mælk (kold)",
          "Muskatnød",
          "Sort peber"
        ]
      }
    ],
    steps: [
      {
        title: "Prep.",
        items: [
          "Riv ost på groft rivejern",
          "Skær skinke i stykker som passer med brødets størrelse",
          "Vej mel og smør af til bechamelsauce"
        ]
      },
      {
        title: "Bechamelsauce – opbagning",
        items: [
          "Smelt smør i gryde ved 6/9 varme",
          "Tilsæt alt mel",
          "Pisk",
          "Lad mel- og smørblandingen tilberede i 5 min under omrøring",
          "Tilsæt al den kolde mælk",
          "Pisk alle klumper ud",
          "Bring roligt til kogepunktet",
          "Lad simre til ønsket tykkelse er opnået",
          "Tag gryden af varmen"
        ]
      },
      {
        title: "Bechamelsauce – tilsmagning",
        items: [
          "Tilsæt salt, revet muskat og peber",
          "Smag og juster"
        ]
      },
      {
        title: "Samle Croque Monsieur",
        items: [
          "Forvarm ovn på 220°C med grill",
          "Læg brød ud på bagerist",
          "Læg skinke på brødskiverne",
          "Smør bechamel ovenpå skinken",
          "Drys revet ost udover",
          "Læg bageplade med sølvpapir i bunden af ovnen for at opsamle ost",
          "Bag i ~5 minutter 2/3 oppe i ovnen ved 220°C med grill"
        ]
      }
    ]
  },
  {
    id: "hot-sauce",
    title: "Hot Sauce",
    emoji: "🌶️",
    category: "Saucer",
    url: "https://duffau.github.io/recipes/hot-sauce/",
    ingredients: [
      {
        items: [
          "200 g Chilier",
          "300 ml Eddike",
          "300 g Sukker",
          "300 ml Vand",
          "2 spsk. Majsstivelse (Maizena)",
          "Salt"
        ]
      }
    ],
    steps: [
      {
        items: [
          "Fjern stilke fra chilier og halver",
          "Lad lage (eddike, sukker og vand) komme i kog",
          "Tilsæt chilier til varm lage",
          "Lad trække i 5-10 minutter",
          "Blend til helt jævn",
          "Sigt",
          "Kom tilbage i gryde",
          "Pisk majsstivelse i en smule sovs i en skål",
          "Tilsæt til sovsen i gryden",
          "Bring til kogepunktet",
          "Lad køle ned"
        ]
      }
    ]
  },
  {
    id: "salsa-verde",
    title: "Salsa Verde",
    emoji: "🫑",
    category: "Saucer",
    url: "https://duffau.github.io/recipes/salsa-verde/",
    ingredients: [
      {
        items: [
          "Grønne tomatillos fra dåse (kan erstattes med tomater)",
          "Grøn peberfrugt",
          "Jalapeños",
          "Løg",
          "Hvidløg",
          "Koriander",
          "Salt"
        ]
      }
    ],
    steps: [
      {
        title: "Prep.",
        items: [
          "Fjern kerner og center fra grøn peberfrugt",
          "Fjern skal og halver løg",
          "Lad skallen blive på hvidløg"
        ]
      },
      {
        title: "Tilberedning",
        items: [
          "Spred grøntsager ud i et jævnt lag på bageplade",
          "Rist alle grøntsager i ovnen på grill i ca. 10 minutter, til de er sorte på overfladen og bløde",
          "Pil skallen af hvidløg",
          "Kom i en blender",
          "Tilsæt salt",
          "Tilsæt koriander",
          "Blend",
          "Hæld ud i en rygende varm pande med lidt neutral olie",
          "Lad simre 1 min",
          "Hæld fra",
          "Smag til"
        ]
      }
    ]
  },
  {
    id: "asiatiske-basis-saucer",
    title: "Asiatiske Basis Saucer",
    emoji: "🥢",
    category: "Saucer",
    url: "https://duffau.github.io/recipes/asiatiske-basis-saucer",
    intro: [
      "Disse asiatiske saucer er et forsøg på at samle nogle grundlæggende komponenter i det kinesiske og de sydøstasiatiske køkkener. Håbet er at de kan danne grundlag for at udforske asiatiske smage og teknikker.",
      "Alle aromatiske ingredienser så som løg, hvidløg, ingefær, chili og krydderier etc. er udeladt for at give en fleksibel base. Saucerne fungerer som de er, men det er oplagt at tilføje smagsgivere og justere blandingsforholdene for at skabe nye variationer.",
      "Stir fry: En vigtig detalje ved soyabaserede saucer er, at de bør komme i direkte kontakt med den varme pande eller wok. Ved den høje varme sker der spontan karamelisering og Maillard-reaktioner, som udvikler dybere og mere komplekse smagsstoffer. Sørg derfor for, at panden er varm nok, før du tilsætter saucen.",
      "Alle mængder er blandingsforhold (dele)."
    ],
    ingredients: [
      {
        title: "Kinesisk Stir Fry Sauce",
        items: ["3 dele Let Soyasauce", "2 dele Østerssauce", "1 del Mørk Soyasauce"],
        note: "Stir fry af alt slags kød og grøntsager. Fungerer godt til stegte ris og nudler. Udvid gerne med Shaoxing vin, sukker og sesamolie. Mørk soyasauce kan udelades for en helt basal stir fry sauce."
      },
      {
        title: "Thai Stir Fry Sauce",
        items: ["3 dele Fiskesauce", "2 dele Let Soyasauce", "1 del Sesamolie"],
        note: "Stir fry af alt slags kød og grøntsager. Udvid gerne med østerssauce, sukker og/eller tamarindpaste, som er basen i den klassiske thailandske stegte nudelret “Pad Thai”."
      },
      {
        title: "Pad Kra Pao Stir Fry Sauce",
        items: ["2 dele Fiskesauce", "1 del Let Soyasauce", "1 del Østerssauce", "1 del Sukker", "0.5 del Mørk Soyasauce"],
        note: "Inspireret af thairetten “Pad Kra Pao”, hvor hakket svinekød bliver glaseret i sauceblandingen og “Holy Basil” er kernearomaten. Fungerer til grøntsager, alt slags kød og andre aromater som hvidløg og ingefær."
      },
      {
        title: "Kinesisk “Red Braised Pork” Sauce",
        items: ["5 dele Shaoxing vin", "2 dele Sukker (karameliseret)", "2 dele Let soyasauce", "1 del Mørk soyasauce"],
        note: "Glasering til flæsk. Vend mundrette flæskestykker i varm karamel. Tilsæt saucer. Braiser til mørt."
      },
      {
        title: "Barbecue",
        items: ["2 dele Ketchup", "1 del Kecap Manis", "1 del Brun farin"],
        note: "Barbecue af kylling og svinekød, f.eks. som glasering til spareribs."
      },
      {
        title: "Gyoza Dipping Sauce",
        items: ["3 dele Let Soyasauce", "3 dele Sort Kinesisk Eddike", "1 del Sesamolie"],
        note: "En syrlig sauce til at dyppe gyoza, forårsruller, dumplings og lign."
      },
      {
        title: "Thai Dipping Sauce (Nam Jim Jeaw base)",
        items: ["2 dele Tamarindpaste", "1 del Fiskesauce", "1 del Limesaft", "1 del Sukker"],
        note: "Dip til BBQ kylling, grillet okse- og svinekød."
      },
      {
        title: "Soyabaseret Vinaigrette",
        items: ["5 dele Risvineddike", "3 dele Let soyasauce", "3 dele Sukker", "2 dele Sesamolie"],
        note: "Dressing til salater, f.eks. “Smashed Cucumber” salat."
      },
      {
        title: "Fiskesaucebaseret Vinaigrette (Nuoc Cham base)",
        items: ["2 dele Vand", "2 dele Fiskesauce", "1 del Sukker", "1 del Risvineddike", "1 del Limesaft"],
        note: "Dip til vietnamesiske sommerruller og forårsruller, dressing til risnudelsalat."
      }
    ],
    steps: []
  },
  {
    id: "pizza-dej",
    title: "Napolitansk Pizza Dej",
    emoji: "🍕",
    category: "Bagværk",
    serves: "4",
    url: "https://duffau.github.io/recipes/pizza-dej/",
    intro: [
      "Denne dej har 65% hydrering, hvilket er i den lave ende for en napolitansk pizza, men det gør dejen nemmere at arbejde med og forme."
    ],
    ingredients: [
      {
        items: [
          "570 g Hvedemel Tipo “00”",
          "8 g Tørgær",
          "17 g Salt",
          "370 g Vand 24°C"
        ]
      }
    ],
    steps: [
      {
        items: [
          "Saml ingredienser i røremaskine",
          "Ælt i 15-20 minutter til glutenprøven bestås",
          "Form til kugle",
          "Lad hæve ved stuetemperatur i ~10 timer",
          "Sæt på køl",
          "Form 4 kugler",
          "Sæt på køl til ibrugtagning"
        ]
      }
    ]
  },
  {
    id: "scones",
    title: "Scones",
    emoji: "🧁",
    category: "Bagværk",
    serves: "6-8 scones",
    url: "https://duffau.github.io/recipes/scones/",
    credits: ["Jamie Oliver – How To Make Scones"],
    ingredients: [
      {
        items: [
          "300 g Hvedemel (Almindeligt)",
          "150 g Smør (usaltet)",
          "1 tsk (~2 g) Salt",
          "4 tsk (~10 g) Bagepulver",
          "4 tsk (~15 g) Sukker",
          "225 g Mælk"
        ]
      }
    ],
    steps: [
      {
        title: "Samle dej",
        items: [
          "Bland tørre ingredienser",
          "Skær koldt smør i tern",
          "Bland smørtern og melblandingen",
          "Tilføj mælk og tryk sammen indtil det lige netop danner en sammenhængende dej",
          "Lad hvile i 30 minutter på køl"
        ]
      },
      {
        title: "Form scones",
        items: [
          "Rul ud i 2-3 cm tykkelse",
          "Stans scones ud",
          "Brug helst ikke restdej efter udstansning (vil blive mindre flaky)",
          "Pensl med smeltet smør, olivenolie, æggevask eller mælk",
          "Bag ved 180° i 15 minutter"
        ]
      }
    ]
  }
];

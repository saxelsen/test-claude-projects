# Recipe Box

A small static site listing food recipes. No build step or dependencies.

All recipes are by Christian Duffau-Rasmussen, originally published at
<https://duffau.github.io/recipes/>. Each recipe page credits him and links to the original.

- `index.html` – page shell
- `recipes.js` – recipe data (add a recipe by adding an object to `RECIPES`; ingredients and steps are lists of `{ title?, items, note? }` groups)
- `app.js` – search, category filters and recipe detail views (hash routing, e.g. `#/recipe/tiramisu`)
- `style.css` – styles, with automatic dark mode

## Viewing

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

To publish it, enable GitHub Pages for the `main` branch (root folder) in the repository settings.

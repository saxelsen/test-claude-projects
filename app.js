(function () {
  const grid = document.getElementById("grid");
  const filters = document.getElementById("filters");
  const search = document.getElementById("search");
  const count = document.getElementById("count");
  const empty = document.getElementById("empty");
  const listView = document.getElementById("list-view");
  const detailView = document.getElementById("detail-view");

  const categories = ["All", ...new Set(RECIPES.map((r) => r.category))];
  let activeCategory = "All";

  const escape = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const formatTime = (mins) =>
    mins < 60 ? `${mins} min` : `${Math.floor(mins / 60)} h${mins % 60 ? ` ${mins % 60} min` : ""}`;

  function renderFilters() {
    filters.innerHTML = categories
      .map(
        (c) =>
          `<button type="button" class="chip" aria-pressed="${c === activeCategory}" data-category="${escape(c)}">${escape(c)}</button>`
      )
      .join("");
  }

  function matches(recipe, query) {
    if (activeCategory !== "All" && recipe.category !== activeCategory) return false;
    if (!query) return true;
    const haystack = [recipe.title, recipe.description, recipe.category, ...recipe.ingredients].join(" ").toLowerCase();
    return query.split(/\s+/).every((term) => haystack.includes(term));
  }

  function renderList() {
    const query = search.value.trim().toLowerCase();
    const results = RECIPES.filter((r) => matches(r, query));

    grid.innerHTML = results
      .map(
        (r) => `
        <a class="card" href="#/recipe/${r.id}">
          <div class="card-art" aria-hidden="true">${r.emoji}</div>
          <div class="card-body">
            <span class="tag">${escape(r.category)}</span>
            <h2>${escape(r.title)}</h2>
            <p>${escape(r.description)}</p>
            <div class="meta">
              <span>⏱ ${formatTime(r.time)}</span>
              <span>🍽 ${r.servings}</span>
              <span>${escape(r.difficulty)}</span>
            </div>
          </div>
        </a>`
      )
      .join("");

    count.textContent = `${results.length} recipe${results.length === 1 ? "" : "s"}`;
    empty.hidden = results.length > 0;
  }

  function renderDetail(recipe) {
    detailView.innerHTML = `
      <a href="#" class="back">← All recipes</a>
      <header class="detail-header">
        <div class="detail-art" aria-hidden="true">${recipe.emoji}</div>
        <div>
          <span class="tag">${escape(recipe.category)}</span>
          <h1>${escape(recipe.title)}</h1>
          <p class="lede">${escape(recipe.description)}</p>
          <div class="stats">
            <div><strong>${formatTime(recipe.time)}</strong><span>Total time</span></div>
            <div><strong>${recipe.servings}</strong><span>Servings</span></div>
            <div><strong>${escape(recipe.difficulty)}</strong><span>Difficulty</span></div>
          </div>
        </div>
      </header>
      <div class="detail-body">
        <section class="ingredients">
          <h2>Ingredients</h2>
          <ul>
            ${recipe.ingredients
              .map(
                (item, i) =>
                  `<li><label><input type="checkbox" id="ing-${i}"><span>${escape(item)}</span></label></li>`
              )
              .join("")}
          </ul>
        </section>
        <section class="steps">
          <h2>Method</h2>
          <ol>${recipe.steps.map((s) => `<li>${escape(s)}</li>`).join("")}</ol>
        </section>
      </div>`;
  }

  function route() {
    const match = location.hash.match(/^#\/recipe\/([\w-]+)$/);
    const recipe = match && RECIPES.find((r) => r.id === match[1]);

    if (recipe) {
      renderDetail(recipe);
      document.title = `${recipe.title} · Recipe Box`;
      listView.hidden = true;
      detailView.hidden = false;
      window.scrollTo(0, 0);
    } else {
      document.title = "Recipe Box";
      listView.hidden = false;
      detailView.hidden = true;
    }
  }

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-category]");
    if (!btn) return;
    activeCategory = btn.dataset.category;
    renderFilters();
    renderList();
  });

  search.addEventListener("input", renderList);
  window.addEventListener("hashchange", route);

  renderFilters();
  renderList();
  route();
})();

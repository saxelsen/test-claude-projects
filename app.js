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

  const allItems = (groups) => groups.flatMap((g) => g.items);

  const byline = (recipe) =>
    `By <a href="${escape(recipe.url)}" target="_blank" rel="noopener">${escape(AUTHOR.name)}</a>`;

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
    const haystack = [recipe.title, recipe.category, ...allItems(recipe.ingredients)].join(" ").toLowerCase();
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
            <p>By ${escape(AUTHOR.name)}</p>
            <div class="meta">
              <span>🧂 ${allItems(r.ingredients).length} ingredients</span>
              ${r.serves ? `<span>🍽 ${escape(r.serves)}</span>` : ""}
            </div>
          </div>
        </a>`
      )
      .join("");

    count.textContent = `${results.length} recipe${results.length === 1 ? "" : "s"}`;
    empty.hidden = results.length > 0;
  }

  const groupTitle = (g, tag) => (g.title ? `<${tag}>${escape(g.title)}</${tag}>` : "");
  const groupNote = (g) => (g.note ? `<p class="note">${escape(g.note)}</p>` : "");

  function renderDetail(recipe) {
    const stats = [
      recipe.serves && [recipe.serves, "Serves"],
      [allItems(recipe.ingredients).length, "Ingredients"]
    ].filter(Boolean);

    detailView.innerHTML = `
      <a href="#" class="back">← All recipes</a>
      <header class="detail-header">
        <div class="detail-art" aria-hidden="true">${recipe.emoji}</div>
        <div>
          <span class="tag">${escape(recipe.category)}</span>
          <h1>${escape(recipe.title)}</h1>
          <p class="byline">${byline(recipe)}</p>
          ${
            recipe.credits
              ? `<p class="credits">Inspired by: ${recipe.credits.map(escape).join("; ")}</p>`
              : ""
          }
          <div class="stats">
            ${stats.map(([v, label]) => `<div><strong>${escape(v)}</strong><span>${label}</span></div>`).join("")}
          </div>
        </div>
      </header>
      ${
        recipe.intro
          ? `<section class="intro">${recipe.intro.map((p) => `<p>${escape(p)}</p>`).join("")}</section>`
          : ""
      }
      <div class="detail-body${recipe.steps.length ? "" : " no-steps"}">
        <section class="ingredients">
          <h2>Ingredients</h2>
          ${recipe.ingredients
            .map(
              (g) => `
            ${groupTitle(g, "h3")}
            <ul>
              ${g.items
                .map((item) => `<li><label><input type="checkbox"><span>${escape(item)}</span></label></li>`)
                .join("")}
            </ul>
            ${groupNote(g)}`
            )
            .join("")}
        </section>
        ${
          recipe.steps.length
            ? `<section class="steps">
          <h2>Method</h2>
          ${recipe.steps
            .map(
              (g) => `
            ${groupTitle(g, "h3")}
            <ol>${g.items.map((s) => `<li>${escape(s)}</li>`).join("")}</ol>
            ${groupNote(g)}`
            )
            .join("")}
        </section>`
            : ""
        }
      </div>
      <p class="source">
        Recipe by ${escape(AUTHOR.name)}, translated from the Danish original at
        <a href="${escape(recipe.url)}" target="_blank" rel="noopener">${escape(decodeURI(recipe.url))}</a>.
      </p>`;
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

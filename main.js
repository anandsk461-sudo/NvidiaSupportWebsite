document.getElementById("year")?.append(String(new Date().getFullYear()));

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(open));
});

const search = document.getElementById("commandSearch");
const cards = [...document.querySelectorAll(".command-card")];
const filters = [...document.querySelectorAll(".category-filter")];
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");
let category = "all";

function filterCommands() {
  const q = (search?.value || "").trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matchesCategory = category === "all" || card.dataset.category === category;
    const matchesSearch = card.dataset.search.includes(q);
    const show = matchesCategory && matchesSearch;
    card.hidden = !show;
    if (show) visible++;
  });
  if (resultCount) resultCount.textContent = `${visible} command${visible === 1 ? "" : "s"}`;
  if (noResults) noResults.hidden = visible !== 0;
}
search?.addEventListener("input", filterCommands);
filters.forEach(button => button.addEventListener("click", () => {
  category = button.dataset.category;
  filters.forEach(item => item.classList.toggle("selected", item === button));
  filterCommands();
}));
document.addEventListener("keydown", event => {
  if (event.key === "/" && search && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault(); search.focus();
  }
});
document.querySelectorAll(".copy-command").forEach(button => button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    const old = button.innerHTML;
    button.innerHTML = "Copied <span>✓</span>";
    setTimeout(() => button.innerHTML = old, 1300);
  } catch {
    button.textContent = button.dataset.copy;
  }
}));

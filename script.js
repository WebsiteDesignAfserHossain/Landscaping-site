const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}));

const range = document.getElementById("compareRange");
const before = document.getElementById("before");
const divider = document.getElementById("divider");
function updateCompare() {
  const v = Number(range.value);
  before.style.width = v + "%";
  divider.style.left = v + "%";
}
range.addEventListener("input", updateCompare);
updateCompare();

document.getElementById("quoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const note = document.getElementById("formNote");
  const name = new FormData(e.currentTarget).get("name") || "there";
  note.textContent = `Thanks, ${name}. Your quote request has been received.`;
  e.currentTarget.reset();
});

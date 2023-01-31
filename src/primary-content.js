const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
function createTabs(...params) {
  for (let i = 0; i < params.length; i++) {
    const tab = document.createElement("li");
    tab.id = `${params[i]}`;
    tab.classList.add("tab");
    tab.textContent = params[i];
    ul.appendChild(tab);
  }
  nav.appendChild(ul);
  header.appendChild(nav);
}
createTabs("Home", "Menu", "Contact");
const section = document.createElement("section");
const footer = document.createElement("footer");
export default function appendPrimary() {
  document.getElementById("content").append(header, section, footer);
}

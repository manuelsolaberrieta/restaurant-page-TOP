import appendPrimary from "./primary-content";
import appendHomeTab from "./home-tab";
import appendMenuTab from "./menu-tab";
import appendContactTab from "./contact-tab";
window.addEventListener("load", () => {
  appendPrimary();
  prepareTabs();
});
function prepareTabs() {
  const tabs = [...document.querySelectorAll(".tab")];
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      changeTab(e.target);
    });
  });
}
//como seleccionar un elemento html una vez que este creado
const changeTab = function (tab) {
  const section = document.querySelector("section");
  const tabId = tab.id;
  section.replaceChildren();
  switch (tabId) {
    case "Menu":
      appendMenuTab();
      break;
    case "Home":
      appendHomeTab();
      break;
    case "Contact":
      appendContactTab();
      break;
    default:
      console.log("error");
      break;
  }
};

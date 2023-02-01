const h1 = document.createElement("h1");
h1.textContent = "Welcome to the SofTaurant";
const p1 = document.createElement("p");
p1.textContent =
  "Everyone's digital restaurant! it's food is delicious, it's beverages are out of this world and the location is the best. You can come alone, with friends or family, everyone's invited. Our waiters have been built to serve up to the speed of your internet connection. So if you POST your order you'll GET your 200!";
const p2 = document.createElement("p");
p2.textContent =
  "Bye for now, if you need more info head to the menu or contact tabs :)";
export default function appendHomeTab() {
  const homeTab = document.createElement("div");
  homeTab.classList.add("welcome");
  homeTab.append(h1, p1, p2);
  document.querySelector("section").append(homeTab);
}

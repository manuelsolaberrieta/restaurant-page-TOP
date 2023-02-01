const h1 = document.createElement("h1");
h1.textContent = "Menu";
const dishes = [
  {
    name: "Byte with Fries",
    description:
      "Classic dish for kids and adults alike, satiate your appetie and leave with a smile on your face. The fries never betray!",
  },
  {
    name: "1,44 Green",
    description:
      "If you are on a diet or just want to eat healthy there's no better choice than the 1,44. If it's enough for doom guy, it's enough for you!",
  },
  {
    name: "The Gig (share)",
    description:
      "On a date? work reunion? save money on The Gig and eat it with your companion, cheap, tasty and fullfiling. Our cheff prepares it with just 1000 megabytes",
  },
  {
    name: "Tera a la bbq",
    description:
      "A birthday meal for the whole family, it comes with the best barbecue in the city.",
  },
  {
    name: "A lot more...",
    description: "Just get yourself here and check our options out!",
  },
];

export default function appendMenuTab() {
  const menuTab = document.createElement("div");
  menuTab.classList.add("menu");
  menuTab.append(h1);
  dishes.forEach((item) => {
    const foodContainer = document.createElement("div");
    foodContainer.classList.add("food-container");
    const foodName = document.createElement("h2");
    foodName.classList.add("food-name");
    foodName.textContent = item.name;
    const foodDescription = document.createElement("p");
    foodDescription.classList.add("food-description");
    foodDescription.textContent = item.description;
    foodContainer.append(foodName, foodDescription);
    menuTab.append(foodContainer);
  });
  document.querySelector("section").append(menuTab);
}

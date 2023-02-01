const h1 = document.createElement("h1");
h1.textContent = "How to reach us";
const listHeading = document.createElement("h2");
listHeading.textContent =
  "You can write or call us through the following channels";
const channels = [
  "Instagram: SofTaurant_official",
  "Facebook: SofTaurant_official",
  "Tel: 555-94867-341",
  "Email: theSofT@cityres.com",
];
export default function appendContactTab() {
  const contactTab = document.createElement("div");
  contactTab.classList.add("contact");
  const list = document.createElement("ul");
  channels.forEach((channel) => {
    const li = document.createElement("li");
    li.textContent = channel;
    list.append(li);
  });
  contactTab.append(h1, list);
  document.querySelector("section").append(contactTab);
}

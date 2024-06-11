const state = {
  selectedDog: null,
};

console.log("initial state", state);

const list = document.querySelector(".dogs-list");

function renderSelectedDogCard() {
  const mainSection = document.querySelector(".main__dog-section");
  mainSection.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = state.selectedDog.name;

  mainSection.appendChild(heading);

  const image = document.createElement("img");
  image.setAttribute("src", state.selectedDog.image);

  mainSection.appendChild(image);

  const section = document.createElement("div");
  section.classlist = "main__dog-section__desc";

  const headingThree = document.createElement("h3");
  headingThree.textContent = "Bio";

  section.appendChild(headingThree);

  const paragraph = document.createElement("p");
  paragraph.textContent = state.selectedDog.bio;

  section.appendChild(paragraph);

  mainSection.appendChild(section);

  const naughty = document.createElement("p");
}

for (i = 0; i < data.length; i++) {
  const dog = data[i];

  const listItem = document.createElement("li");
  listItem.classList = "dogs-list__button";
  listItem.textContent = dog.name;

  listItem.addEventListener("click", function () {
    state.selectedDog = dog;
    console.log("state", state);

    renderSelectedDogCard();
  });

  list.appendChild(listItem);
}

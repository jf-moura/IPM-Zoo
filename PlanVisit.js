//The orderToVisit[0] animal will be the animal to be visited at first place, the orderToVisit[1] is the second and so on
const orderToVisit = [
  "bear",
  "elephant",
  "cheetah",
  "giraffe",
  "hippo",
  "lion",
  "rhino",
  "tiger",
  "dolphin",
  "zebra",
  "primate",
  "deer",
  "red-panda",
  "camel",
];

const NO_ANIMALS_SELECTED =
  "You have to selected at least one animal in order to oraganize your visit!";

var selectedAnimals = [];

var animalsOrdered = [];

//Function that handles the selection or deselection of the animals
function selectAnimal(animal) {
  changeDisplaySelectedAnimal(animal);
  const index = selectedAnimals.indexOf(animal);
  index == -1 ? selectedAnimals.push(animal) : selectedAnimals.splice(index, 1);
}

function handleSubmit() {
  if (selectedAnimals.length == 0) {
    return alert(NO_ANIMALS_SELECTED);
  }

  for (let i = 0; i < orderToVisit.length; i++) {
    if (selectedAnimals.includes(orderToVisit[i]))
      animalsOrdered.push(orderToVisit[i]);
  }
  console.log("Animais escolhidos");
  console.log(animalsOrdered);
  location.href = "rota.html";
}

function changeDisplaySelectedAnimal(animal) {
  if (!selectedAnimals.includes(animal)) {
    const elem = document.getElementById(animal + "-button-not-selected");
    elem.style.display = "none";
    const newDisplayedAnimal = document.getElementById(
      animal + "-button-selected"
    );
    newDisplayedAnimal.style.display = "block";
  } else {
    const elem = document.getElementById(animal + "-button-selected");
    elem.style.display = "none";
    const newDisplayedAnimal = document.getElementById(
      animal + "-button-not-selected"
    );
    newDisplayedAnimal.style.display = "block";
  }
}

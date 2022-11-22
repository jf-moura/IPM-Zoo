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
  "panda",
  "camel",
];

const NO_ANIMALS_SELECTED =
  "You have to selected at least one animal in order to oraganize your visit!";

var selectedAnimals = [];

//Function that handles the selection or deselection of the animals
function selectAnimal(animal) {
  const index = selectedAnimals.indexOf(animal);
  index == -1 ? selectedAnimals.push(animal) : selectedAnimals.splice(index, 1);
}

var animalsOrdered = [];

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

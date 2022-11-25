//The orderToVisit[0] animal will be the animal to be visited at first place, the orderToVisit[1] is the second and so on
const orderToVisit = [
  "zebra",
  "tiger",
  "dolphin",
  "camel",
  "giraffe",
  "red-panda",
  "elephant",
  "hippo",
  "primate",
  "lion",
  "cheetah",
  "deer",
  "bear",
  "rhino"
];

const NO_ANIMALS_SELECTED =
  "You have to selected at least one animal in order to organize your visit!";

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
  sessionStorage.setItem("oAnimals", animalsOrdered);
  location.href = "rota.html";
}

function changeDisplaySelectedAnimal(animal) {
  if (!selectedAnimals.includes(animal)) {
    //map
    const elem = document.getElementById(animal + "-button-not-selected");
    elem.style.display = "none";
    const newDisplayedAnimal = document.getElementById(
      animal + "-button-selected"
    );
    newDisplayedAnimal.style.display = "block";

    //list animals
    const elemList = document.getElementById(animal + "-list");
    elemList.style.backgroundColor = "#45a049";
    elemList.style.color = "white";
  } else {
    //map
    const elem = document.getElementById(animal + "-button-selected");
    elem.style.display = "none";
    const newDisplayedAnimal = document.getElementById(
      animal + "-button-not-selected"
    );
    newDisplayedAnimal.style.display = "block";

    //list animals
    const elemList = document.getElementById(animal + "-list");
    elemList.style.backgroundColor = "#f1f1f1";
    elemList.style.color = "black";
  }
}

function displayRoute() {
  const div = document.getElementById("ideal-route");
  const data = sessionStorage.getItem("oAnimals").split(",");

  let string = "";
  for (let i = 0; i < data.length; i++) {
    let auxString = "<li>" + (i + 1) + "º - " + data[i] + "</li>";
    string = string + auxString;
    console.log(auxString);
  }

  console.log("finalstring");
  console.log(string);

  div.innerHTML = string;
}

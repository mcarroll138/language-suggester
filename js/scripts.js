function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("cSharp").setAttribute("class", "hidden");
  document.getElementById("java").setAttribute("class", "hidden");
}

window.onload = function () {
  hideResults();
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
    hideResults;
  }
  function inputTotal() {
    let colorInput = document.getElementById("color");
    let foodInput = document.getElementById("food");
    let animalInput = document.getElementById("animal");
    let locationInput = document.getElementById("location");
    let plutoInput = document.getElementById("pluto");

    let selectedValueColor = colorInput.options[colorInput.selectedIndex].value;
    let selectedValueFood = foodInput.options[foodInput.selectedIndex].value;
    let selectedValueAnimal = animalInput.options[animalInput.selectedIndex].value;
    let selectedValueLocation = locationInput.options[locationInput.selectedIndex].value;
    let selectedValuePluto = plutoInput.options[plutoInput.selectedIndex].value;

    let total = parseInt(selectedValueColor) + parseInt(selectedValueFood) + parseInt(selectedValueAnimal + parseInt(selectedValueLocation) + parseInt(selectedValuePluto));
    console.log(total);
  }
};

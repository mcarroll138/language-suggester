function hideResults() {
  document.getElementById("python").classList.add("hidden");
  document.getElementById("ruby").classList.add("hidden");
  document.getElementById("cSharp").classList.add("hidden");
  document.getElementById("java").classList.add("hidden");
}

window.onload = function () {
  hideResults();
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
    inputTotal();
  };

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

    let total = parseInt(selectedValueColor) + parseInt(selectedValueFood) + parseInt(selectedValueAnimal) + parseInt(selectedValueLocation) + parseInt(selectedValuePluto);
    console.log("Total:", total);

    if (total >= 30) {
      document.getElementById("python").classList.remove("hidden");
    } else if (total < 30) {
      document.getElementById("ruby").classList.remove("hidden");
    } else if (total < 20) {
      document.getElementById("cSharp").classList.remove("hidden");
    } else {
      document.getElementById("java").classList.remove("hidden");
    }
  }
};
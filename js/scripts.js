function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("cSharp").setAttribute("class", "hidden");
  document.getElementById("java").setAttribute("class", "hidden");
}

window.onload = function () {
  document.querySelector("form").onsubmit = function (event) {
    hideResults();
    event.preventDefault();
  }
}

function handleSelect(event) {
  event.preventDefault();
  const selection = parseInt(document.getElementById("color").value;
}
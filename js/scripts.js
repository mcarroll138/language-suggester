function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("cSharp").setAttribute("class", "hidden");
  document.getElementById("java").setAttribute("class", "hidden");
}

window.onload = function () {
  hideResults();
  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    hideResults;
  }
};
};
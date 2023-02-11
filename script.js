var toggleButton = document.getElementById("toggleButton");
var text = document.getElementById("text");

if (toggleButton && text) {
  toggleButton.addEventListener("click", function () {
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });
}

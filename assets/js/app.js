const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");

noButton.addEventListener("mouseenter", function() {
  noButton.style.position = "relative";
  noButton.style.left = Math.random() * 400 + "px";
  noButton.style.bottom = Math.random() * 400 + "px";
});
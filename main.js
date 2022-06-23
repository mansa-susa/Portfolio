const hamburger = document.getElementById("hamburger");
const dropdown = document.querySelector(".dropdown-container");

hamburger.addEventListener("click", () => {
  dropdown.classList.toggle('active');
})


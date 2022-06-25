const hamburger = document.getElementById('hamburger');
const dropdown = document.querySelector('.dropdown-container');
const times = document.getElementById('times');
const menuItem = document.querySelectorAll('.dropdown-menu-item');
let i;
const seeProject = document.querySelectorAll('.project-button');
const popup = document.querySelector('.popup-window');
const popupTimes = document.getElementById('popup-times');
const wrapper = document.querySelector('.wrapper');
const popupHeading = document.getElementById("popup-heading");

hamburger.addEventListener('click', () => {
  dropdown.style.display = 'block';
});

times.addEventListener('click', () => {
  dropdown.style.display = 'none';
});

for (i = 0; i < menuItem.length; i += 1) {
  menuItem[i].addEventListener('click', () => {
    dropdown.style.display = 'none';
  });
}

for (i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    popup.style.display = 'block';
    wrapper.style.opacity = 0.5;
  });
}

popupTimes.addEventListener('click', () => {
  popup.style.display = 'none';
  wrapper.style.opacity = 1;
});
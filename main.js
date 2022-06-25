const hamburger = document.getElementById('hamburger');
const dropdown = document.querySelector('.dropdown-container');
const times = document.getElementById('times');
const menuItem = document.querySelectorAll('.dropdown-menu-item');
let i;
const see_project = document.querySelectorAll('.project-button');
const popup = document.querySelector('.popup-window');
const popup_times = document.getElementById('popup-times');
const wrapper = document.querySelector('.wrapper');
let popup_heading = document.getElementById('popup-heding');
popup_heading = 'Keeping track of hundreds  of components website';


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

for (i =0; i < see_project.length; i +=1) {
  see_project[i].addEventListener('click', () => {
    popup.style.display = 'block';
    wrapper.style.opacity = 0.5;
  });
}

popup_times.addEventListener('click', () => {
  popup.style.display = 'none';
  wrapper.style.opacity = 1;
});
const hamburger = document.getElementById('hamburger');
const dropdown = document.querySelector('.dropdown-container');
const times = document.getElementById('times');
const menuItem = document.querySelectorAll('.dropdown-menu-item');
let i;

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
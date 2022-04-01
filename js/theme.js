const themeBtn = document.querySelector('.theme-icon');
const root = document.body;

themeBtn.addEventListener('click', () => {
  root.classList.toggle('dark');
  if (themeBtn.classList.contains('ri-moon-clear-line')) {
    themeBtn.classList.replace('ri-moon-clear-line', 'ri-sun-line');
  } else {
    themeBtn.classList.replace('ri-sun-line', 'ri-moon-clear-line');
  }
})

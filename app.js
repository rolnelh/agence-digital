const bar = document.getElementById('menu');
const nav = document.querySelector('nav');
const buttons = document.getElementById('.btns');

bar.addEventListener('click', () => {
    bar.classList.toggle('active');
    nav.classList.toggle('open');
});
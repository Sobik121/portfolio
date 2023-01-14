const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
closeElement = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

const percent = document.querySelectorAll('.capability__percent'),
    scale = document.querySelectorAll('.scale_fill');

percent.forEach( (item, i) => {
    scale[i].style.width = item.innerHTML;
});
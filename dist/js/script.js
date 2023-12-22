const menu = document.querySelector('.menu')
      burger = document.querySelector('.burger')
      closeElem = document.querySelector('.menu__close')
      overlay = document.querySelector('.menu__overlay');

burger.addEventListener('click', () => {
    menu.classList.add('active')
});

function closeMenu (i) {
    i.addEventListener('click', () => {
        menu.classList.remove('active')
    });
}

closeMenu(closeElem);
closeMenu(overlay);

const procents = document.querySelectorAll('.progress__procent')
      lines = document.querySelectorAll('.progress__subline');

procents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
})
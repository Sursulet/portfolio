
const menu = document.querySelector('.menu__icon--mobile')
const close = document.querySelector('.menu__icon--close')
const nav = document.querySelector('menu__content')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})
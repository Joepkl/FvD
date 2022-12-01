// Navigatie
const menu = document.querySelector('#hamburgerMenu')
const navItems = document.querySelector('#navItems')
const nav = document.querySelector('#navSlideOut')

menu.addEventListener('click', openMenu)

function openMenu(){
    menu.classList.toggle('open')
    navItems.classList.toggle('open2')
}


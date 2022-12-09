// Navigatie interactie
const hamburgerMenu = document.querySelector('nav > button div')
const navItems = document.querySelector('nav > ul')

hamburgerMenu.addEventListener('click', openMenu)


function openMenu(){
    hamburgerMenu.classList.toggle('open')
    navItems.classList.toggle('open2')
}


// Falcon 9 nummer animatie Launches
let launches = 0

const interval1 = setInterval(() => {
    launches += 1
    document.querySelector('main section:nth-of-type(2) div:first-of-type h3').textContent = launches
    if(launches == 186){
        clearInterval(interval1)
    }
}, 10)


// Falcon 9 nummer animatie Landings
let landings = 0

const interval2 = setInterval(() => {
    landings += 1
    document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) h3').textContent = landings
    if(landings == 144){
        clearInterval(interval2)
    }
}, 10)


// Falcon 9 nummer animatie Reflights
let reflights = 0

const interval3 = setInterval(() => {
    reflights += 1
    document.querySelector('main section:nth-of-type(2) div:nth-of-type(3) h3').textContent = reflights
    if(reflights == 123){
        clearInterval(interval3)
    }
}, 10)



// Scrollbased nummer animatie 
// function scrollAnimatie(){
//     const item = document.querySelectorAll('.test')
//     item.forEach(element =>{
//         const windowHeight = window.innerHeight;
//         const elementTop = element.getBoundingClientRect().top;
//         const elementVisible = 50;
//         if (elementTop < windowHeight - elementVisible) {
//             element.classList.add("scroll");
//         } 
//         else {
//             element.classList.remove("scroll");
//       }
//     })
// }

// window.addEventListener("scroll", scrollAnimatie);

// To check the scroll position on page load
// scrollAnimatie();












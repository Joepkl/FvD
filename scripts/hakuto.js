// Navigatie interactie
const hamburgerMenu = document.querySelector('nav > button')
const navItems = document.querySelector('nav > ul')

hamburgerMenu.addEventListener('click', openMenu)


function openMenu(){
    hamburgerMenu.classList.toggle('open')
    navItems.classList.toggle('open2')
}





// Scrollbased nummer animatie INTERSECTION OBSERVER
function createObserver2() {
    let options = {
    //   root: document.querySelector('main section:nth-of-type(2) div:first-of-type'),
        rootMargin: "50px",
        threshold: 0
    };

    let observer;
    const element = document.querySelector('main section:nth-of-type(2) p')
  
    observer = new IntersectionObserver(animatie, options);
    observer.observe(element);
}
  
createObserver2()

function animatie(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('in beeld')
        entry.target.classList.add('animatie')
      } else {
        console.log('uit beeld')
        entry.target.classList.remove('animatie')
      }
    })
  }

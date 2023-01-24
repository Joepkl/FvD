// Navigatie interactie
const hamburgerMenu = document.querySelector('nav > button')
const navItems = document.querySelector('nav > ul')

hamburgerMenu.addEventListener('click', openMenu)


function openMenu(){
    hamburgerMenu.classList.toggle('open')
    navItems.classList.toggle('open2')
}




function animatie(){

}



// Scrollbased animatie INTERSECTION OBSERVER
function createObserver() {
    let options = {
    //   root: null,
    //   rootMargin: "0px",
        threshold: 0
    };

    let observer
    observer = new IntersectionObserver(callback, options)

    const boxElement = document.querySelectorAll('main section div')
    for (let target of boxElement){
        observer.observe(target)
    }
}
  
createObserver()

function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('in beeld') 
        entry.target.classList.add('test')
      } else {
        console.log('uit beeld')
        entry.target.classList.remove('test')
      }
    });
  }
  
// Navigatie interactie
const hamburgerMenu = document.querySelector('nav > button')
const navItems = document.querySelector('nav > ul')

hamburgerMenu.addEventListener('click', openMenu)


function openMenu(){
    hamburgerMenu.classList.toggle('open')
    navItems.classList.toggle('open2')
}


// Falcon 9 nummer animatie Launches
function launchesAnimatie(){
    let launches = 0
    const interval1 = setInterval(() => {
        launches += 1
        document.querySelector('main section:nth-of-type(2) div:first-of-type p').textContent = launches
        if(launches == 186){
            clearInterval(interval1)
        }
    }, 10)
}


// Falcon 9 nummer animatie Landings
function landingsAnimatie(){
    let landings = 0
    const interval2 = setInterval(() => {
        landings += 1
        document.querySelector('main section:nth-of-type(2) div:nth-of-type(2) p').textContent = landings
        if(landings == 144){
            clearInterval(interval2)
        }
    }, 10)
}




// Falcon 9 nummer animatie Reflights
function reflightsAnimatie(){
    let reflights = 0
    const interval3 = setInterval(() => {
        reflights += 1
        document.querySelector('main section:nth-of-type(2) div:nth-of-type(3) p').textContent = reflights
        if(reflights == 123){
            clearInterval(interval3)
        }
    }, 10)
}









// Scrollbased nummer animatie INTERSECTION OBSERVER
function createObserver() {
    let options = {
    //   root: document.querySelector('main section:nth-of-type(2) div:first-of-type'),
    //   rootMargin: "0px",
        threshold: 0.1
    };

    let observer;
    const boxElement = document.querySelector('main section:nth-of-type(2) div:first-of-type')
  
    observer = new IntersectionObserver(callback, options);
    observer.observe(boxElement);
}
  
createObserver()

function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        reflightsAnimatie()
        launchesAnimatie()
        landingsAnimatie()
      } else {
        console.log('uit beeld')
      }
    });
  }








// Change img on scroll animatie
function scrollAnimatieImg(){
    const backgroundImg = document.querySelector('section:nth-of-type(3) div:nth-of-type(1)')
    const overviewDiv = document.querySelector('section:nth-of-type(3) div:not(:first-of-type):not(.none)')
    let windowHeight = window.innerHeight;
    let elementTop = overviewDiv.getBoundingClientRect().top;       
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        backgroundImg.classList.add("newImg");
    } 
    else {
        backgroundImg.classList.remove("newImg");
    }
}

window.addEventListener("scroll", scrollAnimatieImg);

// To check the scroll position on page load
scrollAnimatieImg();




// Carousel Falcon 9 overview info
const backButton = document.querySelector('main section:nth-of-type(3) button:nth-of-type(1)')
const nextButton = document.querySelector('main section:nth-of-type(3) button:nth-of-type(2)')
let titel = document.querySelector('h4')
let contentNr = 0
const contentOverview = document.querySelector('main section:nth-of-type(3) div:nth-of-type(2)')
const contentFirstStage = document.querySelector('main section:nth-of-type(3) div:nth-of-type(3)')

function none(){
    contentFirstStage.classList.add('none')
}

none()

function contentCounterUp(){
    contentNr += 1;
    if (contentNr >+ 1){
        contentNr = 1
    }
    if (contentNr == 1){
        titel.textContent = 'FIRST STAGE'
        contentOverview.classList.add('none')
        contentFirstStage.classList.remove('none')
        nextButton.classList.add('darkButton')
        backButton.classList.add('lightButton')
    }
}

function contentCounterDown(){
    contentNr -= 1;
    if (contentNr <+ 0){
        contentNr = 0
    }
    if (contentNr == 0){
        titel.textContent = 'OVERVIEW'
        contentOverview.classList.remove('none')
        contentFirstStage.classList.add('none')
        nextButton.classList.remove('darkButton')
        backButton.classList.remove('lightButton')
    }
}

nextButton.addEventListener('click', contentCounterUp)
backButton.addEventListener('click', contentCounterDown)







//Falcon 9 first stage carousel
const content = document.querySelector('main section:nth-of-type(3) div:nth-of-type(3) p')
const buttonOverview = document.querySelector('main section:nth-of-type(3) div:nth-of-type(3) li:nth-of-type(1) button')
const buttonEngines = document.querySelector('main section:nth-of-type(3) div:nth-of-type(3) li:nth-of-type(2) button')
const buttonLandinglegs = document.querySelector('main section:nth-of-type(3) div:nth-of-type(3) li:nth-of-type(3) button')

function active(){
    buttonOverview.classList.add('active')
}

active()

function overview(){
    content.textContent = 'Falcon 9’s first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant.'
    buttonOverview.classList.add('active')
    buttonEngines.classList.remove('active')
    buttonLandinglegs.classList.remove('active')
}

function engines(){
    content.textContent = 'The nine Merlin engines on the first stage are gradually throttled near the end of first-stage flight to limit launch vehicle acceleration as the rocket’s mass decreases with the burning of fuel. These engines are also used to reorient the first stage prior to reentry and to decelerate the vehicle for landing.'
    buttonEngines.classList.add('active')
    buttonOverview.classList.remove('active')
    buttonLandinglegs.classList.remove('active')
}

function landinglegs(){
    content.textContent = 'The Falcon 9 first stage is equipped with four landing legs made of state-of-the-art carbon fiber with aluminum honeycomb.'
    buttonLandinglegs.classList.add('active')
    buttonOverview.classList.remove('active')
    buttonEngines.classList.remove('active')
}

buttonOverview.addEventListener('click', overview)
buttonEngines.addEventListener('click', engines)
buttonLandinglegs.addEventListener('click', landinglegs)







//Falcon 9 first Merlin carousel
let contentMerlin = document.querySelector('main section:nth-of-type(4) p:nth-of-type(2)')
const sealevelButton = document.querySelector('main section:nth-of-type(4) li:nth-of-type(1) button')
const vaccuumButton = document.querySelector('main section:nth-of-type(4) li:nth-of-type(2) button')
let imgMerlin = document.querySelector('main section:nth-of-type(4) img')

function active2(){
    sealevelButton.classList.add('active')
}

active2()

function content1(){
    contentMerlin.textContent = 'Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.'
    sealevelButton.classList.add('active')
    vaccuumButton.classList.remove('active')
    imgMerlin.src = './images/merlin.png'
}

function content2(){
    contentMerlin.textContent = 'Merlin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine.'
    vaccuumButton.classList.add('active')
    sealevelButton.classList.remove('active')
    imgMerlin.src = './images/merlin2.jpeg'
}

sealevelButton.addEventListener('click', content1)
vaccuumButton.addEventListener('click', content2)











//Falcon 9 IMG carousel with buttons
let carrouselElementsContainer = document.querySelector("main section:nth-of-type(5) ul")
let carrouselElements = carrouselElementsContainer.querySelectorAll("li")
let linkButtons = document.querySelectorAll("main section:nth-of-type(5) div a")


// de links/rechts link-buttons initialiseren en activeren
function iniLinkButtons(){
    linkButtons.forEach((button) => {
        button.addEventListener('click', function(e){
            e.preventDefault()
            let direction = this.getAttribute("href")
            goToElement(direction)
        })
    })
}


// het eerste element actief maken
function iniStartPosition() {
    carrouselElements[0].classList.add("current")
    carrouselElementsContainer.scrollLeft = 0
}


// naar volgende/vorige element //
function goToElement(direction) {
    let currentElement = document.querySelector(".current")

    let newElement
    if (direction == "previous") {
        newElement = currentElement.previousElementSibling;
        if (!newElement) {
            newElement = carrouselElementsContainer.querySelector("li:last-of-type");
        }
    } 
    else {
        newElement = currentElement.nextElementSibling;
        if (!newElement) {
            newElement = carrouselElementsContainer.querySelector("li:first-of-type");
        }
    }

    // naar het nieuwe element scrollen
    scrollToElement(newElement);
}



function scrollToElement(newElement) {
    let carouselElementsContainer = newElement.closest("ul");
	let newElementOffset = newElement.offsetLeft
	
    carouselElementsContainer.scrollTo({
		left: newElementOffset
	})
    // nieuwe element current element maken
    updateCurrentElement(newElement);
}


function updateCurrentElement(newElement) {
    // het huidige current element opzoeken en veranderen
    let currentElement = carrouselElementsContainer.querySelector(".current");
    currentElement.classList.remove("current");
    newElement.classList.add("current");

    let imgTitel = document.querySelector('main section:nth-of-type(5) p')
    imgTitel.textContent = newElement.querySelector('img').getAttribute('alt')
}

iniLinkButtons();	
iniStartPosition();





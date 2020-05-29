/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const unorderedList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section'); //used for scroll event fucnction and buildNav

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    for (const sect of sections){
        const listChild = document.createElement('li');
        listChild.className = "menu__link";
        //listChild.innerText = sect.querySelector('h2').innerText 
        listChild.innerText = sect.dataset.nav;
        unorderedList.appendChild(listChild);
        // Scroll to anchor ID using scrollTO event
        listChild.addEventListener('click',function(){
            sect.scrollIntoView({behavior: "smooth"})
        });
    }
}

buildNav();

const links = document.querySelectorAll('.menu__link'); //gets the links that were dynamiclly generated at the top of the page. must run after buildnav
// Add class 'active' to section when near top of viewport
window.addEventListener('scroll',function(){
    for (const sect of sections){
        if(sect.getBoundingClientRect().top + sect.getBoundingClientRect().bottom / 2 <= this.window.innerHeight){
            sect.classList.add('your-active-class')
            for (link of links) {
                if (link.innerText == sect.querySelector('h2').innerText) {
                  link.classList.add("active-scroll")
                } else {
                  link.classList.remove("active-scroll")
                }
              }
        }else{
            sect.classList.remove('your-active-class')
        } 
    }
})


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



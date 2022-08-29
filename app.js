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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navigationbar = document.getElementById('navbar__list');
const NavBarSections = document.querySelectorAll('section');
const anchors = document.querySelectorAll('.navbar__menu a');
let navigationlist = '';
/**
 * End Global Variables

 * Begin Main Functions
 * 
*/
//Dynamic Navigation Bar
function NavBar () {
     //loop over each Section
    NavBarSections.forEach(section => 
    {
        //Get section Id & Section title
        const sectionID = section.getAttribute('id');
        const sectionDataNav = section.getAttribute('data-nav');
         // store sections inside navigation list
        navigationlist += `<li> <a class="nav__link menu__link" href="#${sectionID}"> ${sectionDataNav}</a></li>`;
    });
    // append the list to the navigation bar
    navigationbar.innerHTML = navigationlist;
}




// Add class 'active' to section when near top of viewport

function Activation() {
    //loop over the section
    NavBarSections.forEach(section => {
        //get the size of the section & position
        let SectionCordinates = section.getBoundingClientRect();
        const ID = section.getAttribute('id');
        if (SectionCordinates.top <= 200 && SectionCordinates.bottom >= 200) {
            // if the section in this specific range the section will be active
            document.querySelector(`#${ID}`).classList.add('your-active-class');
        }
        else {
            //else if the section will not be active
            document.querySelector(`#${ID}`).classList.remove('your-active-class');
        }
    });
}



// add the event listener on clicking  the section <a> in nav-bar so that the page will scroll to the corresponding section using anchor/section ID
function scroll () {
    anchors.forEach(anchor => {
        anchor.addEventListener('click', (event)=>{
            event.preventDefault();
            document.querySelectorAll(anchor.getAttribute('section')).scrollIntoView({behavior: 'smooth' });
        });
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
NavBar();
// Scroll to section on link click
scroll();
// Set sections as active
document.addEventListener('scroll', Activation);


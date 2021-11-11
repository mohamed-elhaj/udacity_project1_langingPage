/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * Dependencies: None
 * JS Standard: ESlint
*/
/**
 * Define Global Variables
*/

const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");


const createLink = (i) => {
    const navItem = document.createElement("li");
    navItem.innerHTML = sections[i].dataset.nav;
    navItem.setAttribute("data-link", sections[i].id);
    navItem.setAttribute("id", `link${i+1}`);
    navItem.classList.add("section-link");
    navList.appendChild(navItem);
}

for (let i=0; i<sections.length; i++) createLink(i);


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -1*(1/3)*window.innerHeight &&
        rect.bottom <= (window.innerHeight || window.innerHeight)

    );
}


// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", () => {
    for (const section of sections){
        if (isInViewport(section)){
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class")
        }
    }
});

// Scroll to anchor ID using ScrollIntoView event
const links = document.querySelectorAll(".section-link");
links.forEach(link => {
    link.addEventListener("click", () => {
        const section = document.getElementById(link.getAttribute("data-link"))
        section.scrollIntoView({behavior: "smooth", block: "start"});
    })
})


// Set sections as active
window.addEventListener("scroll", () => {
    for (const section of sections) {
        // Get the corresponding link
        const link = document.querySelector(`#link${section.getAttribute("data-num")}`);

        if (section.classList.contains("your-active-class")){
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    }
})

// Scroll to top
const toTop = document.querySelector(".to-top");
toTop.addEventListener("click", ()=> {
    window.scrollTo(0, 0);
})

// Show ScrollToTop button
window.addEventListener("scroll", () => {
    (window.scrollY >= window.innerHeight)
    ? toTop.style.display = "block"
    : toTop.style.display = "none";
})
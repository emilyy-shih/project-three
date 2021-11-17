
//Elements

//buttons (forward/backward) it will be outside the container
//container (will contains the slide stuff)
//has text and/or images

//Styles
//transitions (fade/slideover)
//fills entire screen (Each slide)
//buttons need to be on top the slides, and only a single pair. 
//active styling

//logic
//get the buttons (listen to them) container/slides (modifying them)
//remove the active class from the currently displayed slide and add it to the next visible slide. 
//wire up the buttons for going back/next

//Think about scenarios before coding
// Three slides: 0 1 0 (1 is active right now)
// goNext -> 0 0 1
// 0 1 0 -> goBack -> 1 0 0 
// 1 0 0 -> goBack -> 0 0 1
// 0 0 1 -> goNext -> 1 0 0 
// think about if and else scenario. 
// Console: slides[0].nextElementSibling
// get currently active slide: document.querySelector (".slide.active")
// get last slide: document.querySelector (".slide: last-of-type")

// Get
/*let back = document.querySelector(".back");
let next = document.querySelector(".next");
let slide1 = document.querySelectorAll (".slide");

// Define Behavior
function goBack() {
    // TODO: Make it actually go back
    console.log("BACK");
}

function goNext() {
    // TODO: Make it actually go forward. these requires some additional logic. think about the different scenarios in a different slideshow. 
    console.log("NEXT");
}

// Wire it up
back.addEventListener("click", goBack);
next.addEventListener("click", goNext);
*/

/* Get */
let slideIndex= 0;
let back = document.querySelector(".back");
let next = document.querySelector(".next");
let slides = document.querySelectorAll(".slide");

/* Define Behavior */
function goBack() {
  /* TODO - Make it actually go back */
  console.log("BACK");
  slides[slideIndex].classList.toggle("active");
  if (slideIndex - 1 < 0) {
      slideIndex = slides.length - 1;
  } else{
      slideIndex--;
  }
  slides[slideIndex].classList.toggle("active");
}

function goNext() {
  /* TODO - Make it actually go next */
  console.log("NEXT");
  slides[slideIndex].classList.toggle("active");
  if (slideIndex +1 > slides.length - 1) {
      slideIndex =0;
  } else{
      slideIndex++;
  }
  slides[slideIndex].classList.toggle("active");


}

/* Wire It Up */
back.addEventListener("click", goBack);
next.addEventListener("click", goNext);


// slides[0].nextElementSibling
// slides[0].previousElementSibling
// document.querySelector(".slide")
// document.querySelector(".slide.active")
// document.querySelector(".slide:last-child")

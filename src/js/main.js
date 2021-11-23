/* Get */
let slideIndex = 0;
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
  } else {
    slideIndex--;
  }
  slides[slideIndex].classList.toggle("active");
}

function goNext() {
  /* TODO - Make it actually go next */
  console.log("NEXT");
  slides[slideIndex].classList.toggle("active");
  if (slideIndex + 1 > slides.length - 1) {
    slideIndex = 0;
  } else {
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

let triggers = document.querySelectorAll(".open-modal");
let modals = document.querySelectorAll(".modal");

// Define Behavior
function toggleModal() {
  document
    .getElementById(this.id.replace("open-", ""))
    .classList.toggle("active");
}

function dismissModal() {
  this.className = "modal";
}

// Wire It Up
triggers.forEach((trigger) => {
  trigger.addEventListener("click", toggleModal);
});

modals.forEach((modal) => {
  modal.addEventListener("click", dismissModal);
});

// How long does it take to fall?
var duration = 10000;

// How often are particles generated?
var rate = 1000;

// Get root document
var root = document.documentElement;

// Get the containing element
var container = document.querySelector(".container");

// Intialize variables but not giving a value yet
var width;
var height;

// Get the dimensions and update CSS
var dimensions = function () {
  // Get the width of the container
  width = container.offsetWidth;

  // Get the height of the container
  height = container.offsetHeight;

  // Set height in CSS
  root.style.setProperty("--height", `${height}px`);
};

// Invoke dimensions
dimensions();

// Run dimensions on resize
window.onresize = dimensions;

// Function that emit partlce
var emit = function () {
  // Create particle element
  var particle = document.createElement("img");

  // TODO: Make source dynamic or psuedo random
  // image_1, image_2, then just pick a random number between 1 and 5
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  // Add image source to particle
  particle.src = "./img/coffee-bean.png";

  // Add particle class and random rotation
  particle.className =
    Math.random() >= 0.5 ? "particle left" : "particle right";

  // Add random left value so particle emit across the width of the container
  var left = Math.floor(Math.random() * (width - 50));

  // Add the random left value to the particle
  particle.style.left = `${left}px`;

  // Append the particle to the container
  container.appendChild(particle);

  // Clean up particle
  setTimeout(() => {
    particle.remove();
  }, duration);
};

// Emit particles with setInterval
var interval = setInterval(emit, rate);

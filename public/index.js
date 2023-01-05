document.querySelector('.icon-one').addEventListener("click", function() {
  document.querySelector('.icon-one').classList.toggle('active-one');
});
      function toggleMenu() {
var navbar = document.querySelector('.navlist');
var menu = document.querySelector('.hamburger-menu');
navbar.classList.toggle('show');
menu.classList.toggle('open');
      } 

var wordPicker = ["Experience the taste of Nigeria with our delicious catering services", 
"From intimate gatherings to grand events, we cater to your every need", 
"Bring the flavors of Nigeria to your next event with our expert catering team", 
"Celebrate in style with our customizable catering options", 
"Leave the cooking to us - let us cater your next event and impress your guests!",
"Impress your guests with our wide variety of traditional dishes",
"Delicious meals for any budget"

]
var i = 0;
var time = setInterval(function() {
    $("#heroword").text(wordPicker[i]);
    ScrollReveal().reveal('#heroword');
    i++;
  if (i >= wordPicker.length) {
    i = 0; }
}, 6000)

const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear; 

// Define the images array
const images = [
  'images/food1.png',
  'images/food2.png',
  'images/food3.png',
  'images/food4.png',
  'images/food5.png',
  'images/food6.png'
];

// Set the current index to 0
let currentIndex = 0;

// Define the updateHeroBackground function
function updateHeroBackground() {
  // Get the hero element
  const hero = document.getElementById('hero');
  $('#hero').css('background-size', 'cover');

  // Increment the current index or set it to 0 using an if-else statement
  if (currentIndex + 1 >= images.length) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }

  // Update the background image of the hero element
  $('#hero').css('background-image', `url(${images[currentIndex]})`)}

// Call the updateHeroBackground function every seven seconds
setInterval(updateHeroBackground, 7000);


function about(){
    var element = document.getElementById("about");
    element.scrollIntoView();
    }

    ScrollReveal().reveal('.service')
    ScrollReveal().reveal('.stext', { delay: 500 });
    ScrollReveal().reveal('#about', { delay: 600 })
    ScrollReveal().reveal('#gallery', { delay: 600 })

    ScrollReveal().reveal('#testimonials')
    ScrollReveal().reveal('.person1', { delay: 600 })
    ScrollReveal().reveal('.person2', { delay: 700 })
    ScrollReveal().reveal('.person3', { delay: 800 })

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      autoplay: {
        delay: 10000,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
 $(window).on('scroll', function() {
      var scrollPos = $(window).scrollTop();
      if (scrollPos >= 600) {
        $('nav').addClass('fixed');
      }
      if (scrollPos < 600) {
        $('nav').removeClass('fixed');
      }
    });
    

const testimonialsContainer = document.querySelector(".testimonials-container");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

// Handle clicking of the prev button
prevButton.addEventListener("click", function() {
  testimonialsContainer.scrollLeft -= testimonialsContainer.offsetWidth;
});

// Handle clicking of the next button
nextButton.addEventListener("click", function() {
  testimonialsContainer.scrollLeft += testimonialsContainer.offsetWidth;
});

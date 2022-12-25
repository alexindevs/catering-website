var wordPicker = ["The One-Stop Shop for all your Catering Services", "The Home of Delicious Food", "Yummy, Mouthwatering Cakes"]
var i = 0;
var time = setInterval(function() {
    $("#heroword").text(wordPicker[i]);
    ScrollReveal().reveal('#heroword');
    i++;
  if (i >= wordPicker.length) {
    i = 0; }
}, 7000)

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
    
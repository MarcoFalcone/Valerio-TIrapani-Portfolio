//loader//
$(window).on('load', function() {
  $('.loader').fadeOut(1000);
  $('.content').fadeIn(1000);
});

//image automatic carousel//
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("foto");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.opacity = 1;
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

//fancybox
$(document).ready(function() {
  $('[data-fancybox="images"]').fancybox({
    infobar: false,
    buttons: [
      'close'
    ],
  });
})

//navigation
$(document).ready(function() {
  $('.prima').click(function(e) {
    $('.home').delay(400).fadeIn(1000);
    $('.footer').delay(400).fadeIn(1000);
    $('.gallery').fadeOut();
    $('.aboutme').fadeOut();
    $('.contacts').fadeOut();

    setTimeout(function() {
      $('.frame').removeClass('slideframe');
    }, 400);
  });

  $('.galleria').click(function(e) {
    $('.home').fadeOut(400);
    $('.footer').fadeOut(400);
    $('.frame').addClass('slideframe');
    $('.gallery').delay(400).fadeIn(1000);
    $('.aboutme').fadeOut(400);
    $('.contacts').fadeOut(400);
  });

  $('.chisono').click(function(e) {
    $('.home').fadeOut(400);
    $('.footer').fadeOut(400);
    $('.frame').addClass('slideframe');
    $('.aboutme').delay(400).fadeIn(1000);
    $('.gallery').fadeOut(400);
    $('.contacts').fadeOut(400);
  });

  $('.contatti').click(function(e) {
    $('.home').fadeOut(400);
    $('.footer').fadeOut(400);
    $('.frame').addClass('slideframe');
    $('.contacts').delay(400).fadeIn(1000);
    $('.gallery').fadeOut(400);
    $('.aboutme').fadeOut(400);
  });
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
document.getElementById("dropbtn").onclick = function() {show()};

function show() {
    document.getElementById("links").classList.toggle("show");
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

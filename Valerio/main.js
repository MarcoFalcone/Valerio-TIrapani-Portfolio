//loader//
$(window).on('load', function() {
  $('.loader').fadeOut(1000);
  $('.content').fadeIn(1000);
});

//fade out page//
jQuery('.prima, .galleria, .progetti, .chisono').click(function(e) {
  e.preventDefault();
  newLocation = this.href;
  jQuery('body').fadeOut(600, newpage);
});

function newpage() {
  window.location = newLocation;
}

//reload page on backbutton//
$(window).bind("pageshow", function(event) {
  if (event.originalEvent.persisted) {
    window.location.reload();
  }
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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
document.getElementById("dropbtn").onclick = function() {
  show()
};

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

//animations
$(document).ready(function() {

  $('.galleria').click(function(e) {
    $('.frame').addClass('slideframe');
    $('.prox').addClass('slideright');
    $('.contatti').addClass('slideleft');
  });

  $('.chisono').click(function(e) {
    $('.frame').addClass('slideframe');
    $('.prox').addClass('slideright');
    $('.contatti').addClass('slideleft');
  });

  $('.progetti').click(function(e) {
    $('.frame').addClass('slideframe');
    $('.prox').addClass('slideright');
    $('.contatti').addClass('slideleft');
  });
});

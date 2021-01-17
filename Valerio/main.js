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

//loader//
$(window).on('load', function(){

  $('.content').fadeIn(1000);
});


$('.galleria').click(function(e) {
  $('.home').fadeOut(400);
  $('.name').addClass('slidename');
  $('.galleria').addClass('slidegalleria');
  $('.chisono').addClass('slidechisono');
  $('.contatti').addClass('slidecontatti');
  $('.frame').addClass('slideframe');
  $('.gallery').delay(400).fadeIn(1000);
  $('.navbar').delay(400).fadeIn(1000);
});


$('.chisono').click(function(e) {
  $('.home').fadeOut(400);
  $('.name').addClass('slidename');
  $('.galleria').addClass('slidegalleria');
  $('.chisono').addClass('slidechisono');
  $('.contatti').addClass('slidecontatti');
  $('.frame').addClass('slideframe');
  $('.aboutme').delay(400).fadeIn(1000);
  $('.navbar').delay(400).fadeIn(1000);
});

$('.contatti').click(function(e) {
  $('.home').fadeOut(400);
  $('.name').addClass('slidename');
  $('.galleria').addClass('slidegalleria');
  $('.chisono').addClass('slidechisono');
  $('.contatti').addClass('slidecontatti');
  $('.frame').addClass('slideframe');
  $('.contacts').delay(400).fadeIn(1000);
  $('.navbar').delay(400).fadeIn(1000);
});

$('.namenavbar').click(function(e) {
  $('.home').delay(400).fadeIn(1000);
  $('.navbar').fadeOut();
  $('.gallery').fadeOut();
  $('.aboutme').fadeOut();
  $('.contacts').fadeOut();

  setTimeout(function() {
    $('.frame').removeClass('slideframe');
    $('.name').removeClass("slidename");
    $('.galleria').removeClass('slidegalleria');
    $('.chisono').removeClass('slidechisono');
    $('.contatti').removeClass('slidecontatti');
  }, 400);
});

$('.gallerianavbar').click(function(e) {
  $('.aboutme').fadeOut(400);
  $('.contacts').fadeOut(400);
  $('.gallery').delay(400).fadeIn(1000);
});

$('.chisononavbar').click(function(e) {
  $('.gallery').fadeOut(400);
  $('.contacts').fadeOut(400);
  $('.aboutme').delay(400).fadeIn(1000);
});

$('.contattinavbar').click(function(e) {
  $('.gallery').fadeOut(400);
  $('.aboutme').fadeOut(400);
  $('.contacts').delay(400).fadeIn(1000);
});

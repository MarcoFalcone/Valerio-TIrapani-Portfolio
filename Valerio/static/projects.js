//loader//
$(window).on('load', function() {
  $('.projects').fadeIn(1000);
});

//fade out page//
jQuery('.prima, .galleria, .progetti, .chisono').click(function(e) {
  e.preventDefault();
  newLocation = this.href;
  jQuery('body').fadeOut(newpage);
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
  $('.progetto').click(function(e) {
    $('.progetto').fadeOut(400);
    $('.paintedbodies').delay(400).fadeIn(1000);
  });

  $('.back').click(function(e) {
    $('.paintedbodies').fadeOut(400);
    $('.progetto').delay(400).fadeIn(1000);
  });
});

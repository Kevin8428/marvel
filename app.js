$(document).ready(function () {
  $('#home-link').on('click', function(){window.location = $(this).find("a").attr("href");return false;});
  $('#services-link').on('click', function(){window.location = $(this).find("a").attr("href");return false;});
  $('#about-link').on('click', function(){window.location = $(this).find("a").attr("href");return false;});
  $('#pictures-link').on('click', function(){window.location = $(this).find("a").attr("href");return false;});
  $('#contact-link').on('click', function(){window.location = $(this).find("a").attr("href");return false;});
  $('#bulletLooper').on('shown', function(e){
            $('.looper-nav > li', this)
                    .removeClass('active')
                    .eq(e.relatedIndex)
                        .addClass('active');
        });
  $(".icon").click(function () {
    $(".mobilenav").fadeToggle(500);
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });
  $('.lightbox img').on('click', function(e){
    // $('.content-container').addClass('wider')
    $('.content-container').css({"width": "100%"});
  });
  $('.lightbox-close').on('click', function(e) {
    $('.content-container').css({"width": "80%"})
  })
  var elem = $('#_' + window.location.hash.replace('#', ''));
  if(elem) {
       $.scrollTo(elem.left, elem.top);
  }
});

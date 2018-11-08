$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('.header').addClass('header-background')
      }
      if ($(this).scrollTop() < 50) {
         $('.header').removeClass('header-background')
      }
   });
});

$('.mobile-nav-btn').on('click', function(){
  $(this).find('.fa-bars').toggleClass('fa-times');
  $('ul#menu').toggleClass('active');
});


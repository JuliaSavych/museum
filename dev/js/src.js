const $header = document.getElementById('header');

window.addEventListener('scroll', event => {
  window.pageYOffset > 50 ? $header.classList.add('header-background') : $header.classList.remove('header-background');
});

$('.mobile-nav-btn').on('click', function(){
  $(this).find('.fa-bars').toggleClass('fa-times');
  $('ul#menu').toggleClass('active');
});

 $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true
});
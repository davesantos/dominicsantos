const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 500,
  autoHeight: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 18,
  preloadImages: false,

  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

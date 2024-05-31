var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
 loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    depth:500,
    modifer:1,
    slidesShadows:true,
    rotate:0,
    stretch:0
    },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
 
});
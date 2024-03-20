var swiper = new Swiper(".bookSlider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  keyboard: {
    enabled: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: swiper,
  },
  loop: true,
});

var favoriteReads = new Splide(".favoriteReads", {
  type: "loop",
  perPage: 3,
  autoplay: "play",
  breakpoints: {
    768: { perPage: 2 },
    640: { perPage: 1 },
  },
  perMove: 1,
});
favoriteReads.mount();

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  mousewheel: true,
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

// swiper
// function slider(id) {
//   const seriesSlider = new Splide(`#${id}`, {
//     type: "loop",
//     perPage: 3,
//     breakpoints: {
//       800: {
//         perPage: 2,
//       },
//       480: {
//         perPage: 1,
//       },
//     },
//     focus: 0,
//   });
//   seriesSlider.mount();
// }

// slider("seriesSlider");
// slider("movieSlider");
// slider("cartoonAndAnimeSlider");

// waypoints
// const servises = document.getElementById("services");
// const showMenu = document.querySelector(".sidebar-hide");
// const waypoint = new Waypoint({
//   element: servises,
//   handler: function (direction) {
//     if (direction === "up") {
//       showMenu.classList.remove(
//         "navbar-shodow",
//         "position-fixed",
//         "animate__fadeInDown"
//       );
//     } else {
//       showMenu.classList.add(
//         "navbar-shodow",
//         "position-fixed",
//         "animate__fadeInDown"
//       );
//     }
//   },
//   offset: "40%",
// });

// go to top
// const to_top_btn = document.getElementById("to-top-btn");
// const toTop = new Waypoint({
//   element: to_top_btn,
//   handler: function (direction) {
//     if (direction === "up") {
//       to_top_btn.classList.remove(
//         "show-top-btn",
//         "animate__animated",
//         "animate__faster",
//         "animate__bounce"
//       );
//     } else {
//       to_top_btn.classList.add(
//         "show-top-btn",
//         "animate__animated",
//         "animate__faster",
//         "animate__bounce"
//       );
//     }
//   },
//   offset: "60%",
// });

const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  speed: 800,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

function init() {
  const nama = "Devin";

  function tampil() {
    console.log(nama);
  }

  return tampil;
}

init();

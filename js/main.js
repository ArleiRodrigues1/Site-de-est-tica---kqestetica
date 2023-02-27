var myAnime

function myFunction() {
  myAnime = setTimeout(showPage, 300);
}

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('myDiv').style.display = 'block';
}



// SWIPER
var swiper = new Swiper('.about-content', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// REVIEWS
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// TRATAMENTOS
var swiper = new Swiper(".trataments-content", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


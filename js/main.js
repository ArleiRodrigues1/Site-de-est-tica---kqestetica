var myAnime

function myFunction() {
  myAnime = setTimeout(showPage, 300);
}

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('myDiv').style.display = 'block';
}



// SWIPER
var swiper = new Swiper(".about-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    360: {
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    337: {
      slidesPerView: 1.5,
      spaceBetween: 100,
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    390: {
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    667: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 140,
    },
    996: {
      slidesPerView: 4,
      spaceBetween: 180,
    },
     1000: {
      slidesPerView: 4,
      spaceBetween: 150,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 150,
    },
    1480: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
     1400: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1460: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// REVIEWS
var swiper = new Swiper(".reviews-content", {
  loop: true,
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
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



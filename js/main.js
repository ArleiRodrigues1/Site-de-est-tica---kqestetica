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
  grabCursor: true,
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
      spaceBetween: 110,
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
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  navigation: {
    clickable: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
 

// TRATAMENTOS
var swiper = new Swiper(".trataments-content", {
  loop: true,
    navigation: {
      clickable: true,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});


var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

 
});

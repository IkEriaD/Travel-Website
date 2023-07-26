const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active'); 
  navigation.classList.toggle('active');
});

// ============ VIDEO SLIDER ==================== 

const navBtn = document.querySelectorAll('.nav-btn');
const videoSlide = document.querySelectorAll('.video-slide');
const Content = document.querySelectorAll('.content')

const sliderNav = function(manual) {
navBtn.forEach((btn) => {
  btn.classList.remove('active');
});

videoSlide.forEach((slide) => {
  slide.classList.remove('active');
});

Content.forEach((content) => {
  content.classList.remove('active');
});

  navBtn[manual].classList.add('active');
  videoSlide[manual].classList.add('active');
  Content[manual].classList.add('active');
}

navBtn.forEach((btn, e) => {
  btn.addEventListener('click', () => {
    sliderNav(e);
  });
});

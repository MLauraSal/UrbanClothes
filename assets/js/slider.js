const slider = document.querySelector('.slider-1');
const slides = document.querySelectorAll('.slide-1');
let currentIndex = 0;

function updateSlider() {
  currentIndex = (currentIndex + 1) % slides.length;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambia de diapositiva cada 3 segundos
setInterval(updateSlider, 3000);
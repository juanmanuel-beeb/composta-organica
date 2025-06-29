document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.querySelector('.carousel-inner');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const items = document.querySelectorAll('.carousel-item');
  
  let currentIndex = 0;

  function updateCarousel() {
    const width = items[0].clientWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  function nextSlide() {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Ajustar si el tamaño cambia (responsive)
  window.addEventListener('resize', updateCarousel);

  // Iniciar posición
  updateCarousel();
});

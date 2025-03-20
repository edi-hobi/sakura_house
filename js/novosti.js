const sliders = document.querySelectorAll('.slider');
const prevButtons = document.querySelectorAll('.prev-button');
const nextButtons = document.querySelectorAll('.next-button');

sliders.forEach((slider, sliderIndex) => {
  const slides = Array.from(slider.querySelectorAll('img'));
  const slideCount = slides.length;
  let slideIndex = 0;
  prevButtons[sliderIndex].addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    slide(slider, slideIndex);
  });
  nextButtons[sliderIndex].addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slideCount;
    slide(slider, slideIndex);
  });
  const slide = (slider, index) => {
    const imageWidth = slider.clientWidth;
    const slideOffset = -index * imageWidth;
    slider.style.transform = `translateX(${slideOffset}px)`;
  }
  window.addEventListener('load', () => {
    slide(slider, slideIndex);
  });
});
// *** CAROUSEL ***
// TODO


const carouselContainer = document.querySelector('.carousel__container');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');

const carouselItems = document.querySelectorAll('.carousel__item');

const scrollAmount = carouselItems[0].offsetWidth + 16;  


const scrollLeft = () => {
  carouselContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
};


const scrollRight = () => {
  carouselContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
};


prevButton.addEventListener('click', scrollLeft);
nextButton.addEventListener('click', scrollRight);

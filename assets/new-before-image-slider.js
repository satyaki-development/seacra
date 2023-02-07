let dots = 2;
let sliderElem = document.querySelector('.slider_week');
let dotElems = sliderElem.querySelectorAll('.slider__dot_w');
let indicatorElem = sliderElem.querySelector('.slider__indicator_w');

Array.prototype.forEach.call(dotElems, dotElem => {

  dotElem.addEventListener('click', e => {

    let currentPos = parseInt(sliderElem.getAttribute('data-pos'));
    let newPos = parseInt(dotElem.getAttribute('data-pos'));

    let newDirection = newPos > currentPos ? 'right' : 'left';
    let currentDirection = newPos < currentPos ? 'right' : 'left';

    indicatorElem.classList.remove(`slider__indicator_w--${currentDirection}`);
    indicatorElem.classList.add(`slider__indicator_w--${newDirection}`);
    sliderElem.setAttribute('data-pos', newPos);

  });

});
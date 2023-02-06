let dots = 2;
let sliderElem = document.querySelector('.slider_alisha');
let dotElems = sliderElem.querySelectorAll('.slider__dot');
let indicatorElem = sliderElem.querySelector('.slider__indicator_a');

Array.prototype.forEach.call(dotElems, dotElem => {

  dotElem.addEventListener('click', e => {

    let currentPos = parseInt(sliderElem.getAttribute('data-pos'));
    let newPos = parseInt(dotElem.getAttribute('data-pos'));

    let newDirection = newPos > currentPos ? 'right' : 'left';
    let currentDirection = newPos < currentPos ? 'right' : 'left';

    indicatorElem.classList.remove(`slider__indicator_a--${currentDirection}`);
    indicatorElem.classList.add(`slider__indicator_a--${newDirection}`);
    sliderElem.setAttribute('data-pos', newPos);

  });

});
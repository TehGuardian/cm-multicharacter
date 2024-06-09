import './../scss/style.css';

const wrapper = document.querySelector('.character-info');

wrapper.addEventListener('mousemove', function ($event) {
    console.log($event.clientX);

    wrapper.computedStyleMap.setProperty('--xPos', `${$event.clientX}
    px`);
    wrapper.computedStyleMap.setProperty('--yPos', `${$event.clientY}
    px`);
});
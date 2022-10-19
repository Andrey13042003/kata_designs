const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {

    mySwiper = new Swiper('.swiper', {

    observer: true,
    slideClass: 'swiper__slide',
    observeParents: true,
    slidesPerView: "auto",
    watchOverflow: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination', 
        clickable: true,
    },
    });
    slider.dataset.mobile = 'true';
}

const btn = document.querySelector('.section__btn');
const list = document.querySelector('.swiper__list');
const span = document.querySelector('.span')
btn.addEventListener('click', function(e) {
    btn.classList.toggle('arrows');
    list.classList.toggle('swiper__list--active');
    if (list.classList.contains('swiper__list--active')) {
        span.textContent = 'Скрыть';
    }
    else {
        span.textContent = 'Показать все';
    }
})

mobileSlider();

window.addEventListener('resize', () => {
    if(window.screen.width < 768 && slider.dataset.mobile == 'false') {
        mobileSlider();
    }
    if(window.screen.width >= 768) {
        slider.dataset.mobile = 'false';

        if(slider.classList.contains('swiper-initialized')) {
            mySwiper.destroy();
        }
    }
});

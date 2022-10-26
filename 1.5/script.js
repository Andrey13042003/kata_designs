const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {

    mySwiper = new Swiper('.swiper', {

    observer: true,
    slideClass: '.swiper-slide',
    observeParents: true,
    slidesPerView: "auto",
    watchOverflow: true,
    pagination: {
        el: '.swiper-pagination', 
        clickable: true,
    },
    });
    slider.dataset.mobile = 'true';
}

if (window.screen.width < 768) {
  mobileSlider();
}


window.addEventListener('resize', () => {
    if (window.screen.width < 768 && slider.dataset.mobile == 'false') {
        mobileSlider();
    }
    if (window.screen.width >= 768) {
        slider.dataset.mobile = 'false';

        if(slider.classList.contains('swiper-initialized')) {
            mySwiper.destroy();
        }
    }
});

const btn = document.querySelector('.section__btn');
const list = document.querySelector('.swiper-wrapper');
const span = document.querySelector('.span')
btn.addEventListener('click', function(e) {
    btn.classList.toggle('arrows');
    list.classList.toggle('swiper-wrapper--active');
    if (list.classList.contains('swiper-wrapper--active')) {
        span.textContent = 'Скрыть';
    }
    else {
        span.textContent = 'Показать все';
    }
})

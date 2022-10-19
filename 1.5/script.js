const slider = document.querySelector('.section__container');

let mySwiper;

function mobileSlider() {

    mySwiper = new Swiper('.swiper', {

    observer: true,
    slideClass: 'section__slide',
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

document.querySelector('button').addEventListener('click', function(){
    let x = document.querySelector('.span');
    let arrow = document.querySelector('.arrow');
    if (x.textContent === "Показать все") {
        document.querySelector('.section__container').classList.add('height');
        x.innerHTML = "Скрыть";
        arrow.classList.toggle('arrows');
    }

    else {
        document.querySelector('.section__container').classList.remove('height');
        x.innerHTML = "Показать все";
        arrow.classList.toggle('arrows');
    }
  });

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

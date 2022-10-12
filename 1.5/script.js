const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
    if(window.screen.width < 768 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            observer: true,
            observeParents: true,
            slidesPerView: "auto",
            pagination: {
                el: '.swiper-pagination', 
                clickable: true,
            },
        });
        slider.dataset.mobile = 'true';
    }

    if(window.screen.width >= 768) {
        slider.dataset.mobile = 'false';

        if(slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}

function myFunction() {
    var x = document.getElementById('myDiv');
    var y = document.getElementById('span');
    x.style.transition = '3s';
    if(x.style.display === 'none') {
        x.style.display = 'block';
        y.innerHTML = "Скрыть";
    }
    else {
        x.style.display = 'none';
        y.innerHTML = "Показать все";
    }
}

mobileSlider();
myFunction();

window.addEventListener('resize', () => {
    mobileSlider();
});
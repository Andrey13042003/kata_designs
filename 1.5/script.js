const slider = document.querySelector('#swiper-container');

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

document.querySelector('button').addEventListener('click', function(){
    let x = document.getElementById('span');
    let arrow = document.getElementById('arrow');
    if (x.textContent === "Показать все") {
        document.getElementById('swiper-container').classList.add('height');
        x.innerHTML = "Скрыть";
        arrow.classList.toggle('arrow');
    }

    else {
        document.getElementById('swiper-container').classList.remove('height');
        x.innerHTML = "Показать все";
        arrow.classList.toggle('arrow');
    }
  });

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});

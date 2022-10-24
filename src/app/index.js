import '../style/style.scss'
import '../style/font.scss'
import '../style/maket3.scss'
import '../style/message.scss'
import '../style/call.scss'
import '../style/swiper.scss'
import '../style/swiper3.scss'

const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {
  mySwiper = new Swiper('.swiper', {
    observer: true,
    slideClass: 'swiper-slide',
    observeParents: true,
    slidesPerView: 'auto',
    watchOverflow: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  })
  slider.dataset.mobile = 'true'
}

window.addEventListener('resize', () => {
  if (window.screen.width < 768 && slider.dataset.mobile == 'false') {
    mobileSlider()
  }
  if (window.screen.width >= 768) {
    slider.dataset.mobile = 'false'

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy()
    }
  }
});

//текст читать далее
const text = document.querySelector('.section__text');
const button = document.querySelector('.section__read-next');
const readnext = document.querySelector('.section__element-text');
button.addEventListener('click', (e) => {
  readnext.classList.toggle('arrow');
  text.classList.toggle('section__text--active');
  if (text.classList.contains('section__text--active')) {
    readnext.textContent = 'Скрыть';
  } else {
    readnext.textContent = 'Читать далее';
  }
});

//первый слайдер
const btn = document.querySelector('.section__btn');
const list = document.querySelector('.swiper-wrapper');
const span = document.querySelector('.span');
btn.addEventListener('click', (e) => {
  btn.classList.toggle('arrows')
  list.classList.toggle('swiper-wrapper--active')
  if (list.classList.contains('swiper-wrapper--active')) {
    span.textContent = 'Скрыть'
  } else {
    span.textContent = 'Показать все'
  }
});

//второй слайдер
const showbuttonAll = document.querySelector('.section-3__btn');
const wrapper = document.querySelector('.wrapper__height');
const allText = document.querySelector('.allText');
showbuttonAll.addEventListener('click', (e) => {
  showbuttonAll.classList.toggle('arr')
  wrapper.classList.toggle('section-3--active')
  if (wrapper.classList.contains('section-3--active')) {
    allText.textContent = 'Скрыть'
  } else {
    allText.textContent = 'Показать все'
  }
});

document.querySelector('.burger__icon').addEventListener('click', () => {
  // при клике по бургеру
  document.querySelector('.aside').classList.add('active'); // добавляем 1.4
});

document.querySelector('.icon__cross').addEventListener('click', () => {
  // при клике по кресту
  document.querySelector('.aside').classList.remove('active'); // убираем
});

document.querySelector('.icon__chat').addEventListener('click', () => {
  // при клике по message
  document.querySelector('.message').classList.add('active'); // добавляем обратную связь
});

document.querySelector('.icon__cross-img').addEventListener('click', () => {
  // при клике по кресту
  document.querySelector('.message').classList.remove('active'); // убираем
});

document.querySelector('.icon__close').addEventListener('click', () => {
  // при клике по message в 1.4
  document.querySelector('.aside').classList.remove('active'); // убираем
  document.querySelector('.message').classList.add('active'); // добавляем обратную связь
});

document.querySelector('.icon__call').addEventListener('click', () => {
  // при клике по звонку
  document.querySelector('.call').classList.add('active'); // добавляем заказать звонок
});

document.querySelector('.icon__cross-image').addEventListener('click', () => {
  // при клике по кресту
  document.querySelector('.call').classList.remove('active'); // убираем
});

document.querySelector('.icon__ring').addEventListener('click', () => {
  // при клике по message в 1.4
  document.querySelector('.aside').classList.remove('active'); // убираем
  document.querySelector('.call').classList.add('active'); // добавляем обратную связь
});

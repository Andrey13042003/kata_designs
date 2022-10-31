/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style/call.scss":
/*!*************************!*\
  !*** ./style/call.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/call.scss?");

/***/ }),

/***/ "./style/font.scss":
/*!*************************!*\
  !*** ./style/font.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/font.scss?");

/***/ }),

/***/ "./style/maket3.scss":
/*!***************************!*\
  !*** ./style/maket3.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/maket3.scss?");

/***/ }),

/***/ "./style/message.scss":
/*!****************************!*\
  !*** ./style/message.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/message.scss?");

/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/style.scss?");

/***/ }),

/***/ "./style/swiper.scss":
/*!***************************!*\
  !*** ./style/swiper.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/swiper.scss?");

/***/ }),

/***/ "./style/swiper3.scss":
/*!****************************!*\
  !*** ./style/swiper3.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/swiper3.scss?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./style/style.scss\");\n/* harmony import */ var _style_font_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/font.scss */ \"./style/font.scss\");\n/* harmony import */ var _style_maket3_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/maket3.scss */ \"./style/maket3.scss\");\n/* harmony import */ var _style_message_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/message.scss */ \"./style/message.scss\");\n/* harmony import */ var _style_call_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/call.scss */ \"./style/call.scss\");\n/* harmony import */ var _style_swiper_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/swiper.scss */ \"./style/swiper.scss\");\n/* harmony import */ var _style_swiper3_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/swiper3.scss */ \"./style/swiper3.scss\");\n\n\n\n\n\n\n\n\nconst slider = document.querySelector('.swiper');\n//текст читать далее\nconst text = document.querySelector('.section__text');\nconst button = document.querySelector('.section__read-next');\nconst readnext = document.querySelector('.section__element-text');\n//первый слайдер\nconst btn = document.querySelector('.section__btn');\nconst list = document.querySelector('.swiper-wrapper');\nconst span = document.querySelector('.span');\n//второй слайдер\nconst showbuttonAll = document.querySelector('.section-3__btn');\nconst wrapper = document.querySelector('.wrapper__height');\nconst allText = document.querySelector('.allText');\n//клики по кнопкам\nconst containerPosition = document.querySelector('.container__position');\nconst aside = document.querySelector('.aside');\nconst message = document.querySelector('.message');\nconst call = document.querySelector('.call');\n\nlet mySwiper;\n\nfunction mobileSlider() {\n  mySwiper = new Swiper('.swiper', {\n    observer: true,\n    slideClass: 'swiper-slide',\n    observeParents: true,\n    slidesPerView: 'auto',\n    spaceBetween: 16,\n    watchOverflow: true,\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    },\n  })\n  slider.dataset.mobile = 'true';\n}\n\nfunction popupClose() {\n  aside.classList.remove('active');\n}\n\nfunction messageClose() {\n  message.classList.remove('active');\n}\n\nfunction callClose() {\n  call.classList.remove('active');\n}\n\nif (window.screen.width < 768) {\n  mobileSlider();\n}\n\nwindow.addEventListener('resize', () => {\n  if (window.screen.width < 768 && slider.dataset.mobile == 'false') {\n    window.location.reload();\n  }\n\n  if (window.screen.width >= 768) {\n    window.location.reload();\n    slider.dataset.mobile = 'false';\n\n    if (slider.classList.contains('swiper-initialized')) {\n      mySwiper.destroy();\n    }\n  }\n});\n\n//текст читать далее\nbutton.addEventListener('click', (e) => {\n  readnext.classList.toggle('arrow');\n  text.classList.toggle('section__text--active');\n  if (text.classList.contains('section__text--active')) {\n    readnext.textContent = 'Скрыть';\n  } else {\n    readnext.textContent = 'Читать далее';\n  }\n});\n\n//первый слайдер\nbtn.addEventListener('click', (e) => {\n  btn.classList.toggle('section__btn--arrows')\n  list.classList.toggle('swiper-wrapper--active')\n  if (list.classList.contains('swiper-wrapper--active')) {\n    span.textContent = 'Скрыть'\n  } else {\n    span.textContent = 'Показать все'\n  }\n});\n\n//второй слайдер\nshowbuttonAll.addEventListener('click', (e) => {\n  showbuttonAll.classList.toggle('arr')\n  wrapper.classList.toggle('section-3--active')\n  if (wrapper.classList.contains('section-3--active')) {\n    allText.textContent = 'Скрыть'\n  } else {\n    allText.textContent = 'Показать все'\n  }\n});\n\n// при клике по бургеру открываем попап и запрещаем скролл по оси y\ndocument.querySelector('.burger__icon').addEventListener('click', () => {\n  aside.classList.add('active');\n  containerPosition.classList.add('container__active');\n});\n\n// закрываем попап и разрешаем скролл\naside.addEventListener(\"click\", function(e){\n  if (!e.target.closest('.aside__menu') || e.target.closest('.icon__cross')) {\n    popupClose(e.target.closest('.aside'));\n    containerPosition.classList.remove('container__active');\n  }\n});\n\n// при клике по message добавляем обратную связь и запрещаем скролл по оси y\ndocument.querySelector('.icon__chat').addEventListener('click', () => {\n  message.classList.add('active');\n  containerPosition.classList.add('container__active');\n});\n\n// закрываем message и разрешаем скролл\nmessage.addEventListener(\"click\", function(e){\n  if (!e.target.closest('.message__menu') || e.target.closest('.icon__cross--img')) {\n    messageClose(e.target.closest('.message'));\n    containerPosition.classList.remove('container__active');\n  }\n});\n\n// при клике по message в попапе убираем попап и добавляем обратную связь\ndocument.querySelector('.icon__close').addEventListener('click', () => {\n  aside.classList.remove('active');\n  message.classList.add('active');\n  containerPosition.classList.add('container__active');\n});\n\n// при клике по звонку добавляем заказать звонок и запрещаем скролл по оси y\ndocument.querySelector('.icon__call').addEventListener('click', () => {\n  call.classList.add('active');\n  containerPosition.classList.add('container__active');\n});\n\n// закрываем call и разрешаем скролл\ncall.addEventListener(\"click\", function(e){\n  if (!e.target.closest('.call__menu') || e.target.closest('.icon__cross--image')) {\n    callClose(e.target.closest('.call'));\n    containerPosition.classList.remove('container__active');\n  }\n});\n\n// при клике по сall в попапе убираем попап и добавляем заказать звонок\ndocument.querySelector('.icon__ring').addEventListener('click', () => {\n  document.querySelector('.aside').classList.remove('active');\n  document.querySelector('.call').classList.add('active');\n  containerPosition.classList.add('container__active');\n});\n\n//при наведении мыши на текст внутри кнопки добавляем стили иконке\ndocument.querySelector('.leave-request').addEventListener('mouseover', () => {\n  document.querySelector('.icon__active1').classList.add('icon__active');\n});\n\ndocument.querySelector('.leave-request').addEventListener('mouseout', () => {\n  document.querySelector('.icon__active1').classList.remove('icon__active');\n});\n\ndocument.querySelector('.repair-status').addEventListener('mouseover', () => {\n  document.querySelector('.icon__active2').classList.add('icon__active');\n});\n\ndocument.querySelector('.repair-status').addEventListener('mouseout', () => {\n  document.querySelector('.icon__active2').classList.remove('icon__active');\n});\n\n\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ })()
;
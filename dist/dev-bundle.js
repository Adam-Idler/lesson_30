/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Timer */ \"./src/modules/Timer.js\");\n/* harmony import */ var _modules_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Menu */ \"./src/modules/Menu.js\");\n/* harmony import */ var _modules_Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Popup */ \"./src/modules/Popup.js\");\n/* harmony import */ var _modules_SmoothScrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/SmoothScrolling */ \"./src/modules/SmoothScrolling.js\");\n/* harmony import */ var _modules_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Tabs */ \"./src/modules/Tabs.js\");\n/* harmony import */ var _modules_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Slider */ \"./src/modules/Slider.js\");\n/* harmony import */ var _modules_ChangePhoto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ChangePhoto */ \"./src/modules/ChangePhoto.js\");\n/* harmony import */ var _modules_Validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/Validate */ \"./src/modules/Validate.js\");\n/* harmony import */ var _modules_Calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/Calculator */ \"./src/modules/Calculator.js\");\n/* harmony import */ var _modules_SendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/SendForm */ \"./src/modules/SendForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n // Timer\n\nvar timer = new _modules_Timer__WEBPACK_IMPORTED_MODULE_0__.default('15 Jan 2021');\ntimer.countTimer(); // Menu\n\nvar menu = new _modules_Menu__WEBPACK_IMPORTED_MODULE_1__.default();\nmenu.toggleMenu(); // Popup\n\nvar popup = new _modules_Popup__WEBPACK_IMPORTED_MODULE_2__.default();\npopup.togglePopUp(); // Smooth scroll\n\nvar smoothScrolling = new _modules_SmoothScrolling__WEBPACK_IMPORTED_MODULE_3__.default();\nsmoothScrolling.scrollTo(); // Tabs\n\nvar tabs = new _modules_Tabs__WEBPACK_IMPORTED_MODULE_4__.default();\ntabs.activateTabs(); // Slider \n\nvar slider = new _modules_Slider__WEBPACK_IMPORTED_MODULE_5__.default();\nslider.sliderActivate(); // Смена фото в блоко \"Наша команда\"\n\nvar changePhoto = new _modules_ChangePhoto__WEBPACK_IMPORTED_MODULE_6__.default();\nchangePhoto.photoChange(); // Валидация форм \n\nvar validate = new _modules_Validate__WEBPACK_IMPORTED_MODULE_7__.default();\nvalidate.init(); // Calculator\n\nvar calcutor = new _modules_Calculator__WEBPACK_IMPORTED_MODULE_8__.default(100);\ncalcutor.calc(); //send-ajax-form\n\nvar sendForm = new _modules_SendForm__WEBPACK_IMPORTED_MODULE_9__.default();\nsendForm.sendAjax();\n\n//# sourceURL=webpack://3dglo.com/./src/index.js?");

/***/ }),

/***/ "./src/modules/Calculator.js":
/*!***********************************!*\
  !*** ./src/modules/Calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Calculator = /*#__PURE__*/function () {\n  function Calculator(price) {\n    _classCallCheck(this, Calculator);\n\n    this.price = price;\n  }\n\n  _createClass(Calculator, [{\n    key: \"calc\",\n    value: function calc() {\n      var _this = this;\n\n      var calcBlock = document.querySelector('.calc-block'),\n          calcType = document.querySelector('.calc-type'),\n          calcSquare = document.querySelector('.calc-square'),\n          calcDay = document.querySelector('.calc-day'),\n          calcCount = document.querySelector('.calc-count'),\n          totalValue = document.getElementById('total');\n\n      var countSum = function countSum() {\n        var total = 0,\n            countValue = 1,\n            dayValue = 1;\n        var typeValue = calcType.options[calcType.selectedIndex].value,\n            squareValue = +calcSquare.value;\n\n        if (calcCount.value > 1) {\n          countValue += (calcCount.value - 1) / 10;\n        }\n\n        if (calcDay.value && calcDay.value < 5) {\n          dayValue *= 2;\n        } else if (calcDay.value && calcDay.value < 10) {\n          dayValue *= 1.5;\n        }\n\n        if (typeValue && squareValue) {\n          total = Math.ceil(_this.price * typeValue * squareValue * countValue * dayValue);\n        }\n\n        var count = +totalValue.textContent;\n        var setID; // Animation \n\n        if (total === 0) {\n          totalValue.textContent = 0;\n          cancelAnimationFrame(setID);\n        } else if (count < total) {\n          count += Math.floor(total / 25);\n          totalValue.textContent = count;\n        } else if (count > total) {\n          count -= Math.floor(count / 10);\n          totalValue.textContent = count;\n        }\n\n        if (total - totalValue.textContent < total / 10 && total - totalValue.textContent > 0) {\n          totalValue.textContent = total;\n          cancelAnimationFrame(setID);\n        }\n\n        setID = requestAnimationFrame(countSum);\n        if (count === total) cancelAnimationFrame(setID);\n      };\n\n      calcBlock.addEventListener('change', function (event) {\n        var target = event.target;\n\n        if (target.matches('select') || target.matches('input')) {\n          countSum();\n        }\n      });\n    }\n  }]);\n\n  return Calculator;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);\n\n//# sourceURL=webpack://3dglo.com/./src/modules/Calculator.js?");

/***/ }),

/***/ "./src/modules/ChangePhoto.js":
/*!************************************!*\
  !*** ./src/modules/ChangePhoto.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ChangePhoto = /*#__PURE__*/function () {\n  function ChangePhoto() {\n    _classCallCheck(this, ChangePhoto);\n  }\n\n  _createClass(ChangePhoto, [{\n    key: \"photoChange\",\n    value: function photoChange() {\n      var command = document.querySelector('#command>.container>.row');\n      var temp;\n      command.addEventListener('mouseover', function (event) {\n        var target = event.target;\n        temp = target.src;\n        target.src = target.dataset.img;\n        target.dataset.img = temp;\n      });\n      command.addEventListener('mouseout', function (event) {\n        var target = event.target;\n        target.dataset.img = target.src;\n        target.src = temp;\n        temp = target.src;\n      });\n    }\n  }]);\n\n  return ChangePhoto;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePhoto);\n\n//# sourceURL=webpack://3dglo.com/./src/modules/ChangePhoto.js?");

/***/ }),

/***/ "./src/modules/Menu.js":
/*!*****************************!*\
  !*** ./src/modules/Menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Menu = /*#__PURE__*/function () {\n  function Menu() {\n    _classCallCheck(this, Menu);\n  }\n\n  _createClass(Menu, [{\n    key: \"toggleMenu\",\n    value: function toggleMenu() {\n      var menuBtn = document.querySelector('.menu'),\n          menu = document.querySelector('menu');\n\n      var handlerMenu = function handlerMenu() {\n        menu.classList.toggle('active-menu');\n      };\n\n      document.addEventListener('click', function (event) {\n        var target = event.target;\n        if (!target.closest('menu')) menu.classList.remove('active-menu');\n        if (target.tagName === 'A' && target.closest('.active-menu') || target.closest('.menu')) handlerMenu();\n      });\n    }\n  }]);\n\n  return Menu;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://3dglo.com/./src/modules/Menu.js?");

/***/ }),

/***/ "./src/modules/Popup.js":
/*!******************************!*\
  !*** ./src/modules/Popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Popup = /*#__PURE__*/function () {\n  function Popup() {\n    _classCallCheck(this, Popup);\n  }\n\n  _createClass(Popup, [{\n    key: \"togglePopUp\",\n    value: function togglePopUp() {\n      var popup = document.querySelector('.popup'),\n          popupBtn = document.querySelectorAll('.popup-btn');\n      var procent = -100,\n          count = 0,\n          idFrame;\n      popup.style.display = 'block';\n      popup.style.transform = \"translate(\".concat(procent, \"%)\");\n\n      function popupAnimation() {\n        count = 10;\n\n        if (procent <= -5) {\n          procent += count;\n          popup.style.transform = \"translate(\".concat(procent, \"%)\");\n          idFrame = requestAnimationFrame(popupAnimation);\n        } else {\n          count = 0;\n          cancelAnimationFrame(idFrame);\n        }\n      }\n\n      function popupAnimationBack() {\n        count = -10;\n\n        if (procent >= -95) {\n          procent += count;\n          popup.style.transform = \"translate(\".concat(procent, \"%)\");\n          idFrame = requestAnimationFrame(popupAnimationBack);\n        } else {\n          count = 0;\n          cancelAnimationFrame(idFrame);\n        }\n      }\n\n      popupBtn.forEach(function (elem) {\n        elem.addEventListener('click', function () {\n          if (window.screen.width > 768) {\n            idFrame = requestAnimationFrame(popupAnimation);\n          } else popup.style.transform = \"translate(0%)\";\n        });\n      });\n      popup.addEventListener('click', function (event) {\n        var target = event.target,\n            cross = target.classList.contains('popup-close') ? true : false;\n        target = target.closest('.popup-content');\n\n        if (!target || cross) {\n          if (window.screen.width > 768) idFrame = requestAnimationFrame(popupAnimationBack);else popup.style.transform = \"translate(-100%)\";\n        }\n      });\n    }\n  }]);\n\n  return Popup;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);\n\n//# sourceURL=webpack://3dglo.com/./src/modules/Popup.js?");

/***/ }),

/***/ "./src/modules/SendForm.js":
/*!*********************************!*\
  !*** ./src/modules/SendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SendForm = /*#__PURE__*/function () {\n  function SendForm() {\n    _classCallCheck(this, SendForm);\n\n    this.errorMessage = 'Что-то пошло не так...';\n    this.loadMessage = 'Загрузка...';\n    this.successMessage = 'Спасибо! Мы скоро с вами свяжимся!';\n    this.forms = document.querySelectorAll('form');\n  }\n\n  _createClass(SendForm, [{\n    key: \"postData\",\n    value: function postData(form, body) {\n      return fetch('./server.php', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(body)\n      });\n    }\n  }, {\n    key: \"sendAjax\",\n    value: function sendAjax() {\n      var _this = this;\n\n      var statusMessage = document.createElement('div');\n      statusMessage.style.cssText = \"\\n            font-size: 2rem;\\n            color: #fff;\\n    \";\n      this.forms.forEach(function (form) {\n        form.addEventListener('submit', function (event) {\n          event.preventDefault();\n          form.appendChild(statusMessage);\n          var formPhone = form.querySelector('.form-phone');\n          formPhone.value = formPhone.value.replace(/\\D/g, '');\n          statusMessage.textContent = _this.loadMessage;\n          var formData = new FormData(form);\n          var body = {};\n          formData.forEach(function (val, key) {\n            body[key] = val;\n          });\n\n          _this.postData(form, body).then(function (response) {\n            if (response.status !== 200) {\n              throw new Error('status network not 200');\n            }\n\n            statusMessage.textContent = _this.successMessage;\n            setTimeout(function () {\n              return statusMessage.remove();\n            }, 3000);\n          })[\"catch\"](function (error) {\n            statusMessage.textContent = _this.errorMessage;\n            console.error(error);\n            setTimeout(function () {\n              return statusMessage.remove();\n            }, 3000);\n          });\n\n          form.reset();\n        });\n      });\n    }\n  }]);\n\n  return SendForm;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendForm);\n\n//# sourceURL=webpack://3dglo.com/./src/modules/SendForm.js?");

/***/ }),

/***/ "./src/modules/Slider.js":
/*!*******************************!*\
  !*** ./src/modules/Slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider() {\n    _classCallCheck(this, Slider);\n  }\n\n  _createClass(Slider, [{\n    key: \"sliderActivate\",\n    value: function sliderActivate() {\n      var slides = document.querySelectorAll('.portfolio-item'),\n          slider = document.querySelector('.portfolio-content'),\n          dotUl = slider.querySelector('.portfolio-dots');\n      var dotsCount = slides.length;\n\n      for (var i = 0; i < dotsCount; i++) {\n        var dot = document.createElement('li');\n        dotUl.insertBefore(dot, dotUl.lastChild);\n        dot.classList.add('dot');\n      }\n\n      var dots = dotUl.querySelectorAll('.dot');\n      dots[0].classList.add('dot-active');\n      var currentSlide = 0,\n          interval;\n\n      var prevSlide = function prevSlide(elem, index, strClass) {\n        return elem[index].classList.remove(strClass);\n      };\n\n      var nextSlide = function nextSlide(elem, index, strClass) {\n        return elem[index].classList.add(strClass);\n      };\n\n      var autoPlaySlide = function autoPlaySlide() {\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\n        prevSlide(dots, currentSlide, 'dot-active');\n        currentSlide++;\n        if (currentSlide >= slides.length) currentSlide = 0;\n        nextSlide(dots, currentSlide, 'dot-active');\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\n      };\n\n      var startSlide = function startSlide() {\n        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n        interval = setInterval(autoPlaySlide, time);\n      };\n\n      var stopSlide = function stopSlide() {\n        clearInterval(interval);\n      };\n\n      slider.addEventListener('click', function (event) {\n        event.preventDefault();\n        var target = event.target;\n        if (!target.matches('.portfolio-btn, .dot')) return;\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\n        prevSlide(dots, currentSlide, 'dot-active');\n\n        if (target.matches('#arrow-right')) {\n          currentSlide++;\n        } else if (target.matches('#arrow-left')) {\n          currentSlide--;\n        } else if (target.matches('.dot')) {\n          dots.forEach(function (elem, index) {\n            if (elem === target) {\n              currentSlide = index;\n            }\n          });\n        }\n\n        if (currentSlide >= slides.length) currentSlide = 0;\n        if (currentSlide < 0) currentSlide = slides.length - 1;\n        nextSlide(dots, currentSlide, 'dot-active');\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\n      });\n      slider.addEventListener('mouseover', function (event) {\n        if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) stopSlide();\n      });\n      slider.addEventListener('mouseout', function (event) {\n        if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) startSlide();\n      });\n      startSlide(1500);\n    }\n  }]);\n\n  return Slider;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://3dglo.com/./src/modules/Slider.js?");

/***/ }),

/***/ "./src/modules/SmoothScrolling.js":
/*!****************************************!*\
  !*** ./src/modules/SmoothScrolling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SmoothScrolling = /*#__PURE__*/function () {\n  function SmoothScrolling() {\n    _classCallCheck(this, SmoothScrolling);\n  }\n\n  _createClass(SmoothScrolling, [{\n    key: \"scrollTo\",\n    value: function scrollTo() {\n      var smoothLinks = document.querySelectorAll('a[href^=\"#\"]');\n\n      var _loop = function _loop(i) {\n        smoothLinks[i].addEventListener('click', function (event) {\n          event.preventDefault();\n          var id = smoothLinks[i].getAttribute('href');\n\n          if (!event.target.classList.contains('close-btn')) {\n            document.querySelector(id).scrollIntoView({\n              behavior: 'smooth',\n              block: 'start'\n            });\n          }\n        });\n      };\n\n      for (var i = 0; i < 7; i++) {\n        _loop(i);\n      }\n    }\n  }]);\n\n  return SmoothScrolling;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmoothScrolling);\n\n//# sourceURL=webpack://3dglo.com/./src/modules/SmoothScrolling.js?");

/***/ }),

/***/ "./src/modules/Tabs.js":
/*!*****************************!*\
  !*** ./src/modules/Tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Tabs = /*#__PURE__*/function () {\n  function Tabs() {\n    _classCallCheck(this, Tabs);\n  }\n\n  _createClass(Tabs, [{\n    key: \"activateTabs\",\n    value: function activateTabs() {\n      var tabHeader = document.querySelector('.service-header'),\n          tabs = tabHeader.querySelectorAll('.service-header-tab'),\n          tabContents = document.querySelectorAll('.service-tab');\n\n      var toggleTabcontent = function toggleTabcontent(index) {\n        for (var i = 0; i < tabContents.length; i++) {\n          if (index === i) {\n            tabs[i].classList.add('active');\n            tabContents[i].classList.remove('d-none');\n          } else {\n            tabs[i].classList.remove('active');\n            tabContents[i].classList.add('d-none');\n          }\n        }\n      };\n\n      toggleTabcontent(0);\n      tabHeader.addEventListener('click', function (event) {\n        var target = event.target;\n        target = target.closest('.service-header-tab');\n\n        if (target) {\n          tabs.forEach(function (item, i) {\n            if (item === target) {\n              toggleTabcontent(i);\n            }\n          });\n        }\n      });\n    }\n  }]);\n\n  return Tabs;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);\n\n//# sourceURL=webpack://3dglo.com/./src/modules/Tabs.js?");

/***/ }),

/***/ "./src/modules/Timer.js":
/*!******************************!*\
  !*** ./src/modules/Timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Timer = /*#__PURE__*/function () {\n  function Timer(deadline) {\n    _classCallCheck(this, Timer);\n\n    this.deadlineDate = deadline;\n  }\n\n  _createClass(Timer, [{\n    key: \"countTimer\",\n    value: function countTimer() {\n      var _this = this;\n\n      var timerHours = document.querySelector('#timer-hours'),\n          timerMinutes = document.querySelector('#timer-minutes'),\n          timerSeconds = document.querySelector('#timer-seconds');\n\n      function getTimeRemaining() {\n        var dateStop = new Date(_this.deadlineDate).getTime(),\n            dateNow = new Date().getTime(),\n            timeRemaining = (dateStop - dateNow) / 1000,\n            seconds = Math.floor(timeRemaining % 60),\n            minutes = Math.floor(timeRemaining / 60 % 60),\n            hours = Math.floor(timeRemaining / 3600) % 24;\n        return {\n          timeRemaining: timeRemaining,\n          hours: hours,\n          minutes: minutes,\n          seconds: seconds\n        };\n      }\n\n      var intervalId = setInterval(updateClock, 1000);\n\n      function updateClock() {\n        var timer = getTimeRemaining();\n\n        if (timer.timeRemaining > 0) {\n          timerHours.textContent = String(timer.hours).replace(/^\\w$/, '0' + timer.hours);\n          timerMinutes.textContent = String(timer.minutes).replace(/^\\w$/, '0' + timer.minutes);\n          timerSeconds.textContent = String(timer.seconds).replace(/^\\w$/, '0' + timer.seconds);\n        } else {\n          timerHours.textContent = '00';\n          timerMinutes.textContent = '00';\n          timerSeconds.textContent = '00';\n          clearInterval(intervalId);\n        }\n      }\n\n      updateClock();\n    }\n  }]);\n\n  return Timer;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);\n\n//# sourceURL=webpack://3dglo.com/./src/modules/Timer.js?");

/***/ }),

/***/ "./src/modules/Validate.js":
/*!*********************************!*\
  !*** ./src/modules/Validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Validate = /*#__PURE__*/function () {\n  function Validate() {\n    _classCallCheck(this, Validate);\n\n    this.calcBlock = document.querySelector('.calc-block');\n    this.textForm = document.querySelectorAll('form');\n  }\n\n  _createClass(Validate, [{\n    key: \"init\",\n    value: function init() {\n      this.validateCalc();\n      this.validateInputText();\n      document.querySelectorAll('.form-email').forEach(function (elem) {\n        return elem.setAttribute('required', true);\n      });\n      document.querySelector('.mess').setAttribute('required', true);\n      document.querySelectorAll('.form-name').forEach(function (elem) {\n        elem.onblur = function (e) {\n          if (e.target.value.length < 2) {\n            e.target.value = '';\n          }\n        };\n      });\n\n      document.getElementById('form2-name').onblur = function (e) {\n        return e.target.value.length < 2 ? e.target.value = '' : '';\n      };\n    }\n  }, {\n    key: \"validateCalc\",\n    value: function validateCalc() {\n      this.calcBlock.addEventListener('input', function (e) {\n        e.target.value = e.target.value.replace(/[^\\d\\.]/, '');\n      });\n    }\n  }, {\n    key: \"validateInputText\",\n    value: function validateInputText() {\n      this.textForm.forEach(function (form) {\n        form.addEventListener('input', function (e) {\n          var target = e.target;\n\n          if (target.classList.contains('form-name') || target.id === 'form2-name') {\n            target.value = target.value.replace(/[^а-яё\\s]{2,15}/i, '');\n          }\n\n          if (target.classList.contains('form-email')) {\n            target.value = target.value.replace(/[а-яё\\s,\\#\\$\\%\\/|\\\\\\[\\]\\{\\}&\\`\\~?!*\\(\\)\\+\\=\\^\\:\\;\\'\\\"]/i, '');\n          }\n\n          if (target.classList.contains('mess')) {\n            target.value = target.value.replace(/[a-z]/i, '');\n          }\n\n          if (target.classList.contains('form-phone')) {\n            if (target.value[1] === '7' || target.value[0] === '7') maskPhone('.form-phone', '+_ (___) ___-__-__');else if (target.value[0] === '8') maskPhone('.form-phone', '_ (___) ___-__-__');else if (target.value[0] === '2') maskPhone('.form-phone', '___-__-__');\n          }\n        });\n      });\n    }\n  }]);\n\n  return Validate;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validate);\n\n//# sourceURL=webpack://3dglo.com/./src/modules/Validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
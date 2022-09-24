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

/***/ "./src/onLoadPage.js":
/*!***************************!*\
  !*** ./src/onLoadPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onLoadRender)\n/* harmony export */ });\nfunction onLoadRender(){\n\n\n    let introText = `Glad to see You. Unfortunately this is not real restaurant page :(. However I'll be pleased if you look around and leave some feedback about page itself. Enjoy!`;\n\n    let creditsText = `This page was build in purpose of practicing Webpack modules, along The Odin Project.`;\n    let creditOne = `Background image created by sunorwind on Unsplash`;\n\n\n\n    let div = document.createElement('div');\n\n    const body = document.querySelector('body');\n\n        const background = document.createElement('div');\n            background.classList.add('background');\n\n\n        const container = document.createElement('div');\n            container.classList.add('container');\n\n                const navbar = document.createElement('div');\n                    navbar.classList.add('navbar');\n\n                        const logo = document.createElement('div');\n                            logo.classList.add('logo');\n                            logo.textContent = 'GOOD SeaFood';\n                        \n                        const buttons = document.createElement('ul');\n                            buttons.classList.add('buttons');\n                                const about = document.createElement('li');\n                                    about.classList.add('button');\n                                    about.setAttribute('id', 'about');\n                                    about.textContent = 'About Us';\n                                const menu = document.createElement('li');\n                                    menu.classList.add('button');\n                                    menu.setAttribute('id', 'menu');\n                                    menu.textContent = 'Menu';\n                                const contact = document.createElement('li');\n                                    contact.classList.add('button');\n                                    contact.setAttribute('id', 'contact');\n                                    contact.textContent = 'Contact';\n                        buttons.appendChild(about);\n                        buttons.appendChild(menu);\n                        buttons.appendChild(contact);\n                navbar.appendChild(logo);\n                navbar.appendChild(buttons);\n\n\n                const main = document.createElement('div');\n                    main.classList.add('main');\n                        const content = document.createElement('div');\n                            content.classList.add('content');\n                                const greetings = document.createElement('h1');\n                                    greetings.classList.add('greetings');\n                                    greetings.textContent = 'Welcome !';\n                                      const intro = document.createElement('p');\n                                        intro.classList.add('intro');\n                                        intro.textContent = introText;\n                                      const credits = document.createElement('p');\n                                        credits.classList.add('credits');\n                                        credits.textContent = creditsText;\n                                        const creditLine = document.createElement('p');\n                                            creditLine.classList.add('credits');\n                                            creditLine.textContent = creditOne;\n\n                            content.appendChild(greetings);    \n                            content.appendChild(intro);\n                            content.appendChild(credits); \n                            content.appendChild(creditLine); \n                main.appendChild(content);\n\n                const footer = document.createElement('div');\n                    footer.classList.add('footer');\n                    footer.textContent = 'Copyright Adrian Holubecki 2022';\n        container.appendChild(navbar);\n        container.appendChild(main);\n        container.appendChild(footer);\n    body.appendChild(background);\n    body.appendChild(container);            \n}\n\n//# sourceURL=webpack://restaurant-page/./src/onLoadPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/onLoadPage.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
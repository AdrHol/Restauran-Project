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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(){\n\n    let contactText = `If You have any questions, don't hesitate to contact our team!`\n\n\n\n    const container = document.querySelector('.content');\n\n        const story = document.createElement('h1');\n            story.classList.add('greetings');\n            story.textContent = contactText;\n        container.appendChild(story);\n\n\n    const contactDatabase = [\n        {\n            name: 'Grandpa Jeremy',\n            role: 'CEO - Founder',\n            mail: 'BigJeremy@coolmail.com'\n        },\n        {\n            name: 'Grandson Josh',\n            role: 'Supply Manager',\n            mail: 'JoshTheManager@coolemail.com',\n        },\n        {\n            name: 'Grand daughter Jamie',\n            role: 'HR Manager',\n            mail: 'JamieHR@coolmail.com',\n        }\n\n    ]\n    contactDatabase.forEach(person => {\n        \n        const contact = document.createElement('div');\n        contact.classList.add('contact');\n            const name = document.createElement('p');\n            name.classList.add('name');\n            name.textContent = person.name;\n            const role = document.createElement('p');\n            role.classList.add('role');\n            role.textContent = person.role;\n            const mail = document.createElement('p');\n            mail.classList.add('mail');\n            mail.textContent = person.mail;\n        contact.appendChild(name);\n        contact.appendChild(role);\n        contact.appendChild(mail);\n        container.appendChild(contact);\n    })\n   \n\n\n           \n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

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
/******/ 	__webpack_modules__["./src/contact.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
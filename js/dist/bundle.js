/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/all.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/all.js":
/*!*******************!*\
  !*** ./js/all.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("WebFontConfig = {\n  google: { families: [\n    'Oranienbaum::latin'\n  ]}\n};\n\n(function() {\n  var wf = document.createElement('script');\n  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +\n    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';\n  wf.type = 'text/javascript';\n  wf.async = 'true';\n  var s = document.getElementsByTagName('script')[0];\n  s.parentNode.insertBefore(wf, s);\n})();\n\n\nvar galleryElems = document.querySelectorAll('.carousel');\n\nfor ( var i = 0, total = galleryElems.length; i < total; i++ ) {\n  var galleryElem = galleryElems[i];\n\n  var flkty = new Flickity( galleryElem, {\n    prevNextButtons: false,\n    lazyLoad: 2,\n    adaptiveHeight: true\n  });\n\n  flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {\n\n    if ( !cellElement ) {\n      return;\n    }\n      // go to next if current cell selected\n    if ( cellIndex == this.selectedIndex ) {\n      this.next( true );\n    // } else {\n    //   flkty.on( 'select', cellIndex);\n    // }\n    }\n  });\n}\n\n\nvar lastFixPos = 0;\nvar threshold = 150; //sensitivity on scrolling\nvar theHead = document.querySelector(\".header\");\n\nwindow.addEventListener(\"scroll\", scrollEffect);\n\nfunction scrollEffect() {\n  var st = window.scrollY;\n  var diff = Math.abs(window.scrollY - lastFixPos);\n  if (diff > threshold || st < 100) {\n    if (st < lastFixPos) {\n      if (theHead.classList)\n        theHead.classList.remove('hide');\n      else\n        theHead.className = theHead.className.replace(new RegExp('(^|\\\\b)' + className.split(' ').join('|') + '(\\\\b|$)', 'gi'), ' ');\n    }\n    lastFixPos = st;\n  } else if (st > lastFixPos) {\n    if (theHead.classList)\n      theHead.classList.add('hide');\n    else\n      theHead.className += ' ' + className;\n  }\n}\n\n\n// flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {\n//   if ( !cellElement ) {\n//     return;\n//   }\n//     // go to next if current cell selected\n//   if ( cellIndex == flkty.selectedIndex ) {\n//     flkty.next( true );\n//   } else {\n//     $carousel.flickity( 'select', cellIndex );\n//   }\n// });\n\n\n//# sourceURL=webpack:///./js/all.js?");

/***/ })

/******/ });
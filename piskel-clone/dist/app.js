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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/tools/canvas.js":
/*!****************************************!*\
  !*** ./src/components/tools/canvas.js ***!
  \****************************************/
/*! exports provided: canvas, ctx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


/***/ }),

/***/ "./src/components/tools/pencil/pencil.js":
/*!***********************************************!*\
  !*** ./src/components/tools/pencil/pencil.js ***!
  \***********************************************/
/*! exports provided: pencil, Pencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pencil", function() { return pencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pencil", function() { return Pencil; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ "./src/components/tools/canvas.js");

const CANVAS_SIZE = 768;
const DEFAULT_SIZE_DRAW = 32;
var STATE = false;
class Pencil{
    constructor(size,color,btn){
        this.size = size;
        this.color = color;
        this.mouse = {x:0, y:0};
        this.prevdot = {x:0 , y:0};
        this.draw = false;
        this.btn = btn;
        this.btn.addEventListener('click',()=>{
            STATE = !STATE;
            if(STATE) this.btn.classList.add('tools_icon--active');
            else this.btn.classList.toggle('tools_icon--active',false); 
        })
    }
     MouseDown(e){
        if (STATE){   
        this.mouse.x = e.pageX - _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetLeft;
        this.mouse.y = e.pageY - _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetTop;
        this.setPixel(this.mouse.x,this.mouse.y);
        this.draw = true;
        }
    }
     Mousemove(e){
        if(STATE){
            if(this.draw == true){
                this.prevdot.x = this.mouse.x;
                this.prevdot.y = this.mouse.y;
                this.mouse.x = e.pageX - _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetLeft;
                this.mouse.y = e.pageY - _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetTop;
               this.Line(this.prevdot.x,this.prevdot.y,this.mouse.x,this.mouse.y);               
            }
        }
               
        }
     Mouseup(e){
        if(STATE){
            this.mouse.x = e.pageX - _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetLeft;
            this.mouse.y = e.pageY - _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetTop;
            this.draw = false;
        }
    }
     setPixel(x0,y0){
        var resultXmax,resultXmin,resultYmax,resultYmin;
        for(let i = 0 ; i <= CANVAS_SIZE ; i+=this.size){
            if( i > x0){
                resultXmax = i;
                break;
            }
            if(i < x0){
                resultXmin = i;
            }
        }
        for(let i = 0 ; i <= CANVAS_SIZE ; i+=this.size){
            if(i > y0){
              resultYmax = i;
                break;
            }
            if(i < y0){
                resultYmin = i;
            }
        }
         _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle= this.color;
        _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(resultXmin,resultYmin,this.size,this.size);     
    }
     Line(x0, y0, x1, y1){
        var dx = Math.abs(x1-x0);
        var dy = Math.abs(y1-y0);
        var sx = (x0 < x1) ? 1 : -1;
        var sy = (y0 < y1) ? 1 : -1;
        var err = dx-dy;
     
        while(true){
          this.setPixel(x0,y0);
          if ((x0==x1) && (y0==y1)) break;
          var e2 = 2*err;
          if (e2 >-dy){ err -= dy; x0  += sx; }
          if (e2 < dx){ err += dx; y0  += sy; }
        }
     }
}
const pencilbtn = document.querySelector('.pencil');
const pencil = new Pencil(DEFAULT_SIZE_DRAW,"#000",pencilbtn);
 


/***/ }),

/***/ "./src/components/tools/tools.js":
/*!***************************************!*\
  !*** ./src/components/tools/tools.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tools; });
class Tools{
    constructor(_tools){
        this.tools = _tools;
        this.tools.forEach((item)=>{
            item.addEventListener('click',(event)=>{
                console.log(event.target);
            })
        })
    }
    ChangeTool(){

    }
    
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tools_tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tools/tools.js */ "./src/components/tools/tools.js");
/* harmony import */ var _components_tools_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tools/canvas.js */ "./src/components/tools/canvas.js");
/* harmony import */ var _components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tools/pencil/pencil */ "./src/components/tools/pencil/pencil.js");




const tools = new _components_tools_tools_js__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelectorAll('.tools__item--element'));
_components_tools_canvas_js__WEBPACK_IMPORTED_MODULE_2__["canvas"].addEventListener('mousedown', (event)=>{
    _components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__["pencil"].MouseDown(event);
});
_components_tools_canvas_js__WEBPACK_IMPORTED_MODULE_2__["canvas"].addEventListener('mousemove',(event)=>{
    _components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__["pencil"].Mousemove(event);
});
_components_tools_canvas_js__WEBPACK_IMPORTED_MODULE_2__["canvas"].addEventListener('mouseup', (event)=>{
    _components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__["pencil"].Mouseup(event);
});

const size32x32 = document.querySelector('.size_small');
const size64x64 = document.querySelector('.size_medium');
const size128x128 = document.querySelector('.size_large');


/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.js.map
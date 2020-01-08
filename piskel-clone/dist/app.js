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

/***/ "./src/components/piskel.js":
/*!**********************************!*\
  !*** ./src/components/piskel.js ***!
  \**********************************/
/*! exports provided: mypiskel, MyPiskelClone, grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mypiskel", function() { return mypiskel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPiskelClone", function() { return MyPiskelClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony import */ var _tools_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/canvas.js */ "./src/components/tools/canvas.js");
/* harmony import */ var _tools_Frame_frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/Frame/frame.js */ "./src/components/tools/Frame/frame.js");
/* harmony import */ var _tools_Show_show_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/Show/show.js */ "./src/components/tools/Show/show.js");



const canvas = document.querySelector('.mainbox');
const firstpage = document.querySelector('.start-page');
const startbtn = document.querySelector('.start-btn');
const gobackbtn = document.querySelector('.TODO')//TO DO
const canvas_item = document.querySelector('.canvas');
const grid = document.createElement('div');

grid.classList.add('canvas_grid');
const CANVAS_SIZE = 768;
class MyPiskelClone{
    constructor(firstpage,canvas,startbtn,gobackbtn){
        this.firstpage = firstpage;
        this.canvas = canvas;
        this.startbtn = startbtn;
        this.gobackbtn = gobackbtn;
        this.startbtn.addEventListener('click',()=>{
            this.StartPiskel();
        })
        /* this.gobackbtn.addEventListener('click',()=>{
            this.GoLending();
        }) */
    
    }
    
    StartPiskel(){
        this.firstpage.style = "display:none";
        this.canvas.style = "display:block";
        _tools_canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas_pallete"].Load();
        _tools_Frame_frame_js__WEBPACK_IMPORTED_MODULE_1__["framebox"].Add(_tools_canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas_pallete"].saveImage());
        _tools_Show_show_js__WEBPACK_IMPORTED_MODULE_2__["animation"].FPS_SHOW(0); 
        canvas_item.appendChild(grid);
        for(let i = 0 ; i < CANVAS_SIZE; i+=32){
            let canvas_line = document.createElement('div');
            for(let j = 0 ; j < CANVAS_SIZE ; j+=32){
            let node = document.createElement('div');
            node.classList.add('canvas_squade');
            canvas_line.appendChild(node);
            canvas_line.classList.add('canvas_line');
        }
        grid.appendChild(canvas_line);
        }
    }
    GoLending(){
        this.firstpage.style = "display:block";
        this.canvas.srtle = "display:none";
    }

}
const mypiskel = new MyPiskelClone(firstpage,canvas,startbtn,gobackbtn);


/***/ }),

/***/ "./src/components/tools/Frame/frame.js":
/*!*********************************************!*\
  !*** ./src/components/tools/Frame/frame.js ***!
  \*********************************************/
/*! exports provided: framebox, Frame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "framebox", function() { return framebox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas.js */ "./src/components/tools/canvas.js");
/* harmony import */ var _Show_show_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Show/show.js */ "./src/components/tools/Show/show.js");


const frame = document.querySelector('.frame');
const CANVAS_SIZE = 768;
class Frame {
    constructor(){
        this.counter = 0;
        this.Currentframe = null;
        this.listFrame = [];
        this.btn = document.querySelector('.frame--add')
        this.btn.addEventListener('click',()=>{
            _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas_pallete"].Load();
            this.Add(_canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas_pallete"].saveImage())
        });
    }
    Add(data){
          let frame_item = document.createElement('div')
          frame_item.classList.add('frame__item')
          let frame_image = document.createElement('img');
          let delete_icon = document.createElement('img');
          delete_icon.classList.add('delete-elem');
          frame_image.src = data;
          frame_image.classList.add('frame__image');
          frame_item.appendChild(frame_image);
          frame_item.appendChild(delete_icon);
          this.Currentframe = frame_image;
         frame.insertBefore(frame_item,frame.firstChild);
          this.listFrame.push(frame_image)
            frame_item.addEventListener('click', ()=>{
                this.listFrame.forEach(item =>{
                    item.classList.toggle('active-frame',false);
                })
                frame_item.classList.add('active-frame');
                this.ChangeFrame(frame_item,frame_image);
              })
              console.log('work')
        _Show_show_js__WEBPACK_IMPORTED_MODULE_1__["animation"].FPS_SHOW(this.counter); 
         this.counter++;
         
    }
    Delete(){

    }
    Move(){

    }
    ChangeFrame(item, imgData){
        this.Currentframe = imgData;
        let img = new Image();
        img.src = imgData.src;
        
        _canvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(img,0,0);
        
    }
    ChangingDataFrame(data){
        
        this.Currentframe.src = data;
    }
}

const framebox = new Frame();


/***/ }),

/***/ "./src/components/tools/Show/show.js":
/*!*******************************************!*\
  !*** ./src/components/tools/Show/show.js ***!
  \*******************************************/
/*! exports provided: animation, Show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Show", function() { return Show; });
/* harmony import */ var _Frame_frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Frame/frame.js */ "./src/components/tools/Frame/frame.js");

const fps_range = document.querySelector('.fps');
const fps_image = document.querySelector('.canvas__tools--show-canvas');
let image = document.createElement('img');
image.classList.add('fps-image')
class Show {
    constructor(fps_range){
        this.interval = null;
        this.range = fps_range;
        this.fps = 0;
        this.range.addEventListener('change',(event)=>{
            this.fps = this.range.value
            console.log("framebox = "+_Frame_frame_js__WEBPACK_IMPORTED_MODULE_0__["framebox"].counter)
            animation.FPS_SHOW(_Frame_frame_js__WEBPACK_IMPORTED_MODULE_0__["framebox"].counter - 1);
        })
    }
    NextFrame(image, counter){
        console.log('counter = ' + counter) 
        if(counter !== undefined)
        image.src = _Frame_frame_js__WEBPACK_IMPORTED_MODULE_0__["framebox"].listFrame[counter].src;
    }
    FPS_SHOW(counter){
        clearInterval(this.interval);
        fps_image.appendChild(image);
        let i = 0;
        this.interval = setInterval(()=> {
        if(counter == 0) i = 0;
        if(i >= counter + 1  ) i = 0;
        else { this.NextFrame(image, i);i++;} 
    }, 1000/this.fps); 
        
    }
}

const animation = new Show(fps_range);


/***/ }),

/***/ "./src/components/tools/SizeTool/sizetools.js":
/*!****************************************************!*\
  !*** ./src/components/tools/SizeTool/sizetools.js ***!
  \****************************************************/
/*! exports provided: size, Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
/* harmony import */ var _pencil_pencil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pencil/pencil.js */ "./src/components/tools/pencil/pencil.js");

const DEFAULT_SIZE_DRAW = 32;
const active_small = document.querySelector('.size_active--small');
const active_medium = document.querySelector('.size_active--medium');
const active_large = document.querySelector('.size_active--large');
class Size{
    constructor(_default_size){
        this.item_size = _default_size;
        this.item_prev = active_small;
        this.items = document.querySelectorAll('.size_info');
        this.items.forEach((elem)=>{
            
            elem.addEventListener('click',(event)=>{
                if(event.currentTarget.id == 'small')  {
                    this.item_size = SMALL_SIZE;
                    active_small.style = "visibility: visible;";
                    this.item_prev.style = "visibility: hidden;";
                    this.item_prev = active_small;
                }
                if(event.currentTarget.id == 'medium') {
                    this.item_size = MEDUIM_SIZE;
                    active_medium.style = "visibility: visible;";
                    this.item_prev.style = "visibility: hidden;";
                    this.item_prev = active_medium;
                }
                if(event.currentTarget.id == 'large')  
                {
                    this.item_size = LARGE_SIZE;
                    active_large.style = "visibility: visible;";
                    this.item_prev.style = "visibility: hidden;";
                    this.item_prev = active_large;
                }
                
            })
        })
    }
    toSmall(){
        tools.size = SMALL_SIZE;
    }
    toMedium(){
        tools.size = MEDUIM_SIZE;
    }
    toLarge(){
        tools.size = LARGE_SIZE;
    }

}

const size = new Size(DEFAULT_SIZE_DRAW);



const SMALL_SIZE = 32;
const MEDUIM_SIZE = 64;
const LARGE_SIZE = 128;

/***/ }),

/***/ "./src/components/tools/bucket/bucket.js":
/*!***********************************************!*\
  !*** ./src/components/tools/bucket/bucket.js ***!
  \***********************************************/
/*! exports provided: bucket, Bucket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bucket", function() { return bucket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bucket", function() { return Bucket; });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas.js */ "./src/components/tools/canvas.js");
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools.js */ "./src/components/tools/tools.js");
/* harmony import */ var _SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SizeTool/sizetools.js */ "./src/components/tools/SizeTool/sizetools.js");



const CANVAS_SIZE = 768;
class Bucket{
    constructor(_color){
        this.color  = _color;
        this.mouse = {x:0, y:0};
    }
    AllBucket(){

    }
    HalfBucket(){

    }
    setPixel(x0,y0){
        var resultXmax,resultXmin,resultYmax,resultYmin;
        for(let i = 0 ; i <= CANVAS_SIZE ; i+=_SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__["size"].item_size){
            if( i > x0){
                resultXmax = i;
                break;
            }
            if(i < x0){
                resultXmin = i;
            }
        }
        for(let i = 0 ; i <= CANVAS_SIZE ; i+=_SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__["size"].item_size){
            if(i > y0){
              resultYmax = i;
                break;
            }
            if(i < y0){
                resultYmin = i;
            }
        }
         _canvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle= this.color;
        _canvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(resultXmin,resultYmin,_SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__["size"].item_size,_SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__["size"].item_size);     
    }
    MouseDown(e){
        if (_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'bucket'){   
            this.mouse.x = e.pageX - _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetLeft;
            this.mouse.y = e.pageY - _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetTop;
            var _background = {r: 240, g: 52, b: 52, a: 0};
            var cff = new CanvasFloodFiller();

            cff.floodFill(_canvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"], this.mouse.x,this.mouse.y, _background);
        }
    }
}
const bucket = new Bucket("#008")

function CanvasFloodFiller()
{
    // Ширина и высота канвы
    var _cWidth = 768;
    var _cHeight = 768;
 
    // Заменяемый цвет
    var _rR = 0;
    var _rG = 0;
    var _rB = 0;
    var _rA = 0;
 
    // Цвет закраски
    var _nR = 0;
    var _nG = 0;
    var _nB = 0;
    var _nA = 0;
 
    var _data = null;
 
    /*
     * Получить точку из данных
     **/
    var getDot = function(x, y)
    {
        // Точка: y * ширину_канвы * 4 + (x * 4)
        var dstart = (y * _cWidth * 4) + (x * 4);
        var dr = _data[dstart];
        var dg = _data[dstart + 1];
        var db = _data[dstart + 2];
        var da = _data[dstart + 3];
 
        return {r: dr, g: dg, b: db, a: da};
    }
 
    /*
     * Пиксель по координатам x,y - готовый к заливке?
     **/
    var isNeededPixel = function(x, y)
    {
        var dstart = (y * _cWidth * 4) + (x * 4);
        var dr = _data[dstart];
        var dg = _data[dstart + 1];
        var db = _data[dstart + 2];
        var da = _data[dstart + 3];
 
        return (dr == _rR && dg == _rG && db == _rB && da == _rA);
    }
 
    /*
     * Найти левый пиксель, по пути закрашивая все попавшиеся
     **/
    var findLeftPixel = function(x, y)
    {
        // Крутим пикселы влево, заодно красим. Возвращаем левую границу.
        // Во избежание дубляжа и ошибок, findLeftPixel НЕ красит текущий
        // пиксел! Это сделает обязательный поиск вправо.
        var lx = x - 1;
        var dCoord = (y * _cWidth * 4) + (lx * 4);
 
        while (lx >= 0 && _data[dCoord] == _rR && _data[dCoord + 1] == _rG &&
            _data[dCoord + 2] == _rB && _data[dCoord + 3] == _rA)
        {
            _data[dCoord] = _nR;
            _data[dCoord + 1] = _nG;
            _data[dCoord + 2] = _nB;
            _data[dCoord + 3] = _nA;
 
            lx--;
            dCoord -= 4;
        }
 
        return lx + 1;
    }
 
    /*
     * Найти правый пиксель, по пути закрашивая все попавшиеся
     **/
    var findRightPixel = function(x, y)
    {
        var rx = x;
        var dCoord = (y * _cWidth * 4) + (x * 4);
 
        while (rx < _cWidth && _data[dCoord] == _rR && _data[dCoord + 1] == _rG &&
            _data[dCoord + 2] == _rB && _data[dCoord + 3] == _rA)
        {
            _data[dCoord] = _nR;
            _data[dCoord + 1] = _nG;
            _data[dCoord + 2] = _nB;
            _data[dCoord + 3] = _nA;
 
            rx++;
            dCoord += 4;
        }
 
        return rx - 1;
    }
 
    /*
     * Эффективная (строчная) заливка
     **/
    var effectiveFill = function(cx, cy)
    {
        var lineQueue = new Array();
 
        var fx1 = findLeftPixel(cx, cy);
        var fx2 = findRightPixel(cx, cy);
 
        lineQueue.push({x1: fx1, x2: fx2, y: cy});
 
        while (lineQueue.length > 0)
        {
            var cLine = lineQueue.shift();
            var nx1 = cLine.x1;
            var nx2 = cLine.x1;
            var currx = nx2;
 
            // Сперва для первого пиксела, если верхний над ним цвет подходит,
            // пускаем поиск левой границы.
            // Можно искать вверх?
            if (cLine.y > 0)
            {
                // Сверху строка может идти левее текущей?
                if (isNeededPixel(cLine.x1, cLine.y - 1))
                {
                    // Ищем в том числе влево
                    nx1 = findLeftPixel(cLine.x1, cLine.y - 1);
                    nx2 = findRightPixel(cLine.x1, cLine.y - 1);
                    lineQueue.push({x1: nx1, x2: nx2, y: cLine.y - 1});
                }
 
                currx = nx2;
                // Добираем недостающее, ищем только вправо, но пока не
                // доползли так или иначе далее края текущей строки
                while (cLine.x2 >= nx2 && currx <= cLine.x2 && currx < (_cWidth - 1))
                {
                    currx++;
 
                    if (isNeededPixel(currx, cLine.y - 1))
                    {
                        // Сохраняем найденный отрезок
                        nx1 = currx;
                        nx2 = findRightPixel(currx, cLine.y - 1);
                        lineQueue.push({x1: nx1, x2: nx2, y: cLine.y - 1});
                        // Прыгаем далее найденного
                        currx = nx2;
                    }
                }
            }
 
            nx1 = cLine.x1;
            nx2 = cLine.x1;
            // Те же яйца, но можно ли искать вниз?
            if (cLine.y < (_cHeight - 1))
            {
                // Снизу строка может идти левее текущей?
                if (isNeededPixel(cLine.x1, cLine.y + 1))
                {
                    // Ищем в том числе влево
                    nx1 = findLeftPixel(cLine.x1, cLine.y + 1);
                    nx2 = findRightPixel(cLine.x1, cLine.y + 1);
                    lineQueue.push({x1: nx1, x2: nx2, y: cLine.y + 1});
                }
 
                currx = nx2;
                // Добираем недостающее, ищем только вправо, но пока не
                // доползли так или иначе далее края текущей строки
                while (cLine.x2 >= nx2 && currx <= cLine.x2 && currx < (_cWidth - 1))
                {
                    currx++;
 
                    if (isNeededPixel(currx, cLine.y + 1))
                    {
                        // Сохраняем найденный отрезок
                        nx1 = currx;
                        nx2 = findRightPixel(currx, cLine.y + 1);
                        lineQueue.push({x1: nx1, x2: nx2, y: cLine.y + 1});
                        // Прыгаем далее найденного
                        currx = nx2;
                    }
                }
            }
 
        }   // while (main loop)
    }
 
    /*
     * void floodFill(CanvasContext2D canvasContext, int x, int y)
     * Выполняет заливку на канве
     * canvasContext - контекст
     * int x, y - координаты точки заливки
     * color - цвет заливки
     */
    this.floodFill = function(canvasContext, x, y, color)
    {
        
               _cWidth = canvasContext.canvas.width;
        _cHeight = canvasContext.canvas.height;
        
        _nR = color.r;
        _nG = color.g;
        _nB = color.b;
        _nA = color.a;
        var idata = canvasContext.getImageData(0, 0, _cWidth, _cHeight);
        var pixels = idata.data;
        _data = pixels;
 
        var toReplace = getDot(x, y);
        _rR = toReplace.r;
        _rG = toReplace.g;
        _rB = toReplace.b;
        _rA = toReplace.a;
 
        // Всё зависнет к известной матери если цвета совпадают
        if (_rR == _nR && _rG == _nG && _rB == _nB && _rA == _nA)
            return;
 
        effectiveFill(x, y);
        console.log(idata);
        console.log(canvasContext.putImageData(idata, 0, 0));
    }
}

/***/ }),

/***/ "./src/components/tools/canvas.js":
/*!****************************************!*\
  !*** ./src/components/tools/canvas.js ***!
  \****************************************/
/*! exports provided: canvas, ctx, canvas_pallete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas_pallete", function() { return canvas_pallete; });

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_SIZE = 768;

class Canvas{
constructor(canvas,ctx){
    this.canvas  = canvas;
    this.ctx = ctx;
}
saveImage() {
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); 
  return image;
}
Load(){
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
}
}
const canvas_pallete = new Canvas(canvas, ctx);
 

/***/ }),

/***/ "./src/components/tools/eraser/eraser.js":
/*!***********************************************!*\
  !*** ./src/components/tools/eraser/eraser.js ***!
  \***********************************************/
/*! exports provided: eraser, Eraser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eraser", function() { return eraser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eraser", function() { return Eraser; });
/* harmony import */ var _pencil_pencil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pencil/pencil.js */ "./src/components/tools/pencil/pencil.js");

const ERASER_COLOR = "#fff";
class Eraser extends _pencil_pencil_js__WEBPACK_IMPORTED_MODULE_0__["Pencil"]{
    constructor(){
        super();
        this.color = ERASER_COLOR;
    }

}
const eraser = new Eraser();



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
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools.js */ "./src/components/tools/tools.js");
/* harmony import */ var _SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SizeTool/sizetools.js */ "./src/components/tools/SizeTool/sizetools.js");



const CANVAS_SIZE = 768;
class Pencil{
    constructor(color){
        this.color = color;
        this.mouse = {x:0, y:0};
        this.prevdot = {x:0 , y:0};
        this.draw = false;
    }
     MouseDown(e){
         console.log('work');
        if (_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'pencil' || _tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'eraser'){   
        this.mouse.x = e.pageX - _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetLeft;
        this.mouse.y = e.pageY - _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetTop;
        this.setPixel(this.mouse.x,this.mouse.y);
        this.draw = true;
        }
    }
     Mousemove(e){
        if(_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'pencil' || _tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'eraser'|| _tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'stroke'){
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
        if(_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'pencil' || _tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'eraser'|| _tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'stroke'){
            this.mouse.x = e.pageX - _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetLeft;
            this.mouse.y = e.pageY - _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetTop;
            this.draw = false;
        }
    }
     setPixel(x0,y0){
        var resultXmax,resultXmin,resultYmax,resultYmin;
        for(let i = 0 ; i <= CANVAS_SIZE ; i+=_SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__["size"].item_size){
            if( i > x0){
                resultXmax = i;
                break;
            }
            if(i < x0){
                resultXmin = i;
            }
        }
        for(let i = 0 ; i <= CANVAS_SIZE ; i+=_SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__["size"].item_size){
            if(i > y0){
              resultYmax = i;
                break;
            }
            if(i < y0){
                resultYmin = i;
            }
        }
         _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle= this.color;
        _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(resultXmin,resultYmin,_SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__["size"].item_size,_SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__["size"].item_size);     
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
const pencil = new Pencil("#000",pencilbtn);
 


/***/ }),

/***/ "./src/components/tools/stroke/stroke.js":
/*!***********************************************!*\
  !*** ./src/components/tools/stroke/stroke.js ***!
  \***********************************************/
/*! exports provided: stroke, Stroke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stroke", function() { return stroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stroke", function() { return Stroke; });
/* harmony import */ var _pencil_pencil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pencil/pencil.js */ "./src/components/tools/pencil/pencil.js");
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools.js */ "./src/components/tools/tools.js");
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas.js */ "./src/components/tools/canvas.js");
/* harmony import */ var _SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SizeTool/sizetools.js */ "./src/components/tools/SizeTool/sizetools.js");




var flag = false;
class Stroke extends _pencil_pencil_js__WEBPACK_IMPORTED_MODULE_0__["Pencil"]{
    constructor(color){
        super(color);
        this.startPixel = {x:0, y:0};
        this.nextPixel = {x:0, y:0,};
        this.state = false;
    }
    Stroke(x,y){
    
    }
    MouseDown(e){
        console.log('stroke work');
        if(_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'stroke'){
            if(flag){
                this.startPixel = {x:0, y:0};
                this.nextPixel = {x:0, y:0,};
                flag = !flag;
            }
            if(!this.state){
                this.startPixel.x =  e.pageX - _canvas_js__WEBPACK_IMPORTED_MODULE_2__["canvas"].offsetLeft;
                this.startPixel.y = e.pageY - _canvas_js__WEBPACK_IMPORTED_MODULE_2__["canvas"].offsetTop;
                this.state = !this.state;
                }
            else{
                this.nextPixel.x = e.pageX - _canvas_js__WEBPACK_IMPORTED_MODULE_2__["canvas"].offsetLeft;
                this.nextPixel.y = e.pageY - _canvas_js__WEBPACK_IMPORTED_MODULE_2__["canvas"].offsetTop;
                this.state = !this.state;
                flag = !flag;

            }
            if(this.startPixel.x != 0 && this.nextPixel.x != 0){
                if(Math.abs(this.nextPixel.y - this.startPixel.y) <= _SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_3__["size"].item_size){
                    let width = this.nextPixel.x - this.startPixel.x;
                    if(width <= _SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_3__["size"].item_size * 2){
                        this.setPixel(this.startPixel.x,this.startPixel.y);
                        this.setPixel(this.nextPixel.x,this.nextPixel.y);
                    }
                    if(width <= 0){
                        for(let i = this.nextPixel.x; i <= this.startPixel.x; i++){
                            this.setPixel(i,this.nextPixel.y);
                        }
                    }
                    else{
                        for(let i = this.startPixel.x; i <= this.nextPixel.x; i++){
                            this.setPixel(i,this.startPixel.y);
                        }    
                    }
                }
                else{
                    if(Math.abs(this.nextPixel.x - this.startPixel.x) <= _SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_3__["size"].item_size){
                        let heigth = this.nextPixel.y - this.startPixel.y;
                        if(heigth <= 0){
                            for(let i = this.nextPixel.y; i <= this.startPixel.y; i++){
                                this.setPixel(this.nextPixel.x, i);
                            }
                        }
                        else{
                            for(let i = this.startPixel.y; i <= this.nextPixel.y; i++){
                                this.setPixel(this.startPixel.x, i);
                            }    
                        }
                        
                    }
                    this.startPixel = {x:0, y:0};
                    this.nextPixel = {x:0, y:0,};
                }
                
            }    
        }
               
        }
    
}
const stroke = new Stroke("#000");


/***/ }),

/***/ "./src/components/tools/tools.js":
/*!***************************************!*\
  !*** ./src/components/tools/tools.js ***!
  \***************************************/
/*! exports provided: tools, Tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
class Tools{
    constructor(_tools,size){
        this.prev_tool = null;
        this.tool = null;
        this.id = null;
        this.tools = _tools;
        this.tools.forEach((item)=>{
            item.addEventListener('click',(event)=>{
                if(this.tool === null) this.prev_tool = event.currentTarget;
                this.tool = event.currentTarget;
                this.id = this.tool.id;
                Tools.ChangeTool(this.tool,this.prev_tool,this.tool.id);//checked
                this.prev_tool = event.currentTarget;
            })
        })
    }
    static ChangeTool(tool,prev_tool,id){
        if(prev_tool !== null) prev_tool.classList.toggle('tools_icon--active',false);
        tool.classList.add('tools_icon--active');
    }
    
}
const tools = new Tools(document.querySelectorAll('.tools__item--element'));


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
/* harmony import */ var _components_tools_bucket_bucket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tools/bucket/bucket.js */ "./src/components/tools/bucket/bucket.js");
/* harmony import */ var _components_tools_eraser_eraser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tools/eraser/eraser.js */ "./src/components/tools/eraser/eraser.js");
/* harmony import */ var _components_piskel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/piskel.js */ "./src/components/piskel.js");
/* harmony import */ var _components_tools_stroke_stroke_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tools/stroke/stroke.js */ "./src/components/tools/stroke/stroke.js");
/* harmony import */ var _components_tools_Frame_frame_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tools/Frame/frame.js */ "./src/components/tools/Frame/frame.js");









_components_piskel_js__WEBPACK_IMPORTED_MODULE_6__["grid"].addEventListener('mousedown', (event)=>{
    console.log(event);
    switch (_components_tools_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id) {
        case "pencil":_components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__["pencil"].MouseDown(event);break;
        case "allbucket":break;
        case "eraser":_components_tools_eraser_eraser_js__WEBPACK_IMPORTED_MODULE_5__["eraser"].MouseDown(event);break;
        case "stroke":console.log(_components_tools_stroke_stroke_js__WEBPACK_IMPORTED_MODULE_7__["stroke"]);_components_tools_stroke_stroke_js__WEBPACK_IMPORTED_MODULE_7__["stroke"].MouseDown(event);break;
        default:
            break;
    }

});
_components_piskel_js__WEBPACK_IMPORTED_MODULE_6__["grid"].addEventListener('mousemove',(event)=>{
  
   switch (_components_tools_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id) {
       case "pencil":_components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__["pencil"].Mousemove(event);break;
       case "eraser":_components_tools_eraser_eraser_js__WEBPACK_IMPORTED_MODULE_5__["eraser"].Mousemove(event);break;
       default:
           break;
   }
    
});
_components_piskel_js__WEBPACK_IMPORTED_MODULE_6__["grid"].addEventListener('mouseup', (event)=>{
    switch (_components_tools_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id) {
        case "pencil": _components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__["pencil"].Mouseup(event);break;
        case "eraser":_components_tools_eraser_eraser_js__WEBPACK_IMPORTED_MODULE_5__["eraser"].Mouseup(event);break;
        default:
            break;
    }
    _components_tools_Frame_frame_js__WEBPACK_IMPORTED_MODULE_8__["framebox"].ChangingDataFrame(_components_tools_canvas_js__WEBPACK_IMPORTED_MODULE_2__["canvas_pallete"].saveImage());
});
var input_color = document.getElementById("input_color");
function ChangeColor() {
    
    input_color.click();
    input_color.addEventListener("change", function() {
      _components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__["pencil"].color = input_color.value;
      _components_tools_stroke_stroke_js__WEBPACK_IMPORTED_MODULE_7__["stroke"].color = input_color.value;
    });
  }
input_color.addEventListener('click',ChangeColor)
  

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
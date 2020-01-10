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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Frame/frame.js":
/*!***************************************!*\
  !*** ./src/components/Frame/frame.js ***!
  \***************************************/
/*! exports provided: framebox, Frame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "framebox", function() { return framebox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas.js */ "./src/components/canvas.js");
/* harmony import */ var _Show_show_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Show/show.js */ "./src/components/Show/show.js");


const frame = document.querySelector('.frame');
const CANVAS_SIZE = 768;
const icon_delete = '/src/assets/img/delete.svg';
const icon_copy = '/src/assets/img/clone-regular.svg';
class Frame {
    constructor(){
        this.counter = 0;
        this.Currentframe =  null;
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
          frame_image.src = data;
          frame_image.classList.add('frame__image');
          frame_item.appendChild(frame_image);
          frame_item.appendChild(this.AddDeleteBtn(icon_delete));
          frame_item.appendChild(this.AddCloneBtn(icon_copy));
          this.Currentframe = frame_image;
          frame.insertBefore(frame_item,frame.firstChild);
          this.listFrame.push(frame_image)
            frame_item.addEventListener('click', ()=>{
                this.ChangeFrame(frame_image);
              })
        _Show_show_js__WEBPACK_IMPORTED_MODULE_1__["animation"].FPS_SHOW(this.counter);
         this.counter++; 
         this.Currentframe.counter = this.counter;
    }
    AddCloneBtn(data){
        let copy_icon = document.createElement('img');
        copy_icon.addEventListener('click',()=>{this.Clone()})
        copy_icon.classList.add('copy-elem');
        copy_icon.src = data;
        return copy_icon;
    }
    AddDeleteBtn(data){
        let delete_icon = document.createElement('img');
        delete_icon.classList.add('delete-elem');
        delete_icon.addEventListener('click', ()=>{
            this.Delete();
        })
        delete_icon.src = data;
        return delete_icon;
    }
    Clone(){
        this.Add(this.Currentframe.src)
    }
    Delete(){
        if(this.counter != 1){
    let counter = 0;
      let parent = document.querySelector('.frame');
      let current_frame;
      parent.removeChild(this.Currentframe.parentNode);
      this.listFrame.forEach((item)=>{
          if(item.src === this.Currentframe.src)
          {
             this.listFrame.splice(counter,1);
             current_frame = counter
          }
          counter++;
      })
      this.counter--;
      _Show_show_js__WEBPACK_IMPORTED_MODULE_1__["animation"].FPS_SHOW(this.counter);

      if(current_frame == 1 || current_frame == 0){
          console.log("currentframe int " + current_frame)
        this.ChangingDataFrame(this.listFrame[0]);
        this.ChangeFrame(this.listFrame[0])
      }
      else{
        this.ChangingDataFrame(this.listFrame[current_frame-1]);
        this.ChangeFrame(this.listFrame[current_frame-1])
      }
    }
    else{
        alert('Невозможно удалить последний элемент');
    }
    }
    Move(){
     // TO DO
    }
    ChangeFrame(imgData){
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

/***/ "./src/components/Show/show.js":
/*!*************************************!*\
  !*** ./src/components/Show/show.js ***!
  \*************************************/
/*! exports provided: animation, Show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Show", function() { return Show; });
/* harmony import */ var _Frame_frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Frame/frame.js */ "./src/components/Frame/frame.js");

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
            animation.FPS_SHOW(_Frame_frame_js__WEBPACK_IMPORTED_MODULE_0__["framebox"].counter - 1);
        })
    }
    NextFrame(image, counter){
        if(counter !== undefined)
        image.src = _Frame_frame_js__WEBPACK_IMPORTED_MODULE_0__["framebox"].listFrame[counter].src;
    }
    FPS_SHOW(counter){
        clearInterval(this.interval);
        counter = _Frame_frame_js__WEBPACK_IMPORTED_MODULE_0__["framebox"].listFrame.length ;
        fps_image.appendChild(image);
        let i = 0;
        this.interval = setInterval(()=> {
        if(counter == 0) i = 0;
        if(i >= counter  ) i = 0;
        else { this.NextFrame(image, i);i++;} 
    }, 1000/this.fps); 
        
    }
}

const animation = new Show(fps_range);


/***/ }),

/***/ "./src/components/canvas.js":
/*!**********************************!*\
  !*** ./src/components/canvas.js ***!
  \**********************************/
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
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./src/components/canvas.js");
/* harmony import */ var _Frame_frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Frame/frame.js */ "./src/components/Frame/frame.js");
/* harmony import */ var _Show_show_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show/show.js */ "./src/components/Show/show.js");



const canvas = document.querySelector('.mainbox');
const firstpage = document.querySelector('.start-page');
const startbtn = document.querySelector('.start-btn');
const canvas_item = document.querySelector('.canvas');
const grid = document.createElement('div');
const gobackbtn = document.querySelector('.header_exit');
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
        this.gobackbtn.addEventListener('click',()=>{
            this.GoLending();
        })
    
    }
    
    StartPiskel(){
        this.firstpage.style = "display:none";
        this.canvas.style = "display:block";
        _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas_pallete"].Load();
        _Frame_frame_js__WEBPACK_IMPORTED_MODULE_1__["framebox"].Add(_canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas_pallete"].saveImage());
        _Show_show_js__WEBPACK_IMPORTED_MODULE_2__["animation"].FPS_SHOW(0); 
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
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
          }
        this.firstpage.style = "display:flex;";
        this.canvas.style = "display:none;";
    }

}
const mypiskel = new MyPiskelClone(firstpage,canvas,startbtn,gobackbtn);


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
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../canvas.js */ "./src/components/canvas.js");
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools.js */ "./src/components/tools/tools.js");
/* harmony import */ var _SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SizeTool/sizetools.js */ "./src/components/tools/SizeTool/sizetools.js");



const CANVAS_SIZE = 768;
class Bucket{
    constructor(_color){
        this.color  = _color;
        this.mouse = {x:0, y:0};
    }
    MouseDown(e){
        if (_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'bucket'){   
        this.mouse.x = e.pageX - _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetLeft;
        this.mouse.y = e.pageY - _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetTop;
        _canvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = this.color;
        floodFill.fill(this.mouse.x,this.mouse.y,10,_canvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"]);
        }
    }
    
}
const bucket = new Bucket("#000")


/***/ }),

/***/ "./src/components/tools/clean/clean.js":
/*!*********************************************!*\
  !*** ./src/components/tools/clean/clean.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../canvas.js */ "./src/components/canvas.js");
/* harmony import */ var _Frame_frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Frame/frame.js */ "./src/components/Frame/frame.js");


const CLEAN_COLOR = "#FFF";
class Clean{
    constructor(){

    }
    Clean(){
        _canvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = CLEAN_COLOR;
        _canvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(0,0,768,768);
        _Frame_frame_js__WEBPACK_IMPORTED_MODULE_1__["framebox"].ChangingDataFrame(_canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas_pallete"].saveImage());
    }
}
const cleaning = new Clean();
/* harmony default export */ __webpack_exports__["default"] = (cleaning);

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
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../canvas.js */ "./src/components/canvas.js");
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools.js */ "./src/components/tools/tools.js");
/* harmony import */ var _SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SizeTool/sizetools.js */ "./src/components/tools/SizeTool/sizetools.js");



class Pencil{
    constructor(color){
        this.color = color;
        this.mouse = {x:0, y:0};
        this.prevdot = {x:0 , y:0};
        this.draw = false;
    }
     MouseDown(e){
        if (_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'pencil' || _tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'eraser'){   
        this.mouse.x = e.pageX - _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetLeft;
        this.mouse.y = e.pageY - _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetTop;
        this.setPixel(this.mouse.x,this.mouse.y);
        this.draw = true;
        }
    }
     Mousemove(e){
        if(_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'pencil' || _tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'eraser'|| _tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'stroke'){
            if(this.draw == true){
                this.prevdot.x = this.mouse.x;
                this.prevdot.y = this.mouse.y;
                this.mouse.x = e.pageX - _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetLeft;
                this.mouse.y = e.pageY - _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetTop;
                this.Line(this.prevdot.x,this.prevdot.y,this.mouse.x,this.mouse.y);               
            }
        }
               
        }
     Mouseup(e){
        if(_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'pencil' || _tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'eraser'|| _tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id == 'stroke'){
            this.mouse.x = e.pageX - _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetLeft;
            this.mouse.y = e.pageY - _canvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].offsetTop;
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
         _canvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle= this.color;
        _canvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(resultXmin,resultYmin,_SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__["size"].item_size,_SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_2__["size"].item_size);     
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
const CANVAS_SIZE = 768;


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
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../canvas.js */ "./src/components/canvas.js");
/* harmony import */ var _SizeTool_sizetools_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SizeTool/sizetools.js */ "./src/components/tools/SizeTool/sizetools.js");




var flag = false;
class Stroke extends _pencil_pencil_js__WEBPACK_IMPORTED_MODULE_0__["Pencil"]{
    constructor(color){
        super(color);
        this.startPixel = {x:0, y:0};
        this.nextPixel = {x:0, y:0,};
        this.state = false;
    }
    MouseDown(e){
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
/* harmony import */ var _clean_clean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clean/clean.js */ "./src/components/tools/clean/clean.js");

var keydown = [];
var flag = true;
class Tools{
    constructor(_tools){
        this.prev_tool = null;
        this.tool = null;
        this.id = null;
        this.tools = _tools;
        this.tools.forEach((item)=>{
            item.addEventListener('click',(event)=>{
                this.Action(event);
            })
        })
        document.addEventListener('keydown', (e)=>this.logKey(e));
    }
    logKey(e) {
        if (event.code == 'KeyP' && event.shiftKey) {
            this.Action(event);
            this.ChangeTool("pencil",this.prev_tool);
          }
      }
    Action(event){
        if(this.tool === null) this.prev_tool = event.currentTarget;
        this.tool = event.currentTarget;
        this.id = this.tool.id;
        if(this.id == "cleaning") _clean_clean_js__WEBPACK_IMPORTED_MODULE_0__["default"].Clean();
        this.ChangeTool(this.tool,this.prev_tool);//checked
        this.prev_tool = event.currentTarget;
    }
    ChangeTool(tool,prev_tool){
        if(prev_tool !== null) prev_tool.classList.toggle('tools_icon--active',false);
        tool.classList.add('tools_icon--active');
    }
    
    
}
const tools = new Tools(document.querySelectorAll('.tools__item--element'));


/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Piskel-clone</title>\r\n    <link rel=\"stylesheet\" href=\"../dist/reset.css\">\r\n    <link rel=\"stylesheet\" href=\"../dist/style.css\">\r\n    <link rel=\"stylesheet\" href=\"./assets/fonts/fontawesome-free-5.12.0-web/css/all.css\">\r\n    <link href=\"https://fonts.googleapis.com/css?family=Orbitron&display=swap\" rel=\"stylesheet\">  \r\n    <script src=\"/src/solution/floodFill2D.js\"></script>\r\n</head>\r\n<body>\r\n    <div class=\"start-page\">\r\n        <div class=\"start-page__wrapper\">\r\n            <div class=\"start-page__wrapper--start\">\r\n                <div class=\"start-btn\">Start Draw</div>\r\n            </div>\r\n            <div class=\"start-page__wrapper--description\">\r\n                <div class=\"item\">Item 1</div>\r\n                <div class=\"item\">Item 2</div>\r\n                <div class=\"item\">Item 3</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mainbox\">\r\n        <div class=\"wrapper\">\r\n            <header class=\"header\">\r\n                <div class=\"header__nav\">\r\n                <div class=\"header__nav--title\">Piskel-clone by devbiirds</div>\r\n                </div>\r\n                <div class=\"header_exit\">\r\n                    <p class=\"header_exit--text\">Exit</p>\r\n                    <img src=\"./assets/img/sign-out-alt-solid.svg\" alt=\"out\">\r\n                </div>\r\n            </header>\r\n        \r\n        <section class=\"tools_section\">\r\n            <div class=\"tools\">\r\n                <div class=\"tools__item\">\r\n                    <div class=\"tools__item--size\">\r\n                        <div class=\"size_info size_small\" id=\"small\"><span>Small</span><div class=\"size_active--small\"></div></div>\r\n                        <div class=\"size_info size_medium\" id=\"medium\"><span> Medium</span><div class=\"size_active--medium\"></div></div>\r\n                        <div class=\"size_info size_large\" id=\"large\"><span>Large</span><div class=\"size_active--large\"></div></div>\r\n                    </div>\r\n                    <div class=\"tools__item--elements\">\r\n                            <div class=\"tools__item--element pencil\" id=\"pencil\"><img src=\"../src/assets/img/pencil-alt-solid.svg\" alt=\"pencil\" class=\"tools_icon\" ></div>\r\n                            <div class=\"tools__item--element bucket\" id=\"bucket\"><img src=\"./assets/img/fill-drip-solid.svg\" alt=\"bucket\" class=\"tools_icon\" ></div>\r\n                            <div class=\"tools__item--element eraser\" id=\"eraser\"><img src=\"./assets/img/eraser-solid.svg\" alt=\"eraser\" class=\"tools_icon\" ></div>\r\n                            <div class=\"tools__item--element stroke\" id=\"stroke\"><img src=\"./assets/img/stroke.svg\" alt=\"stroke\" class=\"tools_icon\" ></div>\r\n                            <div class=\"tools__item--element cleaning\" id=\"cleaning\"><img src=\"./assets/img/redo-solid.svg\" alt=\"clean\" class=\"tools_icon\" ></div>\r\n                    </div>\r\n                    <div class=\"tools__item--changecolor\">\r\n                        <div class=\"tools__item--changecolor--tool\">\r\n                            <div class=\"current_color inline\">\r\n                                <div class=\"color_input firstColor\"><input type=\"color\" id=\"input_color\" value=\"#000\"></div>\r\n                                <span>Current color</span>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tools__item frame\">\r\n                    <div class=\"frame--add\"><span>Add Frame</span></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"canvas\">\r\n                <canvas class=\"canvas__pallete\" height=\"768px\" width=\"768px\">\r\n\r\n                </canvas>\r\n            </div>\r\n            <div class=\"canvas__tools\">\r\n                <div class=\"canvas__tools--show-canvas\">\r\n\r\n                </div>\r\n                <div class=\"canvas__tools--range\">\r\n                <p>FPS :</p>\r\n                    <input class=\"fps\" type=\"range\" min=\"1\" max=\"24\" step=\"1\">\r\n            </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    </div>\r\n</body>\r\n<script src=\"./../dist/app.js\"></script>\r\n</html>";

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
/* harmony import */ var _components_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/canvas.js */ "./src/components/canvas.js");
/* harmony import */ var _components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tools/pencil/pencil */ "./src/components/tools/pencil/pencil.js");
/* harmony import */ var _components_tools_eraser_eraser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tools/eraser/eraser.js */ "./src/components/tools/eraser/eraser.js");
/* harmony import */ var _components_piskel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/piskel.js */ "./src/components/piskel.js");
/* harmony import */ var _components_tools_stroke_stroke_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tools/stroke/stroke.js */ "./src/components/tools/stroke/stroke.js");
/* harmony import */ var _components_Frame_frame_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Frame/frame.js */ "./src/components/Frame/frame.js");
/* harmony import */ var _components_tools_bucket_bucket_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tools/bucket/bucket.js */ "./src/components/tools/bucket/bucket.js");









_components_piskel_js__WEBPACK_IMPORTED_MODULE_5__["grid"].addEventListener('mousedown', (event)=>{
    switch (_components_tools_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id) {
        case "pencil":_components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__["pencil"].MouseDown(event);break;
        case "allbucket":break;
        case "eraser":_components_tools_eraser_eraser_js__WEBPACK_IMPORTED_MODULE_4__["eraser"].MouseDown(event);break;
        case "stroke":_components_tools_stroke_stroke_js__WEBPACK_IMPORTED_MODULE_6__["stroke"].MouseDown(event);break;
        case 'bucket':_components_tools_bucket_bucket_js__WEBPACK_IMPORTED_MODULE_8__["bucket"].MouseDown(event);break;
        default:
            break;
    }

});
_components_piskel_js__WEBPACK_IMPORTED_MODULE_5__["grid"].addEventListener('mousemove',(event)=>{
  
   switch (_components_tools_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id) {
       case "pencil":_components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__["pencil"].Mousemove(event);break;
       case "eraser":_components_tools_eraser_eraser_js__WEBPACK_IMPORTED_MODULE_4__["eraser"].Mousemove(event);break;
       default:
           break;
   }
    
});
_components_piskel_js__WEBPACK_IMPORTED_MODULE_5__["grid"].addEventListener('mouseup', (event)=>{
    switch (_components_tools_tools_js__WEBPACK_IMPORTED_MODULE_1__["tools"].id) {
        case "pencil": _components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__["pencil"].Mouseup(event);break;
        case "eraser":_components_tools_eraser_eraser_js__WEBPACK_IMPORTED_MODULE_4__["eraser"].Mouseup(event);break;
        default:
            break;
    }
    _components_Frame_frame_js__WEBPACK_IMPORTED_MODULE_7__["framebox"].ChangingDataFrame(_components_canvas_js__WEBPACK_IMPORTED_MODULE_2__["canvas_pallete"].saveImage());
});
var input_color = document.getElementById("input_color");
function ChangeColor() {
    
    input_color.click();
    input_color.addEventListener("change", function() {
      _components_tools_pencil_pencil__WEBPACK_IMPORTED_MODULE_3__["pencil"].color = input_color.value;
      _components_tools_stroke_stroke_js__WEBPACK_IMPORTED_MODULE_6__["stroke"].color = input_color.value;
      _components_tools_bucket_bucket_js__WEBPACK_IMPORTED_MODULE_8__["bucket"].color = input_color.value;
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

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/index.js ./src/index.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/index.html */"./src/index.html");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map
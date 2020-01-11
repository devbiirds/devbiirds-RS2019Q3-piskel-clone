/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { canvas, ctx } from '../../canvas';
import { tools } from '../tools';
import { size } from '../SizeTool/sizetools';

const CANVAS_SIZE = 768;
const DEFAULT_COLOR = '#000';
class Pencil {
  constructor(color) {
    this.color = color;
    this.mouse = { x: 0, y: 0 };
    this.prevdot = { x: 0, y: 0 };
    this.draw = false;
  }

  MouseDown(e) {
    if (tools.id === 'pencil' || tools.id === 'eraser') {
      this.mouse.x = e.pageX - canvas.offsetLeft;
      this.mouse.y = e.pageY - canvas.offsetTop;
      this.setPixel(this.mouse.x, this.mouse.y);
      this.draw = true;
    }
  }

  Mousemove(e) {
    if (tools.id === 'pencil' || tools.id === 'eraser' || tools.id === 'stroke') {
      if (this.draw === true) {
        this.prevdot.x = this.mouse.x;
        this.prevdot.y = this.mouse.y;
        this.mouse.x = e.pageX - canvas.offsetLeft;
        this.mouse.y = e.pageY - canvas.offsetTop;
        this.Line(this.prevdot.x, this.prevdot.y, this.mouse.x, this.mouse.y);
      }
    }
  }

  Mouseup(e) {
    if (tools.id === 'pencil' || tools.id === 'eraser' || tools.id === 'stroke') {
      this.mouse.x = e.pageX - canvas.offsetLeft;
      this.mouse.y = e.pageY - canvas.offsetTop;
      this.draw = false;
    }
  }

  setPixel(x0, y0) {
    let resultXmin;
    let resultYmin;
    for (let i = 0; i <= CANVAS_SIZE; i += size.item_size) {
      if (i > x0) {
        break;
      }
      if (i < x0) {
        resultXmin = i;
      }
    }
    for (let i = 0; i <= CANVAS_SIZE; i += size.item_size) {
      if (i > y0) {
        break;
      }
      if (i < y0) {
        resultYmin = i;
      }
    }
    ctx.fillStyle = this.color;
    ctx.fillRect(resultXmin, resultYmin, size.item_size, size.item_size);
  }

  Line(x0, y0, x1, y1) {
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = (x0 < x1) ? 1 : -1;
    const sy = (y0 < y1) ? 1 : -1;
    let err = dx - dy;
    while (true) {
      this.setPixel(x0, y0);
      if ((x0 === x1) && (y0 === y1)) break;
      const e2 = 2 * err;
      if (e2 > -dy) { err -= dy; x0 += sx; }
      if (e2 < dx) { err += dx; y0 += sy; }
    }
  }
}
const pencilbtn = document.querySelector('.pencil');
const pencil = new Pencil(DEFAULT_COLOR, pencilbtn);
export { pencil, Pencil };

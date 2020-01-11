/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_SIZE = 768;
const DEFAULT_COLOR = '#fff';
class Canvas {
  constructor(canv, context) {
    this.canvas = canv;
    this.ctx = context;
  }

  saveImage() {
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    return image;
  }

  Load() {
    this.ctx.fillStyle = DEFAULT_COLOR;
    this.ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}
const canvaspallete = new Canvas(canvas, ctx);

export { canvas, ctx, canvaspallete };

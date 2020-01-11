/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import { canvas, ctx } from '../../canvas';
import { tools } from '../tools';

const DEFAULT_COLOR = '#000';
const DIFFERENSE = 10;
class Bucket {
  constructor(_color) {
    this.color = _color;
    this.mouse = { x: 0, y: 0 };
  }

  MouseDown(e) {
    if (tools.id === 'bucket') {
      this.mouse.x = e.pageX - canvas.offsetLeft;
      this.mouse.y = e.pageY - canvas.offsetTop;
      ctx.fillStyle = this.color;
      floodFill.fill(this.mouse.x, this.mouse.y, DIFFERENSE, ctx);
    }
  }
}
const bucket = new Bucket(DEFAULT_COLOR);
export { bucket, Bucket };

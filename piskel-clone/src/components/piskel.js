/* eslint-disable no-undef */
import { canvaspallete } from './canvas';
import { framebox } from './Frame/frame';
import { animation } from './Show/show';

const canvas = document.querySelector('.mainbox');
const firstpage = document.querySelector('.start-page');
const startbtn = document.querySelector('.start-btn');
const canvasItem = document.querySelector('.canvas');
const grid = document.createElement('div');
const gobackbtn = document.querySelector('.header_exit');
grid.classList.add('canvas_grid');
const CANVAS_SIZE = 768;
class MyPiskelClone {
  constructor(firstpg, canv, start, goback) {
    this.firstpage = firstpg;
    this.canvas = canv;
    this.startbtn = start;
    this.gobackbtn = goback;
    this.startbtn.addEventListener('click', () => {
      this.StartPiskel();
    });
    this.gobackbtn.addEventListener('click', () => {
      this.GoLending();
    });
  }

  StartPiskel() {
    this.firstpage.style = 'display:none';
    this.canvas.style = 'display:block';
    canvaspallete.Load();
    framebox.Add(canvaspallete.saveImage());
    animation.FPS_SHOW(0);
    canvasItem.appendChild(grid);
    for (let i = 0; i < CANVAS_SIZE; i += 32) {
      const canvasLine = document.createElement('div');
      for (let j = 0; j < CANVAS_SIZE; j += 32) {
        const node = document.createElement('div');
        node.classList.add('canvas_squade');
        canvasLine.appendChild(node);
        canvasLine.classList.add('canvas_line');
      }
      grid.appendChild(canvasLine);
    }
  }

  GoLending() {
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
    this.firstpage.style = 'display:flex;';
    this.canvas.style = 'display:none;';
  }
}
const mypiskel = new MyPiskelClone(firstpage, canvas, startbtn, gobackbtn);
export { mypiskel, MyPiskelClone, grid };

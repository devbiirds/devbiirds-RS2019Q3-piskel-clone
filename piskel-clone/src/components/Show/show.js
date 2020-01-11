/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import { framebox } from '../Frame/frame';

const FPS_RANGE = document.querySelector('.fps');
const FPS_IMAGE = document.querySelector('.canvas__tools--show-canvas');
const data = document.createElement('img');
const SECOND = 1000;
data.classList.add('fps-image');
class Show {
  constructor(fps) {
    this.interval = null;
    this.range = fps;
    this.fps = 0;
    this.range.addEventListener('change', () => {
      this.fps = this.range.value;
      this.FPS_SHOW(framebox.counter - 1);
    });
  }

  NextFrame(data, counter) {
    if (counter !== undefined) { data.src = framebox.listFrame[counter].src; }
  }

  FPS_SHOW(counter) {
    clearInterval(this.interval);
    counter = framebox.listFrame.length;
    FPS_IMAGE.appendChild(data);
    let i = 0;
    this.interval = setInterval(() => {
      if (counter === 0) i = 0;
      if (i >= counter) i = 0;
      else { this.NextFrame(data, i); i += 1; }
    }, SECOND / this.fps);
  }
}

const animation = new Show(FPS_RANGE);
export { animation, Show };

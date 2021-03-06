/* eslint-disable camelcase */
/* eslint-disable no-undef */
import cleaning from './clean/clean';
// eslint-disable-next-line import/no-cycle
import { ChangeColor } from './color/color';
import { framebox } from '../Frame/frame';
import { canvaspallete } from '../canvas';
import { mypiskel } from '../piskel';

class Tools {
  constructor(_tools) {
    this.prev_tool = null;
    this.tool = null;
    this.id = null;
    this.tools = _tools;
    this.tools.forEach((item) => {
      item.addEventListener('click', (event) => {
        this.Action(event);
      });
    });
    document.addEventListener('keydown', (e) => this.logKey(e));
  }

  logKey(event) {
    if (event.code === 'KeyZ' && event.ctrlKey) {
      this.ActionKey('pencil', document.querySelector('.pencil'));
    }
    if (event.code === 'KeyX' && event.ctrlKey) {
      this.ActionKey('bucket', document.querySelector('.bucket'));
    }
    if (event.code === 'KeyC' && event.ctrlKey) {
      this.ActionKey('eraser', document.querySelector('.eraser'));
    }
    if (event.code === 'KeyV' && event.ctrlKey) {
      this.ActionKey('stroke', document.querySelector('.stroke'));
    }
    if (event.code === 'KeyB' && event.ctrlKey) {
      cleaning.Clean();
      this.ActionKey('cleaning', document.querySelector('.cleaning'));
    }
    if (event.code === 'KeyE' && event.ctrlKey) {
      ChangeColor();
    }
    if (event.code === 'KeyQ' && event.ctrlKey) {
      framebox.Add(canvaspallete.saveImage());
    }
    if (event.code === 'KeyH' && event.shiftKey) {
      mypiskel.GoLending();
    }
    if (event.code === 'Enter') {
      mypiskel.StartPiskel();
    }
    if (event.code === 'KeyE' && event.shiftKey) {
      const elem = document.querySelector('#small');
      elem.click();
    }
    if (event.code === 'KeyR' && event.shiftKey) {
      const elem = document.querySelector('#medium');
      elem.click();
    }
    if (event.code === 'KeyT' && event.shiftKey) {
      const elem = document.querySelector('#large');
      elem.click();
    }
  }

  ActionKey(id, currentTarget) {
    if (this.tool === null) this.prev_tool = currentTarget;
    this.tool = currentTarget;
    this.id = id;
    this.ChangeTool(this.tool, this.prev_tool);
    this.prev_tool = currentTarget;
  }

  Action(event) {
    if (this.tool === null) this.prev_tool = event.currentTarget;
    this.tool = event.currentTarget;
    this.id = this.tool.id;
    if (this.id === 'cleaning') cleaning.Clean();
    this.ChangeTool(this.tool, this.prev_tool);
    this.prev_tool = event.currentTarget;
  }

  // eslint-disable-next-line class-methods-use-this
  ChangeTool(tool, prev_tool) {
    if (prev_tool !== null) prev_tool.classList.toggle('tools_icon--active', false);
    tool.classList.add('tools_icon--active');
  }
}
const tools = new Tools(document.querySelectorAll('.tools__item--element'));
export { tools, Tools };

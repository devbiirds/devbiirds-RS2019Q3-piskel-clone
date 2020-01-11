/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import { canvaspallete, ctx } from '../canvas';
import { animation } from '../Show/show';

const frame = document.querySelector('.frame');
const ICON_DELETE = '/src/assets/img/delete.svg';
const ICON_COPY = '/src/assets/img/clone-regular.svg';
class Frame {
  constructor() {
    this.counter = 0;
    this.Currentframe = null;
    this.listFrame = [];
    this.btn = document.querySelector('.frame--add');
    this.btn.addEventListener('click', () => {
      canvaspallete.Load();
      this.Add(canvaspallete.saveImage());
    });
  }

  Add(data) {
    const frameItem = document.createElement('div');
    frameItem.classList.add('frame__item');
    const frameImage = document.createElement('img');
    frameImage.src = data;
    frameImage.classList.add('frame__image');
    frameItem.appendChild(frameImage);
    frameItem.appendChild(this.AddDeleteBtn(ICON_DELETE));
    frameItem.appendChild(this.AddCloneBtn(ICON_COPY));
    this.Currentframe = frameImage;
    frame.insertBefore(frameItem, frame.firstChild);
    this.listFrame.push(frameImage);
    frameItem.addEventListener('click', () => {
      this.ChangeFrame(frameImage);
    });
    animation.FPS_SHOW(this.counter);
    this.counter += 1;
    this.Currentframe.counter = this.counter;
  }

  AddCloneBtn(data) {
    const copyIcon = document.createElement('img');
    copyIcon.addEventListener('click', () => { this.Clone(); });
    copyIcon.classList.add('copy-elem');
    copyIcon.src = data;
    return copyIcon;
  }

  AddDeleteBtn(data) {
    const deleteIcon = document.createElement('img');
    deleteIcon.classList.add('delete-elem');
    deleteIcon.addEventListener('click', () => {
      this.Delete();
    });
    deleteIcon.src = data;
    return deleteIcon;
  }

  Clone() {
    this.Add(this.Currentframe.src);
  }

  Delete() {
    if (this.counter !== 1) {
      let counter = 0;
      const parent = document.querySelector('.frame');
      let currentFrame;
      parent.removeChild(this.Currentframe.parentNode);
      this.listFrame.forEach((item) => {
        if (item.src === this.Currentframe.src) {
          this.listFrame.splice(counter, 1);
          currentFrame = counter;
        }
        counter += 1;
      });
      this.counter -= 1;
      animation.FPS_SHOW(this.counter);
      if (currentFrame === 1 || currentFrame === 0) {
        this.ChangingDataFrame(this.listFrame[0]);
        this.ChangeFrame(this.listFrame[0]);
      } else {
        this.ChangingDataFrame(this.listFrame[currentFrame - 1]);
        this.ChangeFrame(this.listFrame[currentFrame - 1]);
      }
    } else {
      alert('Невозможно удалить последний элемент');
    }
  }

  ChangeFrame(imgData) {
    this.Currentframe = imgData;
    const img = new Image();
    img.src = imgData.src;
    ctx.drawImage(img, 0, 0);
  }

  ChangingDataFrame(data) {
    this.Currentframe.src = data;
  }
}

const framebox = new Frame();
export { framebox, Frame };

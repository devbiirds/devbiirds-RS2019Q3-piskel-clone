/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import { pencil } from '../pencil/pencil';
import { stroke } from '../stroke/stroke';
import { bucket } from '../bucket/bucket';

const inputColor = document.querySelector('#input_color');

function ChangeColor() {
  inputColor.click();
  inputColor.addEventListener('change', () => {
    pencil.color = inputColor.value;
    stroke.color = inputColor.value;
    bucket.color = inputColor.value;
  });
}
export { inputColor, ChangeColor };

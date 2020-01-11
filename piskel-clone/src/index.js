import './scss/main.scss';
import { tools } from './components/tools/tools';
import { canvaspallete } from './components/canvas';
import { pencil } from './components/tools/pencil/pencil';
import { eraser } from './components/tools/eraser/eraser';
import { grid } from './components/piskel';
import { stroke } from './components/tools/stroke/stroke';
import { framebox } from './components/Frame/frame';
import { bucket } from './components/tools/bucket/bucket';
import { inputColor, ChangeColor } from './components/tools/color/color';

inputColor.addEventListener('click', ChangeColor);
grid.addEventListener('mousedown', (event) => {
  switch (tools.id) {
    case 'pencil': pencil.MouseDown(event); break;
    case 'allbucket': break;
    case 'eraser': eraser.MouseDown(event); break;
    case 'stroke': stroke.MouseDown(event); break;
    case 'bucket': bucket.MouseDown(event); break;
    default:
      break;
  }
});
grid.addEventListener('mousemove', (event) => {
  switch (tools.id) {
    case 'pencil': pencil.Mousemove(event); break;
    case 'eraser': eraser.Mousemove(event); break;
    default:
      break;
  }
});
grid.addEventListener('mouseup', (event) => {
  switch (tools.id) {
    case 'pencil': pencil.Mouseup(event); break;
    case 'eraser': eraser.Mouseup(event); break;
    default:
      break;
  }
  framebox.ChangingDataFrame(canvaspallete.saveImage());
});

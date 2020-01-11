/* eslint-disable class-methods-use-this */
import { canvaspallete, ctx } from '../../canvas';
import { framebox } from '../../Frame/frame';

const CLEAN_COLOR = '#FFF';
class Clean {
  Clean() {
    ctx.fillStyle = CLEAN_COLOR;
    ctx.fillRect(0, 0, 768, 768);
    framebox.ChangingDataFrame(canvaspallete.saveImage());
  }
}
const cleaning = new Clean();
export default cleaning;

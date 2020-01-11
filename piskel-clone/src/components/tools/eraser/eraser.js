import { Pencil } from '../pencil/pencil';

const ERASER_COLOR = '#fff';
class Eraser extends Pencil {
  constructor() {
    super();
    this.color = ERASER_COLOR;
  }
}
const eraser = new Eraser();
export { eraser, Eraser };

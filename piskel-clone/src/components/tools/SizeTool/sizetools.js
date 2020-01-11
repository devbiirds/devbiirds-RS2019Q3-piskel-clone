/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
const DEFAULT_SIZE_DRAW = 32;
const ACTIVE_SMALL = document.querySelector('.size_active--small');
const ACTIVE_MEDIUM = document.querySelector('.size_active--medium');
const ACTIVE_LARGE = document.querySelector('.size_active--large');
const SMALL_SIZE = 32;
const MEDUIM_SIZE = 64;
const LARGE_SIZE = 128;
class Size {
  constructor(DEFAULT_SIZE) {
    this.item_size = DEFAULT_SIZE;
    this.item_prev = ACTIVE_SMALL;
    this.items = document.querySelectorAll('.size_info');
    this.items.forEach((elem) => {
      elem.addEventListener('click', (event) => {
        if (event.currentTarget.id === 'small') {
          this.item_size = SMALL_SIZE;
          ACTIVE_SMALL.style = 'visibility: visible;';
          this.item_prev.style = 'visibility: hidden;';
          this.item_prev = ACTIVE_SMALL;
        }
        if (event.currentTarget.id === 'medium') {
          this.item_size = MEDUIM_SIZE;
          ACTIVE_MEDIUM.style = 'visibility: visible;';
          this.item_prev.style = 'visibility: hidden;';
          this.item_prev = ACTIVE_MEDIUM;
        }
        if (event.currentTarget.id === 'large') {
          this.item_size = LARGE_SIZE;
          ACTIVE_LARGE.style = 'visibility: visible;';
          this.item_prev.style = 'visibility: hidden;';
          this.item_prev = ACTIVE_LARGE;
        }
      });
    });
  }

  toSmall() {
    tools.size = SMALL_SIZE;
  }

  toMedium() {
    tools.size = MEDUIM_SIZE;
  }

  toLarge() {
    tools.size = LARGE_SIZE;
  }
}

const size = new Size(DEFAULT_SIZE_DRAW);
export { size, Size };

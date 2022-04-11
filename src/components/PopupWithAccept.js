import { Popup } from './Popup.js';

export class PopupWithAccept extends Popup {
  constructor(selector, ) {
    super(selector);
    // this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.form');
  }
  chengeHandleSubmit(newHandle) {
    this._handleSubmit = newHandle;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmit();
    });
  }

  getIdCard() {

  }
}

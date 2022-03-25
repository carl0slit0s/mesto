import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, submitLogic) {
    super(selector);
    this._form = this._popup.querySelector('.form');
    this._submitLogic = submitLogic;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitLogic(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll('.form__input'));
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    console.log(values)
    return values;
  }
}

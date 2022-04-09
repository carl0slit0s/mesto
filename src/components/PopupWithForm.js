import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, handleSubmit) {
    super(selector);
    this._form = this._popup.querySelector('.form');
    this._formSubmit = this._form.querySelector('.form__submit')
    this._sabmitText = this._formSubmit.textContent
    this._handleSubmit = handleSubmit;
    this._inputs = Array.from(this._form.querySelectorAll('.form__input'));
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  chengeHandleSubmit(newHandle) {
    this._handleSubmit = newHandle
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    // console.log(values)
    return values;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._formSubmit.textContent = 'Сохранение...'
    }
    else {
      this._formSubmit.textContent = this._sabmitText
    }
  }
}

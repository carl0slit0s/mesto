export const CONFIG = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit',
  inputErrorClass: 'form__input_type_error',
  disabledButtonClass: 'form__submit_inactive',
};

export class FormValidator {
  constructor(config, validForm) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._buttonSelector = config.buttonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._disabledButtonClass = config.disabledButtonClass;
    this._form = validForm;
    this._config = config;
  }

  enableValidation() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    const buttonElement = this._form.querySelector(this._buttonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => this._addListenner(inputElement, inputList, buttonElement));
    });
  }

  _addListenner(inputElement, inputList, buttonElement) {
    this._checkInputValidity(this._inputErrorClass, this._form, inputElement);
    this._toggleButtonState(inputList, buttonElement);
  }

  _checkInputValidity(inputErrorClass, form, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        inputErrorClass,
        form,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(inputErrorClass, form, inputElement);
    }
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(buttonElement, this._disabledButtonClass);
    } else {
      this._includeButton(buttonElement, this._disabledButtonClass);
    }
  }

  _showInputError(inputErrorClass, form, inputElement, errorMessage) {
    const errorElement = form.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(inputErrorClass);
  }

  _hideInputError(inputErrorClass, form, inputElement) {
    const errorElement = form.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(inputErrorClass);
  }

  _hasInvalidInput(inputList) {

    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disableButton(button) {
    button.classList.add(this._disabledButtonClass);
    button.setAttribute('disabled', '');
  }

  _includeButton(button) {
    button.classList.remove(this._disabledButtonClass);
    button.removeAttribute('disabled');
  }
}

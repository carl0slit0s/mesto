

export class FormValidator {
  constructor(config, validForm) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._buttonSelector = config.buttonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._disabledButtonClass = config.disabledButtonClass;
    this._form = validForm;
    this._config = config;
    this.buttonElement = this._form.querySelector(this._buttonSelector);
  }

  enableValidation() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._toggleButtonState(inputList);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => this._addListenner(inputElement, inputList));
    });
  }

  _addListenner(inputElement, inputList) {
    this._checkInputValidity(this._inputErrorClass, this._form, inputElement);
    this._toggleButtonState(inputList);
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

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this.disableButton(this._disabledButtonClass);
    } else {
      this._includeButton(this._disabledButtonClass);
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

  disableButton() {
    this.buttonElement.classList.add(this._disabledButtonClass);
    this.buttonElement.setAttribute('disabled', '');
  }

  _includeButton() {
    this.buttonElement.classList.remove(this._disabledButtonClass);
    this.buttonElement.removeAttribute('disabled');
  }
}

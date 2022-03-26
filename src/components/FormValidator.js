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
    const inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._toggleButtonState(inputList);
    
    this._form.addEventListener('reset', () => {
      this.disableButton();
      inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    });

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () =>
        this._addListenner(inputElement, inputList)
      );
    });
  }

  _addListenner(inputElement, inputList) {
    this._checkInputValidity(inputElement);
    this._toggleButtonState(inputList);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this.disableButton(this._disabledButtonClass);
    } else {
      this._activateButton(this._disabledButtonClass);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(this._inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(this._inputErrorClass);
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

  _activateButton() {
    this.buttonElement.classList.remove(this._disabledButtonClass);
    this.buttonElement.removeAttribute('disabled');
  }
}

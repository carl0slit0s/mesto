const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(config, form);
  });
};

const setEventListeners = (config, form) => {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  const buttonElement = form.querySelector(config.buttonSelector);
  toggleButtonState(config.disabledButtonClass, inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(config.inputErrorClass, form, inputElement);
      toggleButtonState(config.disabledButtonClass, inputList, buttonElement);
    });
  });
};

const checkInputValidity = (inputErrorClass, form, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(inputErrorClass, form, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputErrorClass, form, inputElement);
  }
};

const showInputError = (inputErrorClass, form, inputElement, errorMessage) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(inputErrorClass);
};

const hideInputError = (inputErrorClass, form, inputElement) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
  inputElement.classList.remove(inputErrorClass);
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (disabledButtonClass, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(disabledButtonClass);
    buttonElement.setAttribute('disabled', '');
  } else {
    buttonElement.classList.remove(disabledButtonClass);
    buttonElement.removeAttribute('disabled')
  }
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit',
  inputErrorClass: 'form__input_type_error',
  disabledButtonClass: 'form__submit_inactive'
});

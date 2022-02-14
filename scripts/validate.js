CONFIG = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit',
  inputErrorClass: 'form__input_type_error',
  disabledButtonClass: 'form__submit_inactive',
};

// проходимся по формам
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(config, form);
  });
};

// проходимся по инпутам внутри формы
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
// проверка на наличие ошибок. показать/скрыть ошибки
const checkInputValidity = (inputErrorClass, form, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      inputErrorClass,
      form,
      inputElement,
      inputElement.validationMessage
    );
  } else {
    hideInputError(inputErrorClass, form, inputElement);
  }
};

//показать ошибки
const showInputError = (inputErrorClass, form, inputElement, errorMessage) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(inputErrorClass);
};

// скрыть ошибки
const hideInputError = (inputErrorClass, form, inputElement) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
  inputElement.classList.remove(inputErrorClass);
};

// проверяем наличие ошибок
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// меняем статус кнопки
const toggleButtonState = (disabledButtonClass, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, disabledButtonClass);
  } else {
    includeButton(buttonElement, disabledButtonClass)
  }
};

// деактивация кнопки
const disableButton = (button, disabledButtonClass) => {
  button.classList.add(disabledButtonClass);
  button.setAttribute('disabled', '');
};

// активация кнопки
const includeButton = (button, disabledButtonClass) => {
  button.classList.remove(disabledButtonClass);
  button.removeAttribute('disabled');
};

// запускаем функцию с параметрами
enableValidation(CONFIG);

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto/./src/pages/index.css?");

/***/ }),

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\nclass Api {\r\n  constructor(server, options) {\r\n    this.options = options;\r\n    this.server = server;\r\n  }\r\n\r\n  getProfileData() {\r\n    return fetch(`${this.server}/users/me`, this.options)\r\n      .then((res) => {\r\n        if (res.ok) {\r\n          return res.json();\r\n        }\r\n      })\r\n      .catch((err) => {\r\n        console.log(`Ошибка: ${err}`);\r\n      });\r\n  }\r\n\r\n  getCards() {\r\n    return fetch(`${this.server}/cards`, this.options)\r\n      .then((res) => {\r\n        if (res.ok) {\r\n          return res.json();\r\n        }\r\n      })\r\n      .catch((err) => {\r\n        console.log(`Ошибка: ${err}`);\r\n      });\r\n  }\r\n\r\n  editProfile(data) {\r\n    return fetch(`${this.server}/users/me`, {\r\n      method: 'PATCH',\r\n      headers: {\r\n        authorization: 'b14b5010-4fa1-4827-8329-0c3d4de2a70b',\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({\r\n        name: data.name,\r\n        about: data.about,\r\n      }),\r\n    })\r\n      .then((res) => {\r\n        if (res.ok) {\r\n          return res.json();\r\n        }\r\n      })\r\n      .catch((err) => {\r\n        console.log(`Ошибка: ${err}`);\r\n      });\r\n  }\r\n\r\n  addCard(name, link) {\r\n    return fetch(`${this.server}/cards`, {\r\n      method: 'POST',\r\n      headers: {\r\n        authorization: 'b14b5010-4fa1-4827-8329-0c3d4de2a70b',\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({\r\n        name,\r\n        link,\r\n      }),\r\n    })\r\n      .then((res) => {\r\n        if (res.ok) {\r\n          return res.json();\r\n        }\r\n      })\r\n      .catch((err) => {\r\n        console.log(`Ошибка: ${err}`);\r\n      });\r\n  }\r\n\r\n  deleteCard(id) {\r\n    return fetch(`${this.server}/cards/${id}`, {\r\n      method: 'DELETE',\r\n      headers: {\r\n        authorization: 'b14b5010-4fa1-4827-8329-0c3d4de2a70b',\r\n        'Content-Type': 'application/json',\r\n      },\r\n    })\r\n      .then((res) => {\r\n        if (res.ok) {\r\n          return res.json();\r\n        }\r\n      })\r\n      .catch((err) => {\r\n        console.log(`Ошибка: ${err}`);\r\n      });\r\n  }\r\n\r\n  addLike(id) {\r\n    return fetch(`${this.server}/cards/${id}/likes`, {\r\n      method: 'PUT',\r\n      headers: {\r\n        authorization: 'b14b5010-4fa1-4827-8329-0c3d4de2a70b',\r\n        'Content-Type': 'application/json',\r\n      },\r\n    })\r\n      .then((res) => {\r\n        if (res.ok) {\r\n          return res.json();\r\n        }\r\n      })\r\n      .catch((err) => {\r\n        console.log(`Ошибка: ${err}`);\r\n      });\r\n  }\r\n\r\n  deleteLike(id) {\r\n    return fetch(`${this.server}/cards/${id}/likes`, {\r\n      method: 'DELETE',\r\n      headers: {\r\n        authorization: 'b14b5010-4fa1-4827-8329-0c3d4de2a70b',\r\n        'Content-Type': 'application/json',\r\n      },\r\n    })\r\n      .then((res) => {\r\n        if (res.ok) {\r\n          return res.json();\r\n        }\r\n      })\r\n      .catch((err) => {\r\n        console.log(`Ошибка: ${err}`);\r\n      });\r\n  }\r\n\r\n  changeAvatar(avatar) {\r\n    return fetch(`${this.server}/users/me/avatar`, {\r\n      method: 'PATCH',\r\n      headers: {\r\n        authorization: 'b14b5010-4fa1-4827-8329-0c3d4de2a70b',\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({\r\n        avatar: avatar\r\n      })\r\n    })\r\n      .then((res) => {\r\n        if (res.ok) {\r\n          return res.json();\r\n        }\r\n      })\r\n      .catch((err) => {\r\n        console.log(`Ошибка: ${err}`);\r\n      });\r\n  }\r\n}\r\n\r\nconst api = new Api('https://nomoreparties.co/v1/cohort-39', {\r\n  headers: {\r\n    authorization: 'b14b5010-4fa1-4827-8329-0c3d4de2a70b',\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://mesto/./src/components/Api.js?");

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\nclass Card {\r\n  constructor(\r\n    data,\r\n    classTempate,\r\n    handleImageClick,\r\n    handleDeleteAccept,\r\n    handleLikeCkick\r\n  ) {\r\n    this._classTemplate = classTempate;\r\n    this._cardName = data.name;\r\n    this._cardLink = data.link;\r\n    this._likes = data.likes;\r\n    this._id = data._id;\r\n    // this._deleteCardSelector = '.photo-card__delete';\r\n    this._likeCardSelector = '.photo-card__like';\r\n    this._photoCardSelector = '.photo-card__photo';\r\n    this._likeCountSelector = '.photo-card__like-count';\r\n\r\n    this._owner = data.ownerId;\r\n    this._profileId = data.profileId;\r\n\r\n    this._handleImageClick = handleImageClick;\r\n    this._handleDeleteAccept = handleDeleteAccept;\r\n    this._handleLikeCkick = handleLikeCkick;\r\n  }\r\n\r\n  _createCloneTemplate() {\r\n    this._newCard = this._getTemplate();\r\n    this._deleteCardButton = this._newCard.querySelector('.photo-card__delete');\r\n    const newCardImg = this._newCard.querySelector('.photo-card__photo');\r\n    const newCardName = this._newCard.querySelector('.photo-card__name');\r\n    newCardName.textContent = this._cardName;\r\n    newCardImg.alt = this._cardName;\r\n    newCardImg.src = this._cardLink;\r\n    this.setLikes(this._likes);\r\n    return this._newCard;\r\n  }\r\n\r\n  setLikes(newLikes) {\r\n    this._likes = newLikes;\r\n    const likeCount = this._newCard.querySelector(this._likeCountSelector);\r\n    likeCount.textContent = this._likes.length;\r\n\r\n    if(this.checkUserLikes()) {\r\n      this._addLikeIcon()\r\n    } else {\r\n      this._deleteLikeIcon()\r\n    }\r\n  }\r\n\r\n  _addLikeIcon() {\r\n    this._newCard\r\n    .querySelector(this._likeCardSelector)\r\n    .classList.add('photo-card__like_activate');\r\n  }\r\n\r\n  _deleteLikeIcon() {\r\n    this._newCard\r\n    .querySelector(this._likeCardSelector)\r\n    .classList.remove('photo-card__like_activate');\r\n  }\r\n\r\n  _getTemplate() {\r\n    const cardElement = document\r\n      .querySelector(this._classTemplate)\r\n      .content.querySelector('.photo-card')\r\n      .cloneNode(true);\r\n    return cardElement;\r\n  }\r\n\r\n  creatNewCard() {\r\n    this._newCard = this._createCloneTemplate();\r\n    this._addListener();\r\n    this._checkAuthor();\r\n    this.checkUserLikes();\r\n    return this._newCard;\r\n  }\r\n\r\n  _addListener() {\r\n    this._deleteCardButton.addEventListener('click', () => {\r\n      this._handleDeleteAccept(this._id);\r\n    });\r\n    this._newCard\r\n      .querySelector(this._likeCardSelector)\r\n      .addEventListener('click', () => this._handleLikeCkick(this._id));\r\n    this._newCard\r\n      .querySelector(this._photoCardSelector)\r\n      .addEventListener('click', () => this._handleImageClick());\r\n  }\r\n\r\n  deleteCard() {\r\n    this._newCard.remove();\r\n  }\r\n\r\n  likeCard() {\r\n    this._newCard\r\n      .querySelector(this._likeCardSelector)\r\n      .classList.toggle('photo-card__like_activate');\r\n  }\r\n\r\n  _checkAuthor() {\r\n    if (this._owner !== this._profileId) {\r\n      this._deleteCardButton.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  checkUserLikes() {\r\n    const userHasLikeCard = this._likes.find(\r\n      (user) => user._id === this._profileId)\r\n    return userHasLikeCard\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://mesto/./src/components/Card.js?");

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormValidator\": () => (/* binding */ FormValidator)\n/* harmony export */ });\nclass FormValidator {\r\n  constructor(config, validForm) {\r\n    this._formSelector = config.formSelector;\r\n    this._inputSelector = config.inputSelector;\r\n    this._buttonSelector = config.buttonSelector;\r\n    this._inputErrorClass = config.inputErrorClass;\r\n    this._disabledButtonClass = config.disabledButtonClass;\r\n    this._form = validForm;\r\n    this._config = config;\r\n    this.buttonElement = this._form.querySelector(this._buttonSelector);\r\n  }\r\n\r\n  enableValidation() {\r\n    const inputList = Array.from(\r\n      this._form.querySelectorAll(this._inputSelector)\r\n    );\r\n    this._toggleButtonState(inputList);\r\n    \r\n    this._form.addEventListener('reset', () => {\r\n      this.disableButton();\r\n      inputList.forEach((inputElement) => {\r\n        this._hideInputError(inputElement);\r\n      });\r\n    });\r\n\r\n    inputList.forEach((inputElement) => {\r\n      inputElement.addEventListener('input', () =>\r\n        this._addListenner(inputElement, inputList)\r\n      );\r\n    });\r\n  }\r\n\r\n  _addListenner(inputElement, inputList) {\r\n    this._checkInputValidity(inputElement);\r\n    this._toggleButtonState(inputList);\r\n  }\r\n\r\n  _checkInputValidity(inputElement) {\r\n    if (!inputElement.validity.valid) {\r\n      this._showInputError(\r\n        inputElement,\r\n        inputElement.validationMessage\r\n      );\r\n    } else {\r\n      this._hideInputError(inputElement);\r\n    }\r\n  }\r\n\r\n  _toggleButtonState(inputList) {\r\n    if (this._hasInvalidInput(inputList)) {\r\n      this.disableButton(this._disabledButtonClass);\r\n    } else {\r\n      this._activateButton(this._disabledButtonClass);\r\n    }\r\n  }\r\n\r\n  _showInputError(inputElement, errorMessage) {\r\n    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);\r\n    errorElement.textContent = errorMessage;\r\n    inputElement.classList.add(this._inputErrorClass);\r\n  }\r\n\r\n  _hideInputError(inputElement) {\r\n    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);\r\n    errorElement.textContent = '';\r\n    inputElement.classList.remove(this._inputErrorClass);\r\n  }\r\n\r\n  _hasInvalidInput(inputList) {\r\n    return inputList.some((inputElement) => {\r\n      return !inputElement.validity.valid;\r\n    });\r\n  }\r\n\r\n  disableButton() {\r\n    this.buttonElement.classList.add(this._disabledButtonClass);\r\n    this.buttonElement.setAttribute('disabled', '');\r\n  }\r\n\r\n  _activateButton() {\r\n    this.buttonElement.classList.remove(this._disabledButtonClass);\r\n    this.buttonElement.removeAttribute('disabled');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://mesto/./src/components/FormValidator.js?");

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Popup\": () => (/* binding */ Popup)\n/* harmony export */ });\nclass Popup {\r\n  constructor(selectorPopup) {\r\n    this._popup = document.querySelector(selectorPopup);\r\n    this._buttonClose = this._popup.querySelector('.popup__close-icon');\r\n    this._handleEscClose = this._handleEscClose.bind(this);\r\n  }\r\n\r\n  open() {\r\n    this._popup.classList.add('popup_opened');\r\n    document.addEventListener('keydown', this._handleEscClose);\r\n  }\r\n\r\n  close() {\r\n    this._popup.classList.remove('popup_opened');\r\n    document.removeEventListener('keydown', this._handleEscClose);\r\n  }\r\n\r\n  _handleEscClose(event) {\r\n    if (event.key === 'Escape') {\r\n      this.close();\r\n    }\r\n  }\r\n\r\n  setEventListeners() {\r\n    this._popup.addEventListener('mousedown', (event) => {\r\n      if (\r\n        event.target === event.currentTarget ||\r\n        event.target === this._buttonClose\r\n      ) {\r\n        this.close();\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://mesto/./src/components/Popup.js?");

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopupWithForm\": () => (/* binding */ PopupWithForm)\n/* harmony export */ });\n/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ \"./src/components/Popup.js\");\n\r\n\r\nclass PopupWithForm extends _Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup {\r\n  constructor(selector, handleSubmit) {\r\n    super(selector);\r\n    this._form = this._popup.querySelector('.form');\r\n    this._formSubmit = this._form.querySelector('.form__submit')\r\n    this._sabmitText = this._formSubmit.textContent\r\n    this._handleSubmit = handleSubmit;\r\n    this._inputs = Array.from(this._form.querySelectorAll('.form__input'));\r\n  }\r\n\r\n  setEventListeners() {\r\n    super.setEventListeners();\r\n    this._form.addEventListener('submit', (event) => {\r\n      event.preventDefault();\r\n      this._handleSubmit(this._getInputValues());\r\n    });\r\n  }\r\n\r\n  chengeHandleSubmit(newHandle) {\r\n    this._handleSubmit = newHandle\r\n  }\r\n\r\n  close() {\r\n    super.close();\r\n    this._form.reset();\r\n  }\r\n\r\n  _getInputValues() {\r\n    const values = {};\r\n    this._inputs.forEach((input) => {\r\n      values[input.name] = input.value;\r\n    });\r\n    // console.log(values)\r\n    return values;\r\n  }\r\n\r\n  renderLoading(isLoading) {\r\n    if (isLoading) {\r\n      this._formSubmit.textContent = 'Сохранение...'\r\n    }\r\n    else {\r\n      this._formSubmit.textContent = this._sabmitText\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://mesto/./src/components/PopupWithForm.js?");

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopupWithImage\": () => (/* binding */ PopupWithImage)\n/* harmony export */ });\n/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ \"./src/components/Popup.js\");\n\r\n\r\nclass PopupWithImage extends _Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup {\r\n  constructor(selectorPopup, selectorPopupTitle) {\r\n    super(selectorPopup);\r\n    this._popupPhotoTitle = this._popup.querySelector(selectorPopupTitle);\r\n    this._photoImg = this._popup.querySelector('.photo-popup__photo');\r\n  }\r\n\r\n  open(title, link) {\r\n    this._photoImg.src = link;\r\n    this._photoImg.alt = title;\r\n    this._popupPhotoTitle.textContent = title;\r\n    super.open();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://mesto/./src/components/PopupWithImage.js?");

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Section\": () => (/* binding */ Section)\n/* harmony export */ });\n  class Section {\r\n  constructor({ items, renderer }, container) {\r\n    this._items = items\r\n    this._renderer = renderer\r\n\r\n    this._conteiner = container\r\n  }\r\n\r\n  renderItems() {\r\n    this._items.forEach(element => {\r\n      this._renderer(element)\r\n    });\r\n  }\r\n\r\n  addItem(card) {\r\n    // const card = this._renderer(element)\r\n    this._conteiner.prepend(card)\r\n  }\r\n\r\n\r\n  // _renderer(item) {\r\n  //   const cardElement = new Card(cardData, CONFIG.templateSelector, () => {\r\n  //     photoPopup.open(cardData.name, cardData.link);\r\n  //   }).creatNewCard();\r\n  //   return cardElement;\r\n  // }\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/Section.js?");

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserInfo\": () => (/* binding */ UserInfo)\n/* harmony export */ });\nclass UserInfo {\r\n  constructor({ userNameSelector, userAboutSelector, userAvatarSelector }) {\r\n    this._name = document.querySelector(userNameSelector);\r\n    this._about = document.querySelector(userAboutSelector);\r\n    this._avatar = document.querySelector(userAvatarSelector)\r\n  }\r\n\r\n  getUserInfo() {\r\n    return { name: this._name.textContent, about: this._about.textContent };\r\n  }\r\n\r\n  setUserInfo(newName, newAbout, newAvatar) {\r\n    this._name.textContent = newName;\r\n    this._about.textContent = newAbout;\r\n    this._avatar.src = newAvatar\r\n  }\r\n\r\n  updateUserInfo(newName, newAbout,) {    \r\n    this._name.textContent = newName;\r\n    this._about.textContent = newAbout;\r\n  }\r\n\r\n  changeAvatar(newAvatar) {\r\n    this._avatar.src = newAvatar\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://mesto/./src/components/UserInfo.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Card.js */ \"./src/components/Card.js\");\n/* harmony import */ var _utils_initialCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/initialCards.js */ \"./src/utils/initialCards.js\");\n/* harmony import */ var _components_FormValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator */ \"./src/components/FormValidator.js\");\n/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section.js */ \"./src/components/Section.js\");\n/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserInfo.js */ \"./src/components/UserInfo.js\");\n/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ \"./src/components/PopupWithImage.js\");\n/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithForm.js */ \"./src/components/PopupWithForm.js\");\n/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Api.js */ \"./src/components/Api.js\");\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet profileId;\r\n_components_Api_js__WEBPACK_IMPORTED_MODULE_7__.api.getProfileData().then((profile) => {\r\n  // console.log(profile);\r\n  userInfo.setUserInfo(profile.name, profile.about, profile.avatar);\r\n  // avatar.src = profile.avatar;\r\n  profileId = profile._id;\r\n});\r\n\r\n_components_Api_js__WEBPACK_IMPORTED_MODULE_7__.api.getCards().then((cardDataList) => {\r\n  cardDataList.forEach((cardData) => {\r\n    const card = creatCard({\r\n      name: cardData.name,\r\n      link: cardData.link,\r\n      likes: cardData.likes,\r\n      _id: cardData._id,\r\n      ownerId: cardData.owner._id,\r\n      profileId: profileId,\r\n    });\r\n    inseretCard(card);\r\n  });\r\n});\r\n\r\nconst deleteAcceptPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithForm(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupDeleteAcceptSelector, () => {\r\n  _components_Api_js__WEBPACK_IMPORTED_MODULE_7__.api.deleteCard(id);\r\n});\r\n\r\nconst formValidators = {};\r\nfunction enableValidation(config) {\r\n  const formList = Array.from(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formsValid);\r\n  formList.forEach((form) => {\r\n    const validator = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_2__.FormValidator(config, form);\r\n    const formName = form.getAttribute('name');\r\n    formValidators[formName] = validator;\r\n    validator.enableValidation();\r\n  });\r\n}\r\nenableValidation(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.CONFIG);\r\n\r\n// userInfo.setUserInfo();\r\n\r\n// сохранить изменения в редакторе профиля\r\nconst saveRedactorProfile = (data) => {\r\n  redactorProfilePopup.renderLoading(true)\r\n  _components_Api_js__WEBPACK_IMPORTED_MODULE_7__.api.editProfile(data).then(() => {\r\n    //добаваить аватар\r\n    userInfo.updateUserInfo(data.name, data.about);\r\n    redactorProfilePopup.close();\r\n  }).finally(() => redactorProfilePopup.renderLoading(false));;\r\n};\r\n\r\n// добавление карты в разметку\r\nfunction inseretCard(newCard) {\r\n  cardList.addItem(newCard);\r\n}\r\n\r\nfunction creatCard(cardData) {\r\n  const cardElement = new _components_Card_js__WEBPACK_IMPORTED_MODULE_0__.Card(\r\n    cardData,\r\n    _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.CONFIG.templateSelector,\r\n    () => {\r\n      photoPopup.open(cardData.name, cardData.link);\r\n    },\r\n    (id) => {\r\n      deleteAcceptPopup.open();\r\n      deleteAcceptPopup.chengeHandleSubmit(() => {\r\n        _components_Api_js__WEBPACK_IMPORTED_MODULE_7__.api.deleteCard(id).then((res) => {\r\n          cardElement.deleteCard();\r\n          deleteAcceptPopup.close();\r\n        });\r\n      });\r\n    },\r\n    (id) => {\r\n      if (cardElement.checkUserLikes()) {\r\n        _components_Api_js__WEBPACK_IMPORTED_MODULE_7__.api.deleteLike(id).then((res) => {\r\n          cardElement.setLikes(res.likes);\r\n        });\r\n      } else {\r\n        _components_Api_js__WEBPACK_IMPORTED_MODULE_7__.api.addLike(id).then((res) => {\r\n          cardElement.setLikes(res.likes);\r\n        });\r\n      }\r\n    }\r\n  );\r\n  return cardElement.creatNewCard();\r\n}\r\n\r\n// function\r\n\r\nfunction addPhoto(data) {\r\n  addPhotoPopup.renderLoading(true)\r\n  _components_Api_js__WEBPACK_IMPORTED_MODULE_7__.api.addCard(data['place-name'], data['photo-link']).then((res) => {\r\n    const newCard = creatCard({\r\n      name: res.name,\r\n      link: res.link,\r\n      likes: res.likes,\r\n      _id: res._id,\r\n      ownerId: res.owner._id,\r\n      profileId: profileId,\r\n    });\r\n    inseretCard(newCard);\r\n    addPhotoPopup.close();\r\n  })\r\n  .finally(() => addPhotoPopup.renderLoading(false));\r\n}\r\n\r\n_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.buttonAddPhoto.addEventListener('click', () => {\r\n  addPhotoPopup.open();\r\n});\r\n\r\n_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.profileEditButton.addEventListener('click', () => {\r\n  const userInfoData = userInfo.getUserInfo();\r\n  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputProfileName.value = userInfoData.name;\r\n  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputProfileAbout.value = userInfoData.about;\r\n  redactorProfilePopup.open();\r\n});\r\n\r\nconst avatar = document.querySelector(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.profileAvatarSelector);\r\navatar.addEventListener('click', () => {changeAvatarPopup.open()})\r\nfunction changeAvatar(data) {\r\n  changeAvatarPopup.renderLoading(true)\r\n  _components_Api_js__WEBPACK_IMPORTED_MODULE_7__.api.changeAvatar(data.avatar).then((res) => {\r\n    console.log(res)\r\n    userInfo.changeAvatar(data.avatar)\r\n    changeAvatarPopup.close()\r\n  }).finally(() => changeAvatarPopup.renderLoading(false));\r\n}\r\n\r\nconst cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__.Section(\r\n  {\r\n    items: [],\r\n    renderer: (cardData) => {\r\n      const cardElement = creatCard(cardData);\r\n\r\n      cardList.addItem(cardElement);\r\n    },\r\n  },\r\n  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.gallery\r\n);\r\n\r\n\r\nconst userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_4__.UserInfo({\r\n  userNameSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.profileNameSelector,\r\n  userAboutSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.profileAboutSelector,\r\n  userAvatarSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.profileAvatarSelector,\r\n});\r\nconst photoPopup = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithImage(\r\n  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupOpenPhotoSelector,\r\n  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupPhotoTitleSelector\r\n);\r\nconst redactorProfilePopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithForm(\r\n  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupRedactorProfileSelector,\r\n  saveRedactorProfile\r\n);\r\nconst addPhotoPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithForm(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupAddPhotoSelector, addPhoto);\r\n\r\nconst changeAvatarPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithForm(\r\n  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupChangeAvatarSelector,\r\n  changeAvatar\r\n);\r\n\r\ndeleteAcceptPopup.setEventListeners();\r\nchangeAvatarPopup.setEventListeners();\r\nphotoPopup.setEventListeners();\r\nredactorProfilePopup.setEventListeners();\r\naddPhotoPopup.setEventListeners();\r\n\r\ncardList.renderItems();\r\n\n\n//# sourceURL=webpack://mesto/./src/pages/index.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONFIG\": () => (/* binding */ CONFIG),\n/* harmony export */   \"avatar\": () => (/* binding */ avatar),\n/* harmony export */   \"buttonAddPhoto\": () => (/* binding */ buttonAddPhoto),\n/* harmony export */   \"formsValid\": () => (/* binding */ formsValid),\n/* harmony export */   \"gallery\": () => (/* binding */ gallery),\n/* harmony export */   \"inputProfileAbout\": () => (/* binding */ inputProfileAbout),\n/* harmony export */   \"inputProfileName\": () => (/* binding */ inputProfileName),\n/* harmony export */   \"popupAddPhoto\": () => (/* binding */ popupAddPhoto),\n/* harmony export */   \"popupAddPhotoSelector\": () => (/* binding */ popupAddPhotoSelector),\n/* harmony export */   \"popupChangeAvatarSelector\": () => (/* binding */ popupChangeAvatarSelector),\n/* harmony export */   \"popupDeleteAccept\": () => (/* binding */ popupDeleteAccept),\n/* harmony export */   \"popupDeleteAcceptSelector\": () => (/* binding */ popupDeleteAcceptSelector),\n/* harmony export */   \"popupOpenPhotoSelector\": () => (/* binding */ popupOpenPhotoSelector),\n/* harmony export */   \"popupPhotoTitleSelector\": () => (/* binding */ popupPhotoTitleSelector),\n/* harmony export */   \"popupRedactorProfileSelector\": () => (/* binding */ popupRedactorProfileSelector),\n/* harmony export */   \"profileAboutSelector\": () => (/* binding */ profileAboutSelector),\n/* harmony export */   \"profileAvatarSelector\": () => (/* binding */ profileAvatarSelector),\n/* harmony export */   \"profileEditButton\": () => (/* binding */ profileEditButton),\n/* harmony export */   \"profileNameSelector\": () => (/* binding */ profileNameSelector)\n/* harmony export */ });\nconst CONFIG = {\r\n  formSelector: '.form',\r\n  inputSelector: '.form__input',\r\n  buttonSelector: '.form__submit',\r\n  inputErrorClass: 'form__input_type_error',\r\n  disabledButtonClass: 'form__submit_inactive',\r\n  templateSelector: '#template',\r\n};\r\n\r\nconst profileEditButton = document.querySelector('.profile__edit');\r\nconst buttonAddPhoto = document.querySelector('.profile__add-button');\r\nconst popupRedactorProfileSelector = '.popup_target_redactor-profile';\r\nconst popupAddPhotoSelector = '.popup_target_add-photo';\r\nconst popupAddPhoto = document.querySelector(popupAddPhotoSelector);\r\nconst popupOpenPhotoSelector = '.popup_terget_add-photo';\r\nconst popupPhotoTitleSelector = '.photo-popup__title'\r\nconst avatar = document.querySelector('.profile__avatar')\r\nconst popupDeleteAccept = document.querySelector('.popup_target_delete-accept')\r\nconst popupDeleteAcceptSelector = '.popup_target_delete-accept'\r\nconst popupChangeAvatarSelector = '.popup_target_change-avatar'\r\nconst profileAvatarSelector = '.profile__avatar'\r\n\r\nconst inputProfileName = document.querySelector(\r\n  '.form__input_field_name'\r\n);\r\nconst inputProfileAbout = document.querySelector(\r\n  '.form__input_field_about'\r\n);\r\n\r\nconst profileNameSelector = '.profile__name';\r\nconst profileAboutSelector = '.profile__about';\r\n\r\nconst gallery = document.querySelector('.gallery');\r\n\r\nconst formsValid = document.querySelectorAll('.form_valid');\r\n\r\n\n\n//# sourceURL=webpack://mesto/./src/utils/constants.js?");

/***/ }),

/***/ "./src/utils/initialCards.js":
/*!***********************************!*\
  !*** ./src/utils/initialCards.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialCards\": () => (/* binding */ initialCards)\n/* harmony export */ });\nconst initialCards = [\r\n  {\r\n    name: 'Архыз',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',\r\n  },\r\n  {\r\n    name: 'Челябинская область',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',\r\n  },\r\n  {\r\n    name: 'Иваново',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',\r\n  },\r\n  {\r\n    name: 'Камчатка',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',\r\n  },\r\n  {\r\n    name: 'Холмогорский район',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',\r\n  },\r\n  {\r\n    name: 'Байкал',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',\r\n  },\r\n];\r\n\n\n//# sourceURL=webpack://mesto/./src/utils/initialCards.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;
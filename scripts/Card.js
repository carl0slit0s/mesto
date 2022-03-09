import { openPhoto } from "./index.js";

export class Card {
  constructor(data, classTampate) {
    this._classTamplate = classTampate;
    this._cardName = data.name;
    this._cardLink = data.link;
    this._deleteCardSelector = '.photo-card__delete';
    this._likeCardSelector = '.photo-card__like'
    this._photoCardSelector = '.photo-card__photo'
  }

  _createCloneTemplate() {
    const newCard = this._getTemplate();
    const newCardImg = newCard.querySelector('.photo-card__photo');
    const newCardName = newCard.querySelector('.photo-card__name');
    newCardName.textContent = this._cardName;
    newCardImg.alt = this._cardName;
    newCardImg.src = this._cardLink;
    return newCard;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._classTamplate).content.cloneNode(true)
    return cardElement
  }


  creatNewCard() {
    this._newCard = this._createCloneTemplate()
    this._addListener();
    return this._newCard
  }

  _addListener() {
    this._newCard
      .querySelector(this._deleteCardSelector)
      .addEventListener('click', this._cardDeleted);
      this._newCard
      .querySelector(this._likeCardSelector)
      .addEventListener('click', this._cardLiked);
      this._newCard
      .querySelector(this._photoCardSelector)
      .addEventListener('click', openPhoto);
  }

  _cardDeleted(event) {
    event.target.closest('.photo-card').remove()
  }

  _cardLiked(event) {
    const _like = event.target;
    _like.classList.toggle('photo-card__like_activate');
  }

}
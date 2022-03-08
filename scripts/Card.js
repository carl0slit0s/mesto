import { openPhoto } from "./index.js";

export class Card {
  constructor(data, classTampate, classPopup) {
    this._classTamplate = classTampate;
    this._cardName = data.name;
    this._cardLink = data.link;
    this._classPopup = classPopup
    this._deleteCardSelector = '.photo-card__delete';
    this._likeCardSelector = '.photo-card__like'
    this._photoCardSelector = '.photo-card__photo'
  }

  _createCloneTemplate() {
    const newCard = this._classTamplate.cloneNode(true);
    const newCardImg = newCard.querySelector('.photo-card__photo');
    const newCardName = newCard.querySelector('.photo-card__name');
    newCardName.textContent = this._cardName;
    newCardImg.alt = this._cardName;
    newCardImg.src = this._cardLink;
    return newCard;
  }

  creatNewCard() {
    const _newCard = this._createCloneTemplate()
    this._addListener(_newCard);
    return _newCard
  }

  _addListener(card) {
    card
      .querySelector(this._deleteCardSelector)
      .addEventListener('click', this._cardDeleted);
    card
      .querySelector(this._likeCardSelector)
      .addEventListener('click', this._cardLiked);
    card
      .querySelector(this._photoCardSelector)
      .addEventListener('click', this._openPhoto);
  }

  _cardDeleted(event) {
    event.target.closest('.photo-card').remove()
  }

  _cardLiked(event) {
    const _like = event.target;
    _like.classList.toggle('photo-card__like_activate');
  }

  _openPhoto(event) {
    openPhoto(event)
  }
}


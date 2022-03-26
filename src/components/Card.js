export class Card {
  constructor(data, classTempate, handleImageClick) {
    this._classTemplate = classTempate;
    this._cardName = data.name;
    this._cardLink = data.link;
    this._deleteCardSelector = '.photo-card__delete';
    this._likeCardSelector = '.photo-card__like';
    this._photoCardSelector = '.photo-card__photo';

    this._handleImageClick = handleImageClick;
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
    const cardElement = document
      .querySelector(this._classTemplate)
      .content.cloneNode(true);
    return cardElement;
  }

  creatNewCard() {
    this._newCard = this._createCloneTemplate();
    this._addListener();
    return this._newCard;
  }

  _addListener() {
    this._newCard
      .querySelector(this._deleteCardSelector)
      .addEventListener('click', this._deleteCard);
    this._newCard
      .querySelector(this._likeCardSelector)
      .addEventListener('click', this._likeCard);
    this._newCard.querySelector(this._photoCardSelector).addEventListener(
      'click',
      () => this._handleImageClick()
    );
  }

  _deleteCard(event) {
    event.target.closest('.photo-card').remove();
  }

  _likeCard(event) {
    event.target.classList.toggle('photo-card__like_activate');
  }
}

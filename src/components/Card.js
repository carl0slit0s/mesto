export class Card {
  constructor(data, classTempate, handleImageClick, handleDeleteAccept) {
    this._classTemplate = classTempate;
    this._cardName = data.name;
    this._cardLink = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._deleteCardSelector = '.photo-card__delete';
    this._likeCardSelector = '.photo-card__like';
    this._photoCardSelector = '.photo-card__photo';
    this._likeCountSelector = '.photo-card__like-count';

    // this._newCard = this._newCard.bind(this);
    this._handleImageClick = handleImageClick;
    this._handleDeleteAccept = handleDeleteAccept;
  }

  _createCloneTemplate() {
    this._newCard = this._getTemplate();

    const newCardImg = this._newCard.querySelector('.photo-card__photo');
    const newCardName = this._newCard.querySelector('.photo-card__name');
    newCardName.textContent = this._cardName;
    newCardImg.alt = this._cardName;
    newCardImg.src = this._cardLink;
    this._setLikes(this._newCard);
    // console.log(this._newCard)
    return this._newCard;
  }

  _setLikes() {
    const likeCount = this._newCard.querySelector(this._likeCountSelector);
    likeCount.textContent = this._likes.length;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._classTemplate)
      .content.cloneNode(true);
    // console.log(cardElement)
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
      .addEventListener('click', (event) => {
        this._handleDeleteAccept(this._id);
        // this._deleteCard(event);
      });
    this._newCard
      .querySelector(this._likeCardSelector)
      .addEventListener('click', this._likeCard);
    this._newCard
      .querySelector(this._photoCardSelector)
      .addEventListener('click', () => this._handleImageClick());
  }

  deleteCard() {
    console.log(this._newCard);
    // newCard.remove()
    this._newCard.remove()

    // event.target.closest('.photo-card').remove();
    // this._newCard.querySelector('.photo-card').remove();
  }

  _likeCard(event) {
    event.target.classList.toggle('photo-card__like_activate');
  }
}

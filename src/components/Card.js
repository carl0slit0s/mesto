export class Card {
  constructor(
    data,
    classTempate,
    handleImageClick,
    handleDeleteAccept,
    handleLikeCkick
  ) {
    this._classTemplate = classTempate;
    this._cardName = data.name;
    this._cardLink = data.link;
    this._likes = data.likes;
    this._id = data._id;
    // this._deleteCardSelector = '.photo-card__delete';
    this._likeCardSelector = '.photo-card__like';
    this._photoCardSelector = '.photo-card__photo';
    this._likeCountSelector = '.photo-card__like-count';

    this._owner = data.ownerId;
    this._profileId = data.profileId;

    this._handleImageClick = handleImageClick;
    this._handleDeleteAccept = handleDeleteAccept;
    this._handleLikeCkick = handleLikeCkick;
  }

  _createCloneTemplate() {
    this._newCard = this._getTemplate();
    this._deleteCardButton = this._newCard.querySelector('.photo-card__delete');
    const newCardImg = this._newCard.querySelector('.photo-card__photo');
    const newCardName = this._newCard.querySelector('.photo-card__name');
    newCardName.textContent = this._cardName;
    newCardImg.alt = this._cardName;
    newCardImg.src = this._cardLink;
    this.setLikes(this._likes);
    return this._newCard;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCount = this._newCard.querySelector(this._likeCountSelector);
    likeCount.textContent = this._likes.length;

    if(this.checkUserLikes()) {
      this._addLikeIcon()
    } else {
      this._deleteLikeIcon()
    }
  }

  _addLikeIcon() {
    this._newCard
    .querySelector(this._likeCardSelector)
    .classList.add('photo-card__like_activate');
  }

  _deleteLikeIcon() {
    this._newCard
    .querySelector(this._likeCardSelector)
    .classList.remove('photo-card__like_activate');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._classTemplate)
      .content.querySelector('.photo-card')
      .cloneNode(true);
    return cardElement;
  }

  creatNewCard() {
    this._newCard = this._createCloneTemplate();
    this._addListener();
    this._checkAuthor();
    this.checkUserLikes();
    return this._newCard;
  }

  _addListener() {
    this._deleteCardButton.addEventListener('click', () => {
      this._handleDeleteAccept(this._id);
    });
    this._newCard
      .querySelector(this._likeCardSelector)
      .addEventListener('click', () => this._handleLikeCkick(this._id));
    this._newCard
      .querySelector(this._photoCardSelector)
      .addEventListener('click', () => this._handleImageClick());
  }

  deleteCard() {
    this._newCard.remove();
  }

  likeCard() {
    this._newCard
      .querySelector(this._likeCardSelector)
      .classList.toggle('photo-card__like_activate');
  }

  _checkAuthor() {
    if (this._owner !== this._profileId) {
      this._deleteCardButton.style.display = 'none';
    }
  }

  checkUserLikes() {
    const userHasLikeCard = this._likes.find(
      (user) => user._id === this._profileId)
    return userHasLikeCard
  }
}

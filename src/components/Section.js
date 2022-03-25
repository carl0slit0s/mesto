  export class Section {
  constructor({ items, renderer }, container) {
    this._items = items
    this._renderer = renderer

    this._conteiner = container
  }

  renderItems() {
    this._items.forEach(element => {
      this._renderer(element)
    });
  }

  addItem(card) {
    // const card = this._renderer(element)
    this._conteiner.prepend(card)
  }


  // _renderer(item) {
  //   const cardElement = new Card(cardData, CONFIG.templateSelector, () => {
  //     photoPopup.open(cardData.name, cardData.link);
  //   }).creatNewCard();
  //   return cardElement;
  // }
}
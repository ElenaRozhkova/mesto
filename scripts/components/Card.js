export default class Card {
    constructor(data, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = data.name;
        this._link = data.link;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _clickLike() {
        this._element.querySelector('.element__vector-like').classList.toggle('element__vector_active');
    }

    _clickDelete() {
        this._element.querySelector('.element__vector-delete').closest('.element').remove();
    }

    _setEventListeners() {
        this._element.querySelector('.element__vector-like').addEventListener('click', () => {
            this._clickLike()
        });

        this._element.querySelector('.element__vector-delete').addEventListener('click', () => {
            this._clickDelete()
        });
    }


    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;

        return this._element;
    }
}
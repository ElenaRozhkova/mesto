export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._cardSelector = cardSelector;
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardElement;
    }

    _handleLikeCard() {
        this._element.querySelector('.card__vector-like').classList.toggle('card__vector_active');
    }

    _handleDeleteCard() {
        this._element.closest('.card').remove();
        this._element = null;
    }

    _setEventListeners() {
        this._element.querySelector('.card__vector-like').addEventListener('click', () => {
            this._handleLikeCard()
        });

        this._element.querySelector('.card__vector-delete').addEventListener('click', () => {
            this._handleDeleteCard()
        });

        this._element.querySelector('.card__image').addEventListener('click', () => { 
            this._handleCardClick()
        });
    }


    generateCard() {
        this._element = this._getTemplate();       
        this._setEventListeners();
        const cardImage = this._element.querySelector('.card__image');
        this._element.querySelector('.card__title').textContent = this._name;
        cardImage.src = this._link;
        cardImage.alt = this._name;

        return this._element;
    }
}
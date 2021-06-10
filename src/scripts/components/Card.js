export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._cardSelector = cardSelector;
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        this._element = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
            
        this._likeButton = this._element.querySelector('.card__vector-like');
        this._deleteButton = this._element.querySelector('.card__vector-delete');
        this._cardImage = this._element.querySelector('.card__image');   
    }

    _handleLikeCard() {
        this._element.querySelector('.card__vector-like').classList.toggle('card__vector_active');
    }

    _handleDeleteCard() {
        this._element.closest('.card').remove();
        this._element = null;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._handleLikeCard()
        });

        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteCard()
        });

        this._cardImage.addEventListener('click', () => { 
            this._handleCardClick()
        });
    }


    generateCard() {
        this._getTemplate();       
        this._setEventListeners();
        const cardImage = this._element.querySelector('.card__image');
        this._element.querySelector('.card__title').textContent = this._name;
        cardImage.src = this._link;
        cardImage.alt = this._name;

        return this._element;
    }
}
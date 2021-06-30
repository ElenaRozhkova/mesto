export default class Card {
    constructor(data, cardSelector, handleCardClick, callbackDelete, callbackLike, myuserID) {
        this._cardSelector = cardSelector;
        this._name = data.name;
        this._link = data.link;
        this._userID = data.owner._id;
        this._likes = data.likes;
        this._couldUserLikes = data.likes.length;
        this._myuserID = myuserID;
        this._handleCardClick = handleCardClick;
        this._callbackDelete = callbackDelete;
        this._callbackLike = callbackLike;

        this._clickLike = () => {
            this._callbackLike(this._element.querySelector('.card__vector-like').classList.contains('card__vector_active'));
        }
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
        this._couldLike = this._element.querySelector('.card__amount-like');
        this._couldLike.textContent = this._couldUserLikes;
    }

    handleLike(amount) {
        this._element.querySelector('.card__vector-like').classList.toggle('card__vector_active');
        this._couldLike.textContent = amount;
    }


    handleDeleteCard() {
        this._element.closest('.card').remove();
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._clickLike()
        });

        this._deleteButton.addEventListener('click', () => {
            this._callbackDelete();

        });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick()
        });

    }


    generateCard() {
        this._getTemplate();
        this._setEventListeners();

        if (this._likes.some((user) => (user._id === this._myuserID))) {
            this._element.querySelector('.card__vector-like').classList.add('card__vector_active');
        }

        if (this._userID !== this._myuserID) {
            this._element.querySelector('.card__vector-delete').remove();
        }
        const cardImage = this._element.querySelector('.card__image');
        this._element.querySelector('.card__title').textContent = this._name;
        cardImage.src = this._link;
        cardImage.alt = this._name;
        return this._element;
    }
}
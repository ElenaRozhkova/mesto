export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this.setEventListeners();
        this._handleEscClose = (evt) => {
            if (evt.key === 'Escape') {
                this.close()
            }
        }
    }
    _closePopup(evt) {
        if (evt.target === evt.currentTarget) { this.close(); }
    }

    setEventListeners() {
        this._popupSelector.querySelector('.popup__close').addEventListener('click', () => this.close());
        this._popupSelector.addEventListener('click', (evt) => this._closePopup(evt));
        this._popupSelector.addEventListener('click', (evt) => this._handleEscClose(evt));

    }
    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popupSelector.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupSelector.classList.remove('popup_opened');
    }

}
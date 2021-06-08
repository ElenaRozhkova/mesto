import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm=submitForm;
    }

    _getInputValues () { 
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
        const item = {
            name: this._inputList[0].value,
            link: this._inputList[1].value
          };  return item;
       
    }

    _handleSubmitForm (evt){
        evt.preventDefault();
        this._submitForm(this._getInputValues ());
        this.close();
    }
    setEventListeners () {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt)=>this._handleSubmitForm (evt));
    }
    close ()
     {  super.close();
        this._popupSelector.querySelector('.popup__form').reset();
      }
}
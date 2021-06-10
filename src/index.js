import './pages/index.css';

import { items, 
    author, 
    configValidation as config,
    popupImg,
    popupEdit,
    popupAdd,
    addButton,
    editButton,
    addForm,
    editForm,
    cardListSelector,
 } from './utils/constants.js';
import Section from './scripts/components/Section.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
import Card from './scripts/components/Card.js';
import FormValidator from './scripts/components/FormValidator.js';
import UserInfo from './scripts/components/UserInfo.js';

const cardPopup = new PopupWithImage(popupImg);
const user= new UserInfo (author);

/* Form Validation*/
const addformValidation = new FormValidator(config, addForm);
addformValidation.enableValidation();

const editformValidation = new FormValidator(config, editForm);
editformValidation.enableValidation();

/*Initial Card*/

const section =new Section ({ data: items,renderer:(item)=>{
    const card = new Card(item, '.card-template', () => {
        cardPopup.open(item);
    });
    const cardElement = card.generateCard();
    section.addItem(cardElement);                            
                         } }, cardListSelector);

section.renderItems();

/*new Card Popup*/
const addPopup = new PopupWithForm(popupAdd,(item)=> {
    const card = new Card(item, '.card-template',() => {
        cardPopup.open(item);
    });
    const cardElement = card.generateCard();
    section.addItem(cardElement);
}
);


/*edit Card Popup*/
const editPopup = new PopupWithForm(popupEdit,()=>{ user.setUserInfo(author);});

editButton.addEventListener('click', function() {
    editformValidation.disableSubmitButton();
    editformValidation.removeInputsError();
    user.getUserInfo();
    editPopup.open();
});

addButton.addEventListener('click', function() {  
    addformValidation.disableSubmitButton();
    addformValidation.removeInputsError();
    addPopup.open();
});


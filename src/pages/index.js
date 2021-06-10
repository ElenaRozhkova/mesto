import './index.css';

import { items, 
    author,
    templateCard, 
    configValidation as config,
    popupImg,
    popupEdit,
    popupAdd,
    addButton,
    editButton,
    addForm,
    editForm,
    cardListSelector,
 } from './../utils/constants.js';
import Section from './../scripts/components/Section.js';
import PopupWithImage from './../scripts/components/PopupWithImage.js';
import PopupWithForm from './../scripts/components/PopupWithForm.js';
import Card from './../scripts/components/Card.js';
import FormValidator from './../scripts/components/FormValidator.js';
import UserInfo from './../scripts/components/UserInfo.js';

const popupImage = new PopupWithImage(popupImg);
const user= new UserInfo (author);

/* Form Validation*/
const addformValidation = new FormValidator(config, addForm);
addformValidation.enableValidation();

const editformValidation = new FormValidator(config, editForm);
editformValidation.enableValidation();

/*create Card*/

function createCard (item) {
    const card = new Card(item, templateCard, () => {
        popupImage.open(item);
    });
    const cardElement = card.generateCard();
    return cardElement;
    
}

/*Initial Card*/

const section =new Section ({ data: items,renderer:(item)=> {
    section.addItem(createCard(item));
}
}, cardListSelector);

section.renderItems();

/*new Card Popup*/
const popupAddCard = new PopupWithForm(popupAdd,(item)=>{section.addItem(createCard(item));});

/*edit Card Popup*/
const popupEditProfile = new PopupWithForm(popupEdit,()=>{ user.setUserInfo(author);});

editButton.addEventListener('click', function() {
    editformValidation.disableSubmitButton();
    editformValidation.removeInputsError();
    const userInfo = user.getUserInfo();  
    author.nameInput.value=userInfo.name;
    author.infoInput.value=userInfo.job;
    popupEditProfile.open();
});

addButton.addEventListener('click', function() {  
    addformValidation.disableSubmitButton();
    addformValidation.removeInputsError();
    popupAddCard.open();
});


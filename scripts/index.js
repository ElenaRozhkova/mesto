import { initialCards, formObject as config } from '../utils/constants.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const textInput = document.querySelector('.popup__input_type_text');
const linkInput = document.querySelector('.popup__input_type_link');
const profileEdit = document.querySelector('.profile__editbutton');
const profileClose = document.getElementById("edit");
const addPopupClose = document.getElementById("add");
const imgPopupClose = document.getElementById("img");

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const addButton = document.querySelector('.profile__addbutton');
const addForm = document.querySelector('[name="addPopup"]');
const editForm = document.querySelector('[name="editPopup"]');

const cardList = document.querySelector('.elements');
const popupImg = document.querySelector('.popup_type_img');

const addformValidation = new FormValidator(config, addForm);
addformValidation.enableValidation();
const editformValidation = new FormValidator(config, editForm);
editformValidation.enableValidation();


function createCard(item) {
    const card = new Card(item, '.element-template');
    const cardElement = card.generateCard();

    const cardElementLink = cardElement.querySelector('.element__image');

    cardElementLink.addEventListener('click', function() {
        openPopup(popupImg);
        popupImg.querySelector('.popup__image').src = card._link;
        popupImg.querySelector('.popup__image').alt = card._alt;
        popupImg.querySelector('.popup__name').textContent = card._name;
    });
    return cardElement; //возвращается созданная карточка 
}

function addCard(container, cardElement) {
    container.prepend(cardElement);
}

initialCards.forEach((item) => {
    addCard(cardList, createCard(item));
});

function handleOverlayClick(evt) {
    const popupOpen = document.querySelector('.popup_opened');
    if (evt.target === popupOpen) {
        closePopup(popupOpen);
    };
}


function handleOverlayEsc(evt) {
    const popupOpen = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(popupOpen);
    };
}

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('mousedown', handleOverlayClick);
    document.addEventListener('keydown', handleOverlayEsc);

}

function clearInput() {
    nameInput.value = '';
    jobInput.value = '';
}

function closePopup(elem) {
    elem.classList.remove('popup_opened');
    document.removeEventListener('mousedown', handleOverlayClick);
    document.removeEventListener('keydown', handleOverlayEsc);
}



function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
    document.getElementById('editPopup').reset();
}



function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const popupButton = document.querySelector('.popup__button_type_add');
    const inputList = Array.from(document.querySelectorAll('.popup__input'));
    const newCard = {
        name: textInput.value,
        link: linkInput.value
    };
    addCard(cardList, createCard(newCard));
    closePopup(popupAdd);
    document.getElementById('newItemPopup').reset();

}


profileEdit.addEventListener('click', function() {
    const inputList = Array.from(editPopup.querySelectorAll(config.inputSelector));
    document.getElementById('editPopup').reset();
    editformValidation._removeInputError();
    openPopup(popupEdit); // открываем попап редактирования
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});


addButton.addEventListener('click', function() {
    const inputList = Array.from(newItemPopup.querySelectorAll(config.inputSelector));
    document.getElementById('newItemPopup').reset();
    addformValidation._removeInputError();
    openPopup(popupAdd); // открываем попап добавления
});

profileClose.addEventListener('click', function() {
    closePopup(popupEdit);
});

addPopupClose.addEventListener('click', function() {
    closePopup(popupAdd);
});

imgPopupClose.addEventListener('click', function() {
    closePopup(popupImg);
});

editForm.addEventListener('submit', handleProfileFormSubmit);
addForm.addEventListener('submit', handleCardFormSubmit);
nameInput.addEventListener('click', clearInput);
import { initialCards, configValidation as config } from '../utils/constants.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const textInput = document.querySelector('.popup__input_type_text');
const linkInput = document.querySelector('.popup__input_type_link');
const profileEdit = document.querySelector('.profile__edit-button');
const profileClose = document.querySelector('.popup__close_type_edit');
const addPopupClose = document.querySelector('.popup__close_type_add');
const imgPopupClose = document.querySelector('.popup__close_type_img');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const addButton = document.querySelector('.profile__add-button');
const addForm = document.querySelector('[name="addPopup"]');
const editForm = document.querySelector('[name="editPopup"]');

const cardList = document.querySelector('.cards');
const popupImg = document.querySelector('.popup_type_img');

const addformValidation = new FormValidator(config, addForm);
addformValidation.enableValidation();

const editformValidation = new FormValidator(config, editForm);
editformValidation.enableValidation();


function createCard(item) {
    const card = new Card(item, '.card-template');
    const cardElement = card.generateCard();

    const cardElementLink = cardElement.querySelector('.card__image');

    cardElementLink.addEventListener('click', function() {
        const popupImage = popupImg.querySelector('.popup__image');
        popupImage.src = item.link;
        popupImage.alt = item.name;
        popupImg.querySelector('.popup__name').textContent = item.name;
        openPopup(popupImg);
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
    if (evt.target === evt.currentTarget) { closePopup(); }
}


function handleOverlayEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup();
    };
}

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', handleOverlayEsc);

}

function closePopup() {
    const popupOpen = document.querySelector('.popup_opened');
    popupOpen.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleOverlayEsc);
}



function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}



function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = {
        name: textInput.value,
        link: linkInput.value
    };
    addCard(cardList, createCard(newCard));
    closePopup();
}


profileEdit.addEventListener('click', function() {
    editformValidation.disableSubmitButton();
    editformValidation.removeInputsError();
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupEdit); // открываем попап редактирования
});


addButton.addEventListener('click', function() {
    addForm.reset();
    addformValidation.disableSubmitButton();
    addformValidation.removeInputsError();
    openPopup(popupAdd); // открываем попап добавления
});

popupAdd.addEventListener('click', handleOverlayClick);
popupEdit.addEventListener('click', handleOverlayClick);
popupImg.addEventListener('click', handleOverlayClick);

profileClose.addEventListener('click', function() {
    closePopup();
});

addPopupClose.addEventListener('click', function() {
    closePopup();
});

imgPopupClose.addEventListener('click', function() {
    closePopup();
});

editForm.addEventListener('submit', handleProfileFormSubmit);
addForm.addEventListener('submit', handleCardFormSubmit);
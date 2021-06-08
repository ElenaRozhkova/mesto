export const items = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


export const configValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    formSet: '.popup__form-set'
};

export const author={
    name: document.querySelector('.profile__name'),
    info: document.querySelector('.profile__job'),
    nameInput: document.querySelector('.popup__input_type_name'),
    infoInput: document.querySelector('.popup__input_type_job')
};

export const popupImg = document.querySelector('.popup_type_img');
export const imageElement = popupImg.querySelector('.popup__image');
export const imageCaption = popupImg.querySelector('.popup__name');

export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');

export const addButton = document.querySelector('.profile__add-button');
export const editButton = document.querySelector('.profile__edit-button');

export const addForm = document.querySelector('[name="addPopup"]');
export const editForm = document.querySelector('[name="editPopup"]');

export const cardListSelector = document.querySelector('.cards');


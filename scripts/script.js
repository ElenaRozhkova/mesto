let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
const profileEdit = document.querySelector('.profile__editbutton');
const profileClose = document.querySelector('.popup__close');
const imgClose = document.querySelector('.popupimg__close-icon');
const popupAddClose = document.querySelector('.popupadd__close');
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popupadd');
const popupImg = document.querySelector('.popupimg');
const nameInputAdd = document.querySelector('.popupadd__input_type_name');
const jobInputAdd = document.querySelector('.popupadd__input_type_job');
const element = document.getElementById('element');
const elements = document.getElementById('elements');
const addButton = document.querySelector('.profile__addbutton');
const popupButton = document.querySelector('.popup__button');
const popupButtonAdd = document.querySelector('.popupadd__button');
const likeActive = document.querySelector('.element__vector-like');

const initialCards = [{
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


function openCards(cardName, cardLink) {
    console.log(cardName);
    console.log(cardLink);
    const elementTemplate = document.querySelector('#element-template').content;
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__image').src = cardLink;
    cardElement.querySelector('.element__image').alt = "Картинка";
    cardElement.querySelector('.element__title').innerHTML = cardName;

    cardElement.querySelector('.element__image').addEventListener('click', function(evt) {
        openPopup(popupImg, 'popupimg_opened');
        popupImg.querySelector('.popupimg__image').src = cardElement.querySelector('.element__image').src;
        popupImg.querySelector('.popupimg__name').innerHTML = cardElement.querySelector('.element__title').innerHTML;

    });
    elements.prepend(cardElement);

    cardElement.querySelector('.element__vector-like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__vector_active');
    });

    cardElement.querySelector('.element__vector-delete').addEventListener('click', function(evt) {
        cardElement.remove();
    });

}

function openPopup(popupElement, popupOpen) {
    popupElement.classList.add(popupOpen);
}


function closePopup(elem, elOpen) {
    console.log("close");
    elem.classList.remove(elOpen);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popup, 'popup_opened');

}

function formSubmitHandlerAdd(evt) {
    evt.preventDefault();
    openCards(nameInputAdd.value, jobInputAdd.value);
    closePopup(popupAdd, 'popupadd_opened');
}

popup.addEventListener('submit', formSubmitHandler);
popupAdd.addEventListener('submit', formSubmitHandlerAdd);

profileEdit.addEventListener('click', function() {
    openPopup(popup, 'popup_opened'); // открываем попап редактирования
    nameInput.textContent = profileName.value;
    jobInput.textContent = profileJob.value;
});

addButton.addEventListener('click', function() {
    openPopup(popupAdd, 'popupadd_opened'); // открываем попап добавления
});

profileClose.addEventListener('click', function() {
    closePopup(popup, 'popup_opened');
});

popupAddClose.addEventListener('click', function() {
    closePopup(popupAdd, 'popupadd_opened');
});

imgClose.addEventListener('click', function() {
    closePopup(popupImg, 'popupimg_opened');
});

initialCards.forEach((item) => {
    openCards(item.name, item.link);
    console.log(item.name);
    console.log(item.link);

});
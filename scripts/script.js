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
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup__editPopup');
const popupAdd = document.querySelector('.popup__addPopup');
const popupImg = document.querySelector('.popup__imgPopup');
const element = document.getElementById('element');
const elements = document.getElementById('elements');
const addButton = document.querySelector('.profile__addbutton');
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

function createCard(cardName, cardLink) {
    const elementTemplate = document.querySelector('#element-template').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    let cardElementAlt = element.querySelector('.element__image').alt;
    const cardElementLink = element.querySelector('.element__image');
    const cardElementLike = element.querySelector('.element__vector-like');
    const cardElementDelete = element.querySelector('.element__vector-delete');

    element.querySelector('.element__image').src = cardLink;
    cardElementAlt = "Картинка";
    element.querySelector('.element__title').textContent = cardName;

    cardElementLink.addEventListener('click', function() {
        openPopup(popupImg);
        popupImg.querySelector('.popup__image').src = cardLink;
        popupImg.querySelector('.popup__name').textContent = cardName;
        console.log(popupImg.querySelector('.popup__name'));

    });

    cardElementLike.addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__vector_active');
    });

    cardElementDelete.addEventListener('click', function() {
        element.remove();
    });

    return element; //возвращается созданная карточка 
}

function addCard(container, cardElement) {
    container.prepend(cardElement);
}

initialCards.forEach((item) => {
    addCard(elements, createCard(item.name, item.link));
});

function openPopup(popupElement) {
    popupElement.parentElement.classList.add('popup_opened');
}


function closePopup(elem) {
    elem.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popup);
    document.getElementById('editPopup').reset();
}

function formSubmitHandlerAdd(evt) {
    evt.preventDefault();
    addCard(elements, createCard(textInput.value, linkInput.value));
    closePopup(popupAdd.parentElement);
    document.getElementById('newItemPopup').reset();
}

popup.addEventListener('submit', formSubmitHandler);
popupAdd.addEventListener('submit', formSubmitHandlerAdd);

profileEdit.addEventListener('click', function() {
    openPopup(popupEdit); // открываем попап редактирования
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});


addButton.addEventListener('click', function() {
    openPopup(popupAdd); // открываем попап добавления
});

profileClose.addEventListener('click', function() {
    closePopup(popup);
});

addPopupClose.addEventListener('click', function() {
    closePopup(popupAdd.parentElement); // открываем попап редактирования
});

imgPopupClose.addEventListener('click', function() {
    closePopup(popupImg.parentElement); // открываем попап редактирования
});
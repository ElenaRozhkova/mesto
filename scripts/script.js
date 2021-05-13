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
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_img');
const element = document.getElementById('element');
const elements = document.getElementById('elements');
const addButton = document.querySelector('.profile__addbutton');
const popupButtonAdd = document.querySelector('.popupadd__button');
const likeActive = document.querySelector('.element__vector-like');
const elementTemplate = document.querySelector('#element-template').content;
const addForm = document.querySelector('[name="addPopup"]');
const editForm = document.querySelector('[name="editPopup"]');
const popupForm = document.querySelector('.popup__form');
const elemObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    formSet: '.popup__form-set'
};

function createCard(cardName, cardLink) {
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const cardElementLink = element.querySelector('.element__image');

    element.querySelector('.element__image').src = cardLink;
    element.querySelector('.element__image').alt = cardName;
    element.querySelector('.element__title').textContent = cardName;

    cardElementLink.addEventListener('click', function() {
        openPopup(popupImg);
        popupImg.querySelector('.popup__image').src = cardLink;
        popupImg.querySelector('.popup__image').alt = cardName;
        popupImg.querySelector('.popup__name').textContent = cardName;
    });
    return element; //возвращается созданная карточка 
}

elements.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('element__vector-like')) {
        evt.target.classList.toggle('element__vector_active');
    }
});

elements.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('element__vector-delete')) {
        evt.target.closest('.element').remove();
    }
});


function addCard(container, cardElement) {
    container.prepend(cardElement);
}

initialCards.forEach((item) => {
    addCard(elements, createCard(item.name, item.link));
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
    const nameForm = popupElement.querySelector('.popup__form');
    const inputList = Array.from(popupElement.querySelectorAll(elemObject.inputSelector));

    if (nameForm !== null) {
        nameForm.reset();
        inputList.forEach((inputElement) => {
            if (document.querySelector('.popup__error_visible')) {
                hideInputError(nameForm, inputElement, elemObject);
            }
        });
    }
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
    toggleButtonState(inputList, popupButton, elemObject);
    addCard(elements, createCard(textInput.value, linkInput.value));
    closePopup(popupAdd);
    document.getElementById('newItemPopup').reset();

}


profileEdit.addEventListener('click', function() {
    openPopup(popupEdit); // открываем попап редактирования
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});


addButton.addEventListener('click', function() {
    openPopup(popupAdd); // открываем попап добавления
});

profileClose.addEventListener('click', function() {
    closePopup(popupEdit);
});

addPopupClose.addEventListener('click', function() {
    closePopup(popupAdd); // открываем попап редактирования
});

imgPopupClose.addEventListener('click', function() {
    closePopup(popupImg); // открываем попап редактирования
});

editForm.addEventListener('submit', handleProfileFormSubmit);
addForm.addEventListener('submit', handleCardFormSubmit);
nameInput.addEventListener('click', clearInput);
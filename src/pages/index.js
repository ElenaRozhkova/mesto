import './index.css';

import {
    author,
    templateCard,
    configValidation as config,
    popupImg,
    popupEdit,
    popupAdd,
    popupQuestion,
    addButton,
    editButton,
    addForm,
    editForm,
    avatarForm,
    cardListSelector,
    popupAvatar,
    avatarSelector,
    avatar,
    btnSave,
    btnNew

} from './../utils/constants.js';
import Section from './../scripts/components/Section.js';
import PopupWithImage from './../scripts/components/PopupWithImage.js';
import PopupWithForm from './../scripts/components/PopupWithForm.js';
import Card from './../scripts/components/Card.js';
import FormValidator from './../scripts/components/FormValidator.js';
import UserInfo from './../scripts/components/UserInfo.js';
import Api from './../scripts/components/Api.js';

const popupImage = new PopupWithImage(popupImg);
const user = new UserInfo(author);


const api = new Api({
    url: `https://mesto.nomoreparties.co/v1/cohort-25`,
    token: 'e2f184c2-a2b5-47dc-b13c-5faef2aabe75'
});

const section = new Section({
    // data: cards,
    renderer: (item, userID) => {
        section.addItem(createCard(item, userID));
    }
}, cardListSelector);


const startPage = function() {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
        .then(([userInfo, cards]) => {
            avatar.src = userInfo.avatar;
            user.setUserInfo(userInfo);
            section.renderItems(cards, userInfo._id);
        })
        .catch((err) => {
            console.log(err);
        });
}
startPage();

/* Form Validation*/
const addformValidation = new FormValidator(config, addForm);
addformValidation.enableValidation();

const editformValidation = new FormValidator(config, editForm);
editformValidation.enableValidation();

const avatarformValidation = new FormValidator(config, avatarForm);
avatarformValidation.enableValidation();


/*Edit Profile*/
const popupEditProfile = new PopupWithForm(popupEdit, (userdaten) => {
    renderLoading(true, btnSave);
    api.setProfileEdit(userdaten.nameInput, userdaten.jobInput)
        .then(res => res.json())
        .then((result) => {
            user.setUserInfo(result);
        })

    .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            renderLoading(false, btnSave);
        });

});

editButton.addEventListener('click', function() {
    editformValidation.disableSubmitButton();
    editformValidation.removeInputsError();
    const userInfo = user.getUserInfo();
    author.nameInput.value = userInfo.name;
    author.infoInput.value = userInfo.job;
    popupEditProfile.open();
});



/*create Card*/
function createCard(item, userID) {
    const card = new Card(item, templateCard, () => { popupImage.open(item) },
        () => {
            const popupQuestionDelete = new PopupWithForm(popupQuestion, () => {
                cardDelete(item, card);
            });
            popupQuestionDelete.open();
        },
        (activ) => {
            if (activ) {
                likeDelete(item, card);
            } else {
                likeCard(item, card);
            }
        },
        userID
    );

    const cardElement = card.generateCard();
    return cardElement;
}


/*add Card Popup*/
const popupAddCard = new PopupWithForm(popupAdd, (item) => {
    renderLoading(true, btnNew);
    api.addCard(item.name, item.link)
        .then((result) => {
            section.addItem(createCard(result, result.owner._id));
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            renderLoading(false, btnNew);
        });
});

addButton.addEventListener('click', function() {
    addformValidation.disableSubmitButton();
    addformValidation.removeInputsError();
    popupAddCard.open();
});

/*change Avater Popup*/

const popupChange = new PopupWithForm(popupAvatar, (item) => {
    renderLoading(true, btnSave);
    api.changeAvatar(item.avatar)
        .then((result) => {
            avatar.src = result.avatar;
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            renderLoading(false, btnSave);
        });


});

avatarSelector.addEventListener('click', () => {
    avatarformValidation.disableSubmitButton();
    avatarformValidation.removeInputsError();
    popupChange.open();
});


/*add Like Cards*/
const likeCard = function(card, cardClass) {
    api.addLike(card._id)
        .then((result) => {
            cardClass.handleLike(result.likes.length);
        })
        .catch((err) => {
            console.log(err);
        });
}

/*delete like cards*/
const likeDelete = function(card, cardClass) {
    api.deleteLike(card._id)
        .then((result) => {
            cardClass.handleLike(result.likes.length);
        })
        .catch((err) => {
            console.log(err);
        });
}

/*delete card*/
const cardDelete = function(item, card) {
    api.deleteCard(item._id)
        .then(() => {
            card.handleDeleteCard();
        })
        .catch((err) => {
            console.log(err);
        });
}


/*Улучшенный UX всех форм*/
function renderLoading(isLoading, typeBtn) {
    if (isLoading) {
        if (typeBtn.textContent === "Сохранить") { typeBtn.textContent = "Сохранение..." }
        if (typeBtn.textContent === "Создать") {
            typeBtn.textContent = "Создание...";
            //  console.log(typeBtn.textContent);
        }

    } else {
        if (typeBtn.textContent === "Сохранение...") { typeBtn.textContent = "Сохранить" }
        if (typeBtn.textContent === "Создание...") {
            typeBtn.textContent = "Создать";
            // console.log(typeBtn.textContent);
        }
    }
}
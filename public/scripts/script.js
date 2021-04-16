const profileEdit = document.querySelector('.profile__editbutton');
const profileClose = document.querySelector('.popup__close-icon');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
const popupContainer = document.querySelector('.popup__container');
const popup = document.querySelector('.popup');

for (let button of document.querySelectorAll(".element__vector")) {
    button.addEventListener("click", function() {
        this.classList.toggle('element__vector_active');
    });
}

popupContainer.insertAdjacentHTML('beforeend',
    `<h2 class="popup__edit">Редактировать профиль</h2>
    <input type="text" class="popup__name" id="name" name="nameInput" placeholder="${profileName.textContent}" required>
    <input type="text" class="popup__job" id="job" name="jobInput" placeholder="${profileJob.textContent}" required>
    <input type="submit" value="Сохранить" class="popup__button">
    `);

const formElement = document.querySelector('.popup__button');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

function clearValueName() {
    nameInput.placeholder = '';
}

function clearValueJob() {
    jobInput.placeholder = '';
}

function tooglePopup() {
    popup.classList.toggle('popup_opened');
    profileName = document.querySelector('.profile__name');
    nameInput.textContent = profileName.value;
    jobInput.textContent = profileJob.value;
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    if ((nameInput.value !== '') || (jobInput.value !== '')) {
        profileName.textContent = nameInput.value;
        profileJob.textContent = jobInput.value;
    }
    tooglePopup();
}

profileEdit.addEventListener('click', tooglePopup);
profileClose.addEventListener('click', tooglePopup);
nameInput.addEventListener('click', clearValueName);
jobInput.addEventListener('click', clearValueJob);
formElement.addEventListener('click', formSubmitHandler);
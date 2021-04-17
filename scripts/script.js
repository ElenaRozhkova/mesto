let profileEdit = document.querySelector('.profile__editbutton');
let profileClose = document.querySelector('.popup__close-icon');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');


function openfunc() {
    popup.classList.add('popup_opened');
    nameInput.textContent = profileName.value;
    jobInput.textContent = profileJob.value;
}

function closefunc() {
    popup.classList.remove('popup_opened');
}


function formSubmitHandler(evt) {
    evt.preventDefault();
    if ((nameInput.value !== '') || (jobInput.value !== '')) {
        profileName.textContent = nameInput.value;
        profileJob.textContent = jobInput.value;
    }
    closefunc();
}

profileEdit.addEventListener('click', openfunc);
profileClose.addEventListener('click', closefunc);
popup.addEventListener('submit', formSubmitHandler);
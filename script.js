
let profileEdit= document.querySelector('.profile__icon');
profileEdit.addEventListener('click',openfunc);

let profileClose= document.querySelector('.popup__close-icon');
profileClose.addEventListener('click',closefunc);

let profileName= document.querySelector('.profile__name');

let profileJob= document.querySelector('.profile__job');
let popupContainer= document.querySelector('.popup__container');

console.log(profileName.textContent);

popupContainer.insertAdjacentHTML('beforeend',
 `<h2 class="popup__edit">Редактировать профиль</h2>
 <input type="text" class="popup__name" id="name" name="nameInput" placeholder="${profileName.textContent}" required>
 <input type="text" class="popup__job" id="job" name="jobInput" placeholder="${profileJob.textContent}" required>
 <input type="submit" class="popup__button">
  `);


function openfunc(){
    let popup= document.querySelector('.popup');
    popup.classList.add('popup_opened');
}

function closefunc(){
    let popup= document.querySelector('.popup');
    popup.classList.remove('popup_opened');
}




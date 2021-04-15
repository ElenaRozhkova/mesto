
let profileEdit= document.querySelector('.profile__editbutton');
let profileClose= document.querySelector('.popup__close-icon');
let profileName= document.querySelector('.profile__name');
let profileJob= document.querySelector('.profile__job');
let popupContainer= document.querySelector('.popup__container');
let like = document.querySelectorAll('.element__vector');
console.log(like);

for (let button of document.querySelectorAll(".element__vector")) {

    button.addEventListener("click", function () {
        this.classList.toggle('element__vector_active');}
        );}

        /*like.addEventListener('click', changeLike); 
function changeLike () {
    console.log("hallo");
    like.classList.toggle('element__vector_active');
}*/


/*popupContainer.insertAdjacentHTML('beforeend',
`<h2 class="popup__edit">Редактировать профиль</h2>
<input type="text" class="popup__name" id="name" name="nameInput" placeholder="${profileName.textContent}" required>
<input type="text" class="popup__job" id="job" name="jobInput" placeholder="${profileJob.textContent}" required>
<input type="submit" value="Сохранить" class="popup__button">
 `);*/

// Находим форму в DOM
let formElement = document.querySelector('.popup__button');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__job');// Воспользуйтесь инструментом .querySelector()

profileEdit.addEventListener('click',openfunc);
profileClose.addEventListener('click',closefunc);
nameInput.addEventListener('click', clearValueName); 
jobInput.addEventListener('click', clearValueJob); 

function clearValueName () {
    nameInput.placeholder='';
    
}
function clearValueJob () {
    jobInput.placeholder=''; 
}

function openfunc(){
    let popup= document.querySelector('.popup');
    popup.classList.add('popup_opened');
    nameInput.textContent=profileName.value;
    jobInput.textContent=profileJob.value;
}

function closefunc(){
    let popup= document.querySelector('.popup');
    popup.classList.remove('popup_opened');
}
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
if ((nameInput.value!=='')||(jobInput.value!=='')){
    profileName.textContent=nameInput.value;
    profileJob.textContent=jobInput.value;}
    closefunc();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('click', formSubmitHandler); 



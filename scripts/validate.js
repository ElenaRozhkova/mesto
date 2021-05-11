const showInputError = (formElement, inputElement, errorMessage, validation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validation.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, validation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validation.inputErrorClass);
    errorElement.classList.remove(validation.errorClass);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement, validation) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validation);
    } else {
      hideInputError(formElement, inputElement, validation);
    }
  };
  
  const setEventListeners = (formElement, validation) => {
    const inputList = Array.from(formElement.querySelectorAll(validation.inputSelector));
    const buttonElement = formElement.querySelector(validation.submitButtonSelector);
  
    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement, validation);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, validation);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, buttonElement, validation);
      });
    });
  }; 

  const enableValidation = (validation) => {
    const formList = Array.from(document.querySelectorAll(validation.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        console.log(formElement);
        evt.preventDefault();
      });
     // setEventListeners(formElement, validation);
  const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form-set'));
      fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet,validation);
  });  
    });
  };
  
  
  const hasInvalidInput = (inputList, validation) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
    };
  
  const toggleButtonState = (inputList,buttonElement, validation) => {
   if (hasInvalidInput(inputList)) {
     console.log(buttonElement);
    buttonElement.classList.add(validation.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validation.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }  
    };
  

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); 

 
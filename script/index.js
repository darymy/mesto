const popup = document.querySelector('.popup');
const editProfileButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const formElement = document.querySelector('.popup__form');
const inputName = formElement.querySelector('.popup__input_type_name');
const inputText = formElement.querySelector('.popup__input_type_text');
const elements = document.querySelector('.elements');



editProfileButton.addEventListener('click', openPopup);

function addEventListeners() {
  closeProfileButton.addEventListener('click', closePopup);
  document.addEventListener('keyup', closeEsc);
  formElement.addEventListener('submit', formSubmitHandler);
  popup.addEventListener('click', closeOverlay);
}
function removeEventListeners() {
  closeProfileButton.removeEventListener('click', closePopup);
  document.removeEventListener('keyup', closeEsc);
  formElement.removeEventListener('submit', formSubmitHandler);
  popup.removeEventListener('click', closeOverlay);
}

elements.addEventListener('click', (event)=> {
  const target = event.target;

  if(target && target.classList.contains('element__like')) {
    target.classList.toggle('element__like_active');
  }
})

function formSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileText.textContent = inputText.value;
  closePopup();
}

function getProfile() {
  inputName.value = profileName.textContent;
  inputText.value = profileText.textContent;
}


function openPopup() {
  popup.classList.add('popup_opened');
  popup.style.visibility = 'visible';
  popup.style.opacity = '1';
  document.body.style.overflow = 'hidden';
  getProfile();
  addEventListeners();
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
  document.body.style.overflow = 'auto';
  removeEventListeners();
}


function closeEsc (event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
      closePopup();
  }
}


function closeOverlay(event) {
  const target = event.target
  if(target && target.classList.contains('popup_opened')) {
    closePopup();
  }
}





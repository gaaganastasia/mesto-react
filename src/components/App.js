import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(!isEditProfilePopupOpen);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(!isAddPlacePopupOpen);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);

  const [selectedCard, setSelectedCard] = React.useState(undefined);

  const handleCardClick = (card) => setSelectedCard(card);

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(undefined)
  }

  return(
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="edit" title="Редактировать профиль" btnName="Сохранить" children={
        <>
          <label className="popup-form__field">
            <input name="profile-change" type="text" minLength="2" maxLength="40" placeholder="Имя" readOnly id="profile-name-input" className="popup-form__input popup-edit__input_name" required />
            <span className='popup-form__input-error' id='profile-name-input-error'></span>
          </label>
          <label className="popup-form__field">
            <input name="profile-change" type="text" minLength="2" maxLength="200" placeholder="Профессия" readOnly id="profile-job-input" className="popup-form__input popup-edit__input_job" required />
            <span className='popup-form__input-error' id='profile-job-input-error'></span>
          </label>
        </>
      } />

      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="add" title="Новое место" btnName="Создать" children={
        <>
          <label className="popup-form__field">
            <input name="card-add" type="text" minLength="2" maxLength="30" placeholder="Название" readOnly id="card-title-input" className="popup-form__input popup-add__input_title" required />
            <span className='popup-form__input-error' id='card-title-input-error'></span>
          </label>
          <label className="popup-form__field">
            <input name="card-add" type="url" placeholder="Ссылка на картинку" readOnly id="card-url-input" className="popup-form__input popup-add__input_url" required />
            <span className='popup-form__input-error' id='card-url-input-error'></span>
          </label>
        </>
      } />
      
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />

      <PopupWithForm name="delete" title="Вы уверены?" btnName="Да" />
      
      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="edit-avatar" title="Обновить аватар" btnName="Сохранить" children={
        <>
          <label className="popup-form__field">
            <input name="profile-avatar-change" type="url" placeholder="Ссылка" readOnly id="url-input" className="popup-form__input popup-edit-avatar__input" required />
            <span className='popup-form__input-error' id='url-input-error'></span>
          </label>
        </>
      } />
    </div>
  )
}

export default App;
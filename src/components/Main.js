import React from 'react';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';
import api from '../utils/api.js';
import Card from './Card.js';


function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setInitialCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileInfo()
      .then(profileInfoData => {
        setUserName(profileInfoData.name);
        setUserDescription(profileInfoData.about);
        setUserAvatar(profileInfoData.avatar);
      })
    
    api.getInitialCards()
      .then(initialCards => {
        setInitialCards(initialCards);
      })
  })

  return(
    <main className="main">
      <section className="profile">
        <div className="profile__form">
          <div className="profile__image-container" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="Аватар профиля" className="profile__image" />
            <div className="profile__image-overlay"></div>
          </div>
          <div className="profile__info info">
            <h1 className="info__title">
              {userName}
            </h1>
            <button type="button" className="info__edit-button" onClick={props.onEditProfile}></button>
            <p className="info__subtitle">
              {userDescription}
            </p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      
      <section className="elements">
        {cards.map((card) => (
          <Card onCardClick={props.onCardClick} card={card} key={card._id} onImageClick={props.onImageClick} />
        ))}
      </section>

      <PopupWithForm isOpen={props.isEditProfilePopupOpen} onClose={props.onClose} name="edit" title="Редактировать профиль" btnName="Сохранить" children={
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

      <PopupWithForm isOpen={props.isAddPlacePopupOpen} onClose={props.onClose} name="add" title="Новое место" btnName="Создать" children={
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
      
      <ImagePopup isOpen={props.isImagePopupOpen} onClose={props.onClose} card={props.card} />

      <PopupWithForm name="delete" title="Вы уверены?" btnName="Да" />
      
      <PopupWithForm isOpen={props.isEditAvatarPopupOpen} onClose={props.onClose} name="edit-avatar" title="Обновить аватар" btnName="Сохранить" children={
        <>
          <label className="popup-form__field">
            <input name="profile-avatar-change" type="url" placeholder="Ссылка" readOnly id="url-input" className="popup-form__input popup-edit-avatar__input" required />
            <span className='popup-form__input-error' id='url-input-error'></span>
          </label>
        </>
      } />
    </main>
  )
}

export default Main;
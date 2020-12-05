import React from 'react';
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
  }, [])

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
          <Card card={card} onCardClick={() => props.onCardClick(card)} key={card._id} />
        ))}
      </section>
    </main>
  )
}

export default Main;
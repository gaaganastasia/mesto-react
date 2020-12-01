import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React from 'react';

function App() {
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(!isEditProfilePopupOpen);

  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(!isAddPlacePopupOpen);

  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);

  let [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const handleImageClick = () => {
    setIsImagePopupOpen(!isImagePopupOpen);
  }

  let [selectedCard, setSelectedCard] = React.useState('');
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return(
    <div className="page">
      <Header />
      <Main
        onClose={closeAllPopups}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        onCardClick={handleCardClick}
        card={selectedCard}
        onImageClick={handleImageClick}
        isImagePopupOpen={isImagePopupOpen}
      />
      <Footer />
    </div>
  )
}

export default App;
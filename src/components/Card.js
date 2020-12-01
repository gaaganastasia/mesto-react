function Card(props) {
  const handleClick = () => {
    props.onCardClick(props.card);
    props.onImageClick();
  }  
  return(
    <div className="elements__element element">
      <img src={props.card.link} alt="Фото" className="element__image" onClick={handleClick} />
      <button type="button" className="element__delete"></button>
      <h3 className="element__title">{props.card.name}</h3>
      <div className="element__like-container">
        <button type="button" className="element__like"></button>
        <p className="element__like-counter">{props.card.likes.length}</p>
      </div>
    </div>
  )
}

export default Card;
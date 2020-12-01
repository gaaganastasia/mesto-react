function ImagePopup(props) {
  return(
    <div className={props.isOpen ? `popup popup-img popup-${props.name} popup_opened` : `popup popup-img popup-${props.name}`}>
      <div className="popup-img__container">
        <button type="reset" className="popup__reset popup-img__reset" onClick={props.onClose}></button>
        <figure className="popup-img__figure">
          <img src={props.card.link} alt="Фото" className="popup-img__image" />
          <figcaption className="popup-img__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;
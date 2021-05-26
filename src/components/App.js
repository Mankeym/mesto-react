import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from "./EditProfilePopup";
import close from '../images/Close.svg';
import trash from '../images/Trash.svg';
import '../index.css';
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from './ImagePopup'

function App() {
  const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(false)
  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(false)
  }
  function handleEditAvatarClick (){
    setEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick(){
    setEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true)
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  return (
    <>
      <div className="page">
        <Header />
        <Main
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onCardClick={handleCardClick}
        />
        <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
           // onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        <Footer />
      </div>

  <section className="overlay overlay_edit-delete">
    <form className="popup popup_delete">
      <h2 className="popup__title">Вы уверены?</h2>
      <button type="submit" className="popup__submit popup__submit-delete" value="Да">Да</button>
      <button type="button" className="overlay__button overlay__button_edit">
        <img className="overlay__image" src={close} alt="Крест"/>
      </button>
    </form>
  </section>


 </>
  );

}


export default App;

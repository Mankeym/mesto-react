import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from "./EditProfilePopup";
import '../index.css';
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from './ImagePopup'
import PopupDelete from "./PopupDelete";

function App() {
  const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null)
    setIsDeletePopupOpen(false)
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
  function handleDeleteClick() {
    setIsDeletePopupOpen(true)
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
              onCardDelete={handleDeleteClick}
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
        <PopupDelete
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
        />
        <Footer />
      </div>


 </>
  );

}


export default App;

import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from "./EditProfilePopup";
import '../index.css';
import Api from '../utils/Api';
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from './ImagePopup'
import PopupDelete from "./PopupDelete";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";


function App() {
  const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [deletedCard, setDeletedCard] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Api
        .getInitialData()
        .then((response) => {
          const [userData, cardsData] = response;

          setCurrentUser(userData);
          setCards(cardsData);
        })
        .catch((err) => console.log("Ошибка загрузки начальных данных - " + err));
  }, []);
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
  function handleCardDeleteClick(card) {
    setIsDeletePopupOpen(true);

    setDeletedCard(card);
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    Api
        .changeLikeCardStatus(card._id, isLiked)
        .then((newCard) => {
          setCards((state) =>
              state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log("Ошибка постановки лайка/дизлайка - " + err));
  }
  function handleUpdateUser({ name, about }) {

    Api
        .editUserInfo(name, about)
        .then((userData) => {
          setCurrentUser(userData);

          closeAllPopups();
        })
        .catch((err) =>
            console.log("Ошибка обновления данных пользователя - " + err)
        );
  }

  function handleUpdateAvatar({ avatar }) {
    Api
        .editAvatar(avatar)
        .then((userData) => {
          setCurrentUser(userData);

          closeAllPopups();
        })
        .catch((err) =>
            console.log("Ошибка обновления аватара пользователя - " + err)
        );
  }

  function handleAddPlaceSubmit({ name, link }) {
    Api
        .addCard(name, link)
        .then((cardsData) => {
          setCards([cardsData, ...cards]);

          closeAllPopups();
        })
        .catch((err) => console.log("Ошибка добавления новой карточки - " + err));
  }

  function handleDeleteCardSubmit(id) {
    Api
        .deleteCard(id)
        .then(() => {
          setCards((cardsData) => cardsData.filter((card) => id !== card._id));

          closeAllPopups();
        })
        .catch((err) => console.log("Ошибка удаления карточки - " + err));
  }
  return (
      <CurrentUserContext.Provider value={currentUser}>
        <CardsContext.Provider value={cards}>
      <div className="page">
        <Header />
        <Main
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onCardClick={handleCardClick}
              onCardDelete={handleCardDeleteClick}
              onCardLike={handleCardLike}
        />
        <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        <PopupDelete
            card={deletedCard}
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onCardDelete={handleDeleteCardSubmit}

        />
        <Footer />
      </div>

        </CardsContext.Provider>
      </CurrentUserContext.Provider>
  );

}


export default App;

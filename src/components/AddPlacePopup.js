import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup (props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name="update"
            title="Добавить карточку"
            onClose={props.onClose}
        >
            <input
                className="popup__input popup__input_type_mesto"
                id="popup__name"
                name="cardDescription"
                placeholder="Название"
                required
                type="text"
            />
            <span className="popup__name-author-error popup__error"></span>
            <input
                className="popup__input popup__input_type_link"
                id="popup__link"
                name="cardImage"
                placeholder="Ссылка на картинку"
                required
                type="url"
            />
            <span className="popup__name-author-error popup__error"></span>
        </PopupWithForm>
    );
}
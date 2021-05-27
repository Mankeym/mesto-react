import PopupWithForm from './PopupWithForm';
import { useEffect, useRef, useState } from "react";
const DEFAULT_VALUE = "Сохранить";
export default function EditAvatarPopup(props) {

    const [buttonValue, setButtonValue] = useState(DEFAULT_VALUE);
    function handleSubmit(evt) {
        evt.preventDefault();
    //    setButtonValue(LOADING_VALUE);

    }
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name="update"
            onClose={props.onClose}
            onSubmit={handleSubmit}
            submitButtonValue={buttonValue}
            title="Обновить аватар"
            buttonText={'Сохранить'}
        >
                <input
                    className="popup__input popup__input_type_avatar"
                    id="popup__avatar"
                    name="cardAvatar"
                    placeholder="Ссылка на картинку"
                    required
                    type="url"
                />
                <span className="popup__name-author-error popup__error"></span>
        </PopupWithForm>
    );
}
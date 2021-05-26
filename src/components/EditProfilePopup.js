import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup (props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name="update"
            title="Редактировать профиль"
            onClose={props.onClose}
        >
            <input
                className="popup__input popup__input_type_name"
                id="popup__name-author"
                name="username"
                placeholder="Имя"
                required
                type="text"
            />
            <span className="popup__name-author-error popup__error"></span>
            <input
                className="popup__input popup__input_type_job"
                id="popup__link-author"
                name="userinfo"
                placeholder="Работа"
                required
                type="text"
            />
            <span className="popup__name-author-error popup__error"></span>
        </PopupWithForm>
    );
}
import PopupWithForm from "./PopupWithForm";

export default function PopupDelete (props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name="update"
            onClose={props.onClose}
            title="Вы уверены?"
            buttonText={'Да'}
        >
        </PopupWithForm>
    );
}
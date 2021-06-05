import PopupWithForm from "./PopupWithForm";

export default function PopupDelete (props) {
    function handleSubmit(evt) {
        evt.preventDefault();

        props.onCardDelete(props.card._id);
    }
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name="update"
            onClose={props.onClose}
            title="Вы уверены?"
            buttonText={'Да'}
            onSubmit={handleSubmit}
        >
        </PopupWithForm>
    );
}
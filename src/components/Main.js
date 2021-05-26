import image from "../images/image.svg";
import pen from "../images/pen.svg";
import krest from "../images/krest.svg";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";


function Main(props) {
    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])
    useEffect(() => {
        api.getUserInfo()
            .then(data => {
                setUserName(data.name)
                setUserDescription(data.about)
                setUserAvatar(data.avatar)
            })
            .catch(err => {
                console.log(`Данные пользователя с сервера не получены. Ошибка: ${err}.`)
            })
    }, [])
    useEffect(() => {
        api.getCard()
            .then(cards => {
                setCards(cards)
            })
            .catch(err => {
                console.log(`Данные карточек с сервера не получены. Ошибка: ${err}.`)
            })
    })
    /** Handlers */
    return(

        <main>
            <section className="profile">
                <div className="profile__page">
                    <div className="profile__avatar">
                        <img src={userAvatar} className="profile__logo" alt="Жак Ив-Кусто"/>
                        <button className="profile__avatar-update" type="button"></button>
                    </div>
                    <div className="profile__info">
                        <div>
                            <h1 className="profile__title" id="heading">{userName}</h1>
                            <p className="profile__subtitle" id="quote">{userDescription}</p>
                        </div>
                        <button onClick={props.onEditProfile} type="button" className="profile__rectangle">
                            <img src={pen} alt="Ручка"/>
                        </button>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__button">
                    <img src={krest} alt="Крест" className="profile__image"/>
                </button>
            </section>
            <section className="cards">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            link={card.link}
                            name={card.name}
                            likes={card.likes.length}
                            card={card}
                            onCardClick={props.onCardClick}
                        />
                    ))}
            </section>

        </main>

    )
}
export default Main;
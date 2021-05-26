import React from 'react'
import trash from "../images/Trash.svg";

function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <figure className="card">
            <button className="card__trash">
                <img src={trash} alt="Ведро"/>
            </button>
            <img onClick={handleCardClick} className="card__logo" src={props.link}
                 alt={props.name}/>
            <figcaption className="card__figcaption">
                <h3 className="card__title">{props.name}</h3>
                <div className="card__like">
                    <button aria-label="Кнопка нравится" type="button" className="card__button"></button>
                    <p className="card__score">{props.likes}</p>
                </div>
            </figcaption>
        </figure>
    );
}

export default Card;

import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

    const [like , setLike] = React.useState(false);

    React.useEffect(() => {
        setLike(props.card.like);
    }, [props]);

    function handleLike () {
        if (like) {
            setLike(false)
        }
        else {setLike(true)}
    }


    console.log(props.button && props.card.like);

    return (
        <div className="element">
            <div className="element__info">
                <h2 className="element__header">{props.card.nameRU}</h2>
                <p className="element__duration">{props.card.duration} минут</p>
            </div>
            
            <img className="element__photo" alt={props.card.nameRU} src={props.card.image} />
            <button type="button" 
            className={ !props.button ? "element__button element__button_type_delete" : props.button && like ? "element__button element__button_type_active" : "element__button"} onClick={handleLike}>{ props.button && !like ? "Сохранить" : ""}</button>
        </div>
    )
}

export default MoviesCard;

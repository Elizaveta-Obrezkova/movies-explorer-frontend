import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {

    const [like, setLike] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState('');
    const location = useLocation();

    React.useEffect(() => {
        if (props.movie.image.url) { setImageUrl(`https://api.nomoreparties.co/${props.movie.image.url}`) }
        else { setImageUrl(props.movie.image) }
    }, [props]);

    React.useEffect(() => {
        if (location.pathname !== '/movies') return;
        if (props.verifyLike(props.movie)) { setLike(true) }
        else { setLike(false) }
    }, [props, location]);

    function handleLike () {
        if (location.pathname !== '/movies') {
            props.onDelete(props.movie);
            return;
        }
        if (like) {
            const movie = props.savedMovies.find(function (item) {
                return item.movieId === props.movie.id;
            })
            props.onDelete(movie);
            setLike(false);
            return;
        }
        else { 
            props.onLike(props.movie)
            setLike(true);
            return;
        }
    }



    return (
        <div className="element">
            <div className="element__info">
                <h2 className="element__header">{props.movie.nameRU}</h2>
                <p className="element__duration">{props.movie.duration} минут</p>
            </div>
            <a className="element__link" href={props.movie.trailerLink} target="_blank" rel="noreferrer">
                <img className="element__photo" alt={props.movie.nameRU} src={imageUrl} />
            </a>
            <button type="button"
                className={!props.button ? "element__button element__button_type_delete" : props.button && like ? "element__button element__button_type_active" : "element__button"} onClick={handleLike}>{props.button && !like ? "Сохранить" : ""}</button>
        </div>
    )
}

export default MoviesCard;

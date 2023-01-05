import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props) {

    const windowInnerWidth = window.innerWidth;
    let items = windowInnerWidth <= 480 ? 5 : windowInnerWidth <= 768 ? 8 : 12
    const [visibleCsards, setVisibleCsards] = useState(items)

    function hendleVisibleCsards() {
        let item = windowInnerWidth <= 768 ? visibleCsards + 2 : visibleCsards + 3;
        setVisibleCsards(item);
    }

    return (
        <section className="card-list page__card-list">
            {props.preloaderActive && <Preloader />}
            <p className={ props.error ? "card-list__info" : "card-list__info card-list__info_hidden" }>Во время запроса произошла ошибка.
            Возможно, проблема с соединением или сервер недоступен.
            Подождите немного и попробуйте ещё раз</p>
            <p className={props.movies.length === 0 && props.info ? "card-list__info" : "card-list__info card-list__info_hidden"}>Ничего не найдено</p>
            <div className="elements">
                {props.movies.slice(0, visibleCsards).map((item) =>
                (<MoviesCard
                    movie={item}
                    savedMovies={props.savedMovies}
                    button={props.buttonCardLike}
                    key={item.id ? item.id : item._id}
                    onLike={props.onSavedMovie}
                    onDelete={props.onDeleteMovie}
                    verifyLike={props.verifyLike}
                />)
                )}
            </div>
            <div className="card-list__button-container">
                <button type="button" className={props.movies.length <= visibleCsards ? "card-list__button card-list__button_hidden" : "card-list__button"} onClick={hendleVisibleCsards}>Ещё</button>
            </div>
        </section>
    );
}

export default MoviesCardList;
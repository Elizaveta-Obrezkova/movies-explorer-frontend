import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState } from 'react';

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
            <div className="elements">
                {props.cards.slice(0, visibleCsards).map((item) =>
                    (<MoviesCard card={item} button={props.buttonCardLike} />)
                )}
            </div>
            <div className="card-list__button-container">
                <button type="button" className={props.cards.length <= visibleCsards ? "card-list__button card-list__button_hidden" : "card-list__button"} onClick={hendleVisibleCsards}>Ещё</button>
            </div>
        </section>
    );
}

export default MoviesCardList;
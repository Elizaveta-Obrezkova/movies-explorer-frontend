import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm(props) {
    return (
        <div className="search-movie-container page__search-movie-container">
            <form name="search-movie-form" className="form">
                <div className="form__input-container">
                    <input id="movie" name="movie" type="text" placeholder='Фильм'
                        className="form__input" required minLength="2" maxLength="200" />
                    <button type="submit" className="form__button"></button>
                </div>
                <div className="checkbox-container">
                    <p className="checkbox-container__title">Короткометражки</p>
                    <FilterCheckbox />
                </div>
            </form>
        </div>
    );
}

export default SearchForm;

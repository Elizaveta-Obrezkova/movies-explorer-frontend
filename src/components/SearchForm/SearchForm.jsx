import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm(props) {

    const [value, setValue] = useState('')
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/movies') {
            setValue(props.input);
            return
        }
        else {
            setValue('');
            return
        }
    }, [location, props.input])

    function handleChange(event) {
        setValue(event.target.value)
        props.changeInput(event.target.value)
    };

    function handleChangeCheckbox(value) {
        props.changeCheckbox(value)
    };

    function handleSubmit(e) {
        e.preventDefault();
        props.onSearch();
    }

    return (
        <div className="search-movie-container page__search-movie-container">
            <form name="search-movie-form" className="form" onSubmit={handleSubmit}>
                <div className="form__input-container">
                    <input id="movie" name="movie" type="text" placeholder='Фильм'
                        className="form__input" minLength="2" maxLength="200" value={value} onChange={handleChange} />
                    <button type="submit" className="form__button"></button>
                </div>
                <div className="checkbox-container">
                    <p className="checkbox-container__title">Короткометражки</p>
                    <FilterCheckbox changeCheckbox={handleChangeCheckbox} checkbox={props.checkbox} />
                </div>
                <p className="search-movie-container__error-message">{location.pathname === '/movies' && props.error ? 'Нужно ввести ключевое слово' : ''}</p>
            </form> 
        </div>
    );
}

export default SearchForm;

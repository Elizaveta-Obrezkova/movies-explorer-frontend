import logo from '../../Images/Logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation'


function Header(props) {

    const [isPopupOpen, openPopup] = React.useState(false);

    function handleMenuClick() {
        openPopup(true)
    }

    function closePopups() {
        openPopup(false);
    }

    return (
        <header className="header page__header">
            <Link to="/" className="header__link"><img src={logo} className="logo" alt="Логотип учебного проекта Яндекс.Практикум х BeatFilm." /></Link>
            <div className='header__navigation'>
                <Link to="/movies" className="header__link">Фильмы</Link>
                <Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link>
            </div>
            <button type="button" className="header__button" aria-label="Аккаунт."><Link to="/profile" className="header__link">Аккаунт</Link></button>
            <button type="button" className="header__button-nav" aria-label="Меню" onClick={handleMenuClick}></button>
            <Navigation
                            isOpen={isPopupOpen}
                            onClose={closePopups}
            />
        </header>
    );
}

export default Header;

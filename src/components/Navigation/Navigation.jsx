import './Navigation.css'
import { Link } from 'react-router-dom';

function Navigation(props) {

    return (
        <div className={props.isOpen ? `popup popup_opened` : `popup`}>
            <div className="popup__container" >
                <nav className="popup__nav">
                    <button type="button" className="popup__close" aria-label="Закрыть." onClick={props.onClose}></button>
                    <Link to="/" className="popup__link" onClick={props.onClose}>Главная</Link>
                    <Link to="/movies" className="popup__link" onClick={props.onClose}>Фильмы</Link>
                    <Link to="/saved-movies" className="popup__link" onClick={props.onClose}>Сохранённые фильмы</Link>
                </nav>
                <Link to="/profile" className="popup__link popup__link_type_button"><button type="button" className="popup__button" aria-label="Аккаунт." onClick={props.onClose}>Аккаунт</button></Link>
            </div>
        </div >
    );
}

export default Navigation;
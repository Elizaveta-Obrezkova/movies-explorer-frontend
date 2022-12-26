import logo from '../../Images/Logo.svg';
import landingLogo from '../../Images/landing-logo.svg';
import { Link } from 'react-router-dom';
import './Promo.css';

function Promo(props) {

    return (
        <header className="project page__project">
            <div className="project__nav">
                <Link to="/" className="project__link"><img src={logo} className="logo" alt="Логотип учебного проекта Яндекс.Практикум х BeatFilm." /></Link>
                <div className='project__navigation'>
                    <Link to="/signup" className="project__link">Регистация</Link>
                    <button type="button" className="project__button" aria-label="Аккаунт."><Link to="/signin" className="project__link project__link_theme_white">Войти</Link></button>
                </div>
            </div>
            <h1 className="project__header">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={landingLogo} className="landing-logo" alt="Логотип лэндинга" />
        </header>
    );
}

export default Promo;

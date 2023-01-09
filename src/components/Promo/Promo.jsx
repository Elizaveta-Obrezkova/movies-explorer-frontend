import logo from '../../Images/Logo.svg';
import landingLogo from '../../Images/landing-logo.svg';
import { Link } from 'react-router-dom';
import './Promo.css';

function Promo(props) {

    return (
        <section className="project page__project">
            <h1 className="project__header">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={landingLogo} className="landing-logo" alt="Логотип лэндинга" />
        </section>
    );
}

export default Promo;

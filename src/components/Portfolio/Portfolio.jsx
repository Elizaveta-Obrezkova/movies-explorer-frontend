import './Portfolio.css';
import linkIcon from '../../Images/link.svg';

function Portfolio(props) {

    return (
        <section className="portfolio">
            <h2 className="portfolio__header">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://elizaveta-obrezkova.github.io/how-to-learn/" target="_blank" rel="noreferrer">
                        <p className="portfolio__title">Статичный сайт</p>
                        <img src={linkIcon} className="portfolio__link-icon" alt="ссылка на сайт"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://elizaveta-obrezkova.github.io/russian-travel/" target="_blank" rel="noreferrer">
                        <p className="portfolio__title">Адаптивный сайт</p>
                        <img src={linkIcon} className="portfolio__link-icon" alt="ссылка на сайт"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://elizaveta-obrezkova.github.io/mesto/" target="_blank" rel="noreferrer">
                        <p className="portfolio__title">Одностраничное приложение</p>
                        <img src={linkIcon} className="portfolio__link-icon" alt="ссылка на сайт"/>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
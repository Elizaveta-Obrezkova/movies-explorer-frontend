import './AboutMe.css';
import avatar from '../../Images/Avatar.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe(props) {

    return (
        <section className="about-me page__about-me">
            <h2 className="about-me__header">Студент</h2>
            <div className="about-me__info">
                <div className="about-me__data">
                    <div className="about-me__personal-info">
                        <h3 className="about-me__name">Елизавета</h3>
                        <p className="about-me__specialty">Фронтенд-разработчик, 26 лет</p>
                        <p className="about-me__my-story">Я родилась в прекрасном Санкт-Петербурге, где закончила факультет экономики в СПбГЭУ. У меня есть муж
                            и кошка Мия. Я люблю смотреть сериалы, развиваться, а ещё увлекаюсь различным спортом. Недавно начала кодить. После того, как начала обучение по веб-разработке, мечтаю связать свою жизнь со сферой IT.</p>
                    </div>
                    <a className="about-me__link" href="https://github.com/Elizaveta-Obrezkova" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="about-me__avatar" src={avatar} alt="Фото студента"/>
            </div>
            <Portfolio />
        </section>
    );
}

export default AboutMe;
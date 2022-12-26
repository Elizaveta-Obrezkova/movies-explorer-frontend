import './AboutProject.css';

function AboutProject(props) {

    return (
        <section className="about-project page__about-project">
            <h2 className="about-project__header">О проекте</h2>
            <div className="about-project__description">
                <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__specification">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className="about-project__specification">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="about-project__diagram">
                <h4 className="about-project__unit about-project__unit_theme_blue">1 неделя</h4>
                <h4 className="about-project__unit">4 недели</h4>
                <p className="about-project__detail">Back-end</p>
                <p className="about-project__detail">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;
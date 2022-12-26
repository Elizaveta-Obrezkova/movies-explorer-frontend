import './Techs.css';

function Techs(props) {

    return (
        <section className="technology page__technology">
            <h2 className="technology__header">Технологии</h2>
            <div className="technology__info">
                <h3 className="technology__subtitle">7 технологий</h3>
                <p className="technology__about-learning">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="technology__list">
                    <li className="technology__skill">HTML</li>
                    <li className="technology__skill">CSS</li>
                    <li className="technology__skill">JS</li>
                    <li className="technology__skill">React</li>
                    <li className="technology__skill">Git</li>
                    <li className="technology__skill">Express.js</li>
                    <li className="technology__skill">mongoDB</li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;
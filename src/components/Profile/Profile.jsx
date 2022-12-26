import './Profile.css';
import React from 'react';

function Profile(props) {

    const [formActive, setFormActive] = React.useState(false)
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    function handleFormActive () {
        setFormActive(true);
    }

    React.useEffect(() => {
        setName(props.name);
        setEmail(props.email);
    }, [props]);

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }


    return (
        <section className="profile page__profile">
            <h2 className="profile__header">Привет, {props.name}!</h2>
            <form className="edit-form">
                <div className="input-container">
                    <h3 className="input-container__title">Имя</h3>
                    <input id="name-owner" name="edit-name-owner" type="text" placeholder='Введите имя' value={name || ''} onChange={handleChangeName}
                        className="edit-form__input edit-form__input_name_owner" required minLength="2" maxLength="40" readOnly={!formActive ? true : false}/>
                    <span id="error-name-owner" className="error-message"></span>
                </div>
                <div className="input-container">
                    <h3 className="input-container__title">E-mail</h3>
                    <input id="email-owner" name="edit-email-owner" type="text" placeholder='Расскажите о себе' value={email || ''} onChange={handleChangeEmail}
                        className="edit-form__input edit-form__input_name_email-owner" required minLength="2" maxLength="200" readOnly={!formActive ? true : false}/>
                    <span id="error-email-owner" className="error-message"></span>
                </div>
                <button type="submit" className={formActive ? 'edit-form__button edit-form__button_type_subbmit' : 'edit-form__button edit-form__button_type_subbmit edit-form__button_hidden' }>Сохранить</button>
            </form>
            <button type="submit" className={!formActive ? 'edit-form__button edit-form__button_type_button' : 'edit-form__button edit-form__button_type_button edit-form__button_hidden' } onClick={handleFormActive}>Редактировать</button>
            <button type="button" className={!formActive ? 'edit-form__button edit-form__button_type_button' : 'edit-form__button edit-form__button_type_button edit-form__button_hidden' }>Выйти из аккаунта</button>
        </section>
    );
}

export default Profile;
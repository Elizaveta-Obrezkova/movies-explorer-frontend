import './Register.css';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../Images/Logo.svg';


function Register(props) {

    return (
        <div className="register page__register">
            <Link to="/" className="register__logo-link"><img src={logo} className="logo" alt="Логотип учебного проекта Яндекс.Практикум х BeatFilm." /></Link>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form name="register-form" className="auth__form">
                <div className="auth-input-container">
                    <h3 className="auth-input-container__title">Имя</h3>
                    <input id="name" name="name" type="text" 
                        className="auth-form__input auth-form__input_name_owner" required minLength="2" maxLength="40" />
                    <span id="error-name-owner" className="error-message"></span>
                </div>
                <div className="auth-input-container">
                    <h3 className="auth-input-container__title">E-mail</h3>
                    <input id="name-owner" name="edit-name-owner" type="email" 
                        className="auth-form__input auth-form__input_name_owner" required minLength="2" maxLength="40" />
                    <span id="error-name-owner" className="error-message"></span>
                </div>
                <div className="auth-input-container">
                    <h3 className="auth-input-container__title">Пароль</h3>
                    <input id="name-owner" name="edit-name-owner" type="password"
                        className="auth-form__input auth-form__input_name_owner" required minLength="2" maxLength="40" />
                    <span id="error-name-owner" className="error-message"></span>
                </div>
                <button type="submit" className="register__button">Зарегистрироваться</button>
            </form>
            <p className="register__info">
                Уже зарегистрированы?
                <Link to="/signin" className="register__link"> Войти</Link>
            </p>

        </div>
    );
}

export default Register;
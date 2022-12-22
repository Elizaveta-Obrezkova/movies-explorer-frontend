import './Login.css';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../Images/Logo.svg';


function Login(props) {

    return (
        <div className="login page__login">
            <Link to="/" className="login__logo-link"><img src={logo} className="logo" alt="Логотип учебного проекта Яндекс.Практикум х BeatFilm." /></Link>
            <h2 className="login__title">Рады видеть!</h2>
            <form name="login-form" className="auth__form">
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
                <button type="submit" className="login__button">Войти</button>
            </form>
            <p className="login__info">
                Ещё не зарегистрированы?
                <Link to="/signup" className="login__link"> Регистрация</Link>
            </p>

        </div>
    );
}

export default Login;
import React from 'react';
import './App.css';
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Profile from '../Profile/Profile'
import NotFound from '../NotFound/NotFound'
import { Route, Switch, useLocation } from 'react-router-dom';
import { movies, savedMovies } from '../../utils/constants';

function App() {

    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className="page">
            <Switch>
                <Route exact path="/">
                    <Main />
                    <Footer />
                </Route>
                <Route path="/movies">
                    <Header />
                    <main>
                        <SearchForm />
                        <MoviesCardList cards={movies} buttonCardLike={true} />
                    </main>
                    <Footer />
                </Route>
                <Route path="/saved-movies">
                    <Header />
                    <main>
                        <SearchForm />
                        <MoviesCardList cards={savedMovies} />
                    </main>
                    <Footer />
                </Route>
                <Route path="/profile">
                    <Header />
                    <main>
                        <Profile name="Елизавета" email="12345@mail.ru" />
                    </main>

                </Route>

                <Route path="/signup">
                    <Register />
                </Route>
                <Route path="/signin">
                    <Login />
                </Route>


                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>

    );
}

export default App;

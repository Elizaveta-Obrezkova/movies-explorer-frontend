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
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect } from 'react';
import { moviesApi } from '../../utils/MoviesApi'
import * as mainApi from '../../utils/MainApi'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { searchMovie } from '../../utils/utils'


function App() {

    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [movies, setMovies] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [isActivePreloader, setIsActivePreloader] = React.useState(false);
    const [errorLogin, setErrorLogin] = React.useState('');
    const [errorRegister, setErrorRegister] = React.useState('');
    const [errorSearchForm, setErrorSearchForm] = React.useState(false);
    const [errorApi, setErrorApi] = React.useState(false);
    const [errorMainApi, setErrorMainApi] = React.useState(false);
    const [statusUpdateInfo, setStatusUpdateInfo] = React.useState('');
    const [keyword, setKeyword] = React.useState('');
    const [checkbox, setCheckbox] = React.useState(false);
    const [searchedMovies, setSearchedMovies] = React.useState([]);
    const [searchedSavedMovies, setSearchedSavedMovies] = React.useState([]);
    const [visibleInfo, setVisibleInfo] = React.useState(false);

    const history = useHistory();
    const location = useLocation();

    function handleLogin(email, password) {
        return mainApi.authorize(email, password)
            .then((res) => {
                if (!res) return
            })
            .then((res) => {
                setCurrentUser(res)
                setLoggedIn(true);
            })
            .catch(err => {
                setErrorLogin(err);
            })
    };

    function handleRegister(name, email, password) {
        return mainApi.register(name, email, password)
            .then((res) => {
                if (!res) return;
                handleLogin(email, password);
            })
            .catch(err => {
                setErrorRegister(err);
            })
    }

    useEffect(() => {
        function tokenCheck() {
            mainApi.getContent()
                .then((res) => {
                    if (!res) return;
                    setCurrentUser(res)
                    setLoggedIn(true);
                })
                .catch(err => {
                    console.log(err);
                    setErrorMainApi(true)
                })
        }
        tokenCheck()
    }, [])

    useEffect(() => {
        if (location.pathname !== '/profile') {
            setStatusUpdateInfo('');
            return
        }
        if (location.pathname !== '/signup') {
            setErrorRegister('');
            return
        }
        if (location.pathname !== '/signin') {
            setErrorLogin('');
            return
        }
        else return;
    }, [location])

    useEffect(() => {
        console.log(loggedIn)
        if (!loggedIn) return;

        history.push('/movies')
    }, [history, loggedIn]);

    useEffect(() => {
        moviesApi.getMovies()
            .then((items) => {
                setMovies(items);
                localStorage.setItem('movies', JSON.stringify(items))
            })
            .catch((err) => {
                console.log(err);
                setErrorApi(true)
            })
    }, [])

    useEffect(() => {
        if (localStorage.getItem('keyword') === null) return;
        if (location.pathname === '/movies') {
            setKeyword(localStorage.getItem('keyword'))
            setSearchedMovies(searchMovie(JSON.parse(localStorage.getItem('movies')),
                localStorage.getItem('keyword'),
                JSON.parse(localStorage.getItem('checkbox'))))
            if (localStorage.getItem('checkbox') === 'true') {
                setCheckbox(true)
            }
            else {
                setCheckbox(false);
            }  
        }
        else return
    }, [location])

    function handleSearchMovie() {

        setErrorSearchForm(false)

        if (keyword === '') {
            setErrorSearchForm(true)
            return
        }

        const delay = (time) => {
            return new Promise((resolve, reject) => setTimeout(resolve, time))
        }

        delay(100)
            .then(() => {
                setIsActivePreloader(true);
                setSearchedMovies([])
                setVisibleInfo(false);
                return delay(2000)
            })
            .then(() => {
                setSearchedMovies(searchMovie(movies, keyword, checkbox))
                localStorage.setItem('keyword', keyword)
                localStorage.setItem('checkbox', JSON.stringify(checkbox))
            })
            .then(() => {
                setIsActivePreloader(false)
                setVisibleInfo(true);
            })
    };

    function handleSearchSavedMovie() {
        const delay = (time) => {
            return new Promise((resolve, reject) => setTimeout(resolve, time))
        }

        delay(100)
            .then(() => {
                setIsActivePreloader(true);
                setSearchedSavedMovies([])
                setVisibleInfo(false);
                return delay(2000)
            })
            .then(() => {
                setSearchedSavedMovies(searchMovie(savedMovies, keyword, checkbox))
            })
            .then(() => {
                setIsActivePreloader(false)
                setVisibleInfo(true);
            })
    };

    function handleLike(movie) {
        if (savedMovies.find(function (item) {
            return item.movieId === movie.id;
        })) return true;
        else return false;
    };

    React.useEffect(() => {
        mainApi.getMovies()
            .then((items) => {
                setSavedMovies(items);
                setSearchedSavedMovies(items);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function handleSavedMovie(movie) {
        mainApi.savedMovies(movie)
            .then((newMovie) => {
                setSavedMovies([newMovie, ...savedMovies]);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleDeleteMovie(movie) {
        mainApi.deleteMovies(movie._id)
            .then(() => {
                setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleEditUserInfo(name, email) {
        mainApi.updateUserinfo(name, email)
            .then((res) => {
                if (!res) return
                setCurrentUser(res)
                setStatusUpdateInfo('Данные успешно обновлены');
            })
            .catch((err) => {
                setStatusUpdateInfo(err);
            })
    }

    function handleLogout() {
        mainApi.logout()
            .then((res) => {
                if (!res) return;
                setLoggedIn(false);
            })
            .then(() => {
                history.push('/')
            })
            .catch(err => {
                console.log(err);
            })
    }

    function handleChangeInput(key) {
        setKeyword(key)
    };

    function handleChangeCheckbox(value) {
        setCheckbox(value)
    };

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Switch>
                    <Route exact path="/">
                        <Header loggedIn={loggedIn} />
                        <Main />
                        <Footer />
                    </Route>
                    <ProtectedRoute path="/movies" loggedIn={loggedIn}>
                        <Header loggedIn={loggedIn} />
                        <main>
                            <SearchForm onSearch={handleSearchMovie} changeInput={handleChangeInput} changeCheckbox={handleChangeCheckbox} checkbox={checkbox} input={keyword} error={errorSearchForm}/>
                            <MoviesCardList
                                movies={searchedMovies}
                                savedMovies={savedMovies}
                                buttonCardLike={true}
                                verifyLike={handleLike}
                                preloaderActive={isActivePreloader}
                                onSavedMovie={handleSavedMovie}
                                onDeleteMovie={handleDeleteMovie}
                                info={visibleInfo} 
                                error={errorApi}/>
                        </main>
                        <Footer />
                    </ProtectedRoute>
                    <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
                        <Header loggedIn={loggedIn} />
                        <main>
                            <SearchForm onSearch={handleSearchSavedMovie} changeInput={handleChangeInput} changeCheckbox={handleChangeCheckbox} checkbox={false} input='' />
                            <MoviesCardList
                                movies={searchedSavedMovies}
                                preloaderActive={isActivePreloader}
                                onDeleteMovie={handleDeleteMovie}
                                error={errorMainApi}/>
                        </main>
                        <Footer />
                    </ProtectedRoute>
                    <ProtectedRoute path="/profile" loggedIn={loggedIn}>
                        <Header loggedIn={loggedIn} />
                        <main>
                            <Profile onLogout={handleLogout} onEditInfo={handleEditUserInfo} message={statusUpdateInfo} />
                        </main>

                    </ProtectedRoute>

                    <Route path="/signup">
                        <Register onRegister={handleRegister} error={errorRegister} />
                    </Route>
                    <Route path="/signin">
                        <Login onLogin={handleLogin} error={errorLogin} />
                    </Route>


                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;

export const BASE_URL = "https://api.elizabeth.diplom.nomoredomains.club"

function request({ url, method = 'POST', token, data, error400 = 'что-то пошло не так', error401 = 'что-то пошло не так', error404 = 'Страница по указанному маршруту не найдена.', error409 = 'что-то пошло не так', error500 = 'На сервере произошла ошибка.' }) {
    return fetch(`${BASE_URL}${url}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...!!token && { 'Authorization': `Bearer ${token}` }
        },
        ...!!data && { body: JSON.stringify(data) },
        credentials: "include",
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            if (res.status === 400) {
                return Promise.reject(error400);
            }
            if (res.status === 401) {
                return Promise.reject(error401);
            }
            if (res.status === 404) {
                return Promise.reject(error404);
            }
            if (res.status === 409) {
                return Promise.reject(error409);
            }
            if (res.status === 500) {
                return Promise.reject(error500);
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        });
}

export function register(name, email, password) {
    return request({
        url: '/signup',
        data: {
            "name": name,
            "email": email,
            "password": password,
        },
        error400: 'Пользователь с таким email уже существует.',
        error409: 'При регистрации пользователя произошла ошибка.'

    })
}

export function authorize(email, password) {
    return request({
        url: '/signin',
        data: {
            "email": email,
            "password": password,
        },
        error400: 'Вы ввели неправильный логин или пароль',
        error401: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
        error409: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.'
    })
}

export function getContent() {
    return request({
        url: '/users/me',
        method: 'GET',
        error400: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
        error401: 'При авторизации произошла ошибка. Переданный токен некорректен.'
    })
}

export function logout() {
    return request({
        url: '/logout',
        method: 'GET',
    })
}

export function updateUserinfo(name, email) {
    return request({
        url: '/users/me',
        method: 'PATCH',
        data: {
            "name": name,
            "email": email,
        },
        error400: 'Пользователь с таким email уже существует.',
        error409: 'При обновлении профиля произошла ошибка.'
    })
}

export function getMovies() {
    return request({
        url: '/movies',
        method: 'GET',
        error400: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
        error401: 'При авторизации произошла ошибка. Переданный токен некорректен.'
    })
}

export function savedMovies(movie) {
    return request({
        url: '/movies',
        data: {
            "country": movie.country,
            "director": movie.director,
            "duration": movie.duration,
            "year": movie.year,
            "description": movie.description,
            "image": `https://api.nomoreparties.co/${movie.image.url}`,
            "trailerLink": movie.trailerLink,
            "thumbnail": `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
            "movieId": movie.id,
            "nameRU": movie.nameRU,
            "nameEN": movie.nameEN,
        },
        error400: 'Вы ввели неправильный логин или пароль.'
    })
}

export function deleteMovies(id) {
    return request({
        url: `/movies/${id}`,
        method: 'DELETE',
        error400: 'Вы ввели неправильный логин или пароль.'
    })
}

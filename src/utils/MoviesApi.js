class MoviesApi{
    constructor(host){
        this._host = host;
        this._getJsonOrError = this._getJsonOrError.bind(this);
        this._getHeaders = this._getHeaders.bind(this);
    }

    _getJsonOrError(res){
        if (res.ok){
            return res.json();
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    _getHeaders(){
        return {
            'content-type': 'application/json',
        }
    }

    getMovies(){
        return fetch(`${this._host}/beatfilm-movies`, {
            headers: this._getHeaders(),
        })
        .then(this._getJsonOrError)
    }

}

const moviesApi = new MoviesApi('https://api.nomoreparties.co');

export {moviesApi};
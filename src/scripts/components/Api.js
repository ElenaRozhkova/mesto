export default class Api {
    constructor(options) {
        this._token = options.token;
        this._url = options.url;
        // тело конструктора
    }
    getProfileInfo() {
        return fetch(`${this._url}/users/me`, {
                headers: {
                    authorization: this._token
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    setProfileEdit(userName, userJob) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName, //'Marie Skłodowska Curie',
                about: userJob //'Physicist and Chemist'
            })
        });
    }


    getInitialCards() {
        return fetch(`${this._url}/cards`, {
                headers: {
                    authorization: this._token
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    addCard(cardName, cardLink) {
        return fetch(`${this._url}/cards`, {
                method: 'POST',
                headers: {
                    authorization: this._token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: cardName,
                    link: cardLink
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }


    addLike(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: this._token
                }
            })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }
    deleteLike(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: this._token
                }
            })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
                method: 'DELETE',
                headers: {
                    authorization: this._token
                }
            })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }

    changeAvatar(url) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: url //'Marie Skłodowska Curie',
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })

    }

}
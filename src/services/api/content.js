import { NETFLIX_API } from './const.js';
import { Page404 } from '../../pages/404/404';

// export const $sendRecommendations = (id) => {
//     return getRecommended(id)
//         .then(response => {
//             const recommendations = response.body.recommendations;
//
//             if (recommendations) {
//                 const recommendationsPromises = recommendations.map(recommendation => {
//                     return getContentById(recommendation)
//                         .then(res => {
//                             return res.body.film;
//                         });
//                 });
//
//                 // eslint-disable-next-line no-undef
//                 return Promise.all(recommendationsPromises);
//             }
//
//         });
//
// };

export const $sendRecommendations = (id) => {
    return getRecommended(id)
        .then(response => {
            // Предполагаем, что ответ содержит непосредственно полные объекты фильмов
            return response.body.recommendations || [];
        })
        .catch(error => {
            if (!navigator.onLine) {
                (new Page404(document.getElementById('root'))).render();
            }
            console.error('Ошибка при получении рекомендаций:', error);
            return [];
        });
};


export const getRecommended = (id) => {
    return fetch(`${NETFLIX_API}/films/recommendations/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        credentials: 'include',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ответ сервера не 200');
            }

            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            if (!navigator.onLine) {
                (new Page404(document.getElementById('root'))).render();
            }
            throw new Error(error);
        });
};

/**
 * Выполняет запрос на получение фильмов по указанному жанру.
 * @param {string} genre - Жанр фильмов, которые требуется получить.
 * @returns {Promise} Промис, который разрешится с данными о фильмах или ошибкой.
 * @throws {Error} Ошибка сети или некорректный ответ сервера.
 */
export const getGenreFilms = (id) => {
    return fetch(`${NETFLIX_API}/films/genre/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        credentials: 'include',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ответ сервера не 200');
            }

            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            if (!navigator.onLine) {
                (new Page404(document.getElementById('root'))).render();
            }
            throw new Error(error);
        });
};
/**
 * Выполняет запрос на получение контента по указанному идентификатору.
 * @param {string} id - Идентификатор контента.
 * @returns {Promise} Промис, который разрешится с данными о контенте или ошибкой.
 * @throws {Error} Ошибка сети или некорректный ответ сервера.
 */
export const getContentById = (id) => {
    return fetch(`${NETFLIX_API}/films/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        credentials: 'include',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ответ сервера не 200');
            }

            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            (new Page404(document.getElementById('root'))).render();
            throw new Error(error);
        });
};
/**
 * Выполняет запрос на получение контента по идентификатору актера.
 * @param {string} id - Идентификатор актера.
 * @returns {Promise} Промис, который разрешится с данными о контенте или ошибкой.
 * @throws {Error} Ошибка сети или некорректный ответ сервера.
 */
export const getContentByCastId = (id) => {
    return fetch(`${NETFLIX_API}/films/cast/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        credentials: 'include',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ответ сервера не 200');
            }

            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            if (!navigator.onLine) {
                (new Page404(document.getElementById('root'))).render();
            }
            throw new Error(error);
        });
};
/**
 * Выполняет запрос на получение жанров фильмов.
 * @returns {Promise} Промис, который разрешится с данными о жанрах или ошибкой.
 * @throws {Error} Ошибка сети или некорректный ответ сервера.
 */
export const getGenreAlias = () => {
    return fetch(`${NETFLIX_API}/genres/films`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        credentials: 'include',
    }).then(response => {
        if (!response.ok) {
            throw new Error('Ответ сервера не 200');
        }

        return response.json();
    })
        .then(data => {
            return data;
        })
        .catch(error => {
            if (!navigator.onLine) {
                (new Page404(document.getElementById('root'))).render();
            }
            throw new Error(error);
        });
};
/**
 * Выполняет запрос на получение топ-рейтинга фильмов.
 * @returns {Promise} Промис, который разрешится с данными о фильмах или ошибкой.
 * @throws {Error} Ошибка сети или некорректный ответ сервера.
 */
export const getTopRated = () => {
    return fetch(`${NETFLIX_API}/films/top/rate`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        credentials: 'include',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ответ сервера не 200');
            }

            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            throw new Error(error);
        });
};

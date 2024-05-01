import { $sendRecommendations, getContentById } from '../../services/api/content.js';
import { getLastNumber } from '../../services/getParams.js';
import content from './content.hbs';
import { deleteLike, getLikeState, setLike } from '../../services/api/like.js';
import { seachHandler } from '../../services/search-utils.js';
import { avatarUpdate } from '../../services/avatar-update.js';
import { logoutHandle } from '../../services/logoutHandle.js';
import { setRating } from '../../services/set-rating.js';
import { checkPaymentLink } from '../../services/api/payment.js';
import { closeOnBackDropClick } from '../../components/modal/modal.js';

/**
 * Класс для отображения страницы контента.
 */
export class ContentPage {
    #parent;

    /**
     * Создает экземпляр класса ContentPage.
     *
     * @param {HTMLElement} [parent=document.getElementById('root')] - Родительский элемент, в который будет вставлен контент страницы.
     */
    constructor(parent = document.getElementById('root')) {
        /**
          * Родительский элемент, в который будет вставлен контент страницы.
          * @type {HTMLElement}
          * @private
          */
        this.#parent = parent;
    }

    async render() {

        this.#parent.innerHTML = '';
        this.#parent.style.background = '';
        const id = getLastNumber(location.href);
        localStorage.setItem('LastContentId', id);
        const film = await getContentById(id);

        this.#parent.innerHTML = content({ film: film.body });
        avatarUpdate();

        document.getElementById('dialog').addEventListener('click', closeOnBackDropClick);
        const like = document.querySelector('.heart-button');
        const linkResponse = await checkPaymentLink();

        if (!linkResponse.body.status) {
            const dialog = document.querySelector('#subs');
            const dialogClose = document.getElementById('subs_btn_close');
            dialog.showModal();
            document.querySelector('video').poster = '/img/Frame 2.png';
            dialog.addEventListener('click', closeOnBackDropClick);

            dialogClose.addEventListener('click', () => {
                dialog.close();
            });
        }
        getLikeState(id).then(response => {
            if (response.body.isFavourite === true) {
                like.querySelector('i').className = 'like';
            } else {
                like.querySelector('i').className = 'empty-like';
            }
        });
        const video = document.querySelector('video');
        video.addEventListener('loadedmetadata', function () {
            const durationInSeconds = video.duration;

            // Преобразуем длительность из секунд в часы и минуты
            const hours = Math.floor(durationInSeconds / 3600);
            const minutes = Math.floor((durationInSeconds % 3600) / 60);
            if (hours > 0 && minutes > 0) {
                document.getElementById('duration').innerText = (`${hours} ч ${minutes} м`);
            } else if (minutes === 0) {
                document.getElementById('duration').innerText = (`${hours} ч`);
            } else if (hours === 0) {
                document.getElementById('duration').innerText = (` ${minutes} м`);
            }
        });

        document.getElementById('rating').innerText = parseFloat(film.body.film.rating.toFixed(1));

        logoutHandle();
        setRating();

        /**
         * Обработчик клика по кнопке "Like".
         * @param {MouseEvent} event - Событие клика.
         */
        like.addEventListener('click', () => {
            if (like.querySelector('i').className === 'like') {
                deleteLike(id).then(() => {
                    setTimeout(() => {
                        like.querySelector('i').className = 'empty-like';
                    }, 0);

                });
            } else if (like.querySelector('i').className === 'empty-like') {
                setLike(id).then(() => {
                    setTimeout(() => {
                        like.querySelector('i').className = 'like';
                    }, 0);
                });
            }
        });
        videoController();
        seachHandler();

        const ratingButton = document.querySelector('.primary__modal');
        const ratingValue = parseFloat(film.body.film.rating.toFixed(1));

        if (ratingValue >= 8) {
            ratingButton.classList.add('rating-high');
        } else if (ratingValue >= 5) {
            ratingButton.classList.add('rating-medium');
        } else {
            ratingButton.classList.add('rating-low');
        }
    }
}

export const videoController = () => {
    const video = document.querySelector('.content-container__player');

    // Получаем текущее время воспроизведения из localStorage (если есть)
    const currentTime = localStorage.getItem(location.href);
    if (currentTime) {
        video.currentTime = parseFloat(currentTime);
    }

    // Сохраняем текущее время воспроизведения при его изменении
    video.addEventListener('timeupdate', () => {
        localStorage.setItem(location.href, video.currentTime);
    });
};


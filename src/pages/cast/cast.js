import {VideoItem} from './components/video-item.js';
import {getLastNumber} from '../../services/getParams.js';
import {getContentByCastId} from '../../services/api/content.js';
import cast from './cast.hbs';

/**
 * Класс, представляющий страницу члена съёмочной группы.
 */
export class CastPage {
    #parent;

    /**
     * Создает новый экземпляр класса CastPage.
     * @param {HTMLElement} parent - Родительский элемент, в который будет вставлена страница.
     */
    constructor(parent) {
        this.#parent = parent;
    }

    addVideoCard(content) {
        const root = document.getElementById('cast-page');
        root.innerHTML = '';
        content.forEach((data) => {
            new VideoItem(root, data);
        });

    }

    /**
     * Рендерит страницу.
     */
    async render() {
        const id = getLastNumber(location.href);

        const filmsByCast = await getContentByCastId(id);
        let content = [];
        let castName;
        // if (filmsByCast.status === 200) {
        content = filmsByCast.body.films;
        castName = filmsByCast.body.cast.name;
        // }
        content = content.map(movie => {
            // Используйте метод toFixed, чтобы округлить значение до 1 знака после запятой
            const roundedRating = parseFloat(movie.rating.toFixed(1));
            // Создайте новый объект с округленным значением rating

            return {...movie, rating: roundedRating};
        });

        this.#parent.innerHTML = '';
        document.body.style.background = '#181818';
        this.#parent.innerHTML = cast({
            name: castName,
        });

        this.addVideoCard(content);

    }
}

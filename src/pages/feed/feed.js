import { FeedCollection } from './components/feed-collection.js';
import feed from './feed-page.hbs';
import store from '../../..';
import { $sendCollectionAliasRequest, COLLECTION_REDUCER } from '../../services/flux/actions/collections.js';
import { seachHandler } from '../../services/search-utils.js';
import { avatarUpdate } from '../../services/avatar-update.js';
import { logoutHandle } from '../../services/logoutHandle.js';
import { $sendRecommendations } from '../../services/api/content.js';

/**
 * Класс, представляющий страницу ленты.
 */
export class FeedPage {
    #parent;

    /**
    * Создает новый экземпляр класса FeedPage.
    * @param {HTMLElement} parent - Родительский элемент, в который будет вставлена страница.
    */
    constructor(parent = document.getElementById('root')) {
        this.#parent = parent;
    }

    async addCollections(content) {
        const root = document.getElementById('feed-collections');
        root.innerHTML = '';
        const userId = Number(localStorage.getItem('userId'));
        /**
         * Массив id фильмов
         */

        const recommendations = await $sendRecommendations(userId);
        if (recommendations) {
            new FeedCollection(root, 'Для вас', recommendations, 123456);
            console.info(recommendations);
        }

        content.forEach((data) => {
            new FeedCollection(root, data.name, data.content, data.id);
        });
    }

    /**
     * Рендерит страницу ленты.
     */
    async render() {
        store.clearSubscribes();
        this.#parent.innerHTML = '';

        store.dispatch($sendCollectionAliasRequest());
        store.subscribe(COLLECTION_REDUCER, async () => {

            const state = store.getState().collections;
            this.#parent.innerHTML = feed({ 'preview': state.preview, 'id': 'playButton' });
            await this.addCollections(state.collections);

            logoutHandle();

            const btn = document.getElementById('playButton');
            btn.addEventListener('click', () => {
                btn.href = '/movies/' + state.preview.id;
            });

            seachHandler();
            avatarUpdate();
        });

    }
}


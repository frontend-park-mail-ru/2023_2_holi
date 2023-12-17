import { deleteRating, getRating, setRatingRequest } from './api/rating';

export const setRating = () => {
    checkUserRating();
    const ratingButtons = document.querySelectorAll('[data-rating]');

    // Навешиваем обработчик клика на каждый элемент с аттрибутом data-rating
    ratingButtons.forEach(button => {
        button.addEventListener('click', handleRatingClick);
    });

    // Находим кнопку с атрибутом name="Remove rating"
    const removeRatingButton = document.querySelector('[name="Remove rating"]');
    // Навешиваем обработчик клика на кнопку с атрибутом name="Remove rating"
    removeRatingButton.addEventListener('click', handleRemoveRatingClick);
};

function handleRatingClick(event) {
    // Получаем значение рейтинга из аттрибута data-rating
    const ratingValue = event.currentTarget.dataset.rating;
    const ratingButtons = document.querySelectorAll('[data-rating]');
    // Удаляем класс active со всех кнопок
    ratingButtons.forEach(button => {
        button.classList.remove('styles_activeRating');
    });

    // Добавляем класс active к текущей кнопке
    event.currentTarget.classList.add('styles_activeRating');
    const id = localStorage.getItem('LastContentId');
    // Отправляем запрос на установку рейтинга (замените URL на свой)
    setRatingRequest(ratingValue, id)
        .then(response => {
            // Обработка ответа (например, обновление интерфейса)
            if (response.ok) {
                console.log(`Рейтинг ${ratingValue} успешно установлен.`);
            } else {
                console.error('Ошибка при установке рейтинга.');
            }
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
}

// Функция для обработки клика
function handleRemoveRatingClick() {
    const id = localStorage.getItem('LastContentId');
    // Отправляем запрос на удаление рейтинга (замените URL на свой)
    deleteRating(id)
        .then(response => {
            // Обработка ответа (например, обновление интерфейса)
            if (response.ok) {
                console.log('Рейтинг успешно удален.');
            } else {
                console.error('Ошибка при удалении рейтинга.');
            }
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
}

// Функция для проверки текущего рейтинга пользователя
function checkUserRating() {
    const ratingButtons = document.querySelectorAll('[data-rating]');
    const id = localStorage.getItem('LastContentId');
    getRating(id)
        .then(data => {
            if (data && data.body.isRated) {
                const userRating = data.body.rate;

                ratingButtons.forEach(button => {
                    button.classList.remove('styles_activeRating');
                });

                const correspondingButton = document.querySelector(`[data-rating="${userRating}"]`);
                if (correspondingButton) {
                    correspondingButton.classList.add('styles_activeRating');
                }
            }
        })
        .catch(error => {
            console.error('Произошла ошибка при проверке рейтинга:', error);
        });
}

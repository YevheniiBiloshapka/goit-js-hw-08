import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
/* Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

*1. Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
*2. Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).
*3. Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.*/

const galleryBox = document.querySelector('.gallery');

const cardImg = createImgCard(galleryItems);
galleryBox.insertAdjacentHTML('beforeend', cardImg);

function createImgCard(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  />
</a>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: `alt`,
  captionDelay: 250,
});

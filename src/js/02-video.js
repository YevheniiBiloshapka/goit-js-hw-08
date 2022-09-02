import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

/* Выполняй это задание в файлах 02-video.html и 02-video.js. Разбей его на несколько подзадач:

*1. Ознакомься с документацией библиотеки Vimeo плеера.
* 2. Добавь библиотеку как зависимость проекта через npm.
* 3. Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
*4. Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
*5. Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
*6. При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
*7. Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду. */

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let lostTime = 0;

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

const onPlay = function (data) {
  lostTime = localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(lostTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

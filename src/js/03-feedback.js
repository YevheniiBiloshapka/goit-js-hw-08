/* Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. 
Разбей его на несколько подзадач:

*1.Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект
*с полями email и message, в которых сохраняй текущие значения полей формы. 
*Пусть ключом для хранилища будет строка "feedback-form-state".
2.При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, 
заполняй ими поля формы. В противном случае поля должны быть пустыми.

*3.При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, 
*message и текущими их значениями в консоль.

*4.Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
*Для этого добавь в проект и используй библиотеку lodash.throttle. */

import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const isButtonActive = document.querySelector('button');
const STORAGE_KEY = 'feedback-form-state';

const localData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
console.log(localData);

feedbackForm.email.value = localData.email ?? '';
feedbackForm.message.value = localData.message ?? '';

isButtonActive.disabled = true;

feedbackForm.addEventListener('input', throttle(setFormData, 500));
function setFormData(e) {
  isButtonActive.disabled = false;
  localData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
}

feedbackForm.addEventListener('submit', onClickFormSubmit);
function onClickFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(localData);

  localStorage.removeItem(STORAGE_KEY);
  isButtonActive.disabled = true;
}

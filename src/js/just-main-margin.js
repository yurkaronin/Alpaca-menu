// Программа добавляет отступ для тега MAIN Что бы шапка, вырванная из потока не перекрывала контент
// Добавлена задержка только для того что бы перестраховаться если шапка в процессе загрузки стилей и картинок меняет размеры


import { headerHeight, updateHeaderHeight } from './global';

function setInitialMainMargin() {
  const header = document.querySelector('header');
  const mainElement = document.querySelector('.main');

  if (header && mainElement) {
    setTimeout(() => {
      const headerHeight = header.getBoundingClientRect().height;
      mainElement.style.marginTop = headerHeight + 'px';
    }, 100); // Небольшая задержка для применения всех стилей
  }
}

window.addEventListener("load", setInitialMainMargin);
document.addEventListener("DOMContentLoaded", setInitialMainMargin);
window.addEventListener("resize", setInitialMainMargin);

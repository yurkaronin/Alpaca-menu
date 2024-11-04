document.addEventListener('DOMContentLoaded', function() {
  // Находим все элементы .mobile-nav__item с вложенным списком .mobile-nav__sub-list
  const mainItemsWithSublist = document.querySelectorAll('.mobile-nav__item');

  mainItemsWithSublist.forEach(item => {
      const link = item.querySelector('.mobile-nav__link');
      const sublist = item.querySelector('.mobile-nav__sub-list');

      // Проверяем, есть ли вложенный список
      if (sublist) {
          // Добавляем обработчик клика на ссылку
          link.addEventListener('click', function(event) {
              event.preventDefault(); // Отменяем переход по ссылке
              item.classList.toggle('isActive'); // Добавляем/убираем класс isActive у родителя
              link.classList.toggle('isActive'); // Добавляем/убираем класс isActive у ссылки
          });
      }
  });

  // Аналогичный функционал для элементов .mobile-nav__sub-item с вложенными .mobile-nav__sub-sub-list
  const subItemsWithSubSublist = document.querySelectorAll('.mobile-nav__sub-item');

  subItemsWithSubSublist.forEach(subItem => {
      const subLink = subItem.querySelector('.mobile-nav__sub-link');
      const subSublist = subItem.querySelector('.mobile-nav__sub-sub-list');

      // Проверяем, есть ли вложенный список третьего уровня
      if (subSublist) {
          // Добавляем обработчик клика на ссылку
          subLink.addEventListener('click', function(event) {
              event.preventDefault(); // Отменяем переход по ссылке
              subItem.classList.toggle('isActive'); // Добавляем/убираем класс isActive у родителя
              subLink.classList.toggle('isActive'); // Добавляем/убираем класс isActive у ссылки
          });
      }
  });
});

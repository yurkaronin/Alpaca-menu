document.addEventListener('DOMContentLoaded', function() {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) return;

  const menuItems = document.querySelectorAll('.main-nav__item');

  menuItems.forEach(item => {
      const sublist = item.querySelector('.main-nav__sub-list, .main-nav__sub-sub-list');
      const link = item.querySelector('.main-nav__link');

      if (sublist) {
          sublist.style.display = 'none';
          let isSubmenuOpen = false;

          item.addEventListener('click', function(event) {
              event.stopPropagation();

              // Если подменю закрыто, открываем его и отменяем переход
              if (!isSubmenuOpen) {
                  event.preventDefault(); // Отменяем переход по ссылке
                  closeAllSubMenus(item);
                  sublist.style.display = 'block';
                  isSubmenuOpen = true;
              } else {
                  // Если подменю уже открыто, разрешаем переход по ссылке
                  isSubmenuOpen = false;
              }
          });
      }
  });

  document.addEventListener('click', function() {
      closeAllSubMenus();
  });

  function closeAllSubMenus(except = null) {
      menuItems.forEach(item => {
          const sublist = item.querySelector('.main-nav__sub-list, .main-nav__sub-sub-list');
          if (sublist && item !== except) {
              sublist.style.display = 'none';
              item.isSubmenuOpen = false;
          }
      });
  }
});

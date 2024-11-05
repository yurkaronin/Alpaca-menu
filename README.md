# Alpaca menu

 Тестовое задание для Совкомбанк


 ## Команды для работы с проектом:

    npm install

Эта команда установит все пакеты, которые Vite требует для работы.

Для запуска сервера разработки выполните следующую команду в терминале из корневой директории проекта:

    npm run dev

Vite запустит локальный сервер и отобразит в терминале URL-адрес, по которому вы можете посмотреть свой проект, например:

    Local: http://localhost:3000

Перейдите по этому адресу в браузере, чтобы увидеть проект в действии. Каждый раз, когда вы будете вносить изменения в код, Vite автоматически обновит страницу, позволяя моментально видеть результат работы.

Для создания продакшн-сборки выполните команду:

    npm run build

Я впервые работал с VITE, и заметил что по умолчанию есть проблема с путями при сборке билда. Поэтому для корректной работы из подпаки или локальном просмотре решил добавить настройки относительных путей в vite.config.js

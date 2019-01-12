Модальное окно на JavaScript, которое всегда появляется в центре видимой области окна браузера.

1. Подключение скриптов и стилей:

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Modal Window</title>

    <!-- Подключение файла стилей и скрита -->
    <link rel="stylesheet" href="/css/styles.css">
    <script src="/js/ModalWindow.js"></script>
    
</head>
    <body>

    </body>
</html>

2. Открытие модального окна:

modalWindow.showModalWindow(width, height, measureType, content); 

//width - ширина модального окна
//height - высота модального окна
//measureType - единица измерения для width и height (px, % и т.д.)
//content - содержимое окна (html)
//Например modalWindow.showModalWindow('70', '30', '%', html);

3. Закрытие модального окна:

modalWindow.closeModalWindow();

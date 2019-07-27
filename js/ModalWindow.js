;(function() {
    'use strict';

    let modalWindow = {};
    
    // Получаем код стилей модального окна для центрирования по горизонтали и вертикали
    function getCenterWindowStyles(width, height, measureType) {

        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        let widthInPx, heightInPx;

        if( measureType == '%' ) {

            if( width > 100 ) width = 100;
            if( height > 100) height = 100;
           
            widthInPx = clientWidth * width / 100;
            heightInPx = clientHeight * height / 100;

        } else {

            widthInPx = width;
            heightInPx = height;

            if ( width > clientWidth ) widthInPx = clientWidth;
            if ( height > clientHeight  ) heightInPx = clientHeight;

        }

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const top = scrollTop + clientHeight/2 - heightInPx/2;
        const left = clientWidth/2 - widthInPx/2;

        const styles = `top: ${top}px;
                        left: ${left}px;
                        width: ${widthInPx}px;
                        height: ${heightInPx}px;
                        max-width: ${clientWidth}px;
                        max-height: ${clientHeight}px;`;

        return styles;
        
    }
    
    // Получаем код стилей положения крестика
    function getCrossStyles(width, height, measureType) {

        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        let widthInPx, heightInPx;

        if( measureType == '%' ) {

            if( width > 100 ) width = 100;
            if( height > 100) height = 100;
           
            widthInPx = clientWidth * width / 100;
            heightInPx = clientHeight * height / 100;

        } else {

            widthInPx = width;
            heightInPx = height;

            if ( width > clientWidth ) widthInPx = clientWidth;
            if ( height > clientHeight  ) heightInPx = clientHeight;

        }

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const top = scrollTop + clientHeight/2 - heightInPx/2 - 12;
        const left = clientWidth/2 + widthInPx/2 - 12;

        const styles = `top: ${top}px;
                        left: ${left}px;`;

        return styles;
        
    }

    // Закрытие модального окна
    function closeModalWindow() {
        
        document.getElementById('modalWindow').remove();
        
    }
    
    //Открытие модального окна
    //width - ширина модального окна
    //height - высота модального окна
    //measureType - единица измерения для width и height (px, % и т.д.)
    //content - содержимое окна (html)
    function showModalWindow(width, height, measureType, content) {

        const modalWindowDiv = document.createElement('div');
        modalWindowDiv.setAttribute('id', 'modalWindow');
        modalWindowDiv.setAttribute('class', 'modal-window');

        const body = document.body;
        body.insertBefore(modalWindowDiv, body.firstChild);
        
        const modalWindow = document.getElementById('modalWindow');

        const html = `<div class="modal-window__overlay" onclick="modalWindow.closeModalWindow();"></div>
                        <div class="modal-window__content" style="${getCenterWindowStyles(width, height, measureType)}">
                            ${content}
                        </div>
                      <div class="modal-window__cross" onclick="modalWindow.closeModalWindow();" style="${getCrossStyles(width, height, measureType)}">X</div>`;

        modalWindow.innerHTML = html;        
    }

    modalWindow.showModalWindow = showModalWindow;
    modalWindow.closeModalWindow = closeModalWindow;
    window.modalWindow = modalWindow;

})();

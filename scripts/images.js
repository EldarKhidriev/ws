// После загрузки документа
document.addEventListener("DOMContentLoaded", () => {
    // Определяем блок кнопки
    const button = document.querySelector('.button');
    // Вешаем прослушиватель события по клику на кнопку
    button.addEventListener("click", (event) => {
        // Определяем элемент по которому кликнули
        const elem = event.target;
        elem.classList.add('click'); // Добавляем блоку класс .click
        setTimeout(function() {
            elem.classList.remove('click'); // Удаляем класс .click через 400ms
        }, 1000);
    });
});
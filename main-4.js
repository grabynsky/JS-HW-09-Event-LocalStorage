// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент
// з id="text".

const textElement = document.getElementById('text');
const button = document.getElementById('deleteText');

button.addEventListener('click', function() {

    textElement.style.display = 'none';
});
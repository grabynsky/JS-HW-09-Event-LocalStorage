// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом

// ==========================================
const formOne = document.forms.formOne;
const btn = document.getElementById('buttonOne');
const userNameArr = [];
let userNameObj = {};

btn.onclick = function (event) {

    const inpName = document.getElementById('name');
    const inpSurname = document.getElementById('surname');
    const inpAge = document.getElementById('age');

    userNameObj = {
        name: inpName.value,
        surname: inpSurname.value,
        age: inpAge.value
    }

    const wrapperFrom = document.getElementById('wrapperFrom')

    const divUser = document.createElement('div');
    divUser.innerText = JSON.stringify(userNameObj, null, 2);
    wrapperFrom.appendChild(divUser);

    inpName.value = '';
    inpSurname.value = '';
    inpAge.value = '';
}


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент 
// з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи 
//     меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом

// ==========================================
const formOne = document.forms.formOne;

let userNameObj = {};

formOne.onsubmit = function (event) {
    event.preventDefault();

    userNameObj = {
        name: this.name.value,
        surname: this.surname.value,
        age: this.age.value
    }

    const wrapperFrom = document.getElementById('wrapperFrom');

    const divUser = document.createElement('div');
    divUser.innerText = JSON.stringify(userNameObj, null, 2);

    wrapperFrom.appendChild(divUser);

    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';
}


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1

document.addEventListener('DOMContentLoaded', () => {
    
    let counter = localStorage.getItem('counter');
    if (counter === null) {
        counter = 0;
    } else {
        counter = parseInt(counter);
    }

    counter += 1;
    
    localStorage.setItem('counter', counter);
    
    document.getElementById('counter').textContent = counter;
});


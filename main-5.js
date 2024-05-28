//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи
//     меньше він ніж 18, та повідомити про це користувача
//

const ageInput = document.getElementById('ageInput');
const checkAgeButton = document.getElementById('checkAgeButton');
const message = document.getElementById('message');


checkAgeButton.addEventListener('click', function () {

    const age = ageInput.value;

    if (age === "") {
        message.textContent = "Please enter your age.";
    } else if (isNaN(age) || age <= 0) {
        message.textContent = "Please enter a valid age.";
    } else if (age < 18) {
        message.textContent = "You are under 18 years old.";
    } else {
        message.textContent = "You are 18 years of age or older.";
    }
})
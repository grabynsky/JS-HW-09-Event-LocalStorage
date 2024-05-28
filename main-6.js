// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

function createTable() {
    
    const rowCount = parseInt(document.getElementById('rowCountInput').value);
    const columnCount = parseInt(document.getElementById('columnCountInput').value);
    const cellContent = document.getElementById('cellContentInput').value;

    const tableContainer = document.getElementById('tableContainer');
    
    
    let tableHTML = '<table border="1">';
    for (let i = 0; i < rowCount; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < columnCount; j++) {
            tableHTML += `<td>${cellContent}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    
    tableContainer.innerHTML = tableHTML;
}


const createTableButton = document.getElementById('createTableButton');

createTableButton.addEventListener('click', createTable);
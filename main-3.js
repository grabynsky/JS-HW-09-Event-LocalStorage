//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//

const products = [
    { id: 1, name: "Product 1", quantity: 10 },
    { id: 2, name: "Product 2", quantity: 15 },
    { id: 3, name: "Product 3", quantity: 20 },
    { id: 4, name: "Product 4", quantity: 25 },
    { id: 5, name: "Product 5", quantity: 30 },
    { id: 6, name: "Product 6", quantity: 35 },
    { id: 7, name: "Product 7", quantity: 40 },
    { id: 8, name: "Product 8", quantity: 45 },
    { id: 9, name: "Product 9", quantity: 50 },
    { id: 10, name: "Product 10", quantity: 55 },
    { id: 11, name: "Product 11", quantity: 60 },
    { id: 12, name: "Product 12", quantity: 65 },
    { id: 13, name: "Product 13", quantity: 70 },
    { id: 14, name: "Product 14", quantity: 75 },
    { id: 15, name: "Product 15", quantity: 80 },
    { id: 16, name: "Product 16", quantity: 85 },
    { id: 17, name: "Product 17", quantity: 90 },
    { id: 18, name: "Product 18", quantity: 95 },
    { id: 19, name: "Product 19", quantity: 100 },
    { id: 20, name: "Product 20", quantity: 105 },
    { id: 21, name: "Product 21", quantity: 110 },
    { id: 22, name: "Product 22", quantity: 115 },
    { id: 23, name: "Product 23", quantity: 120 },
    { id: 24, name: "Product 24", quantity: 125 },
    { id: 25, name: "Product 25", quantity: 130 },
    { id: 26, name: "Product 26", quantity: 135 },
    { id: 27, name: "Product 27", quantity: 140 },
    { id: 28, name: "Product 28", quantity: 145 },
    { id: 29, name: "Product 29", quantity: 150 },
    { id: 30, name: "Product 30", quantity: 155 },
    { id: 31, name: "Product 31", quantity: 160 },
    { id: 32, name: "Product 32", quantity: 165 },
    { id: 33, name: "Product 33", quantity: 170 },
    { id: 34, name: "Product 34", quantity: 175 },
    { id: 35, name: "Product 35", quantity: 180 },
    { id: 36, name: "Product 36", quantity: 185 },
    { id: 37, name: "Product 37", quantity: 190 },
    { id: 38, name: "Product 38", quantity: 195 },
    { id: 39, name: "Product 39", quantity: 200 },
    { id: 40, name: "Product 40", quantity: 205 },
    { id: 41, name: "Product 41", quantity: 210 },
    { id: 42, name: "Product 42", quantity: 215 },
    { id: 43, name: "Product 43", quantity: 220 },
    { id: 44, name: "Product 44", quantity: 225 },
    { id: 45, name: "Product 45", quantity: 230 },
    { id: 46, name: "Product 46", quantity: 235 },
    { id: 47, name: "Product 47", quantity: 240 },
    { id: 48, name: "Product 48", quantity: 245 },
    { id: 49, name: "Product 49", quantity: 250 },
    { id: 50, name: "Product 50", quantity: 255 },
    { id: 51, name: "Product 51", quantity: 260 },
    { id: 52, name: "Product 52", quantity: 265 },
    { id: 53, name: "Product 53", quantity: 270 },
    { id: 54, name: "Product 54", quantity: 275 },
    { id: 55, name: "Product 55", quantity: 280 },
    { id: 56, name: "Product 56", quantity: 285 },
    { id: 57, name: "Product 57", quantity: 290 },
    { id: 58, name: "Product 58", quantity: 295 },
    { id: 59, name: "Product 59", quantity: 300 },
    { id: 60, name: "Product 60", quantity: 305 },
    { id: 61, name: "Product 61", quantity: 310 },
    { id: 62, name: "Product 62", quantity: 315 },
    { id: 63, name: "Product 63", quantity: 320 },
    { id: 64, name: "Product 64", quantity: 325 },
    { id: 65, name: "Product 65", quantity: 330 },
    { id: 66, name: "Product 66", quantity: 335 },
    { id: 67, name: "Product 67", quantity: 340 },
    { id: 68, name: "Product 68", quantity: 345 },
    { id: 69, name: "Product 69", quantity: 350 },
    { id: 70, name: "Product 70", quantity: 355 },
    { id: 71, name: "Product 71", quantity: 360 },
    { id: 72, name: "Product 72", quantity: 365 },
    { id: 73, name: "Product 73", quantity: 370 },
    { id: 74, name: "Product 74", quantity: 375 },
    { id: 75, name: "Product 75", quantity: 380 },
    { id: 76, name: "Product 76", quantity: 385 },
    { id: 77, name: "Product 77", quantity: 390 },
    { id: 78, name: "Product 78", quantity: 395 },
    { id: 79, name: "Product 79", quantity: 400 },
    { id: 80, name: "Product 80", quantity: 405 },
    { id: 81, name: "Product 81", quantity: 410 },
    { id: 82, name: "Product 82", quantity: 415 },
    { id: 83, name: "Product 83", quantity: 420 },
    { id: 84, name: "Product 84", quantity: 425 },
    { id: 85, name: "Product 85", quantity: 430 },
    { id: 86, name: "Product 86", quantity: 435 },
    { id: 87, name: "Product 87", quantity: 440 },
    { id: 88, name: "Product 88", quantity: 445 },
    { id: 89, name: "Product 89", quantity: 450 },
    { id: 90, name: "Product 90", quantity: 455 },
    { id: 91, name: "Product 91", quantity: 460 },
    { id: 92, name: "Product 92", quantity: 465 },
    { id: 93, name: "Product 93", quantity: 470 },
    { id: 94, name: "Product 94", quantity: 475 },
    { id: 95, name: "Product 95", quantity: 480 },
    { id: 96, name: "Product 96", quantity: 485 },
    { id: 97, name: "Product 97", quantity: 490 },
    { id: 98, name: "Product 98", quantity: 495 },
    { id: 99, name: "Product 99", quantity: 500 },
    { id: 100, name: "Product 100", quantity: 505 }
];

let currentPage = 1;
const itemsPerPage = 10;

const prev = document.getElementById('prev');
const next = document.getElementById('next');

function displayProducts(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    
    
    const container = document.getElementById('products');
    container.innerHTML = '';

    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>Quantity: ${product.quantity}</p>
                `;
        container.appendChild(productElement);
    });

    prev.disabled = page === 1;
    next.disabled = endIndex >= products.length;
}

    prev.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts(currentPage);
        }
    });

    next.addEventListener('click', () => {
        if (currentPage * itemsPerPage < products.length) {
            currentPage++;
            displayProducts(currentPage);
        }
    });

displayProducts(currentPage);
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const priceBlock = document.getElementById('priceBlock');
const priceValueElement = document.getElementById('priceValue');


const lastUpdateTime = localStorage.getItem('lastUpdateTime');
const lastPrice = localStorage.getItem('price');


const currentTime = new Date().getTime();


if (lastUpdateTime && (currentTime - lastUpdateTime) > 10000) {
    
    const newPrice = parseInt(lastPrice) + 10;
    priceValueElement.textContent = newPrice;
    
    localStorage.setItem('price', newPrice);
    localStorage.setItem('lastUpdateTime', currentTime);
} else if (!lastUpdateTime) {
    localStorage.setItem('price', priceValueElement.textContent);
    localStorage.setItem('lastUpdateTime', currentTime);
}

function clearPriceData() {
    localStorage.removeItem('price');
    localStorage.removeItem('lastUpdateTime');
    
    location.reload();
}

const lastUpdateDate = new Date(parseInt(localStorage.getItem('lastUpdateTime')));
priceBlock.innerHTML += `<p>Last Updated: ${lastUpdateDate}</p>`;


setTimeout(clearPriceData, 15000);
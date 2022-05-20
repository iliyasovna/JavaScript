/*5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
    **Пример: "Номер вашей карты: **********1245"** */

let cardNumber = prompt("Введите номер вашей карты");
let endNumber4 = cardNumber.slice(-4);
let startNumber = cardNumber.slice(0, -4);
let replaceNum = startNumber.replace(startNumber, "*").repeat(startNumber.length);
console.log("Номер вашей карты: " + replaceNum + endNumber4);
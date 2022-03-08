
let button = document.querySelector(".js_button");

let amountElement = document.querySelector(".js-amount"); //wprowadzana kwota
let formElement = document.querySelector(".js-form");
let firstSelectElement = document.querySelector(".js-selectFirst"); //pierwsza waluta
let secondSelectElement = document.querySelector(".js-selectSecond"); //druga waluta
let resultElement = document.querySelector(".js-value"); //wynik - element a nie kwota jako łancuch znaków

let rateEUR = 4.4278;

formElement.addEventListener("submit", (event) => {

    event.preventDefault();

    let amount = +amountElement.value;
    let currency1 = firstSelectElement.value;
    let currency2 = secondSelectElement.value;

    let result; // kwota jako łańcuch znaków lub liczba

    switch (currency1) {
        case "PLN":
            if (currency2 === "EUR") {
                result = amount / rateEUR;
                //result.innerText = calculation.toFixed(2);
            } else {
                result = amount
                //resultElement.innerText = "Błędnie wybrana waluta"
            }
            break;
        case "EUR":
            if (currency2 === "PLN") {
                result = amount * rateEUR;
                // result.innerText = calculation.toFixed(2);
            } else {
                result = amount
                //resultElement.innerText = "Błędnie wybrana waluta"
            }
            break;
        default:
            resultElement.innerText = "Nie wprowadzono danych"
    }

    resultElement.innerText = `${amount.toFixed(2)} ${currency1} po przewalutowaniu to ${result.toFixed(2)} ${currency2}`
});

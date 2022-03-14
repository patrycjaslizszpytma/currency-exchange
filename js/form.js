{
const calculateResult=(amount, currency1, currency2) =>{
    const rateEUR = 4.4278;
    switch (currency1) {
        case "PLN":
            if (currency2 === "EUR"){
                return  amount / rateEUR;
            }else{
                return  amount;
            }
        case "EUR":
            if (currency2 === "PLN"){
                return amount * rateEUR;
            }else{
                return  amount;
            }
        default:
            resultElement.innerText = "Nie wprowadzono danych"
    }
};

const updatedResultText=(amount, result, currency1, currency2) =>{
    const resultElement = document.querySelector(".js-value"); //wynik - element a nie kwota jako łancuch znaków
    resultElement.innerText = `${amount.toFixed(2)} ${currency1} po przewalutowaniu to ${result.toFixed(2)} ${currency2}`
};

const formSubmitted = (event) =>{
    event.preventDefault();
    const amountElement = document.querySelector(".js-amount"); //wprowadzana kwota
    const firstSelectElement = document.querySelector(".js-selectFirst"); //pierwsza waluta
    const secondSelectElement = document.querySelector(".js-selectSecond"); //druga waluta  

    const amount = +amountElement.value;
    const currency1 = firstSelectElement.value;
    const currency2 = secondSelectElement.value;
    const result=calculateResult(amount, currency1, currency2); // kwota jako łańcuch znaków lub liczba
    updatedResultText(amount, result, currency1, currency2);
};

const init = () => {        
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", formSubmitted);
    };

init();
    
}

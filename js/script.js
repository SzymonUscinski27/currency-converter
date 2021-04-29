let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let resetButton = document.querySelector(".js-resetButton");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    resetButton.addEventListener("click", () => {
        location.reload();
    });

    let rateEUR = 4.5546;
    let rateUSD = 3.8014;
    let rateGBP = 5.2376;


    let amount = +amountElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;
        default:
            resultElement.innerHTML = "<strong>Przepraszamy, coś poszło nie tak, spróbuj ponownie później</strong>";
    }

    resultElement.innerHTML = `<strong>${amount} PLN = ${result.toFixed(2)} ${currency}</strong>`;
});

{
    const calculateFinalCurrency = (amount, currency) => {
        const rateEUR = 4.5546;
        const rateUSD = 3.8014;
        const rateGBP = 5.2376;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

            default:
                resultElement.innerHTML = "<strong>Przepraszamy, coś poszło nie tak, spróbuj ponownie później</strong>";
        }
    };

    const actualFinalCurrencyText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `<strong>${amount} PLN = ${result.toFixed(2)} ${currency}</strong>`;
    };

    const onResetFormClick = () => {
        location.reload();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        let amount = +amountElement.value;
        let currency = currencyElement.value;

        let result = calculateFinalCurrency(amount, currency);

        actualFinalCurrencyText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const resetButton = document.querySelector(".js-resetButton");

        formElement.addEventListener("submit", onFormSubmit);

        resetButton.addEventListener("click", onResetFormClick);
    };

    init();
}
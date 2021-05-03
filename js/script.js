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
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const resetButton = document.querySelector(".js-resetButton");

        resetButton.addEventListener("click", () => {
            location.reload();
        });

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        let amount = +amountElement.value;
        let currency = currencyElement.value;

        let result = calculateFinalCurrency(amount, currency);

        resultElement.innerHTML = `<strong>${amount} PLN = ${result.toFixed(2)} ${currency}</strong>`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}
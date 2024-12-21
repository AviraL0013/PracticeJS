const currencyCodes = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
    "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
    "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
    "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
    "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
    "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
    "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
    "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
    "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
    "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
    "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW",
    "ZWL"
];


let text = document.querySelector('.exchange-rate')
let button = document.querySelector('.submit-button')
let dropdowns = document.querySelectorAll(".currency-dropdown");
let countryflags = document.querySelectorAll(".flag");
let swap = document.querySelector(".swap-icon")
let first = document.getElementById('swap1')
let second = document.getElementById('swap2')
dropdowns.forEach((dropdown, index) => {
    for (let i = 0; i < currencyCodes.length; i++) {
        let option = document.createElement("option");
        option.innerText = currencyCodes[i];
        dropdown.appendChild(option);
    }
    if (index === 0) {
        dropdown.value = "USD";
        countryflags[index].src = `https://flagsapi.com/US/flat/64.png`;
    } else {
        dropdown.value = "INR";
        countryflags[index].src = `https://flagsapi.com/IN/flat/64.png`;
    }
    dropdown.addEventListener("change", (event) => {
        let selectedCurrency = event.target.value;
        let countryCode = selectedCurrency.substring(0, 2);
        console.log(countryCode);
        countryflags[index].src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    });
});
swap.addEventListener("click", () => {
    // Swap the dropdown values
    let tempValue = dropdowns[0].value;
    dropdowns[0].value = dropdowns[1].value;
    dropdowns[1].value = tempValue;

    // Update the flags based on the new values
    let tempSrc = countryflags[0].src;
    countryflags[0].src = countryflags[1].src;
    countryflags[1].src = tempSrc;
});
button.addEventListener("click", (event) => {
    event.preventDefault();
    Exchangerate()
})
async function Exchangerate() {
    const apiurl = `https://v6.exchangerate-api.com/v6/cec853309406450812d671c3/latest/${dropdowns[0].value}`;

    // Get the entered amount and handle empty or zero input
    let amount = document.querySelector('.form-input');
    let amountval = amount.value;
    if (amountval === '' || amountval == 0) {
        amount.value = '1';
        amountval = 1;
    }
    const response = await fetch(apiurl);
    const data = await response.json();


    let exchangeRate = data.conversion_rates[dropdowns[1].value];


    let total = (amountval * exchangeRate).toFixed(2);


    text.innerHTML = `${amountval} ${dropdowns[0].value} = ${total} ${dropdowns[1].value}`;

}


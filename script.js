const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const interestTypeSelect = document.getElementById('interest-type');
const compoundFrequencyGroup = document.getElementById('compound-frequency-group');
const compoundFrequencySelect = document.getElementById('compound-frequency');
const calculateButton = document.getElementById('calculateButton');
const resultDisplay = document.getElementById('result');

// Show/hide compound frequency options based on selected interest type
interestTypeSelect.addEventListener('change', () => {
    if (interestTypeSelect.value === 'compound') {
        compoundFrequencyGroup.style.display = 'block';
    } else {
        compoundFrequencyGroup.style.display = 'none';
    }
});

// Calculate interest when the button is clicked
calculateButton.addEventListener('click', () => {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const time = parseFloat(timeInput.value);
    const interestType = interestTypeSelect.value;

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        resultDisplay.textContent = "Please enter valid inputs!";
        return;
    }

    let interest = 0;

    if (interestType === 'simple') {
        // Simple Interest = (P * R * T) / 100
        interest = (principal * rate * time) / 100;
    } else if (interestType === 'compound') {
        // Compound Interest = P * (1 + R / (n * 100)) ^ (n * T) - P
        const frequency = parseInt(compoundFrequencySelect.value); // n: Compounding frequency
        interest = principal * Math.pow((1 + rate / (frequency * 100)), (frequency * time)) - principal;
    }

    resultDisplay.textContent = `Interest: ₹${interest.toFixed(2)}`;
});

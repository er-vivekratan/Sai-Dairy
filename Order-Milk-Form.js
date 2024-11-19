function calculateAmount() {
    const quantity = parseFloat(document.getElementById('quantity').value);
    const milkType = document.getElementById('milkType');
    const pricePerLiter = parseFloat(milkType.options[milkType.selectedIndex].getAttribute('amount'));
    const amount = quantity * pricePerLiter;
    document.getElementById('amount').value = '₹ ' + amount.toFixed(2);
}

function changeQuantity(amount) {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseFloat(quantityInput.value);
    quantity = Math.max(0, quantity + amount); // Ensure quantity doesn't go below 0
    quantityInput.value = quantity.toFixed(1); // Ensure one decimal place
    calculateAmount();
}

function toggleDeliveryPickup() {
    const toggle = document.getElementById('deliveryPickupToggle');
    const deliveryPickupInput = document.getElementById('deliveryPickup');
    if (toggle.checked) {
        deliveryPickupInput.value = 'pickup';
    } else {
        deliveryPickupInput.value = 'delivery';
    }
}

function togglePaymentType() {
    const toggle = document.getElementById('paymentTypeToggle');
    const paymentTypeInput = document.getElementById('paymentType');
    if (toggle.checked) {
        paymentTypeInput.value = 'monthly';
    } else {
        paymentTypeInput.value = 'daily';
    }
}

// Event listener to update amount when milk type is changed or selected
document.getElementById('milkType').addEventListener('change', calculateAmount);
document.getElementById('milkType').addEventListener('click', calculateAmount);

// Initial calculation to set the amount
calculateAmount();

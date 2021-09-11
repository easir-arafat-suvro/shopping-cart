
function increaseOrDecreasrCartQty(id, price, truefalse) {

    // Increase or decrease cart quantites
    const phoneAndCaseElement = document.getElementById('cart-qty-' + id, truefalse);
    if (truefalse == true) {
        phoneAndCaseElement.value = parseInt(phoneAndCaseElement.value) + 1;
    }
    else if (phoneAndCaseElement.value > 0) {
        phoneAndCaseElement.value = parseInt(phoneAndCaseElement.value) - 1;
    }

    // update total amount of each cart
    const cartQty = phoneAndCaseElement.value;
    const totalAmount = price * cartQty;
    const amountElement = document.getElementById('amount-' + id);
    amountElement.innerText = totalAmount;
    // console.log(totalAmount)

    // get subtotal amount
    const totalAmountPhone = document.getElementById('amount-phone').innerText;
    const totalAmountCase = document.getElementById('amount-case').innerText;
    const subtotal = document.getElementById('subTotal');
    const subtotalAmount = subtotal.innerText = parseInt(totalAmountPhone) + parseInt(totalAmountCase);

    // get and set tax
    const tax = subtotalAmount * .1;
    document.getElementById('tax').innerText = tax;

    // get and set total
    const total = subtotalAmount + tax;
    document.getElementById('total').innerText = total;

}


// increase cart qty of phone
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    increaseOrDecreasrCartQty('phone', 1200, true)
})

// decrease cart qty of phone
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    increaseOrDecreasrCartQty('phone', 1200, false)
})

// increase cart qty of case
document.getElementById('btn-case-plus').addEventListener('click', function () {
    increaseOrDecreasrCartQty('case', 60, true)
})

// decrease cart qty of case
document.getElementById('btn-case-minus').addEventListener('click', function () {
    increaseOrDecreasrCartQty('case', 60, false)
})

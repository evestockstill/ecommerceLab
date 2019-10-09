export const makePrettyCurrency = (number) =>
    number
        .toLocaleString(
            'en-US',
            {
                style: 'currency',
                currency: 'USD',
            });

export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}
export function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}
export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}
function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}
export function calcOrderTotal(cart, cues) {
    let orderTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const foundCue = findById(cues, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, foundCue.price);
        orderTotal += lineTotal;
    }
    return roundCurrency(orderTotal);
}

export function findById(cues, id) {
    for (let i = 0; i < cues.length; i++) {
        const cue = cues[i];
        if (cue.id === id) {
            return cue;
        }
    }
    return null;
}
function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}
export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return amount;
}
export function calcOrderTotal(cart, cues) {
    let orderTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        let lineItem = cart[i];
        let quantityLineItem = cart[i].quantity;
        const foundCue = findById(cues, lineItem.id);
        const lineTotal = calcLineTotal(quantityLineItem, foundCue.price);
        orderTotal += lineTotal;
    }
    return orderTotal;
}
export default toUSD;
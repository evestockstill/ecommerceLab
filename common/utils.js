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
        const lineItem = cart[i];
       
        const cue = findById(cues, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, cue.price);
        orderTotal += lineTotal;
    }
    return orderTotal;
}
export default toUSD;

// export function findById(items, id) {
//     // loop the array
//     for (let i = 0; i < items.length; i++) {
//         const item = items[i];

//         // check the id against item.id
//         if (item.id === id) {
//             return item;
//         }
//     }

//     // loop done, nothing found
//     return null;
// }

// export function toUSD(number) {
//     return number.toLocaleString('en-US', {
//         style: 'currency',
//         currency: 'USD'
//     });
// }

// export function calcLineTotal(quantity, price) {
//     const amount = quantity * price;
//     return roundCurrency(amount);
// }

// // fun with JavaScript maths and floating point numbers!
// //  export function toUSD(number) {
// //     return number.toLocaleString('en-US', {
// //         style: 'currency',
// //         currency: 'USD',
// //     });
// // }

// export function calcOrderTotal(cart, cues) {
//     let orderTotal = 0;

//     for (let i = 0; i < cart.length; i++) {
//         const lineItem = cart[i];
//         const cue = findById(cues, lineItem.id);
//         const lineTotal = calcLineTotal(lineItem.quantity, cue.price);
//         orderTotal += lineTotal;
//     }

//     return roundCurrency(orderTotal);
// }
export function findProduct(cue, id) {

    // loop the array
    for (let i = 0; i < cue.length; i++) {
        const fruit = cue[i];

        // check the code against fruit.code
        if (cue.id === id) {
            return fruit;
        }
    }

    // loop done
    return null;
}

export function calcLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}

// eslint-disable-next-line no-unused-vars
export function calcOrderTotal(id, fruits) {

    // declare order total variable

    // loop the array of cart (line items)
    // lookup the product
    // calc line total
    // add to order total


    // return order total
}
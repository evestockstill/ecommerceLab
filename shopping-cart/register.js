export function findProduct(cue, id) {

    
    for (let i = 0; i < cue.length; i++) {
        const order = cue[i];

        if (cue.id === order) {
            return cue;
        }
    }
    return null;
}

export function calcLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}
export function calcOrderTotal(order, id) {


}
import renderLineItem from '../shopping-cart/render-line-item.js';
import cues from '../data/cues.js';
import { makePrettyCurrency, findById } from '../common/utils.js';

const tableElement = document.querySelector('tbody');
const getLineTotal = (order, item) => item.price * order.quantity;

const getCartTotal = (cart, cues) => {
    let cartTotal = 0;
    cart.forEach(order => {
        const orderCue = findById(order.id, cues);
        const lineTotal = getLineTotal(order, orderCue);
        cartTotal = cartTotal + lineTotal;
    });
    return cartTotal;
};
const addLine = (cueOrder, cues) => {
    const orderCue = findById(cueOrder.id, cues);
    const line = renderLineItem(orderCue, cueOrder);
    tableElement.appendChild(line);
};
const addLines = (cart, cues) => {
    cart.forEach(cueOrder => {
        addLine(cueOrder, cues);
    });
};
const getTotalCell = (cart, fruits) => {
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = getCartTotal(cart, fruits);
    totalCell.textContent = makePrettyCurrency(cartTotal);
};
const buildTable = (cart, cues) => {
    getTotalCell(cart, cues);
    addLines(cart, cues);
    debugger
};
const localStorage = localStorage.getItem('cart');
const parsedCart = JSON.parse(localStorage);
buildTable(parsedCart, cues);




import store from '../data/store.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const shoppingCart = store.getShoppingCart();

for (let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const cue = store.getProduct(lineItem.id);
    const dom = renderLineItem(lineItem, cue);

    tbody.appendChild(dom);
}

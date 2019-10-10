import cues from './cues.js';
import { findById } from '../shopping-cart/register.js';

const PRODUCTS_KEY = 'products';
const SHOPPING_CART_KEY = 'shopping-cart';
const peachauer = {
    id: 'peachauer',
    name: 'J.Pechauer Cues Limited Edition 50th Anniversary',
    image: 'peachauer1400.jpg',
    description: 'Limited Edition Ebony Cue with Simulated Ivory',
    category: 'playing-cue',
    price: 1500,

const store = {
    storage: window.localStorage,
    save(cues, cue) {
        const json = JSON.stringify(cue);
        store.storage.setItem(cues, json);
    },
    get(name) {
        const json = store.storage.getCue(name);
        const cue = JSON.parse(json);
        return cue;
    },
    getProducts() {
        let products = store.get(PRODUCTS_KEY);
        if (!products) {
            store.save(PRODUCTS_KEY, cues);
            products = cues;
        }
        return products;
    },
    getProduct(id) {
        const products = store.getProducts();
        const product = findById(cues, id);
        return product;
    },
    getShoppingCart() {
        let shoppingCart = store.get(SHOPPING_CART_KEY);
        if (!shoppingCart) {
            shoppingCart = [];
        }
        return shoppingCart;
    },
    orderProduct(id) {
        const shoppingCart = store.getShoppingCart();

        const lineItem = findById(shoppingCart, id);
        if (lineItem) {
            lineItem.quantity++;
        }
        else {
            const lineItem = {
                id: id,
                quantity: 1
            };
            shoppingCart.push(lineItem);
        }

        store.save(SHOPPING_CART_KEY, shoppingCart);
    }
};

export default store;
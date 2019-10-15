import cues from './cues.js';
import { findById } from '../common/utils.js';

const KEY = 'cues';
const SHOPPING_CART_KEY = 'cart';
const cueShop = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        cueShop.storage.setItem(key, json);
    },
    get(key) {
        const json = cueShop.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let cueProducts = cueShop.get(KEY);
        if (!cueProducts) {
            cueShop.save(KEY, cues);
            cueProducts = cues;
        }
        return cueProducts;
    },
    getProduct(id) {
        const cueProducts = cueShop.getProducts();
        const cueProduct = findById(cueProducts, id);
        return cueProduct;
    },
    getCart() {
        let cart = cueShop.get(SHOPPING_CART_KEY);
        if (!cart) {
            cart = [];
        }
        return cart;
    },
    orderCue(id) {
        const cart = cueShop.getCart();
        const lineItem = findById(cart, id);
        if (lineItem) {
            lineItem.quantity++;
        }
        else {
            const lineItem = {
                id: id,
                quantity: 1
            };
            cart.push(lineItem);
        }
        cueShop.save(SHOPPING_CART_KEY, cart);
    }
};
export default cueShop;
import cues from './cues.js';
import { findById } from '../shopping-cart/register.js';

const CUE_KEY = 'cues';
const CUE_SHOPPING_CART_KEY = 'shopping-cart';
const cueShop = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        cueShop.storage.setItem(key, json);
    },
    get(key) {
        const json = cueShop.storage.get(key);
        const cueItem = JSON.parse(json);
        return cueItem;
    },
    getProducts() {
        let cueProducts = cueShop.get(CUE_KEY);
        if (!cueProducts) {
            cueShop.save(CUE_KEY, cues);
            cueProducts = cues;
        }
        return cueProducts;
    },
    getProduct(id) {
        const cueProducts = cueShop.getProducts();
        const cueProduct = findById(cueProducts, id);
        return cueProduct;
    },
    getCueShoppingCart() {
        let cueShoppingCart = cueShop.get(CUE_SHOPPING_CART_KEY);
        if (!cueShoppingCart) {
            cueShoppingCart = [];
        }
        return cueShoppingCart;
    },
    orderCue(id) {
        const cueShoppingCart = cueShop.getCueShoppingCart();
        const lineItem = findById(cueShoppingCart, id);
        if (lineItem) {
            lineItem.quantity++;
        }
        else {
            const lineItem = {
                id: id,
                quantity: 1
            };
            cueShoppingCart.push(lineItem);
        }
        cueShop.save(CUE_SHOPPING_CART_KEY, cueShoppingCart);
    }
};
export default cueShop;
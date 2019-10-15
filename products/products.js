// import cues from '../data/cues.js';
import cueShop from '../data/store.js';
import renderProducts from './renderProducts.js';

const list = document.getElementById('cues');
const cues = cueShop.getProducts();
for (let i = 0; i < cues.length; i++) {
    const cue = cues[i];
    const dom = renderProducts(cue);
    list.appendChild(dom);
}



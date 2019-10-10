import cues from '../data/cues.js';
import renderProducts from './renderProducts.js';

const list = document.getElementById('cues');
for (let i = 0; i < cues.length; i++) {
    const cue = cues[i];
    const dom = renderProducts(cue);
    list.appendChild(dom);
}
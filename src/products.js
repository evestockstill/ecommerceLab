
import cues from './data/cues.js';
import renderProducts from './renderProducts';
const dom = renderProducts(cues); 
    const list = document.getElementById('cues');
    cues.forEach(list.appendChild(dom) => {
       
    });

    

    
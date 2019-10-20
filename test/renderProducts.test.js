import renderProduct from '../src/renderProducts.js';
import renderLineItem from '../shopping-cart/render-line-item.js';
import cues from '../data/cues.js';
import { findById } from '../common/utils.js';

const test = QUnit.test;

QUnit.module('Renders Products');
test('renders a product', (assert) => {
    const peachauer = { 
        id: 'peachauer',
        name: 'J.Pechauer Cues Limited Edition 50th Anniversary',
        image: 'peachauer1400.jpg',
        description: 'Limited Edition Ebony Cue with Simulated Ivory',
        category: 'playing-cue',
        price: 1500,
    };
    const expected = '<li class="playing-cue" title="Limited Edition Ebony Cue with Simulated Ivory"><h3>J.Pechauer Cues Limited Edition 50th Anniversary</h3><img src="../assets/peachauer1400.jpg" alt="J.Pechauer Cues Limited Edition 50th Anniversary image"><p>$1,500.00$1,500.00<button value="peachauer">Add</button></p></li>';
    const dom = renderProduct(peachauer);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

test('renders a line item', assert => {
    const lineItem = {
        id: 'peachauer',
        quantity: 10
    };
    const peachauer = findById(cues, lineItem.id);
    const expected = '<tr><td class="align-left">J.Pechauer Cues Limited Edition 50th Anniversary</td><td>10</td><td>$1,500.00</td><td class="line-item-total">$15,000.00</td></tr>';
    const dom = renderLineItem(lineItem, peachauer);
    const html = dom.outerHTML;
    assert.equal(html, expected);
});
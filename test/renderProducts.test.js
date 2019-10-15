import renderProduct from '../products/renderProducts.js';
import renderLineItem from '../shopping-cart/render-line-item.js';
import { findById } from '../common/utils.js';
import cues from '../data/cues.js';

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
    const expected = '<li class="playing-cue" title="Limited Edition Ebony Cue with Simulated Ivory"><h3 class="product">J.Pechauer Cues Limited Edition 50th Anniversary</h3><img src="../assets/peachauer1400.jpg" alt="J.Pechauer Cues Limited Edition 50th Anniversary image"><p class="producut-info">Limited Edition Ebony Cue with Simulated Ivory</p><p class="price">$1,500.00<button value="peachauer">Add</button></p></li>';
    const dom = renderProduct(peachauer);
    const html = dom.outerHTML;
    assert.equal(html, expected);
});

test('renders line item', assert => {
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

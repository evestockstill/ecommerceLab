import renderProducts from '../products/renderProducts.js';
import renderTableRow from '../shopping';

const test = QUnit.test;
// QUnit.module('Render Fruit');
QUnit.module('Renders Product');
test('renders a table row', (assert) => {
    // arrange
    const peachauer = {
        
        id: 'peachauer',
        name: 'J.Pechauer Cues Limited Edition 50th Anniversary',
        image: 'peachauer1400.jpg',
        description: 'Limited Edition Ebony Cue with Simulated Ivory',
        category: 'playing-cue',
        price: 1500,
    };
    const expected = '<li class="playing-cue" title="Limited Edition Ebony Cue with Simulated Ivory"><h3>J.Pechauer Cues Limited Edition 50th Anniversary</h3><img src="../assets/peachauer1400.jpg" alt="J.Pechauer Cues Limited Edition 50th Anniversary image"><p class="price">$1,500.00$1,500.00<button value="undefined">Add</button></p></li>';
    const dom = renderProducts(peachauer);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
    
    const peachauerOrder = {
        id: 'peachauer',
        quantity: 2,
    };
     
const expected = ''


const cueElementTr = renderTableRow(peachauer, peachauerOrder);
    const dom = renderProducts(peachauer);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

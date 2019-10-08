import renderProducts from '../renderProducts.js'

const test = QUnit.test;



QUnit.module('Render Fruit');

test('renders a product',renderProducts (assert) => {
    // arrange
    const peachauer = {
        id: 'peachauer',
        name: 'J.Pechauer Cues Limited Edition 50th Anniversary',
        image: 'peachauer1400.jpg',
        description: 'Limited Edition Ebony Cue with Simulated Ivory',
        category: 'playing-cue',
        price: 1500,
    };
   
    const expected = '<li class="tree-fruit" title="A sweet, delicious, forbidden-to-some treat"><h3>Red Apple</h3><img src="assets/apple.png" alt="Red Apple image"><p class="price">$1.00<button value="apple">Add</button></p></li>';

    const dom = renderProducts(cues);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

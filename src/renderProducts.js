function renderProduct(cues) {
    const li = document.createElement('li');
    li.className = cues.category;
    li.title = cues.description;

    const h3 = document.createElement('h3');
    h3.textContent = cues.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = cues.image;
    img.alt = cues.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = cues.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderProducts;



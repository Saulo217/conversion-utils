import { createSelectElement } from './../elements/select.js';

function conversaoComprimento(selector) {

    const options = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'];

    const fragment = document.createDocumentFragment();

    const inputSelect = createSelectElement('inselect', options);
    const outputSelect = createSelectElement('outselect', options);

    fragment.appendChild(inputSelect);
    fragment.appendChild(outputSelect);

    return document.querySelector(selector).appendChild(fragment);
}

export { conversaoComprimento };
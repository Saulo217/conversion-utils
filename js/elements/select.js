function createSelectElement(id, value) {
    
    const select = document.createElement('select');
    select.id = id;

    for(let index = 0; index <= value.length - 1; index++) {
        
        const options = document.createElement('option');
        options.value = value[index];
        options.innerText = value[index];

        select.insertAdjacentElement('beforeend', options);
    }

    return select;
}

export { createSelectElement };
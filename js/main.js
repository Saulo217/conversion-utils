function calculoComprimento(inputNum, diferenca){

    inputNum = (inputNum) == false? 1 : inputNum;
    diferenca = (diferenca) == false? 0 : diferenca;
    return Number(`${inputNum}E${diferenca}`);
}

function converter() {
    
    const $insel = document.getElementById('inselect');
    const $outsel = document.getElementById('outselect');
    document.querySelector('#out').innerText = "Resultado: " + 
    calculoComprimento(document.querySelector('#in').value, $insel.selectedIndex - $outsel.selectedIndex);
    return;
}

function createSelectElement(id = 'select', value = ['none']) {
    
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

window.addEventListener('load', () => {

    //const inselect = createSelectElement('inselect', ['a', 'b', 'c']);
    //document.querySelector('.content').insertAdjacentElement('afterbegin', inselect);
    return;
});
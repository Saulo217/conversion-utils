function calculoComprimento(inputNum, diferenca){

    inputNum = inputNum? inputNum  : 1;
    diferenca  = diferenca? diferenca : 0;
    
    return Number(`${inputNum}E${diferenca}`);
}

function selectElements(...selectors) {

    let elements = {};
    for(let index of selectors) {
        elements[index.slice(1)] = document.querySelector(index);
    }

    return elements;
}

function converter() {
    
    const { inselect, outselect, out } = selectElements('#inselect', '#outselect', '#out');
    out.innerText = "Resultado: " + calculoComprimento(
        document.querySelector('#in').value, 
        inselect.selectedIndex - outselect.selectedIndex
    );

    return;
}
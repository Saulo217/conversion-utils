function calculusLength(userInput, difference){
    
    return Number(`${userInput? userInput : 1}E${difference? difference : 0}`);
}

function selectElements(...selectors) {

    let elements = {};
    for(let index of selectors) {
        elements[index.slice(1)] = document.querySelector(index);
    }

    return elements;
}

function convert() {
    
    const { inselect, outselect, output, input } = selectElements('#inselect', '#outselect', '#output', '#input');
    output.innerText = `Resultado: ${calculusLength(
        input.value, inselect.selectedIndex - outselect.selectedIndex
    )} `;

    return;
}
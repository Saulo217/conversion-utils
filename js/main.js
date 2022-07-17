function calculus(userInput, difference){
    
    return Number(`${userInput? userInput : 1}E${difference? difference : 0}`);
}

function selectElements(...selectors) {

    let elements = {};
    for(let index of selectors) {
        elements[index.slice(1)] = document.querySelector(index);
    }

    return elements;
}

function pageLength() {

    const values = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'];
    const { inselect, outselect } = selectElements('#inselect', '#outselect');

    for(let index = 0; index < values.length - 1; index++) {
        inselect.options[index].innerText = values[index];
        inselect.options[index].value = values[index];
        outselect.options[index].innerText = values[index];
        outselect.options[index].value = values[index];
    }
    return;
}

function pageCapacity() {

    const values = ['ml', 'cl', 'dl', 'l', 'dal', 'hl', 'kl'];
    const { inselect, outselect } = selectElements('#inselect', '#outselect');

    for(let index = 0; index < values.length - 1; index++) {
        inselect.options[index].innerText = values[index];
        inselect.options[index].value = values[index];
        outselect.options[index].innerText = values[index];
        outselect.options[index].value = values[index];
    }
    return;
}

function pageMass() {

    const values = ['mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg'];
    const { inselect, outselect } = selectElements('#inselect', '#outselect');

    for(let index = 0; index < values.length - 1; index++) {
        inselect.options[index].innerText = values[index];
        inselect.options[index].value = values[index];
        outselect.options[index].innerText = values[index];
        outselect.options[index].value = values[index];
    }
    return;
}

function pageVolume() {

    const values = ['mm3', 'cm3', 'dm3', 'm3', 'dam3', 'hm3', 'km3'];
    const { inselect, outselect } = selectElements('#inselect', '#outselect');

    for(let index = 0; index < values.length - 1; index++) {
        inselect.options[index].innerText = values[index];
        inselect.options[index].value = values[index];
        outselect.options[index].innerText = values[index];
        outselect.options[index].value = values[index];
    }
    return;
}

function convert() {
    
    const { inselect, outselect, output, input } = selectElements('#inselect', '#outselect', '#output', '#input');
    output.innerText = `Resultado: ${calculus(
        input.value, inselect.selectedIndex - outselect.selectedIndex
    )} `;

    return;
}